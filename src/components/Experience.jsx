import { Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const topicsLearned = [
    'Python Programming',
    'Generative AI Fundamentals',
    'Practical Learning Projects',
    'Model Concepts',
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Anchor for #internship link compatibility */}
      <span id="internship" className="absolute -top-24" aria-hidden="true" />

      {/* Background ambient lighting */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[radial-gradient(circle,rgba(255,47,120,0.12),rgba(90,11,40,0.15),transparent_70%)] blur-[110px]"
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Deep Burgundy Rounded Section Container */}
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-b from-[#2e0717]/80 via-[#18050e]/90 to-[#0c0509]/95 border border-white/10 p-6 sm:p-10 lg:p-12 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] relative overflow-hidden">
          
          {/* Subtle top specular line */}
          <div 
            className="pointer-events-none absolute top-0 left-6 sm:left-12 right-6 sm:right-12 h-px bg-gradient-to-r from-transparent via-[#FF8FB5]/25 to-transparent" 
            aria-hidden="true" 
          />

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 pb-10 sm:pb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#300615]/90 border border-[#FF2F78]/40 text-xs font-semibold uppercase tracking-widest text-[#FF8FB5] shadow-[0_0_15px_rgba(255,47,120,0.25)]">
              <Briefcase className="w-3.5 h-3.5 text-[#FF2F78]" />
              <span>INTERNSHIP</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-[1.15] sm:leading-[1.12]">
              Internship Experience
            </h2>

            <p className="text-xs sm:text-base text-[#B8B0B6] leading-relaxed">
              Practical learning and skill development in artificial intelligence.
            </p>
          </div>

          {/* Simple, Professional Internship Card */}
          <div className="rounded-3xl bg-gradient-to-b from-[#1c0815]/90 via-[#12060e]/95 to-[#0a0508]/95 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-5">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
              <div className="space-y-1">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#300615] text-[#FF8FB5] border border-[#FF2F78]/30">
                  TECHNICAL INTERNSHIP
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white pt-1">
                  Generative AI with Python Internship
                </h3>
              </div>
            </div>

            {/* Description as requested */}
            <h4 className="text-xl sm:text-2xl font-bold font-heading text-white pt-1">
                  Pixel Wind
                </h4>
            <p className="text-xs sm:text-base text-[#B8B0B6] leading-relaxed">
              Developed web applications using HTML, CSS, JavaScript, and Python, while gaining 
               practical knowledge of Generative AI technologies and concepts. 
               and Gained hands-on experience in API integration, project collaboration, debugging, and 
               source code management using Git and GitHub during software development activities.
            </p>

            {/* Topics Covered */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#777078] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF2F78]" />
                <span>Areas Explored</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {topicsLearned.map((topic) => (
                  <div key={topic} className="flex items-center gap-2 text-xs sm:text-sm text-[#B8B0B6]">
                    <CheckCircle2 className="w-4 h-4 text-[#FF4D8D] shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
