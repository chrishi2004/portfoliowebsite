"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

import { contactFormSchema, type ContactFormValues } from "@/lib/contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;

const initialValues = {
  name: "",
  email: "",
  message: "",
  honeypot: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("idle");
    setStatusMessage("");

    const parsed = contactFormSchema.safeParse(values);

    if (!parsed.success) {
      const nextErrors: FieldErrors = {};

      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof ContactFormValues | undefined;
        if (field) {
          nextErrors[field] = issue.message;
        }
      }

      setErrors(nextErrors);
      setSubmitState("error");
      setStatusMessage("Please fix the highlighted fields and try again.");
      return;
    }

    setErrors({});
    setSubmitState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      });

      const payload = (await response.json().catch(() => ({}))) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message || "Something went wrong while sending your message.");
      }

      setValues(initialValues);
      setSubmitState("success");
      setStatusMessage(payload.message || "Your message was sent successfully.");
    } catch (error) {
      setSubmitState("error");
      setStatusMessage(error instanceof Error ? error.message : "Unable to send your message right now.");
    }
  }

  function updateField(field: keyof typeof values, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  return (
    <Card className="border-border/80 shadow-soft">
      <CardHeader>
        <CardTitle>Send a message</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-5" onSubmit={handleSubmit} noValidate aria-busy={submitState === "submitting"}>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={values.name}
                onChange={(event) => updateField("name", event.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                placeholder="Your name"
                autoComplete="name"
                disabled={submitState === "submitting"}
              />
              {errors.name ? (
                <p id="name-error" className="text-sm text-destructive">
                  {errors.name}
                </p>
              ) : null}
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={(event) => updateField("email", event.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                placeholder="you@example.com"
                autoComplete="email"
                disabled={submitState === "submitting"}
              />
              {errors.email ? (
                <p id="email-error" className="text-sm text-destructive">
                  {errors.email}
                </p>
              ) : null}
            </div>
          </div>

          <div className="hidden">
            <label htmlFor="company">Company</label>
            <Input
              id="company"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              value={values.honeypot}
              onChange={(event) => updateField("honeypot", event.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={values.message}
              onChange={(event) => updateField("message", event.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              placeholder="Tell me about the project, role, or opportunity."
              disabled={submitState === "submitting"}
            />
            {errors.message ? (
              <p id="message-error" className="text-sm text-destructive">
                {errors.message}
              </p>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button type="submit" disabled={submitState === "submitting"}>
              {submitState === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send message"
              )}
            </Button>
            <p
              aria-live="polite"
              className={submitState === "success" ? "text-sm text-emerald-600" : submitState === "error" ? "text-sm text-destructive" : "text-sm text-muted-foreground"}
            >
              {statusMessage || "I usually reply through email after the message is delivered."}
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
