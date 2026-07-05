import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { bindings } from "../bindings.server";

const inquirySchema = z.object({
  kind: z.enum(["quote", "contact", "newsletter"]).default("quote"),
  name: z.string().min(1).max(200),
  company: z.string().max(200).optional(),
  email: z.string().email(),
  phone: z.string().max(50).optional(),
  country: z.string().max(100).optional(),
  productCategory: z.string().max(100).optional(),
  quantity: z.string().max(100).optional(),
  targetDate: z.string().max(100).optional(),
  message: z.string().max(4000).optional(),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator(inquirySchema)
  .handler(async ({ data }) => {
    const { DB } = bindings();
    if (!DB) {
      return { ok: false as const, error: "Storage unavailable, please try again shortly." };
    }

    await DB.prepare(
      `INSERT INTO inquiries
        (kind, name, company, email, phone, country, product_category, quantity, target_date, message)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
      .bind(
        data.kind,
        data.name,
        data.company ?? null,
        data.email,
        data.phone ?? null,
        data.country ?? null,
        data.productCategory ?? null,
        data.quantity ?? null,
        data.targetDate ?? null,
        data.message ?? null,
      )
      .run();

    return { ok: true as const };
  });
