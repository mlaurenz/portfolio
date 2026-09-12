"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Nuevo contacto desde portfolio: ${formData.name}`);
    const body = encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`);
    window.location.href = `mailto:mlaurenz@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-black/5">
        <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-lg font-semibold tracking-tight">Matías Laurenz</span>
          <div className="flex gap-6 text-sm">
            <a href="#what" className="text-black/60 hover:text-black transition-colors">What</a>
            <a href="#about" className="text-black/60 hover:text-black transition-colors">About</a>
            <a href="#contact" className="text-black/60 hover:text-black transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-black/40 mb-4">
            Technology & AI Business Partner
          </p>
          <h1 className="text-4xl md:text-5xl font-light leading-tight tracking-tight">
            Building the future with <span className="text-black">technology</span> & <span className="text-black">AI</span>
          </h1>
          <p className="mt-4 text-lg text-black/50 max-w-xl">
            I help companies leverage technology and AI to build, improve and scale their businesses.
          </p>
          <div className="mt-6">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium hover:bg-black/80 transition-all"
            >
              Let&apos;s talk
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section id="what" className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-black/40 mb-6">What I do</p>
          <div className="flex flex-wrap gap-3">
            {["Strategy", "AI Implementation", "Automation", "Technology", "Scaling", "Product"].map((item, i) => (
              <span key={i} className="px-4 py-2 border border-black/10 text-sm">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-12 px-6 bg-black/3">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-black/40 mb-6">About me</p>
          <div className="flex flex-wrap gap-12 items-start">
            <div>
              <p className="text-5xl font-light">25+</p>
              <p className="text-black/50 text-sm">years in tech & business</p>
            </div>
            <div className="flex-1 grid sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-black/40 mb-1">Entrepreneur</p>
                <p>Built & scaled companies in LATAM & US</p>
              </div>
              <div>
                <p className="text-black/40 mb-1">Education</p>
                <p>MBA — IAE Business School</p>
              </div>
              <div>
                <p className="text-black/40 mb-1">Projects</p>
                <p>Fonselp · Routepags · Centralpos · Wingu</p>
              </div>
              <div>
                <p className="text-black/40 mb-1">Exit</p>
                <p>Sold Centralpos to Prisma Medios de Pago</p>
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
      <section id="contact" className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-black/40 mb-6">Get in touch</p>
          
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-light mb-3">
                Let&apos;s build something <span className="italic">great</span> together
              </h2>
              <p className="text-black/50 text-sm mb-4">
                Transform your business with AI, strategic technology guidance, or scale your operations.
              </p>
              <a href="mailto:mlaurenz@gmail.com" className="text-sm border-b border-black/20 hover:border-black transition-colors">
                mlaurenz@gmail.com
              </a>
            </div>
            
            <div className="md:w-1/2 bg-black/3 p-6">
              {submitted ? (
                <div className="text-center py-4">
                  <p className="font-medium">Thanks for reaching out!</p>
                  <p className="text-black/50 text-sm">Your email client should have opened.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 bg-white border border-black/10 focus:border-black focus:outline-none text-sm"
                    placeholder="Your name"
                  />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 bg-white border border-black/10 focus:border-black focus:outline-none text-sm"
                    placeholder="your@email.com"
                  />
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-3 py-2 bg-white border border-black/10 focus:border-black focus:outline-none text-sm resize-none"
                    placeholder="Tell me about your project..."
                  />
                  <button
                    type="submit"
                    className="w-full py-2 bg-black text-white text-sm font-medium hover:bg-black/80 transition-colors"
                  >
                    Send message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-black/5">
        <div className="max-w-3xl mx-auto flex justify-between text-xs text-black/40">
          <p>© 2026 Matías Laurenz</p>
          <p>Technology & AI Business Partner</p>
        </div>
      </footer>
    </div>
  );
}
