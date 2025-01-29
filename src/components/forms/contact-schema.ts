"use client";

import { z } from "zod";

export const formSchema = z.object({
  firstName: z
    .string()
    .min(2, "Minimum length is 2")
    .max(50, { message: "Name is too long" }),
  lastName: z.string().min(2).max(50, { message: "Name is too long" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(10, { message: "Message is too short" })
    .max(500, { message: "Message is too long" }),
  subject: z.object({
    label: z.string(),
    value: z.string(),
  }),
});
