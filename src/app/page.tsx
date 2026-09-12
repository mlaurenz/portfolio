import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-black/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-sm font-medium tracking-tight">ML</span>
          <div className="flex gap-8 text-sm">
            <a href="#about" className="text-black/60 hover:text-black transition-colors">About</a>
            <a href="#partnership" className="text-black/60 hover:text-black transition-colors">Partnership</a>
            <a href="#cta" className="text-black/60 hover:text-black transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="about" className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-black/40 mb-6">Matías Laurenz</p>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.1] tracking-tight max-w-3xl">
            Technology & AI Business Partner para empresas que quieren crecer.
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-black/60 max-w-2xl leading-relaxed">
            25+ años construyendo empresas. Ahora utilizo esa experiencia + tecnología + AI para hacer que las cosas sucedan en tu negocio.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-black/10"></div>
      </div>

      {/* Partnership */}
      <section id="partnership" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left: What it is */}
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-black/40 mb-6">01 / El Partnership</p>
              <h2 className="text-3xl md:text-4xl font-light leading-tight mb-6">
                No vendo horas.<br />
                Vendo resultados.
              </h2>
              <p className="text-lg text-black/60 leading-relaxed">
                Un partnership mensual donde combino experiencia empresarial, conocimiento tecnológico y AI para identificar oportunidades, automatizar procesos y convertir problemas en soluciones concretas.
              </p>
            </div>

            {/* Right: What you get */}
            <div className="space-y-8">
              <div className="border-l-2 border-black pl-6">
                <p className="text-xs font-medium tracking-widest uppercase text-black/40 mb-2">Estrategia</p>
                <p className="text-lg">Identificar dónde la tecnología puede multiplicar el impacto de tu negocio.</p>
              </div>
              <div className="border-l-2 border-black pl-6">
                <p className="text-xs font-medium tracking-widest uppercase text-black/40 mb-2">Implementación</p>
                <p className="text-lg">No solo ideas: ejecutar. Herramientas, AI, automatización, agentes.</p>
              </div>
              <div className="border-l-2 border-black pl-6">
                <p className="text-xs font-medium tracking-widest uppercase text-black/40 mb-2">Conexión</p>
                <p className="text-lg">Acceso a mi red. Gente, oportunidades, recursos.</p>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="mt-20 p-8 md:p-12 bg-black text-white">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-white/40 mb-4">Investment</p>
                <p className="text-4xl md:text-5xl font-light">$750<span className="text-xl text-white/60">/month</span></p>
              </div>
              <div className="text-white/60 text-sm max-w-md">
                <p>Dedicación directa + herramientas + AI + implementación. No vendo mi tiempo; lo multiplico con tecnología.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-black/10"></div>
      </div>

      {/* Credibility */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-black/40 mb-12">02 / Trayectoria</p>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Experience */}
            <div>
              <p className="text-6xl font-light text-black/10 mb-4">25+</p>
              <p className="text-lg font-medium">años en tecnología y negocios</p>
              <p className="text-black/50 mt-2">Emprendí, construí, vendí, invertí.</p>
            </div>

            {/* Companies */}
            <div>
              <p className="text-6xl font-light text-black/10 mb-4">4</p>
              <p className="text-lg font-medium">empresas construidas</p>
              <p className="text-black/50 mt-2">Fonselp, Routepags, Centralpos, Wingu</p>
            </div>

            {/* Exit */}
            <div>
              <p className="text-6xl font-light text-black/10 mb-4">1</p>
              <p className="text-lg font-medium">exit a Prisma Medios de Pago</p>
              <p className="text-black/50 mt-2">Centralpos.com, el concentrador de débitos.</p>
            </div>
          </div>

          {/* Context */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="text-black/60">
              <p className="mb-4">MBA — IAE Business School</p>
              <p>Administración de Empresas</p>
            </div>
            <div className="text-black/60">
              <p className="mb-4">Mentor — IDEX.LA</p>
              <p>Instituto para el Desarrollo Exponencial en Latinoamérica</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-24 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-medium tracking-widest uppercase text-white/40 mb-8">03 / Hablemos</p>
          <h2 className="text-4xl md:text-6xl font-light mb-8">
            ¿Querés tener un partner<br />para hacer crecer tu negocio?
          </h2>
          <a 
            href="mailto:mlaurenz@gmail.com?subject=Partnership"
            className="inline-block px-10 py-4 bg-white text-black text-lg font-medium hover:bg-white/90 transition-colors"
          >
            LET&apos;S TALK
          </a>
          <p className="mt-8 text-white/40 text-sm">
            mlaurenz@gmail.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-black/40">
          <p>© 2026 Matías Laurenz</p>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/matiaslaurenz" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
            <a href="https://github.com/mlaurenz" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
