import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

const myProjects = [
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    description: 'A responsive developer portfolio featuring dark burgundy aesthetics, smooth navigation, and modern component design.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    image: '/src/assets/images/portfolio.png',
    github: 'https://github.com',
    live: '#home',
  },
  {
    id: 'art-gallery',
    title: 'Art Gallery Dashboard',
    description: 'An interactive digital gallery showcase featuring responsive visual grids, clean card layouts, and modal previews.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/src/assets/images/art.png',
    github: 'https://github.com',
    live: 'https://github.com',
  },
  {
    id: 'music-drumkit',
    title: 'Music Drum Kit',
    description: 'An interactive web audio application with responsive keyboard key bindings and click triggers for rhythmic playback.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/src/assets/images/music.png',
    github: 'https://github.com',
    live: 'https://github.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div 
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[radial-gradient(circle,rgba(255,47,120,0.12),rgba(90,11,40,0.15),transparent_70%)] blur-[110px]"
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
          <div className="text-center max-w-2xl mx-auto space-y-3 pb-10 sm:pb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#300615]/90 border border-[#FF2F78]/40 text-xs font-semibold uppercase tracking-widest text-[#FF8FB5] shadow-[0_0_15px_rgba(255,47,120,0.25)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF2F78] animate-ping" />
              <span>PROJECTS</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-[1.15] sm:leading-[1.12]">
              Things I've Built
            </h2>

            <p className="text-xs sm:text-base text-[#B8B0B6] leading-relaxed">
              Practical web applications and interactive projects developed during my studies.
            </p>
          </div>

          {/* Compact Project Cards Grid (1-column on mobile, 3-column on lg) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myProjects.map((project, idx) => (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-gradient-to-b from-[#1c0815]/90 via-[#12060e]/95 to-[#0a0508]/95 border border-white/10 hover:border-[#FF2F78]/50 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1.5 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_45px_-5px_rgba(255,47,120,0.25)] flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle top edge specular reflection */}
                <div 
                  className="pointer-events-none absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#FF8FB5]/20 to-transparent z-10" 
                  aria-hidden="true" 
                />

                <div>
                  {/* Top: 16/9 Ratio Project Image (Cover) */}
                  <div className="relative aspect-video w-full overflow-hidden bg-[#0c0509] border-b border-white/[0.08]">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />

                    {/* Subtle gradient scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12060e] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                    {/* Corner Index */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-black/70 backdrop-blur-md text-[#FF8FB5] border border-white/10">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="text-lg font-bold font-heading text-white group-hover:text-[#FF8FB5] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#B8B0B6] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="pt-2 flex flex-wrap items-center gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono font-medium bg-[#100A0F] text-white border border-white/10 group-hover:border-[#FF2F78]/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link Buttons */}
                {/* <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-white/[0.06] text-xs">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#B8B0B6] hover:text-white transition-colors min-h-[36px]"
                  >
                    <Github className="w-3.5 h-3.5 text-[#FF2F78]" />
                    <span>Source</span>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#FF8FB5] hover:text-white transition-colors font-semibold min-h-[36px]"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div> */}

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
