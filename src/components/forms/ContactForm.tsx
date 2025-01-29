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
import { onSubmit } from "@/app/actions/contact-submit";
import { toast } from "sonner";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    mode: "onBlur",
  });

  const { isSubmitting, isSubmitSuccessful } = form.formState;

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await onSubmit(data);
      form.reset();
      toast.success("Form submitted successfully", {
        duration: 5000,
        cancel: true,
        dismissible: true,
      });
    } catch (error) {
      form.setError("root", {
        type: "submit",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div>
      <h1 className="mb-4 text-5xl">Contact Us</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-8 rounded-2xl p-8 shadow-2xl"
        >
          <FormField
            control={form.control}
            name="firstName"
            disabled={isSubmitting}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-2 text-2xl">First Name</FormLabel>
                <FormControl className="my-2 shadow-sm hover:shadow-md">
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
            disabled={isSubmitting}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-4 text-2xl">Last Name</FormLabel>
                <FormControl className="my-2 shadow-sm hover:shadow-md">
                  <Input placeholder="Candy" {...field} />
                </FormControl>
                <FormDescription>Enter your last name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            disabled={isSubmitting}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-4 text-2xl">Email</FormLabel>
                <FormControl className="my-2 shadow-sm hover:shadow-md">
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
            disabled={isSubmitting}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-4 text-2xl">Message</FormLabel>
                <FormControl className="my-2 shadow-sm hover:shadow-md">
                  <Textarea placeholder="Hey there" {...field} />
                </FormControl>
                <FormDescription className="text-3xl">
                  Leave us a brief message
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="subject"
            disabled={isSubmitting}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-4 text-2xl">Subject</FormLabel>
                <FormControl className="my-4 shadow-sm hover:shadow-md">
                  <Select {...field} onValueChange={field.onChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Subject" />
                    </SelectTrigger>
                    <SelectContent className="w-[180px]">
                      <SelectItem value="Web Development">
                        Web Development
                      </SelectItem>
                      <SelectItem value="SEO Services">SEO Services</SelectItem>
                      <SelectItem value="Game Development">
                        Game Development
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription className="text-3xl">
                  What are you inquiring about?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          {form.formState.errors.root && (
            <p className="text-destructive text-ease-in-out my-2 py-2 transition-all delay-200">
              {form.formState.errors.root.message}
            </p>
          )}

          <Button
            className="w-full rounded-2xl shadow-2xl"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
