import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-black text-white selection:bg-gold-500">
      <header className="fixed top-0 w-full p-6 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/10 z-50">
        <h1 className="text-2xl font-bold tracking-widest gold-gradient">Eden Square</h1>
        <nav className="space-x-8 hidden md:block uppercase text-sm tracking-widest">
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Experience</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Cuisine</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Hospitality</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Inquiry</a>
        </nav>
      </header>

      <main className="flex flex-col items-center text-center space-y-12 mt-20">
        <div className="relative w-48 h-48 mb-8 animate-pulse">
           {/* Placeholder for a high-end logo */}
           <div className="absolute inset-0 border-2 border-[#D4AF37] rotate-45 flex items-center justify-center">
              <span className="text-4xl font-mono text-[#D4AF37] -rotate-45">ES</span>
           </div>
        </div>

        <div className="space-y-4 max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-bold gold-gradient leading-tight">
            The Pinnacle of <br /> Digital Hospitality
          </h2>
          <p className="text-lg md:text-xl text-white/60 font-light tracking-wide leading-relaxed">
            Welcome to the new Eden Square. A premium, high-performance ecosystem designed for the most discerning hospitality operations.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <button className="gold-button text-lg px-12 py-4">
            Begin Journey
          </button>
          <button className="border border-white/20 hover:bg-white/5 transition-colors px-12 py-4 rounded-sm tracking-widest uppercase text-sm">
            Our Legacy
          </button>
        </div>
      </main>

      <footer className="mt-24 p-8 border-t border-white/10 w-full text-center text-white/40 text-xs tracking-widest uppercase">
        © 2026 Eden Square. Managed by Project Phoenix.
      </footer>
    </div>
  );
}
