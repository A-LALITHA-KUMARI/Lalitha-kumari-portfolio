import { Code2, Globe, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const skillCards = [
    {
      category: 'Programming',
      icon: Code2,
      tag: 'LANGUAGES',
      skills: ['C', 'Java', 'Python'],
      description: 'Foundational programming languages used for algorithmic problem solving and software logic.',
    },
    {
      category: 'Web Development',
      icon: Globe,
      tag: 'FRONTEND & WEB',
      skills: ['HTML', 'CSS', 'JavaScript'],
      description: 'Core web technologies for building responsive, structured, and interactive user interfaces.',
    },
    {
      category: 'Tools & Workflow',
      icon: Wrench,
      tag: 'DEVELOPER TOOLS',
      skills: ['Git', 'GitHub', 'VS Code'],
      description: 'Modern source version control and code editing environment for developer productivity.',
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(circle,rgba(255,47,120,0.12),rgba(90,11,40,0.14),transparent_70%)] blur-[100px]"
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Deep Burgundy Rounded Section Container */}
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-b from-[#2e0717]/80 via-[#18050e]/90 to-[#0c0509]/95 border border-white/10 p-5 sm:p-10 lg:p-12 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] relative overflow-hidden">
          
          {/* Subtle top specular line */}
          <div 
            className="pointer-events-none absolute top-0 left-6 sm:left-12 right-6 sm:right-12 h-px bg-gradient-to-r from-transparent via-[#FF8FB5]/25 to-transparent" 
            aria-hidden="true" 
          />

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 pb-12 sm:pb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#300615]/90 border border-[#FF2F78]/40 text-xs font-semibold uppercase tracking-widest text-[#FF8FB5] shadow-[0_0_15px_rgba(255,47,120,0.25)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF2F78] animate-ping" />
              <span>TECHNICAL SKILLS</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-[1.15] sm:leading-[1.12]">
              What I Work With
            </h2>

            <p className="text-xs sm:text-base text-[#B8B0B6] leading-relaxed">
              Core programming languages, web technologies, and developer tooling.
            </p>
          </div>

          {/* Three Clean Balanced Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.category}
                  className="group relative rounded-3xl bg-gradient-to-b from-[#1c0815]/90 via-[#12060e]/95 to-[#0a0508]/95 border border-white/10 hover:border-[#FF2F78]/50 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1.5 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_40px_-5px_rgba(255,47,120,0.22)] flex flex-col justify-between"
                >
                  {/* Subtle top edge specular reflection */}
                  <div 
                    className="pointer-events-none absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#FF8FB5]/20 to-transparent" 
                    aria-hidden="true" 
                  />

                  <div className="space-y-4">
                    {/* Icon & Category Pill */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#300615]/80 border border-[#FF2F78]/30 flex items-center justify-center text-[#FF4D8D] group-hover:text-white group-hover:bg-[#5A0B28]/70 group-hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(255,47,120,0.2)]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono tracking-wider text-[#FF8FB5] bg-[#300615]/60 border border-[#FF2F78]/25 px-2.5 py-1 rounded-full uppercase">
                        {card.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-lg font-bold font-heading text-white group-hover:text-[#FF8FB5] transition-colors">
                        {card.category}
                      </h3>
                      <p className="text-xs text-[#B8B0B6] mt-1.5 leading-relaxed font-normal">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Pills List */}
                  <div className="pt-5 mt-4 border-t border-white/[0.08] space-y-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#777078] flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#FF2F78]" />
                      <span>Proficiencies</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {card.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-[#100A0F] text-white border border-white/10 group-hover:border-[#FF2F78]/25 transition-colors"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4D8D]" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
