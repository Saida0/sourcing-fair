import { company } from "../lib/content";

export function WhatsappButton() {
  const message = encodeURIComponent(
    "Hello Sourcing Fair, I would like to request a quote for garment trims.",
  );

  return (
    <a
      href={`https://wa.me/${company.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sourcing Fair on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-105 active:scale-95 motion-reduce:transition-none"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.08L2 22l5.06-1.33A9.94 9.94 0 0 0 12.02 22C17.5 22 22 17.52 22 12S17.5 2 12.02 2zm0 18.06c-1.6 0-3.1-.43-4.4-1.2l-.32-.19-3 .79.8-2.93-.2-.3A8.02 8.02 0 0 1 4 12c0-4.42 3.6-8 8.02-8 4.4 0 8 3.58 8 8s-3.6 8.06-8 8.06zm4.42-5.98c-.24-.12-1.44-.71-1.66-.8-.22-.08-.38-.12-.55.12-.16.24-.62.8-.77.96-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.63-1.18-1.4-1.32-1.64-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.35 1 2.51c.12.16 1.72 2.63 4.17 3.69.58.25 1.04.4 1.4.51.59.19 1.12.16 1.54.1.47-.07 1.44-.59 1.64-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28z" />
      </svg>
    </a>
  );
}
