"use client";

import Link from "next/link";
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
        <div className="max-w-5xl mx-auto px-8 py-5 flex justify-between items-center">
          <span className="text-lg font-semibold tracking-tight">ML</span>
          <div className="flex gap-8">
            <a href="#what" className="text-sm text-black/60 hover:text-black transition-colors">What I do</a>
            <a href="#about" className="text-sm text-black/60 hover:text-black transition-colors">About</a>
            <a href="#contact" className="text-sm text-black/60 hover:text-black transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-48 pb-32 px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase text-black/40 mb-6 animate-fade-in">
            Technology & AI Business Partner
          </p>
          <h1 className="text-6xl md:text-8xl font-light leading-[1.05] tracking-tight animate-slide-up">
            Building the future with <span className="text-black">technology</span> & <span className="text-black">AI</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-black/50 max-w-2xl leading-relaxed animate-slide-up" style={{animationDelay: "0.1s"}}>
            I help companies leverage technology and AI to build, improve and scale their businesses.
          </p>
          <div className="mt-12 animate-slide-up" style={{animationDelay: "0.2s"}}>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white text-sm font-medium hover:bg-black/80 transition-all duration-300"
            >
              Let&apos;s talk
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-8">
        <div className="border-t border-black/10"></div>
      </div>

      {/* What I do */}
      <section id="what" className="py-28 px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-black/40 mb-12">What I do</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Strategy", desc: "Define technology roadmaps aligned with business goals" },
              { title: "AI Implementation", desc: "Integrate AI solutions that drive real business value" },
              { title: "Automation", desc: "Streamline operations with intelligent automation" },
              { title: "Technology", desc: "Build scalable technical infrastructure" },
              { title: "Scaling", desc: "Grow your business with the right tech stack" },
              { title: "Product", desc: "Launch digital products users love" }
            ].map((item, i) => (
              <div key={i} className="group p-8 border border-black/5 hover:border-black/20 transition-all duration-500">
                <p className="text-3xl font-light mb-4">{item.title}</p>
                <p className="text-black/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-8">
        <div className="border-t border-black/10"></div>
      </div>

      {/* About */}
      <section id="about" className="py-28 px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-black/40 mb-12">About me</p>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-7xl font-light mb-6">25+</p>
              <p className="text-xl text-black/60">years in technology & business</p>
            </div>
            
            <div className="space-y-10">
              <div>
                <p className="text-sm text-black/40 mb-2">Entrepreneur</p>
                <p className="text-lg">Built and scaled companies in LATAM and US</p>
              </div>
              <div>
                <p className="text-sm text-black/40 mb-2">Education</p>
                <p className="text-lg">MBA — IAE Business School</p>
              </div>
              <div>
                <p className="text-sm text-black/40 mb-2">Selected Projects</p>
                <p className="text-lg">Fonselp · Routepags · Centralpos · Wingu</p>
              </div>
              <div>
                <p className="text-sm text-black/40 mb-2">Notable Exit</p>
                <p className="text-lg">Sold Centralpos to Prisma Medios de Pago</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex gap-8">
            <a href="https://linkedin.com/in/matiaslaurenz" target="_blank" rel="noopener noreferrer" className="text-sm border-b border-black/20 hover:border-black transition-colors pb-1">
              LinkedIn →
            </a>
            <a href="https://centralpos.com" target="_blank" rel="noopener noreferrer" className="text-sm border-b border-black/20 hover:border-black transition-colors pb-1">
              Centralpos →
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-8">
        <div className="border-t border-black/10"></div>
      </div>

      {/* Contact */}
      <section id="contact" className="py-28 px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-black/40 mb-12">Get in touch</p>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
                Let&apos;s build something <span className="italic">great</span> together
              </h2>
              <p className="text-lg text-black/50 leading-relaxed">
                Whether you&apos;re looking to transform your business with AI, need strategic technology guidance, or want to scale your operations — I&apos;d love to hear from you.
              </p>
              <div className="mt-8">
                <a href="mailto:mlaurenz@gmail.com" className="text-lg border-b border-black/20 hover:border-black transition-colors">
                  mlaurenz@gmail.com
                </a>
              </div>
            </div>
            
            <div className="bg-black/3 p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-8">
                  <svg className="w-16 h-16 mx-auto mb-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-lg font-medium">Thanks for reaching out!</p>
                  <p className="text-black/50 mt-2">Your email client should have opened.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black/60 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-black/10 focus:border-black focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black/60 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-black/10 focus:border-black focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black/60 mb-2">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-black/10 focus:border-black focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-black text-white font-medium hover:bg-black/80 transition-colors"
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
      <footer className="py-10 px-8 border-t border-black/5">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <p className="text-sm text-black/40">© 2026 Matías Laurenz</p>
          <p className="text-sm text-black/40">Technology & AI Business Partner</p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-slide-up {
          opacity: 0;
          animation: slide-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
