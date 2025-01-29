"use server";

import type { formSchema } from "@/components/forms/contact-schema";
import type { z } from "zod";

export async function onSubmit(values: z.infer<typeof formSchema>) {
  try {
    // TODO: Add form submission logic here
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
    return { success: true };
  } catch (error) {
    throw new Error("Failed to submit form");
  }
}
