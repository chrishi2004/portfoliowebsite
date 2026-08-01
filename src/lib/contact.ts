import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email address"),
  message: z.string().trim().min(1, "Message is required").min(20, "Message should be at least 20 characters").max(4000, "Message is too long"),
  honeypot: z.string().optional().default(""),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactLinks = {
  email: {
    label: "Email",
    value: "hello@rishichaudhari.dev",
    href: "mailto:hello@rishichaudhari.dev",
  },
  linkedin: {
    label: "LinkedIn",
    value: "linkedin.com/in/rishi-chaudhari",
    href: "https://linkedin.com/in/rishi-chaudhari",
  },
  github: {
    label: "GitHub",
    value: "github.com/rishi-chaudhari",
    href: "https://github.com/rishi-chaudhari",
  },
  location: {
    label: "Location",
    value: "India",
  },
} as const;
