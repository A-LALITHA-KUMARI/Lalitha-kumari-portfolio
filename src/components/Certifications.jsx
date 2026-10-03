import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  const certificationsList = [
    {
      id: 'nptel-java',
      title: 'Programming in Java',
      organization: 'NPTEL',
      description: 'Comprehensive study of object-oriented programming concepts, Java standard library, exception handling, and multi-threading.',
      badge: 'Certified',
      linkPlaceholder: '[ADD CERTIFICATE LINK]',
    },
    {
      id: 'scaler-python',
      title: 'Python Programming',
      organization: 'Scaler',
      description: 'Hands-on training in Python syntax, core data structures, functional programming, and practical problem solving.',
      badge: 'Certified',
      linkPlaceholder: '[ADD CERTIFICATE LINK]',
    },
    {
      id: 'hp-ai-beginners',
      title: 'AI for Beginners',
      organization: 'HP Life',
      description: 'Foundational overview of artificial intelligence concepts, machine learning basics, and real-world AI applications.',
      badge: 'Certified',
      linkPlaceholder: '[ADD CERTIFICATE LINK]',
    },
  ];

  return (
    <section id="certifications" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[radial-gradient(circle,rgba(255,47,120,0.12),rgba(90,11,40,0.15),transparent_70%)] blur-[110px]"
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
              <span>CERTIFICATIONS</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-[1.15] sm:leading-[1.12]">
             Certifications
            </h2>

            <p className="text-xs sm:text-base text-[#B8B0B6] leading-relaxed">
              Recognized technical credentials and certifications earned through coursework and independent learning.
            </p>
          </div>

          {/* Three Premium Certificate Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {certificationsList.map((cert) => (
              <div
                key={cert.id}
                className="group relative rounded-3xl bg-gradient-to-b from-[#1c0815]/90 via-[#12060e]/95 to-[#0a0508]/95 border border-white/10 hover:border-[#FF2F78]/50 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1.5 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_45px_-5px_rgba(255,47,120,0.2)] flex flex-col justify-between"
              >
                {/* Subtle top edge specular reflection */}
                <div 
                  className="pointer-events-none absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#FF8FB5]/20 to-transparent" 
                  aria-hidden="true" 
                />

                <div className="space-y-4">
                  {/* Top Badge & Award Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#300615]/80 border border-[#FF2F78]/30 flex items-center justify-center text-[#FF4D8D] group-hover:text-white group-hover:bg-[#5A0B28]/70 group-hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(255,47,120,0.2)]">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#100A0F] text-[#FF8FB5] border border-white/10">
                      <CheckCircle2 className="w-3 h-3 text-[#FF2F78]" />
                      <span>{cert.badge}</span>
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <div className="space-y-1">
                    <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#777078]">
                      {cert.organization}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-[#FF8FB5] transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#B8B0B6] leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Footer Action: Real Certificate Link / Placeholder */}
                {/* <div className="pt-5 mt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#777078]">
                    Credential Link
                  </span>
                  
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#FF8FB5] group-hover:text-white transition-colors cursor-pointer"
                    title="Official Credential Record"
                  >
                    <span>{cert.linkPlaceholder}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div> */}

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
