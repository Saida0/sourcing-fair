import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Check, Loader2 } from "lucide-react";

import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { WhatsappButton } from "../components/whatsapp-button";
import { Reveal } from "../components/reveal";
import { company, productCategories } from "../lib/content";
import { submitInquiry } from "../lib/api/inquiries.functions";

const searchSchema = z.object({
  category: z.string().optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Contact & Request a Quote | Sourcing Fair" },
      {
        name: "description",
        content:
          "Request a quote from Sourcing Fair or reach our Uttara, Dhaka office by phone, email, or WhatsApp.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sourcingfairbd.com/contact" }],
  }),
  component: Contact,
});

type FormValues = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  country?: string;
  productCategory?: string;
  quantity?: string;
  targetDate?: string;
  message?: string;
};

function Contact() {
  const { category } = Route.useSearch();
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { productCategory: category ?? "" },
  });

  async function onSubmit(values: FormValues) {
    setStatus("loading");
    try {
      const result = await submitInquiry({ data: { kind: "quote", ...values } });
      if (result.ok) {
        setStatus("done");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`;

  return (
    <div className="min-h-dvh bg-white">
      <Nav />
      <main className="pt-32">
        <section className="mx-auto max-w-[900px] px-6 text-center">
          <Reveal>
            <span className="font-spec text-xs uppercase tracking-[0.18em] text-sf-brass">
              Get in touch
            </span>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-sf-ink md:text-5xl">
              Request a quote
            </h1>
            <p className="mx-auto mt-6 max-w-[56ch] text-base leading-relaxed text-sf-ink/65">
              Tell us the product, quantity, and target date. We reply with a real
              quote against your specification.
            </p>
          </Reveal>
        </section>

        <section className="mx-auto mt-16 max-w-[1240px] px-6 pb-28">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              {status === "done" ? (
                <div className="flex flex-col items-start gap-3 rounded-[14px] border border-sf-line bg-sf-paper p-8">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sf-navy text-white">
                    <Check size={20} />
                  </span>
                  <h2 className="font-display text-xl font-semibold text-sf-ink">
                    Inquiry received
                  </h2>
                  <p className="text-sm text-sf-ink/60">
                    Thank you. Our team will reply to your email within one business
                    day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-2 font-display text-sm font-semibold text-sf-navy"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Full name" error={errors.name?.message}>
                      <input
                        {...register("name", { required: "Name is required" })}
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Company">
                      <input {...register("company")} className={inputClass} />
                    </Field>
                    <Field label="Email" error={errors.email?.message}>
                      <input
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                        })}
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Phone">
                      <input {...register("phone")} className={inputClass} />
                    </Field>
                    <Field label="Country">
                      <input {...register("country")} className={inputClass} />
                    </Field>
                    <Field label="Product category">
                      <select {...register("productCategory")} className={inputClass}>
                        <option value="">Select a category</option>
                        {productCategories.map((c) => (
                          <option key={c.slug} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Quantity">
                      <input {...register("quantity")} placeholder="e.g. 50,000 pcs" className={inputClass} />
                    </Field>
                    <Field label="Target date">
                      <input {...register("targetDate")} placeholder="e.g. within 6 weeks" className={inputClass} />
                    </Field>
                  </div>
                  <Field label="Message">
                    <textarea {...register("message")} rows={4} className={inputClass} />
                  </Field>

                  {status === "error" ? (
                    <p className="text-sm text-red-600">
                      Something went wrong, please try again or WhatsApp us directly.
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center gap-2 rounded-[14px] bg-sf-navy px-8 py-4 font-display text-sm font-semibold text-white transition-colors hover:bg-sf-navy-deep disabled:opacity-60"
                  >
                    {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : null}
                    Send Inquiry
                  </button>
                </form>
              )}
            </Reveal>

            <Reveal delay={0.1} className="space-y-6">
              <div className="rounded-[14px] border border-sf-line bg-white p-7">
                <h2 className="font-display text-lg font-semibold text-sf-ink">Head office</h2>
                <div className="mt-4 flex flex-col gap-3 text-sm text-sf-ink/65">
                  <span className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-sf-brass" /> {company.address}
                  </span>
                  {company.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-3 hover:text-sf-navy">
                      <Phone size={16} className="text-sf-brass" /> {phone}
                    </a>
                  ))}
                  <a href={`mailto:${company.email}`} className="flex items-center gap-3 hover:text-sf-navy">
                    <Mail size={16} className="text-sf-brass" /> {company.email}
                  </a>
                  <span className="flex items-center gap-3">
                    <Clock size={16} className="text-sf-brass" /> {company.hours}
                  </span>
                </div>
              </div>

              <div className="overflow-hidden rounded-[14px] border border-sf-line">
                <iframe
                  title="Sourcing Fair office location"
                  src={mapSrc}
                  width="100%"
                  height="260"
                  loading="lazy"
                  className="block"
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}

const inputClass =
  "w-full rounded-[10px] border border-sf-line bg-white px-4 py-3 text-sm text-sf-ink placeholder:text-sf-ink/35 focus:border-sf-navy focus:outline-none";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-display text-xs font-medium text-sf-ink/70">
        {label}
      </span>
      {children}
      {error ? <span className="mt-1 block text-xs text-red-600">{error}</span> : null}
    </label>
  );
}
