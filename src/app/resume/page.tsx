import type { Metadata } from "next";

import { ResumeSection } from "@/components/resume/resume-section";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "Resume | Rishi Chaudhari | Portfolio",
  "View and download Rishi Chaudhari’s resume PDF directly in the browser.",
  "/resume",
);

export default function ResumePage() {
  return <ResumeSection />;
}
