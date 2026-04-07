/* eslint-disable no-unused-vars */
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Copy,
  ShieldCheck,
} from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "kedarghadyalji@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 95948 08335" },
  { icon: MapPin, label: "Location", value: "Mumbai, India" },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });
  const [copiedValue, setCopiedValue] = useState(null);

  const handleCopy = (value) => {
    if (value === "Mumbai, India") return;
    navigator.clipboard.writeText(value);
    setCopiedValue(value);
    setTimeout(() => setCopiedValue(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = Date.now();
    const lastSent = Number(localStorage.getItem("kg_last_sent") || 0);
    const dailyData = JSON.parse(
      localStorage.getItem("kg_daily_stats") || '{"count": 0, "resetAt": 0}',
    );
    const lockoutUntil = Number(localStorage.getItem("kg_lockout") || 0);

    // 1. Check for 12-hour Security Lockout
    if (now < lockoutUntil) {
      const hoursLeft = Math.ceil((lockoutUntil - now) / (1000 * 60 * 60));
      setSubmitStatus({
        type: "security",
        message: `Security Protocol Active: Access limited for ${hoursLeft}h due to high activity. This defensive logic reflects my skills in cybersecurity and proactive threat mitigation.`,
      });
      return;
    }

    // 2. Check for 60-second Cooldown
    if (now - lastSent < 60000) {
      const secondsLeft = Math.ceil((60000 - (now - lastSent)) / 1000);
      setSubmitStatus({
        type: "security",
        message: `Rate Limit Active: Please wait ${secondsLeft}s before next transmission. (Anti-spam measure enabled).`,
      });
      return;
    }

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch(import.meta.env.VITE_DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          embeds: [
            {
              title: "🚀 New Portfolio Message",
              color: 0x7dd3fc,
              fields: [
                { name: "Sender", value: formData.name, inline: true },
                { name: "Email", value: formData.email, inline: true },
                { name: "Message", value: formData.message },
              ],
              footer: { text: `Sent at ${new Date().toLocaleString()}` },
            },
          ],
        }),
      });

      if (response.ok) {
        localStorage.setItem("kg_last_sent", now.toString());

        let newCount = dailyData.count + 1;
        let resetTime = dailyData.resetAt;

        // Reset daily count if 24h passed
        if (now > dailyData.resetAt) {
          newCount = 1;
          resetTime = now + 24 * 60 * 60 * 1000;
        }

        if (newCount >= 5) {
          // Trigger 12-hour lockout
          localStorage.setItem(
            "kg_lockout",
            (now + 12 * 60 * 60 * 1000).toString(),
          );
          setSubmitStatus({
            type: "security",
            message:
              "Final daily message sent. Access limited for 12h for security verification. This automated defensive response demonstrates my commitment to secure engineering.",
          });
        } else {
          localStorage.setItem(
            "kg_daily_stats",
            JSON.stringify({
              count: newCount,
              resetAt: resetTime || now + 24 * 60 * 60 * 1000,
            }),
          );
          setSubmitStatus({
            type: "success",
            message:
              "Transmission successful! Message delivered directly to my terminal.",
          });
        }
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error();
      }
    } catch (err) {
      setSubmitStatus({
        type: "error",
        message: "Network glitch! Reach out via LinkedIn.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden transition-colors duration-500"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-black tracking-[0.3em] uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-foreground/80">
              the next big thing.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-border shadow-xl shadow-primary/5">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-foreground/70 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-5 py-4 bg-secondary/30 rounded-2xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-foreground/70 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="your_email@domain.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-5 py-4 bg-secondary/30 rounded-2xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-foreground/70 ml-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your project goals..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-5 py-4 bg-secondary/30 rounded-2xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground resize-none"
                />
              </div>

              <Button
                className="w-full py-4 text-lg rounded-2xl"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Architecting..."
                ) : (
                  <>
                    Send Proposal <Send className="w-5 h-5 ml-1" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-start gap-3 p-5 rounded-2xl animate-fade-in ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20"
                      : "bg-primary/10 text-primary border border-primary/20"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  ) : (
                    <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm font-bold leading-relaxed">
                    {submitStatus.message}
                  </p>
                </div>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-3xl p-8 border border-border">
              <h3 className="text-xl font-bold mb-8 tracking-tight text-foreground">
                Contact Information
              </h3>
              <div className="space-y-3">
                {contactInfo.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleCopy(item.value)}
                    className="w-full flex items-center gap-5 p-4 rounded-2xl hover:bg-primary/5 border border-transparent hover:border-primary/10 transition-all group text-left relative"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                        {item.label}
                      </div>
                      <div className="font-bold text-foreground text-lg">
                        {item.value}
                      </div>
                    </div>
                    {item.label !== "Location" && (
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        {copiedValue === item.value ? (
                          <span className="text-[10px] font-bold text-green-500 uppercase tracking-tighter">
                            Copied!
                          </span>
                        ) : (
                          <Copy className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary" />
                        )}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-8 border-2 border-primary/20 bg-primary/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
                <span className="font-bold text-foreground tracking-tight">
                  Available for Collaboration
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I am currently evaluating new opportunities. If you're looking
                for someone to bridge the gap between code and logic, let's
                connect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
