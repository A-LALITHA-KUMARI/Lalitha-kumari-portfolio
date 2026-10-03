export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#08080B] relative z-10 text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Identity & Subtitle */}
        <div className="space-y-1">
          <h3 className="font-heading font-extrabold text-lg text-white">
            Lalitha Kumari
          </h3>
          <p className="text-xs sm:text-sm text-[#B8B0B6]">
            AI & Data Science Student | Aspiring Full-Stack Developer
          </p>
        </div>

        {/* Links: GitHub, LinkedIn, Email */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-xs font-mono text-[#B8B0B6]">
          <a
            href="#"
            className="min-h-[44px] px-3 py-2 inline-flex items-center justify-center hover:text-[#FF8FB5] transition-colors"
          >
            GitHub
          </a>
          <span className="text-white/20 hidden sm:inline">·</span>
          <a
            href="#"
            className="min-h-[44px] px-3 py-2 inline-flex items-center justify-center hover:text-[#FF8FB5] transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-white/20 hidden sm:inline">·</span>
          <a
            href="#contact"
            className="min-h-[44px] px-3 py-2 inline-flex items-center justify-center hover:text-[#FF8FB5] transition-colors"
          >
            Email
          </a>
        </div>

        {/* Copyright & Built with React */}
        <div className="pt-4 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-[#777078]">
          <span>© 2026 Lalitha Kumari</span>
          <span className="hidden sm:inline text-white/20">·</span>
          <span className="text-[#B8B0B6]">Built with React</span>
        </div>

      </div>
    </footer>
  );
}
