import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle2 } from "lucide-react";
import { profile } from "../data/portfolioData";

const API_URL = import.meta.env.VITE_API_URL || "";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
     const res = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-3 mb-12">
          <span className="gutter-line">04</span>
          <h2 className="section-heading text-3xl font-semibold text-fg-primary">Contact</h2>
        </div>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="section-heading text-2xl font-semibold text-fg-primary mb-3">
              Let's build something.
            </h3>
            <p className="text-fg-muted leading-relaxed mb-8 max-w-sm">
              Open to full-stack roles, freelance work, and interesting problems. I usually
              reply within a day.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-fg-muted hover:text-mint transition-colors"
              >
                <Mail size={18} /> <span className="mono text-sm">{profile.email}</span>
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3 text-fg-muted hover:text-mint transition-colors"
              >
                {/* <Phone size={18} /> <span className="mono text-sm">{profile.phone}</span> */}
              </a>
              <div className="flex items-center gap-3 text-fg-muted">
                <MapPin size={18} /> <span className="mono text-sm">{profile.location}</span>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-fg-muted hover:text-fg-primary transition-colors"><Github size={20} /></a>
              {/* <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-fg-muted hover:text-fg-primary transition-colors"><Linkedin size={20} /></a>
              <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-fg-muted hover:text-fg-primary transition-colors"><Twitter size={20} /></a> */}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-surface border border-surface-border rounded-xl p-6 sm:p-8"
          >
            <div className="mb-5">
              <label htmlFor="name" className="mono text-xs text-fg-faint uppercase tracking-wider block mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="w-full bg-ink border border-surface-border rounded-lg px-4 py-3 text-fg-primary placeholder:text-fg-faint focus:border-mint outline-none transition-colors"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="mono text-xs text-fg-faint uppercase tracking-wider block mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="jane@company.com"
                className="w-full bg-ink border border-surface-border rounded-lg px-4 py-3 text-fg-primary placeholder:text-fg-faint focus:border-mint outline-none transition-colors"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="mono text-xs text-fg-faint uppercase tracking-wider block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the role or project..."
                className="w-full bg-ink border border-surface-border rounded-lg px-4 py-3 text-fg-primary placeholder:text-fg-faint focus:border-mint outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full inline-flex items-center justify-center gap-2 bg-amber text-ink font-medium px-5 py-3 rounded hover:bg-amber-soft transition-colors disabled:opacity-60"
            >
              {status === "sent" ? (
                <>
                  <CheckCircle2 size={16} /> Message sent
                </>
              ) : status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  <Send size={16} /> Send message
                </>
              )}
            </button>

            {status === "error" && (
              <p className="mono text-xs text-[#EF6161] mt-3">
                Something went wrong. Email me directly instead — {profile.email}
              </p>
            )}
            <input
  type="text"
  name="website"
  value={form.website}
  onChange={handleChange}
  tabIndex="-1"
  autoComplete="off"
  style={{ position: "absolute", left: "-9999px" }}
/>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
