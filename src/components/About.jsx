import { User, Sparkles, GraduationCap, Target, Code2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Ambient pink glow */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[radial-gradient(circle,rgba(255,47,120,0.12),transparent_70%)] blur-3xl"
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Deep Burgundy Rounded Section Container */}
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-b from-[#2e0717]/80 via-[#18050e]/90 to-[#0c0509]/95 border border-white/10 p-6 sm:p-10 lg:p-12 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] relative overflow-hidden">
          
          {/* Subtle top specular line */}
          <div 
            className="pointer-events-none absolute top-0 left-6 sm:left-12 right-6 sm:right-12 h-px bg-gradient-to-r from-transparent via-[#FF8FB5]/25 to-transparent" 
            aria-hidden="true" 
          />

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 pb-8 sm:pb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#300615]/90 border border-[#FF2F78]/40 text-xs font-semibold uppercase tracking-widest text-[#FF8FB5] shadow-[0_0_15px_rgba(255,47,120,0.25)]">
              <User className="w-3.5 h-3.5 text-[#FF2F78]" />
              <span>ABOUT ME</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-[1.15] sm:leading-[1.12]">
              Background
            </h2>
            <p className="text-xs sm:text-base text-[#B8B0B6] leading-relaxed">
              An overview of my academic background, technical interests, and career aspirations.
            </p>
          </div>

          {/* Focused Content Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1c0815]/90 via-[#12060e]/95 to-[#0a0508]/95 border border-white/10 backdrop-blur-xl space-y-6 shadow-xl relative overflow-hidden">
            <div className="space-y-4 text-xs sm:text-base text-[#B8B0B6] leading-relaxed">
              <p>
                I am <span className="text-white font-semibold"> Akkapolu Lalitha Kumari</span>, a 4th-year B.Tech undergraduate specializing in <span className="text-[#FF8FB5] font-semibold">Artificial Intelligence & Data Science</span>.
              </p>
              <p>
                Throughout my academic journey, I have developed a strong interest in understanding AI principles, exploring data science concepts, and applying them in <span className="text-white font-semibold">Full-Stack Web Development</span>. I enjoy turning programming concepts into interactive, functional web experiences.
              </p>
              <p>
                Currently, I am actively building practical projects, strengthening my problem-solving abilities, and refining my development skills across modern frontend and backend technologies.
              </p>
              <p>
                My primary career goal is to transition into the <span className="text-white font-semibold">IT and software development industry</span> as an entry-level engineer, where I can contribute to real-world applications and grow continuously as a developer.
              </p>
            </div>

            {/* Clean Key Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                <GraduationCap className="w-5 h-5 text-[#FF2F78] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Education</div>
                  <div className="text-xs text-[#B8B0B6]">4th-Year B.Tech (AI & Data Science)</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                <Code2 className="w-5 h-5 text-[#FF4D8D] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Focus Areas</div>
                  <div className="text-xs text-[#B8B0B6]">AI, Data Science & Full-Stack Web</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                <Target className="w-5 h-5 text-[#FF8FB5] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Career Goal</div>
                  <div className="text-xs text-[#B8B0B6]">Software / IT Development Roles</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
