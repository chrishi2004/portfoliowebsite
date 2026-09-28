# Rishi Chaudhari — Portfolio

Personal portfolio website built to present my software projects, technical skills, leadership experience, achievements, and resume in a clean recruiter-facing format.

## Overview

The site is structured around the information an interviewer or recruiter typically wants to reach quickly:

- About
- Projects
- Technical skills
- Experience
- Leadership
- Achievements
- Certifications
- Resume
- Contact

Content is kept separate from presentation in the `content/` directory so project, skills, and profile information can be maintained without rewriting page components.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 |
| Language | TypeScript |
| UI | React 19, Tailwind CSS |
| Components | Radix UI |
| Motion | Framer Motion |
| Icons | Lucide React |
| Validation | Zod |
| Quality | ESLint, Lighthouse |

## Project Structure

```text
content/          Structured portfolio content
public/           Static assets
src/app/          App Router pages and metadata
src/components/   Reusable UI components
src/lib/          Shared utilities
src/types/        TypeScript types
```

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production check:

```bash
npm run lint
npm run build
```

## Design Goals

- Fast access to projects and technical work
- Clear separation between engineering work and extracurricular leadership
- Responsive recruiter-friendly navigation
- Accessible, readable visual hierarchy
- SEO metadata, sitemap, robots configuration, and Open Graph support
- Content-driven architecture for easy maintenance

## Key Pages

The application includes dedicated routes for projects, experience, leadership, achievements, certifications, skills, resume, contact, and about information.

## Repository Notes

This repository contains the source code for the portfolio itself. Individual technical projects are maintained in their own repositories with their own architecture, setup, testing, and implementation documentation.

## Status

Actively maintained as my primary portfolio codebase.
