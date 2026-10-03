import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'INTERNSHIP', href: '#experience' },
    { label: 'CERTIFICATIONS', href: '#certifications' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-3 sm:top-4 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div
          className={`flex items-center justify-between px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-[#100A0F]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.85)]'
              : 'bg-[#100A0F]/70 backdrop-blur-md border border-white/[0.08]'
          }`}
        >
          {/* Left: LK Circular Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2 group focus:outline-none min-h-[44px] min-w-[44px]"
            aria-label="Lalitha Kumari Home"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#5A0B28] via-[#FF2F78] to-[#FF8FB5] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(255,47,120,0.4)]">
              <div className="w-full h-full rounded-full bg-[#08080B] flex items-center justify-center">
                <span className="font-heading font-extrabold text-xs tracking-tighter text-white group-hover:text-[#FF8FB5] transition-colors">
                  LK
                </span>
              </div>
            </div>
            <span className="font-heading font-bold text-sm tracking-tight text-white group-hover:text-[#FF8FB5] transition-colors hidden min-[400px]:inline">
              Lalitha kumari<span className="text-[#FF2F78]">.</span>
            </span>
          </a>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId || 
                (sectionId === 'experience' && activeSection === 'internship') || 
                (!activeSection && item.href === '#home');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`px-2.5 xl:px-3 py-1.5 rounded-full text-[11px] xl:text-xs font-mono tracking-wider transition-all duration-200 min-h-[36px] flex items-center ${
                    isActive
                      ? 'text-white bg-[#300615] border border-[#FF2F78]/50 shadow-[0_0_14px_rgba(255,47,120,0.35)]'
                      : 'text-[#B8B0B6] hover:text-white hover:bg-white/[0.05] border border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right Action: Resume Button & Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 min-h-[40px] text-xs font-semibold rounded-full text-white bg-gradient-to-r from-[#FF2F78] to-[#FF4D8D] hover:from-[#FF4D8D] hover:to-[#FF8FB5] shadow-[0_0_18px_rgba(255,47,120,0.45)] hover:shadow-[0_0_24px_rgba(255,47,120,0.7)] transition-all duration-200 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-11 h-11 rounded-full bg-white/5 text-[#B8B0B6] hover:text-white border border-white/10 flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF8FB5]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dark Glassmorphism Navigation Drawer */}
      <div
        className={`lg:hidden fixed inset-x-3 sm:inset-x-6 top-[68px] transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto visible'
            : 'opacity-0 -translate-y-4 pointer-events-none invisible'
        }`}
      >
        <div className="bg-[#100A0F]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] max-w-5xl mx-auto space-y-2">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] px-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#777078]">
              NAVIGATION MENU
            </span>
            <span className="w-2 h-2 rounded-full bg-[#FF2F78] animate-ping" />
          </div>

          <div className="grid grid-cols-1 gap-1 pt-1 max-h-[60vh] overflow-y-auto">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId || 
                (sectionId === 'experience' && activeSection === 'internship') || 
                (!activeSection && item.href === '#home');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`min-h-[44px] px-4 py-3 rounded-2xl text-xs font-mono uppercase tracking-widest font-semibold transition-all flex items-center justify-between ${
                    isActive
                      ? 'text-white bg-[#300615] border border-[#FF2F78]/50 shadow-[0_0_15px_rgba(255,47,120,0.25)]'
                      : 'text-[#B8B0B6] hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF2F78]" />}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm -z-10 lg:hidden transition-opacity duration-300"
          aria-hidden="true"
        />
      )}
    </nav>
  );
}
