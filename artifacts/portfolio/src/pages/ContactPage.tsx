import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Github, Send, CheckCircle } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const CONTACT_INFO = [
  { icon: Mail,    label: "Email",    value: "asadbalqani@gmail.com",      href: "mailto:theasadsahir@gmail.com" },
  { icon: Phone,   label: "Phone",    value: "+92 317 6854356",             href: "tel:+923176854356" },
  { icon: Linkedin,label: "LinkedIn", value: "linkedin.com/in/theasadsahir", href: "https://linkedin.com/in/theasadsahir" },
  { icon: Github,  label: "GitHub",   value: "github.com/Asad06124",        href: "https://github.com/Asad06124" },
  { icon: MapPin,  label: "Location", value: "Model Town, Lahore, Pakistan", href: null },
];

const PURPOSES = [
  "Job Opportunity",
  "Freelance Project",
  "Collaboration",
  "Open Source",
  "Other",
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  useSEO({
    title: "Contact — Asad Ullah",
    description: "Get in touch with Asad Ullah — Senior Mobile App Developer. Open to job opportunities, freelance projects, and collaborations.",
    path: "/contact",
  });

  const [form, setForm] = useState({ name: "", email: "", purpose: PURPOSES[0], message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    const subject = encodeURIComponent(`[${form.purpose}] from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Asad,\n\n${form.message}\n\n---\nFrom: ${form.name}\nEmail: ${form.email}\nPurpose: ${form.purpose}`
    );
    window.location.href = `mailto:theasadsahir@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
    return (
      <div>
        <label htmlFor={id} className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
          {label}
        </label>
        {children}
        {error && <p className="text-xs text-red-400 mt-1.5 font-mono">{error}</p>}
      </div>
    );
  }

  const inputBase = "w-full px-4 py-3 bg-background border rounded-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors font-mono";
  const inputNormal = `${inputBase} border-border focus:border-primary/60`;
  const inputError  = `${inputBase} border-red-400/60 focus:border-red-400`;

  return (
    <main className="pt-28 pb-24 max-w-5xl mx-auto px-6" data-testid="page-contact">

      {/* Header */}
      <FadeIn className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-5">
          Get in Touch<span className="text-primary">.</span>
        </h1>
        <div className="h-0.5 w-10 bg-primary mb-6" />
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          Open to full-time roles, freelance projects, and open-source collaborations.
          Drop a message and I'll reply within 24 hours.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-5 gap-12">

        {/* Left — contact details */}
        <FadeIn delay={0.1} className="md:col-span-2 space-y-8">
          <div className="space-y-4">
            {CONTACT_INFO.map((item, i) => {
              const Icon = item.icon;
              const inner = (
                <div className="flex items-start gap-3.5 group">
                  <div className="p-2 bg-primary/10 border border-primary/20 rounded-sm shrink-0 mt-0.5 group-hover:bg-primary/15 transition-colors">
                    <Icon size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{item.label}</p>
                    <p className="text-sm text-foreground mt-0.5 group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={i} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={i}>{inner}</div>
              );
            })}
          </div>

          {/* Availability card */}
          <div className="border border-green-500/25 bg-green-500/5 rounded-sm p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-green-400">Available</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Currently open to full-time senior mobile roles and select freelance projects.
            </p>
          </div>
        </FadeIn>

        {/* Right — form */}
        <FadeIn delay={0.18} className="md:col-span-3">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="border border-green-500/25 bg-green-500/5 rounded-sm p-10 text-center h-full flex flex-col items-center justify-center"
            >
              <CheckCircle size={40} className="text-green-400 mb-5" />
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                Message ready to send<span className="text-primary">.</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                Your email client should have opened with the message pre-filled. Hit send and I'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-xs font-mono text-primary hover:underline cursor-pointer"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field id="name" label="Your Name" error={errors.name}>
                  <input
                    id="name" type="text" placeholder="John Smith"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className={errors.name ? inputError : inputNormal}
                  />
                </Field>
                <Field id="email" label="Your Email" error={errors.email}>
                  <input
                    id="email" type="email" placeholder="john@example.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className={errors.email ? inputError : inputNormal}
                  />
                </Field>
              </div>

              <Field id="purpose" label="Purpose">
                <select
                  id="purpose"
                  value={form.purpose}
                  onChange={e => setForm(f => ({ ...f, purpose: e.target.value }))}
                  className={`${inputNormal} cursor-pointer appearance-none`}
                >
                  {PURPOSES.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </Field>

              <Field id="message" label="Message" error={errors.message}>
                <textarea
                  id="message" rows={6}
                  placeholder="Tell me about your project, role, or idea..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className={`${errors.message ? inputError : inputNormal} resize-none`}
                />
              </Field>

              <motion.button
                type="submit"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-primary-foreground text-sm font-mono uppercase tracking-widest rounded-sm hover:opacity-90 transition-opacity cursor-pointer"
              >
                <Send size={14} />
                Send Message
              </motion.button>
            </form>
          )}
        </FadeIn>
      </div>
    </main>
  );
}