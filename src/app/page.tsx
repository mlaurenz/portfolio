import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-black/5">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-sm font-medium tracking-tight">ML</span>
          <a href="#contact" className="text-sm text-black/60 hover:text-black transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light leading-[1.1] tracking-tight">
            Technology & AI<br />
            Business Partner
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-black/60 max-w-2xl leading-relaxed">
            I help companies use technology and AI to build, improve and scale their businesses.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-black/10"></div>
      </div>

      {/* What I do */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-black/40 mb-8">What I do</p>
          <div className="flex flex-wrap gap-4 text-lg">
            <span className="px-4 py-2 border border-black/10">Strategy</span>
            <span className="px-4 py-2 border border-black/10">Technology</span>
            <span className="px-4 py-2 border border-black/10">AI</span>
            <span className="px-4 py-2 border border-black/10">Automation</span>
            <span className="px-4 py-2 border border-black/10">Implementation</span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-black/10"></div>
      </div>

      {/* Who I am */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-black/40 mb-8">Who I am</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-5xl font-light mb-4">25+</p>
              <p className="text-black/60">years in technology & business</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm text-black/40 mb-1">Entrepreneur</p>
                <p className="text-lg">Built and scaled companies in LATAM and US</p>
              </div>
              <div>
                <p className="text-sm text-black/40 mb-1">MBA — IAE Business School</p>
                <p className="text-lg">Administration</p>
              </div>
              <div>
                <p className="text-sm text-black/40 mb-1">Projects</p>
                <p className="text-lg">Fonselp · Routepags · Centralpos · Wingu</p>
              </div>
              <div>
                <p className="text-sm text-black/40 mb-1">Exit</p>
                <p className="text-lg">Sold Centralpos to Prisma Medios de Pago</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-6">
            <a href="https://linkedin.com/in/matiaslaurenz" target="_blank" rel="noopener noreferrer" className="text-sm border-b border-black/20 hover:border-black transition-colors">LinkedIn</a>
            <a href="https://centralpos.com" target="_blank" rel="noopener noreferrer" className="text-sm border-b border-black/20 hover:border-black transition-colors">Centralpos</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <a 
            href="mailto:mlaurenz@gmail.com?subject=Hola"
            className="text-2xl md:text-3xl font-light border-b border-black hover:text-black/60 transition-colors"
          >
            HABLEMOS →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6">
        <div className="max-w-4xl mx-auto text-sm text-black/40">
          <p>© 2026 Matías Laurenz</p>
        </div>
      </footer>
    </div>
  );
}
