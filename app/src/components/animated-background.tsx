import { useEffect, useRef } from "react";

import { useReducedMotion } from "../lib/use-reduced-motion";
import { ClientOnly } from "./client-only";
import "./animated-background.css";

/**
 * Premium animated background: aurora gradient + glass blobs (CSS, GPU-
 * composited via transform/opacity only) behind a canvas particle field.
 *
 * Isolated on purpose — this file owns every layer of the effect and touches
 * nothing else on the page. It renders fixed and full-viewport, with
 * `pointer-events: none` throughout so it never intercepts clicks.
 *
 * USAGE CONSTRAINT — deliberately has no z-index:
 *   1. Mount it as the FIRST child of your page wrapper.
 *   2. Give the sibling that holds your real content its own stacking
 *      context (e.g. `className="relative z-10"`).
 *   That DOM-order + positive-z-index-on-content combination is required.
 *   A negative z-index on this component (e.g. `-z-10`) looks equivalent on
 *   paper, but reproducibly fails to paint at all in this app — verified
 *   with computed-style/DOM checks showing correct geometry and a correct
 *   `background-color`, yet the element still doesn't render, in both the
 *   dev server and a production build. Root cause not fully isolated (likely
 *   an interaction between negative stacking and TanStack Start's SSR
 *   streaming markers), but removing the negative z-index and relying on DOM
 *   order instead reproducibly fixes it — so that's the supported pattern
 *   here. Don't reintroduce a negative z-index on the root element.
 *
 * Not wired into any route yet — see src/routes/bg-preview.tsx for a working
 * example usage.
 */
export function AnimatedBackground() {
  return (
    <ClientOnly>
      <BackgroundLayers />
    </ClientOnly>
  );
}

function BackgroundLayers() {
  const reduced = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  // Mouse parallax: written to CSS custom properties instead of React state,
  // so the pointer moving never triggers a re-render — only a compositor-
  // level transform update on the layers that read --mx / --my.
  useEffect(() => {
    if (reduced) return;
    const root = rootRef.current;
    if (!root) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    function onPointerMove(event: PointerEvent) {
      const { innerWidth, innerHeight } = window;
      // Normalize to [-1, 1] from viewport center.
      targetX = (event.clientX / innerWidth - 0.5) * 2;
      targetY = (event.clientY / innerHeight - 0.5) * 2;
    }

    function tick() {
      // Ease toward the target so parallax drifts smoothly instead of
      // snapping to the raw pointer position.
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;
      root?.style.setProperty("--mx", currentX.toFixed(4));
      root?.style.setProperty("--my", currentY.toFixed(4));
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  // Canvas particle field: plain 2D canvas (no WebGL/three.js) — cheap
  // enough for ~60 soft glowing dots and keeps the bundle light. The browser
  // compositor still hardware-accelerates the canvas element itself.
  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let raf = 0;
    let running = true;

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      hue: number;
      alpha: number;
      pulseSpeed: number;
      pulsePhase: number;
    };

    const PALETTE_HUES = [220, 265, 190, 320]; // blue, purple, cyan, pink
    let particles: Particle[] = [];

    function resize() {
      const canvasEl = canvasRef.current;
      if (!canvasEl) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvasEl.width = width * dpr;
      canvasEl.height = height * dpr;
      canvasEl.style.width = `${width}px`;
      canvasEl.style.height = `${height}px`;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Density scales with viewport area, capped for perf on large screens.
      const count = Math.min(70, Math.round((width * height) / 22000));
      particles = Array.from({ length: count }, () => spawnParticle(width, height));
    }

    function spawnParticle(w: number, h: number): Particle {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: 1 + Math.random() * 2.2,
        hue: PALETTE_HUES[Math.floor(Math.random() * PALETTE_HUES.length)],
        alpha: 0.25 + Math.random() * 0.35,
        pulseSpeed: 0.4 + Math.random() * 0.6,
        pulsePhase: Math.random() * Math.PI * 2,
      };
    }

    function draw(time: number) {
      if (!running) return;
      ctx!.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges for a seamless, infinite drift.
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        const pulse = 0.6 + 0.4 * Math.sin(time * 0.001 * p.pulseSpeed + p.pulsePhase);
        const radius = p.r * (0.85 + 0.3 * pulse);
        const alpha = p.alpha * pulse;

        const gradient = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 6);
        gradient.addColorStop(0, `hsla(${p.hue}, 90%, 70%, ${alpha})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 90%, 70%, 0)`);
        ctx!.fillStyle = gradient;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, radius * 6, 0, Math.PI * 2);
        ctx!.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    function handleVisibility() {
      // Pause entirely (no rAF loop, no CPU/GPU work) when the tab is
      // backgrounded; resume cleanly when it's visible again.
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        raf = requestAnimationFrame(draw);
      }
    }

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [reduced]);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="animated-bg pointer-events-none fixed inset-0 overflow-hidden bg-[#0a0a12]"
      style={{ ["--mx" as string]: "0", ["--my" as string]: "0" }}
    >
      {/* Layer 1: aurora mesh gradient — three large soft-edged color fields
          drifting on independent timers, blended with `screen` so overlaps
          glow instead of muddying. Reduced-motion gets a static version
          (animation removed via CSS below), so the aurora still shows, it
          just doesn't move. */}
      <div className="animated-bg__aurora absolute inset-[-20%]">
        <div className="animated-bg__aurora-blob animated-bg__aurora-blob--a" />
        <div className="animated-bg__aurora-blob animated-bg__aurora-blob--b" />
        <div className="animated-bg__aurora-blob animated-bg__aurora-blob--c" />
      </div>

      {/* Layer 2: glassmorphism blobs — blurred, morphing border-radius
          shapes for soft depth, offset by the mouse-parallax custom
          properties set above. */}
      <div className="animated-bg__parallax absolute inset-0">
        <div className="animated-bg__glass-blob animated-bg__glass-blob--1" />
        <div className="animated-bg__glass-blob animated-bg__glass-blob--2" />
        <div className="animated-bg__glass-blob animated-bg__glass-blob--3" />
      </div>

      {/* Layer 3: particle field (canvas, JS-driven, paused off-screen/tab). */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Layer 4: subtle noise texture for depth — a tiny tiled SVG turbulence
          pattern, static (no animation cost), very low opacity. */}
      <div className="animated-bg__noise absolute inset-0" />

      {/* Vignette so foreground text stays readable at the edges/corners
          regardless of what the aurora is doing underneath. */}
      <div className="animated-bg__vignette absolute inset-0" />
    </div>
  );
}
