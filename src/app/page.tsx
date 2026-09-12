"use client";

import { useState, useEffect } from "react";

type Locale = "en" | "es";

const translations = {
  nav: {
    what: { en: "What", es: "Qué" },
    about: { en: "About", es: "Sobre mí" },
    contact: { en: "Contact", es: "Contacto" },
  },
  hero: {
    role: { en: "Technology & AI Business Partner", es: "Socio de Tecnología e IA" },
    title: { en: "Building the future with", es: "Construyendo el futuro con" },
    technology: { en: "technology", es: "tecnología" },
    ai: { en: "AI", es: "IA" },
    subtitle: { en: "I help companies leverage technology and AI to build, improve and scale their businesses.", es: "Ayudo a las empresas a utilizar tecnología e IA para construir, mejorar y hacer escalar sus negocios." },
    cta: { en: "Let's talk", es: "Hablemos" },
  },
  what: {
    title: { en: "What I do", es: "Qué hago" },
    items: {
      strategy: { en: "Strategy", es: "Estrategia" },
      ai: { en: "AI Implementation", es: "Implementación de IA" },
      automation: { en: "Automation", es: "Automatización" },
      tech: { en: "Technology", es: "Tecnología" },
      scaling: { en: "Scaling", es: "Escalamiento" },
      product: { en: "Product", es: "Producto" },
    },
  },
  about: {
    title: { en: "About me", es: "Sobre mí" },
    years: { en: "years in tech & business", es: "años en tecnología y negocios" },
    entrepreneur: { en: "Entrepreneur", es: "Emprendedor" },
    entrepreneurDesc: { en: "Built & scaled companies in LATAM & US", es: "Construí y hice crecer empresas en LATAM y EE.UU." },
    education: { en: "Education", es: "Educación" },
    educationDesc: { en: "MBA — IAE Business School", es: "MBA — IAE Business School" },
    projects: { en: "Projects", es: "Proyectos" },
    projectsDesc: { en: "Fonselp · Routepags · Centralpos · Wingu", es: "Fonselp · Routepags · Centralpos · Wingu" },
    exit: { en: "Exit", es: "Exit" },
    exitDesc: { en: "Sold Centralpos to Prisma Medios de Pago", es: "Vendí Centralpos a Prisma Medios de Pago" },
  },
  contact: {
    title: { en: "Get in touch", es: "Contactame" },
    subtitle: { en: "Let's build something great together", es: "Construyamos algo grande juntos" },
    desc: { en: "Transform your business with AI, strategic technology guidance, or scale your operations.", es: "Transformá tu negocio con IA, guía estratégica de tecnología, o escalá tus operaciones." },
    name: { en: "Your name", es: "Tu nombre" },
    email: { en: "your@email.com", es: "tu@email.com" },
    message: { en: "Tell me about your project...", es: "Contame sobre tu proyecto..." },
    send: { en: "Send message", es: "Enviar mensaje" },
    thanks: { en: "Thanks for reaching out!", es: "¡Gracias por contactarte!" },
    emailOpened: { en: "Your email client should have opened.", es: "Tu cliente de correo debería haberse abierto." },
  },
  footer: {
    copyright: { en: "© 2026 Matías Laurenz", es: "© 2026 Matías Laurenz" },
    role: { en: "Technology & AI Business Partner", es: "Socio de Tecnología e IA" },
  },
};

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";
  
  const stored = localStorage.getItem("locale") as Locale;
  if (stored && (stored === "en" || stored === "es")) return stored;
  
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("es")) return "es";
  
  return "en";
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setLocale(getInitialLocale());
    setMounted(true);
  }, []);

  const t = (section: keyof typeof translations, key?: string) => {
    const val = translations[section];
    if (key && typeof val === "object" && key in val) {
      return (val as any)[key as keyof typeof translations.hero][locale];
    }
    return val;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      locale === "es" 
        ? `Nuevo contacto desde portfolio: ${formData.name}`
        : `New contact from portfolio: ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:mlaurenz@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-black/5">
        <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-lg font-semibold tracking-tight">Matías Laurenz</span>
          <div className="flex items-center gap-4">
            <div className="flex gap-4 text-sm">
              <a href="#what" className="text-black/60 hover:text-black transition-colors">{t("nav", "what")[locale]}</a>
              <a href="#about" className="text-black/60 hover:text-black transition-colors">{t("nav", "about")[locale]}</a>
              <a href="#contact" className="text-black/60 hover:text-black transition-colors">{t("nav", "contact")[locale]}</a>
            </div>
            <button
              onClick={() => {
                const newLocale = locale === "en" ? "es" : "en";
                setLocale(newLocale);
                localStorage.setItem("locale", newLocale);
              }}
              className="px-2 py-1 text-xs bg-black/5 hover:bg-black/10 transition-colors"
            >
              {locale.toUpperCase()}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-black/40 mb-4">
            {translations.hero.role[locale]}
          </p>
          <h1 className="text-4xl md:text-5xl font-light leading-tight tracking-tight">
            {translations.hero.title[locale]} <span className="text-black">{translations.hero.technology[locale]}</span> & <span className="text-black">{translations.hero.ai[locale]}</span>
          </h1>
          <p className="mt-4 text-lg text-black/50 max-w-xl">
            {translations.hero.subtitle[locale]}
          </p>
          <div className="mt-6">
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium hover:bg-black/80 transition-all">
              {translations.hero.cta[locale]}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section id="what" className="py-10 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-black/40 mb-6">{t("what", "title")[locale]}</p>
          <div className="flex flex-wrap gap-3">
            {Object.entries(translations.what.items).map(([key, vals], i) => (
              <span key={i} className="px-4 py-2 border border-black/10 text-sm">{vals[locale]}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-10 px-6 bg-black/3">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-black/40 mb-6">{t("about", "title")[locale]}</p>
          <div className="flex flex-wrap gap-10 items-start">
            <div>
              <p className="text-5xl font-light">25+</p>
              <p className="text-black/50 text-sm">{translations.about.years[locale]}</p>
            </div>
            <div className="flex-1 grid sm:grid-cols-2 gap-5 text-sm">
              <div>
                <p className="text-black/40 mb-1">{translations.about.entrepreneur[locale]}</p>
                <p>{translations.about.entrepreneurDesc[locale]}</p>
              </div>
              <div>
                <p className="text-black/40 mb-1">{translations.about.education[locale]}</p>
                <p>{translations.about.educationDesc[locale]}</p>
              </div>
              <div>
                <p className="text-black/40 mb-1">{translations.about.projects[locale]}</p>
                <p>{translations.about.projectsDesc[locale]}</p>
              </div>
              <div>
                <p className="text-black/40 mb-1">{translations.about.exit[locale]}</p>
                <p>{translations.about.exitDesc[locale]}</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex gap-6 text-sm">
            <a href="https://linkedin.com/in/matiaslaurenz" target="_blank" rel="noopener noreferrer" className="border-b border-black/20 hover:border-black transition-colors">LinkedIn →</a>
            <a href="https://centralpos.com" target="_blank" rel="noopener noreferrer" className="border-b border-black/20 hover:border-black transition-colors">Centralpos →</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-10 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-black/40 mb-6">{t("contact", "title")[locale]}</p>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-light mb-3">{translations.contact.subtitle[locale]}</h2>
              <p className="text-black/50 text-sm mb-4">{translations.contact.desc[locale]}</p>
              <a href="mailto:mlaurenz@gmail.com" className="text-sm border-b border-black/20 hover:border-black transition-colors">mlaurenz@gmail.com</a>
            </div>
            <div className="md:w-1/2 bg-black/3 p-5">
              {submitted ? (
                <div className="text-center py-4">
                  <p className="font-medium">{translations.contact.thanks[locale]}</p>
                  <p className="text-black/50 text-sm">{translations.contact.emailOpened[locale]}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-3 py-2 bg-white border border-black/10 focus:border-black focus:outline-none text-sm" placeholder={t("contact", "name")[locale]} />
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-3 py-2 bg-white border border-black/10 focus:border-black focus:outline-none text-sm" placeholder={t("contact", "email")[locale]} />
                  <textarea required rows={3} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-3 py-2 bg-white border border-black/10 focus:border-black focus:outline-none text-sm resize-none" placeholder={t("contact", "message")[locale]} />
                  <button type="submit" className="w-full py-2 bg-black text-white text-sm font-medium hover:bg-black/80 transition-colors">{translations.contact.send[locale]}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 px-6 border-t border-black/5">
        <div className="max-w-3xl mx-auto flex justify-between text-xs text-black/40">
          <p>{translations.footer.copyright[locale]}</p>
          <p>{translations.footer.role[locale]}</p>
        </div>
      </footer>
    </div>
  );
}
