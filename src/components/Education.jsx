import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

export default function Education() {
  const educationItems = [
    {
      period: '2027',
      degree: 'B.Tech – Artificial Intelligence & Data Science',
      institution: 'Satya Institute of Technology and Management',
      score: 'CGPA: 8.2',
      scoreLabel: 'Academic Score',
      description: 'Undergraduate engineering curriculum emphasizing machine learning foundations, algorithms, database systems, and modern full-stack web architectures.',
      badge: 'Expected 2027',
    },
    {
      period: 'Intermediate',
      degree: 'Intermediate (MPC)',
      institution: 'PSN College, Balijupeta',
      score: '81.20%',
      scoreLabel: 'Final Grade',
      description: 'Higher secondary coursework focused on Mathematics, Physics, and Chemistry, developing quantitative problem-solving and analytical reasoning.',
      badge: 'Class XII',
    },
    {
      period: '10th',
      degree: 'Secondary School Certificate (SSC)',
      institution: 'ZP High School',
      score: '78.33%',
      scoreLabel: 'Final Grade',
      description: 'Secondary education foundation with distinction in science and mathematics, fostering an early passion for technology and computing.',
      badge: 'Class X',
    },
  ];

  return (
    <section id="education" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[radial-gradient(circle,rgba(255,47,120,0.12),rgba(90,11,40,0.15),transparent_70%)] blur-[110px]"
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Deep Burgundy Rounded Section Container */}
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-b from-[#2e0717]/80 via-[#18050e]/90 to-[#0c0509]/95 border border-white/10 p-4 sm:p-10 lg:p-14 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] relative overflow-hidden">
          
          {/* Subtle top specular line */}
          <div 
            className="pointer-events-none absolute top-0 left-6 sm:left-12 right-6 sm:right-12 h-px bg-gradient-to-r from-transparent via-[#FF8FB5]/25 to-transparent" 
            aria-hidden="true" 
          />

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 pb-10 sm:pb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#300615]/90 border border-[#FF2F78]/40 text-xs font-semibold uppercase tracking-widest text-[#FF8FB5] shadow-[0_0_15px_rgba(255,47,120,0.25)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF2F78] animate-ping" />
              <span>MY JOURNEY</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-[1.15] sm:leading-[1.12]">
              Education
            </h2>

            <p className="text-xs sm:text-base text-[#B8B0B6] leading-relaxed">
              Academic milestones and educational background laying the foundation for engineering and software development.
            </p>
          </div>

          {/* Modern Vertical Timeline (Single column responsive) */}
          <div className="relative pl-5 sm:pl-10 space-y-6 sm:space-y-10">
            
            {/* Thin pink timeline track line */}
            <div 
              className="absolute left-[5px] sm:left-[11px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#FF2F78] via-[#FF4D8D]/60 to-[#5A0B28]/20"
              aria-hidden="true"
            />

            {educationItems.map((item, idx) => (
              <div
                key={item.degree + item.period}
                className="relative group"
              >
                {/* Glowing Pink Timeline Dot */}
                <div 
                  className="absolute -left-[20px] sm:-left-[37px] top-5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#FF2F78] border-2 border-[#18050e] shadow-[0_0_15px_rgba(255,47,120,0.9)] transition-transform duration-300 group-hover:scale-125 z-10"
                  aria-hidden="true"
                />

                {/* Glass Card */}
                <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#1c0815]/85 via-[#12060e]/90 to-[#0a0508]/95 border border-white/10 group-hover:border-[#FF2F78]/50 p-4 sm:p-7 backdrop-blur-xl transition-all duration-300 ease-out group-hover:-translate-y-1 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.7)] group-hover:shadow-[0_20px_40px_-5px_rgba(255,47,120,0.2)]">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#300615] text-[#FF8FB5] border border-[#FF2F78]/30">
                          {item.period}
                        </span>
                        <span className="text-xs text-[#777078] font-mono">
                          {item.badge}
                        </span>
                      </div>
                      
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-[#FF8FB5] transition-colors">
                        {item.degree}
                      </h3>
                      
                      <p className="text-xs sm:text-sm font-medium text-[#FF4D8D]">
                        {item.institution}
                      </p>
                    </div>

                    {/* Score Pill */}
                    <div className="flex sm:flex-col items-start sm:items-end justify-between sm:justify-center gap-1 shrink-0 pt-2 sm:pt-0">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#300615] text-white border border-[#FF2F78]/40 shadow-[0_0_12px_rgba(255,47,120,0.25)]">
                        {item.score}
                      </span>
                      <span className="text-[10px] text-[#777078] font-mono uppercase tracking-wider">
                        {item.scoreLabel}
                      </span>
                    </div>
                  </div>

                  {/* Card Description */}
                  <p className="text-xs sm:text-sm text-[#B8B0B6] leading-relaxed pt-4">
                    {item.description}
                  </p>

                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
