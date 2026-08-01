import type { Metadata } from "next";

import { ContactSection } from "@/components/contact/contact-section";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "Contact | Rishi Chaudhari | Portfolio",
  "Contact Rishi Chaudhari through the validated portfolio form, with email, LinkedIn, GitHub, and location details.",
  "/contact",
);

export default function ContactPage() {
  return <ContactSection />;
}
