import type { Metadata } from "next";

export const siteConfig = {
  name: "Rishi Chaudhari",
  siteName: "Rishi Chaudhari | Portfolio",
  description: "Premium personal portfolio for Rishi Chaudhari, a Computer Science Engineer building AI-powered products and business-focused technology solutions.",
  url: "https://rishichaudhari.dev",
  jobTitle: "Computer Science Engineer",
  linkedin: "https://linkedin.com/in/rishi-chaudhari",
  github: "https://github.com/rishi-chaudhari",
  email: "hello@rishichaudhari.dev",
} as const;

export const socialImagePath = "/opengraph-image";

export function buildPageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.siteName,
      type: "website",
      images: [
        {
          url: socialImagePath,
          width: 1200,
          height: 630,
          alt: siteConfig.siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImagePath],
    },
  };
}

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.jobTitle,
  url: siteConfig.url,
  sameAs: [siteConfig.linkedin, siteConfig.github],
} as const;
