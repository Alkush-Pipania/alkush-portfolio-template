"use client";

import { useState } from "react";
import {
  SendIcon,
  Loader2Icon,
  CheckCircleIcon,
  MailIcon,
  UserIcon,
  MessageSquareIcon,
} from "lucide-react";
import { Turnstile } from "next-turnstile";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { USER } from "@/portfolio/data/user";

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className,
      )}
    />
  );
}

export default function ContactPage() {
  const { resolvedTheme } = useTheme();
  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!turnstileToken) {
      return;
    }

    setFormState("loading");

    try {
      const response = await fetch("/api/resend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          message: formData.message,
          turnstileToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setFormState("success");
      setFormData({ name: "", email: "", message: "" });
      setTurnstileToken(null);
    } catch {
      setFormState("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="mx-auto md:max-w-3xl *:[[id]]:scroll-mt-22">
      <Separator />

      {/* Page Header */}
      <div className="border-x border-b border-edge px-6 py-10">
        <h1 className="text-3xl font-bold tracking-tight">Get in Touch</h1>
        <p className="mt-3 font-mono text-muted-foreground">
          Have a project in mind or just want to say hello? I&apos;d love to
          hear from you.
        </p>
      </div>

      <Separator />

      {/* Contact Form */}
      <div className="border-x border-b border-edge p-6">
        {formState === "success" ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
              <CheckCircleIcon className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold">Message Sent!</h3>
            <p className="mt-2 text-muted-foreground">
              Thanks for reaching out. I&apos;ll get back to you soon.
            </p>
            <Button
              className="mt-6"
              variant="outline"
              onClick={() => setFormState("idle")}
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="flex items-center gap-2 text-sm font-medium"
              >
                <UserIcon className="h-4 w-4 text-muted-foreground" />
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className={cn(
                  "w-full rounded-lg border border-edge bg-background px-4 py-3",
                  "font-mono text-sm placeholder:text-muted-foreground/50",
                  "transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                )}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="flex items-center gap-2 text-sm font-medium"
              >
                <MailIcon className="h-4 w-4 text-muted-foreground" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className={cn(
                  "w-full rounded-lg border border-edge bg-background px-4 py-3",
                  "font-mono text-sm placeholder:text-muted-foreground/50",
                  "transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                )}
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="flex items-center gap-2 text-sm font-medium"
              >
                <MessageSquareIcon className="h-4 w-4 text-muted-foreground" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project or just say hello..."
                className={cn(
                  "w-full resize-none rounded-lg border border-edge bg-background px-4 py-3",
                  "font-mono text-sm placeholder:text-muted-foreground/50",
                  "transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                )}
              />
            </div>

            {/* Turnstile + Submit Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Turnstile Captcha */}
              <div className="shrink-0">
                <Turnstile
                  siteKey={
                    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
                    "1x00000000000000000000AA"
                  }
                  onVerify={(token: string) => setTurnstileToken(token)}
                  onError={() => setTurnstileToken(null)}
                  onExpire={() => setTurnstileToken(null)}
                  theme={resolvedTheme === "dark" ? "dark" : "light"}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={formState === "loading" || !turnstileToken}
                className="w-full sm:w-auto gap-2 px-8"
              >
                {formState === "loading" ? (
                  <>
                    <Loader2Icon className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <SendIcon className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </div>

            {formState === "error" && (
              <p className="text-center text-sm text-red-500">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </div>

      <Separator />

      {/* Alternative Contact */}
      <div className="border-x border-b border-edge p-6">
        <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Or reach out directly
        </h3>
        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${atob(USER.email)}`}
            className="inline-flex items-center gap-2 rounded-lg border border-edge px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            <MailIcon className="h-4 w-4" />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/alkushpipania/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-lg border border-edge px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/Alkush-Pipania"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-lg border border-edge px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>

      <Separator />
    </div>
  );
}
