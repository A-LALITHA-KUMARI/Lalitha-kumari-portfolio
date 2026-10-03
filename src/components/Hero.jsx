import { ArrowDown, Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero({ profile, onDownloadResume }) {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#08080B]"
    >
      {/* Background ambient lighting */}
      <div 
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[90vw] sm:w-[950px] h-[350px] sm:h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(255,47,120,0.18),rgba(90,11,40,0.14),transparent_70%)] blur-[90px] sm:blur-[110px]"
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] sm:w-[650px] h-[400px] sm:h-[500px] bg-[radial-gradient(circle,rgba(90,11,40,0.24),transparent_65%)] blur-[80px]"
        aria-hidden="true" 
      />

      {/* Subtle fine grid texture for architectural depth */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)] opacity-35"
        aria-hidden="true"
      />

      {/* Main Centered Hero Container */}
      <div className="w-full max-w-6xl mx-auto relative z-10 my-auto">
        <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-b from-[#2e0717]/75 via-[#18050e]/90 to-[#0c0509]/95 border border-white/10 p-6 sm:p-10 lg:p-14 backdrop-blur-2xl shadow-[0_25px_65px_-15px_rgba(0,0,0,0.85)] overflow-hidden">
          
          {/* Subtle top edge specular highlight */}
          <div 
            className="pointer-events-none absolute top-0 left-8 sm:left-12 right-8 sm:right-12 h-px bg-gradient-to-r from-transparent via-[#FF8FB5]/30 to-transparent" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center">
            
            {/* LEFT SIDE: Heading & Introduction */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
              
              {/* 1. Small Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#300615]/90 border border-[#FF2F78]/40 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#FF8FB5] shadow-[0_0_15px_rgba(255,47,120,0.25)] select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF2F78] animate-ping" />
                <span>AI & DATA SCIENCE STUDENT</span>
              </div>

              {/* 2. Main Heading */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.15] sm:leading-[1.12]">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-white via-[#FFF0F5] to-[#FF8FB5] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,77,141,0.35)]">
                    Akkapolu Lalitha Kumari
                  </span>
                  .
                </h1>

                {/* Subtitle */}
                <h2 className="text-base sm:text-xl lg:text-2xl font-heading font-medium text-[#B8B0B6] leading-snug">
                  <span>AI & Data Science Student </span>
                  <span className="text-[#FF8FB5] font-semibold block sm:inline">
                    & Aspiring Full-Stack Developer
                  </span>
                </h2>
              </div>

              {/* 3. Description */}
              <p className="text-xs sm:text-base text-[#B8B0B6] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                I'm a 4th-year Artificial Intelligence & Data Science student passionate about building practical web applications, exploring AI technologies, and continuously improving my development skills.
              </p>

              {/* 4. Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
                <a
                  href="#projects"
                  onClick={handleScrollToProjects}
                  className="w-full sm:w-auto min-h-[44px] px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#FF2F78] to-[#FF4D8D] hover:from-[#FF4D8D] hover:to-[#FF8FB5] shadow-[0_0_25px_rgba(255,47,120,0.45)] hover:shadow-[0_0_35px_rgba(255,47,120,0.7)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>View My Work</span>
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                </a>

                <button
                  onClick={onDownloadResume}
                  className="w-full sm:w-auto min-h-[44px] px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-[#FF2F78]/50 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(255,47,120,0.2)]"
                >
                  <Download className="w-4 h-4 text-[#FF8FB5]" />
                  <span>Download Resume</span>
                </button>
              </div>

              {/* 5. Social Icons */}
              <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href={profile?.github || 'https://github.com/A-LALITHA-KUMARI'}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-white/[0.04] hover:bg-[#300615] border border-white/10 hover:border-[#FF2F78]/50 flex items-center justify-center text-[#B8B0B6] hover:text-white transition-all shadow-sm hover:shadow-[0_0_15px_rgba(255,47,120,0.3)] hover:scale-105"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={profile?.linkedin || 'https://www.linkedin.com/in/a-lalitha-179889321'}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-white/[0.04] hover:bg-[#300615] border border-white/10 hover:border-[#FF2F78]/50 flex items-center justify-center text-[#B8B0B6] hover:text-white transition-all shadow-sm hover:shadow-[0_0_15px_rgba(255,47,120,0.3)] hover:scale-105"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-[#FF8FB5]" />
                </a>

                <a
                  href={`mailto:${profile?.email || 'akkapolulalitha@gmail.com'}`}
                  className="w-11 h-11 rounded-full bg-white/[0.04] hover:bg-[#300615] border border-white/10 hover:border-[#FF2F78]/50 flex items-center justify-center text-[#B8B0B6] hover:text-white transition-all shadow-sm hover:shadow-[0_0_15px_rgba(255,47,120,0.3)] hover:scale-105"
                  title={`Email ${profile?.email || 'akkapolulalitha@gmail.com'}`}
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4 text-[#FF4D8D]" />
                </a>
              </div>

            </div>

            {/* RIGHT SIDE: Clean & Simple Circular Profile Visual */}
            <div className="lg:col-span-5 flex justify-center relative pt-4 lg:pt-0">
              
              {/* Soft pink glow behind the profile visual */}
              <div 
                className="absolute inset-0 max-w-[280px] sm:max-w-[320px] max-h-[380px] sm:max-h-[420px] m-auto bg-gradient-to-tr from-[#5A0B28] via-[#FF2F78] to-[#FF8FB5] rounded-3xl opacity-35 blur-3xl pointer-events-none"
                aria-hidden="true" 
              />

              <div className="relative w-full max-w-[270px] sm:max-w-[320px]">
                
                {/* Abstract Maroon Animation Canvas Frame */}
                <div className="relative rounded-3xl p-3 bg-[#100A0F]/85 backdrop-blur-xl border border-[#FF2F78]/35 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.85),0_0_30px_-5px_rgba(255,47,120,0.25)]">
                  
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-[#1c0815] via-[#10060e] to-[#08080B] border border-white/10 flex items-center justify-center select-none">
                    
                    {/* 1. Multiple blurred burgundy/maroon glowing layers */}
                    <div 
                      className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(90,11,40,0.45)_0%,rgba(48,6,21,0.3)_50%,transparent_75%)] blur-2xl"
                      aria-hidden="true" 
                    />
                    <div 
                      className="absolute top-1/4 left-1/4 w-36 h-36 rounded-full bg-[#FF2F78]/15 blur-2xl"
                      aria-hidden="true" 
                    />
                    <div 
                      className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-[#5A0B28]/35 blur-xl"
                      aria-hidden="true" 
                    />

                    {/* 2. Slow-rotating outer geometric dashed ring */}
                    <div
                      className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-dashed border-[#FF2F78]/35 animate-spin"
                      style={{ animationDuration: '28s' }}
                      aria-hidden="true"
                    />

                    {/* 3. Slow-rotating concentric inner ring (reverse direction) */}
                    <div
                      className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-[#FF8FB5]/20 animate-spin"
                      style={{ animationDuration: '36s', animationDirection: 'reverse' }}
                      aria-hidden="true"
                    />

                    {/* 4. Fine curved elliptical gradient vector arc */}
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
                      viewBox="0 0 240 320"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M 30 180 C 60 70, 180 70, 210 180 C 230 250, 170 290, 120 270"
                        stroke="url(#maroonOrbitGrad)"
                        strokeWidth="1.2"
                      />
                      <defs>
                        <linearGradient id="maroonOrbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FF2F78" stopOpacity="0.8" />
                          <stop offset="60%" stopColor="#5A0B28" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#08080B" stopOpacity="0.1" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* 5. Main Profile Circle / Circular Profile Visual */}
                    <div
                      className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-[#300615] via-[#5A0B28] to-[#FF2F78]/60 p-[2px] shadow-[0_0_40px_rgba(255,47,120,0.4)] animate-pulse"
                      style={{ animationDuration: '6s' }}
                    >
                      {/* Inner glass core */}
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1c0815]/95 via-[#10060e]/95 to-[#08080B]/95 flex flex-col items-center justify-center backdrop-blur-md border border-white/10 relative overflow-hidden">
                        
                        {/* Ambient core glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,47,120,0.3)_0%,transparent_70%)]" />
                        
                        {/* Center glowing indicator node */}
                        <div className="relative flex items-center justify-center mb-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FF2F78] shadow-[0_0_12px_#FF2F78] animate-ping" />
                          <span className="absolute w-2 h-2 rounded-full bg-white" />
                        </div>
                        
                        <span className="font-heading font-extrabold text-base sm:text-lg tracking-wider text-white">
                          LK
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#FF8FB5] uppercase mt-0.5">
                          AI & DS
                        </span>
                      </div>
                    </div>

                    {/* 6. Subtle floating particles / twinkling dots */}
                    <div
                      className="absolute top-10 right-10 w-1.5 h-1.5 rounded-full bg-[#FF8FB5] opacity-75 shadow-[0_0_8px_#FF8FB5] animate-pulse"
                      style={{ animationDuration: '3s' }}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute bottom-16 left-8 w-2 h-2 rounded-full bg-[#FF2F78] opacity-60 shadow-[0_0_10px_#FF2F78] animate-pulse"
                      style={{ animationDuration: '4.5s' }}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute top-24 left-10 w-1 h-1 rounded-full bg-white opacity-80"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute bottom-24 right-12 w-1.5 h-1.5 rounded-full bg-[#FF4D8D] opacity-65"
                      aria-hidden="true"
                    />

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* SCROLL TO EXPLORE */}
          <div className="pt-8 sm:pt-14 flex flex-col items-center justify-center text-center">
            <a
              href="#about"
              onClick={handleScrollToAbout}
              className="group inline-flex flex-col items-center gap-1.5 min-h-[44px] justify-center text-xs font-mono tracking-widest text-[#B8B0B6] hover:text-[#FF8FB5] transition-colors focus:outline-none"
            >
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#777078] group-hover:text-[#B8B0B6] transition-colors">
                SCROLL TO EXPLORE
              </span>
              <ChevronDown className="w-4 h-4 text-[#FF4D8D] animate-bounce" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
