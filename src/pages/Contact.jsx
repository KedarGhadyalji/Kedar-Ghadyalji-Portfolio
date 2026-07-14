/**
 * What: the Contact page — hero copy, a message form that posts to a
 * Discord webhook (with basic client-side rate limiting), and an identity
 * card with contact channels (copy-to-clipboard email, GitHub, LinkedIn)
 * plus a resume download button in the card's footer. The two cards sit in
 * an equal-width grid so they stay visually balanced regardless of content
 * length.
 * Data from: src/data/contact.js (contactPage) and src/data/siteConfig.js
 * (brand, contactInfo). The webhook URL itself comes from the
 * VITE_DISCORD_WEBHOOK_URL environment variable (see .env.example) — never
 * hardcode it here.
 * Used by: src/App.jsx, lazy-loaded on the /contact route.
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, ShieldAlert, AlertTriangle, Copy } from "lucide-react";
import { contactPage } from "../data/contact";
import { pageFade } from "../utils/motion";
import { brand, contactInfo } from "../data/siteConfig";
import useCopyToast from "../hooks/useCopyToast";
import CopyToast from "../components/CopyToast";

const EYEBROW =
  "font-source-code-pro text-sm font-bold uppercase tracking-[0.3em] text-[#5ce1e6] pixel-shadow";
const CARD =
  "flex h-full flex-col rounded-2xl border border-white/10 bg-[#0b0f1f]/50 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#5ce1e6]/30 hover:shadow-[0_4px_24px_rgba(92,225,230,0.05)]";

const ICONS = {
  email: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C18 4.6 19 4.9 19 4.9c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.5V23h-4V8z" />
    </svg>
  ),
};

// Rate-limit thresholds for the contact form (all enforced client-side via
// localStorage — see handleSubmit below).
const COOLDOWN_MS = 60 * 1000; // 60s between messages
const DAILY_LIMIT = 5; // messages per rolling 24h window
const LOCKOUT_MS = 12 * 60 * 60 * 1000; // 12h lockout once the daily limit is hit
const DAY_MS = 24 * 60 * 60 * 1000;

// Fills {token} placeholders in a message template, e.g.
// fillTemplate("wait {seconds}s", { seconds: 42 }) -> "wait 42s".
const fillTemplate = (template, tokens) =>
  Object.entries(tokens).reduce(
    (str, [key, value]) => str.replaceAll(`{${key}}`, value),
    template,
  );

const Contact = () => {
  const { eyebrow, heading, intro, form, card } = contactPage;
  const { copied, copy } = useCopyToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });

  const handleChange = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = Date.now();
    const lastSent = Number(localStorage.getItem("kg_last_sent") || 0);
    const dailyData = JSON.parse(
      localStorage.getItem("kg_daily_stats") || '{"count":0,"resetAt":0}',
    );
    const lockoutUntil = Number(localStorage.getItem("kg_lockout") || 0);

    // 1. 12-hour lockout after hitting the daily message limit.
    if (now < lockoutUntil) {
      const hoursLeft = Math.ceil((lockoutUntil - now) / (1000 * 60 * 60));
      setStatus({
        type: "security",
        message: fillTemplate(form.messages.lockout, { hours: hoursLeft }),
      });
      return;
    }

    // 2. 60-second cooldown between messages.
    if (now - lastSent < COOLDOWN_MS) {
      const secondsLeft = Math.ceil((COOLDOWN_MS - (now - lastSent)) / 1000);
      setStatus({
        type: "security",
        message: fillTemplate(form.messages.cooldown, {
          seconds: secondsLeft,
        }),
      });
      return;
    }

    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;
      if (!webhookUrl) {
        throw new Error("Missing VITE_DISCORD_WEBHOOK_URL");
      }

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          embeds: [
            {
              title: "New portfolio message",
              color: 0x5ce1e6,
              fields: [
                { name: "Name", value: formData.name, inline: true },
                { name: "Email", value: formData.email, inline: true },
                { name: "Message", value: formData.message },
              ],
              footer: { text: `Sent ${new Date().toLocaleString()}` },
            },
          ],
        }),
      });

      if (!response.ok) throw new Error("Webhook request failed");

      localStorage.setItem("kg_last_sent", String(now));

      // Reset the rolling daily counter once its window has passed.
      let newCount = dailyData.count + 1;
      let resetAt = dailyData.resetAt;
      if (now > dailyData.resetAt) {
        newCount = 1;
        resetAt = now + DAY_MS;
      }

      if (newCount >= DAILY_LIMIT) {
        localStorage.setItem("kg_lockout", String(now + LOCKOUT_MS));
        setStatus({
          type: "security",
          message: fillTemplate(form.messages.lockout, {
            hours: Math.ceil(LOCKOUT_MS / (1000 * 60 * 60)),
          }),
        });
      } else {
        localStorage.setItem(
          "kg_daily_stats",
          JSON.stringify({ count: newCount, resetAt }),
        );
        setStatus({ type: "success", message: form.messages.success });
      }
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus({ type: "error", message: form.messages.error });
    } finally {
      setIsLoading(false);
    }
  };

  const STATUS_STYLES = {
    success: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    security: "border-[#5ce1e6]/30 bg-[#5ce1e6]/10 text-[#7de7eb]",
    error: "border-rose-400/30 bg-rose-400/10 text-rose-300",
  };
  const STATUS_ICONS = {
    success: <CheckCircle className="h-5 w-5 flex-none" />,
    security: <ShieldAlert className="h-5 w-5 flex-none" />,
    error: <AlertTriangle className="h-5 w-5 flex-none" />,
  };

  return (
    <motion.div {...pageFade} className="mx-auto w-full max-w-[1024px] px-6 py-12">
      {/* Full-width header, above the two-column grid. */}
      <section className="mb-10 text-left">
        <p className={EYEBROW}>{eyebrow}</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white pixel-shadow sm:text-6xl">
          {heading}
        </h1>
        <p className="mt-6 max-w-2xl font-source-code-pro text-sm leading-relaxed text-white/70 sm:text-base">
          {intro}
        </p>
      </section>

      {/* Equal-width, equal-height cards (grid items stretch to match the
          tallest one, so the form and identity card always match in size). */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left: message form */}
        <div className={CARD}>
          <h2 className="mb-5 font-source-code-pro text-xs font-bold uppercase tracking-wider text-[#5ce1e6]/60">
            Send a message
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-1 flex-col justify-between gap-5"
          >
            <div className="space-y-5">
              <div className="space-y-1.5">
                <label className="font-source-code-pro text-xs font-bold uppercase tracking-widest text-white/60">
                  {form.fields.name.label}
                </label>
                <input
                  type="text"
                  required
                  placeholder={form.fields.name.placeholder}
                  value={formData.name}
                  onChange={handleChange("name")}
                  className="w-full rounded-xl border border-white/10 bg-[#0b0f1f]/50 px-4 py-3 font-source-code-pro text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-[#5ce1e6] focus:ring-2 focus:ring-[#5ce1e6]/20"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-source-code-pro text-xs font-bold uppercase tracking-widest text-white/60">
                  {form.fields.email.label}
                </label>
                <input
                  type="email"
                  required
                  placeholder={form.fields.email.placeholder}
                  value={formData.email}
                  onChange={handleChange("email")}
                  className="w-full rounded-xl border border-white/10 bg-[#0b0f1f]/50 px-4 py-3 font-source-code-pro text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-[#5ce1e6] focus:ring-2 focus:ring-[#5ce1e6]/20"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-source-code-pro text-xs font-bold uppercase tracking-widest text-white/60">
                  {form.fields.message.label}
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder={form.fields.message.placeholder}
                  value={formData.message}
                  onChange={handleChange("message")}
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#0b0f1f]/50 px-4 py-3 font-source-code-pro text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-[#5ce1e6] focus:ring-2 focus:ring-[#5ce1e6]/20"
                />
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-gradient px-6 py-3.5 font-source-code-pro text-sm font-bold text-black transition-all duration-200 hover:shadow-[0_0_24px_rgba(92,225,230,0.4)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? (
                  form.submitLabelLoading
                ) : (
                  <>
                    {form.submitLabel} <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              {status.type && (
                <div
                  className={`flex items-start gap-3 rounded-xl border p-4 font-source-code-pro text-xs leading-relaxed sm:text-sm ${STATUS_STYLES[status.type]}`}
                >
                  {STATUS_ICONS[status.type]}
                  <p>{status.message}</p>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Right: identity card */}
        <div className={CARD}>
          <div className="flex items-center gap-4 border-b border-white/5 pb-5">
            <div className="grid h-14 w-14 flex-none place-items-center overflow-hidden rounded-xl border border-white/10 bg-[#0b0f1f]">
              <img
                src={brand.logo}
                alt=""
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div className="min-w-0 text-left">
              <p className="font-source-code-pro text-xl font-bold leading-tight text-white">
                {card.name}
              </p>
              <p className="mt-0.5 font-source-code-pro text-xs text-white/50">
                {card.location}
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-[#5ce1e6]/25 bg-[#5ce1e6]/[0.03] px-4 py-2.5 text-left">
            <span className="h-2 w-2 flex-none rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span className="font-source-code-pro text-xs text-white/80">
              {card.status}
            </span>
          </div>

          <p className="mb-3 mt-6 text-left font-source-code-pro text-xs font-bold uppercase tracking-wider text-[#5ce1e6]/60">
            {card.channelsHeading}
          </p>
          <div className="flex flex-1 flex-col gap-2">
            {card.channels.map((ch) =>
              ch.type === "email" ? (
                <button
                  key={ch.label}
                  type="button"
                  onClick={() => copy(ch.value)}
                  className="group flex items-center gap-3.5 rounded-xl border border-white/5 bg-white/[0.01] p-3 text-left transition-all duration-200 hover:border-[#5ce1e6]/40 hover:bg-[#5ce1e6]/5"
                >
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-lg border border-white/10 bg-[#0b0f1f] text-[#5ce1e6] transition-colors group-hover:border-[#5ce1e6]/30">
                    {ICONS.email}
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="block font-source-code-pro text-[10px] font-bold uppercase tracking-wider text-white/40 transition-colors group-hover:text-[#5ce1e6]/70">
                      {ch.label}
                    </span>
                    <span className="block truncate font-source-code-pro text-xs text-white/80 transition-colors group-hover:text-white sm:text-sm">
                      {ch.value}
                    </span>
                  </div>
                  <Copy className="h-4 w-4 flex-none text-white/25 transition-colors group-hover:text-[#5ce1e6]" />
                </button>
              ) : (
                <a
                  key={ch.label}
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3.5 rounded-xl border border-white/5 bg-white/[0.01] p-3 text-left transition-all duration-200 hover:border-[#5ce1e6]/40 hover:bg-[#5ce1e6]/5"
                >
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-lg border border-white/10 bg-[#0b0f1f] text-[#5ce1e6] transition-colors group-hover:border-[#5ce1e6]/30">
                    {ICONS[ch.type]}
                  </span>
                  <div className="min-w-0">
                    <span className="block font-source-code-pro text-[10px] font-bold uppercase tracking-wider text-white/40 transition-colors group-hover:text-[#5ce1e6]/70">
                      {ch.label}
                    </span>
                    <span className="block truncate font-source-code-pro text-xs text-white/80 transition-colors group-hover:text-white sm:text-sm">
                      {ch.value}
                    </span>
                  </div>
                </a>
              ),
            )}
          </div>

          {/* Card footer: resume download */}
          {card.resumeCta?.href && (
            <a
              href={card.resumeCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-blue-gradient px-4 py-3 font-source-code-pro text-sm font-bold text-black transition-all duration-200 hover:shadow-[0_0_20px_rgba(92,225,230,0.35)]"
            >
              {card.resumeCta.label}
            </a>
          )}
        </div>
      </div>

      <CopyToast show={copied} message={contactInfo.copiedMessage} />
    </motion.div>
  );
};

export default Contact;
