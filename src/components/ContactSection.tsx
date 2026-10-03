import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Check, ChevronDown, Copy } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionFlag } from "@/components/SectionFlag";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const { contact } = profile;
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent"; email: string }
  | { state: "error"; message: string };

const field =
  "w-full border-hair border-rule bg-paper-raised px-sm py-sm text-body text-ink transition-colors duration-fast ease-out-expo placeholder:text-quiet/70 focus:border-amber focus:outline-none disabled:opacity-60";

const Field = ({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) => (
  <div className="space-y-xs">
    <label htmlFor={htmlFor} className="label block">
      {label}
    </label>
    {children}
  </div>
);

/** Copies the email address. If the clipboard is unavailable, says so instead of pretending. */
const CopyEmail = () => {
  const [result, setResult] = useState<"idle" | "copied" | "failed">("idle");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setResult("copied");
    } catch {
      setResult("failed");
    }
    window.setTimeout(() => setResult("idle"), 2500);
  };

  return (
    <div className="flex flex-wrap items-baseline gap-x-md gap-y-2xs">
      <a href={`mailto:${profile.email}`} className="font-display text-lead transition-colors duration-fast hover:text-amber">
        {profile.email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="label inline-flex items-center gap-2xs transition-colors duration-fast hover:text-amber"
      >
        {result === "copied" ? <Check className="h-3.5 w-3.5 text-amber" /> : <Copy className="h-3.5 w-3.5" />}
        <span aria-live="polite">
          {result === "copied" ? "Copied" : result === "failed" ? "Couldn’t copy — select it instead" : "Copy"}
        </span>
      </button>
    </div>
  );
};

/** Station 04. A short form sent through Web3Forms, with the result shown exactly as the service reports it. */
export const ContactSection = () => {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const sending = status.state === "sending";
  const [topic, setTopic] = useState("");

  // A link elsewhere on the site can arrive with a topic already chosen (e.g. "Want my resume? Ask me →").
  const location = useLocation();
  useEffect(() => {
    const requested = (location.state as { topic?: string } | null)?.topic;
    if (requested && contact.topics.includes(requested)) setTopic(requested);
  }, [location.key, location.state]);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const topic = String(data.get("topic") ?? "");

    setStatus({ state: "sending" });
    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: contact.web3formsKey,
          subject: `Portfolio — ${topic} — from ${name}`,
          from_name: "Portfolio contact form",
          name,
          email,
          topic,
          message: String(data.get("message") ?? "").trim(),
          // Web3Forms honeypot: people never see or tick this; bots that do get rejected by the service.
          botcheck: data.get("botcheck") === "on",
        }),
      });
      const result = (await response.json().catch(() => null)) as { success?: boolean; message?: string } | null;

      if (response.ok && result?.success) {
        form.reset();
        setTopic("");
        setStatus({ state: "sent", email });
      } else {
        setStatus({
          state: "error",
          message: result?.message ?? `The form service answered with an error (HTTP ${response.status}).`,
        });
      }
    } catch {
      setStatus({ state: "error", message: "Couldn’t reach the form service. Check your connection." });
    }
  };

  return (
    <section id="contact" className="container pb-section">
      <SectionFlag station="contact" title="Contact" note="Last stop" />

      <div className="grid gap-xl lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] lg:gap-2xl">
        <Reveal>
          <p className="max-w-[20ch] font-display text-display-md font-normal">{contact.fastest}</p>
          <div className="mt-xl space-y-sm border-t-hair border-rule pt-lg">
            <CopyEmail />
            <div className="flex flex-wrap gap-x-lg gap-y-xs">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="label transition-colors duration-fast hover:text-amber"
              >
                LinkedIn →
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="label transition-colors duration-fast hover:text-amber"
              >
                GitHub →
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={submit} className="space-y-md" noValidate={false}>
            <div className="grid gap-md sm:grid-cols-2">
              <Field label="Name" htmlFor="contact-name">
                <input id="contact-name" name="name" required autoComplete="name" disabled={sending} className={field} />
              </Field>
              <Field label="Email" htmlFor="contact-email">
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  disabled={sending}
                  className={field}
                />
              </Field>
            </div>

            <Field label="What’s this about?" htmlFor="contact-topic">
              <div className="relative">
                <select
                  id="contact-topic"
                  name="topic"
                  required
                  value={topic}
                  onChange={(event) => setTopic(event.target.value)}
                  disabled={sending}
                  className={cn(field, "appearance-none pr-xl invalid:text-quiet")}
                >
                  <option value="" disabled>
                    Choose one
                  </option>
                  {contact.topics.map((topic) => (
                    <option key={topic} className="text-ink">
                      {topic}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-sm top-1/2 h-4 w-4 -translate-y-1/2 text-quiet" />
              </div>
            </Field>

            <Field label="Message" htmlFor="contact-message">
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                maxLength={2000}
                disabled={sending}
                className={cn(field, "resize-y")}
              />
            </Field>

            {/* Honeypot, hidden from people and from assistive tech. */}
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

            <div className="flex flex-wrap items-center gap-x-lg gap-y-sm pt-xs">
              <button
                type="submit"
                disabled={sending}
                className="bg-amber px-lg py-sm text-small font-medium text-paper transition-colors duration-fast ease-out-expo hover:bg-amber-soft disabled:cursor-wait disabled:opacity-70"
              >
                {sending ? "Sending…" : "Send"}
              </button>
              <p aria-live="polite" className="text-small">
                {status.state === "sent" && (
                  <span className="text-ink">Sent. It’s in my inbox, and I’ll reply to {status.email}.</span>
                )}
                {status.state === "error" && (
                  <span className="text-destructive">
                    Not sent: {status.message} You can email me directly below.
                  </span>
                )}
              </p>
            </div>
          </form>

        </Reveal>
      </div>
    </section>
  );
};
