import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Leadership", href: "/leadership" },
  { label: "Skills", href: "/skills" },
  { label: "Achievements", href: "/achievements" },
  { label: "Certifications", href: "/certifications" },
  { label: "Resume", href: "/resume.pdf" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  return (
    <header className={cn("sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl")}>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="font-heading text-sm font-bold tracking-[0.2em] uppercase text-foreground">
            Rishi Chaudhari
          </Link>
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Button asChild variant="secondary" size="sm" className="hidden sm:inline-flex">
              <Link href="/resume.pdf">Resume</Link>
            </Button>
            <details className="relative">
              <summary className="flex h-10 w-10 list-none items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&::-webkit-details-marker]:hidden">
                <span className="sr-only">Open navigation menu</span>
                <Menu className="h-5 w-5" />
              </summary>
              <div className="absolute right-0 top-14 z-50 w-[min(20rem,calc(100vw-2rem))] rounded-md border border-border bg-card p-4 shadow-lg">
                <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link key={item.label} href={item.href} className="rounded-md px-3 py-2 text-foreground transition-colors hover:bg-muted hover:text-foreground">
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </details>
          </div>
        </div>
        <nav className="hidden flex-wrap items-center gap-1 lg:flex lg:justify-end">
          {navItems.map((item) => (
            <Button key={item.label} asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button asChild variant="secondary" size="sm">
            <Link href="/resume.pdf">Resume</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}