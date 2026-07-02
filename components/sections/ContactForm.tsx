"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-surface flex flex-col items-center p-10 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-mint" />
        <h3 className="mt-4 text-xl font-medium text-bone">Message sent.</h3>
        <p className="mt-2 max-w-sm text-sm text-bone-muted">
          We reply to every inquiry within one business day. In the meantime,
          feel free to grab a time directly on our calendar.
        </p>
        <a href="/book-a-call" className="btn-primary mt-6">
          Book a call instead
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-5 p-7 sm:p-8">
      {/* honeypot field, hidden from real users */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-bone-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            className="w-full rounded-lg border border-ink-600 bg-ink-900 px-4 py-2.5 text-sm text-bone placeholder:text-bone-dim focus:border-volt-400"
            placeholder="Jordan Lee"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-bone-muted">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-ink-600 bg-ink-900 px-4 py-2.5 text-sm text-bone placeholder:text-bone-dim focus:border-volt-400"
            placeholder="jordan@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm text-bone-muted">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="w-full rounded-lg border border-ink-600 bg-ink-900 px-4 py-2.5 text-sm text-bone placeholder:text-bone-dim focus:border-volt-400"
            placeholder="Vantage Fitness"
          />
        </div>
        <div>
          <label htmlFor="budget" className="mb-1.5 block text-sm text-bone-muted">
            Estimated budget
          </label>
          <select
            id="budget"
            name="budget"
            className="w-full rounded-lg border border-ink-600 bg-ink-900 px-4 py-2.5 text-sm text-bone focus:border-volt-400"
            defaultValue=""
          >
            <option value="" disabled>
              Select a range
            </option>
            <option value="$2,900–$5,000">$2,900 – $5,000</option>
            <option value="$5,000–$15,000">$5,000 – $15,000</option>
            <option value="$15,000–$30,000">$15,000 – $30,000</option>
            <option value="$30,000+">$30,000+</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-bone-muted">
          What are you looking to automate or build?
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          className="w-full resize-none rounded-lg border border-ink-600 bg-ink-900 px-4 py-2.5 text-sm text-bone placeholder:text-bone-dim focus:border-volt-400"
          placeholder="Tell us about your current process and where it's breaking down…"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400" role="alert">
          {errorMessage}
        </p>
      )}

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full">
        {status === "loading" ? "Sending…" : "Send message"}
        {status !== "loading" && <ArrowUpRight className="h-4 w-4" />}
      </button>
      <p className="text-center text-xs text-bone-dim">
        We reply within one business day. No spam, ever.
      </p>
    </form>
  );
}
