"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { formSchema } from "./contact-schema";
import type { z } from "zod";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      firstName: "John",
      lastName: "Candy",
      email: "username@email.com",
      message: "Hello, I would like to know more about your services.",
    },
    mode: "onBlur",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <h1 className="mb-4 text-5xl">Contact Us</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 rounded-2xl p-8 shadow-2xl"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-2 text-2xl">First Name</FormLabel>
                <FormControl className="my-2">
                  <Input className="py-4" placeholder="John" {...field} />
                </FormControl>
                <FormDescription>
                  Enter your first name. Must be at least 2 characters long.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-4 text-2xl">Last Name</FormLabel>
                <FormControl className="my-2">
                  <Input placeholder="Candy" {...field} />
                </FormControl>
                <FormDescription>Enter your last name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-4 text-2xl">Email</FormLabel>
                <FormControl className="my-2">
                  <Input placeholder="Candy" {...field} />
                </FormControl>
                <FormDescription>Enter your email address.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-4 text-2xl">Message</FormLabel>
                <FormControl className="my-2">
                  <Textarea placeholder="Hey there" {...field} />
                </FormControl>
                <FormDescription>Leave us a brief message</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            onSubmit={() =>
              onSubmit({
                firstName: form.getValues("firstName"),
                lastName: form.getValues("lastName"),
                email: form.getValues("email"),
                message: form.getValues("message"),
              })
            }
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
