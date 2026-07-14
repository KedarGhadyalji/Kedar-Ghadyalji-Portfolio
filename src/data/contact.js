/**
 * What: content for the Contact page (hero copy, the message form, and the
 * identity card with contact channels).
 * Data from: hardcoded copy below, plus email/resume link from ./siteConfig.
 * Used by: src/pages/Contact.jsx (the only consumer of `contactPage`).
 */
import { contactInfo } from "./siteConfig";

export const contactPage = {
  eyebrow: "Say Hello",
  heading: "Contact Me",
  intro:
    "I'm always open to discussing new opportunities, open-source projects, or web engineering workflows. Fill out the form below and it'll land directly in my inbox — no email client required.",

  // Message form. Submits to a Discord webhook (see src/pages/Contact.jsx)
  // rather than a backend of its own, with basic client-side rate limiting.
  form: {
    fields: {
      name: { label: "Full Name", placeholder: "Your name" },
      email: { label: "Email Address", placeholder: "your_email@domain.com" },
      message: {
        label: "Message",
        placeholder: "What are you looking to build?",
      },
    },
    submitLabel: "Send Message",
    submitLabelLoading: "Transmitting…",
    // {seconds}/{hours} tokens are replaced with the live countdown value.
    messages: {
      success: "Message sent! It'll land directly to me.",
      cooldown:
        "Please wait {seconds}s before sending another message (anti-spam cooldown).",
      lockout:
        "Daily message limit reached — access is limited for {hours}h before you can send another. This basic rate limiting is intentional, not a bug.",
      error:
        "Something went wrong sending that — please try again, or reach out via LinkedIn instead.",
    },
  },

  // Right-hand identity card: name/location/status, contact channels, and a
  // resume download button in the card's footer.
  card: {
    name: "Kedar Ghadyalji",
    location: "Mumbai, India",
    status: "Open to opportunities",
    channelsHeading: "Reach me directly",
    channels: [
      {
        type: "email",
        label: "Email",
        value: contactInfo.email,
      },
      {
        type: "github",
        label: "GitHub",
        value: "github.com/KedarGhadyalji",
        href: "https://github.com/KedarGhadyalji",
      },
      {
        type: "linkedin",
        label: "LinkedIn",
        value: "/in/kedar-ghadyalji",
        href: "https://www.linkedin.com/in/kedar-ghadyalji-98b7a6341",
      },
    ],
    resumeCta: { label: "Download Resume", href: contactInfo.resumeUrl },
  },
};
