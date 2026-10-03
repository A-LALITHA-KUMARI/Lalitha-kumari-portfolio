import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { LALITHA_DATA } from './data/portfolioData.js';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  // Active section scroll tracking
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'education', 'projects', 'experience', 'certifications', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(LALITHA_DATA.profile.email);
    setCopied(true);
    showToast(`Email copied: ${LALITHA_DATA.profile.email}`);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadResume = () => {
    showToast('Lalitha Kumari resume downloaded successfully!');
    // Provide a real downloadable text/document blob simulation for immediate client satisfaction
    const resumeText = `LALITHA KUMARI - RESUME
4th-Year B.Tech in Artificial Intelligence & Data Science (CGPA: 8.7/10)
Aspiring Full-Stack Developer | Email: ${LALITHA_DATA.profile.email}

TECHNICAL SKILLS:
- Languages: Python, JavaScript, HTML5, CSS3, SQL
- Frontend: React.js, Tailwind CSS, Responsive Design
- Backend & Databases: Node.js, Express.js, MongoDB, RESTful APIs
- AI & Data Science: Machine Learning, Scikit-Learn, Pandas, NumPy

PROJECTS:
1. AgroScan: AI Crop Disease Detector (CNN + React + Flask API)
2. CampusConnect: Student Collaboration Portal (MERN Stack)
3. Customer Churn Prediction & Analytics (Python, Scikit-Learn, React)

EDUCATION:
- B.Tech in Artificial Intelligence & Data Science (2022 - 2026 Expected)
- Higher Secondary Certificate (92.4%)
`;
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Lalitha_Kumari_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#08080B] text-white selection:bg-[#FF2F78]/30 selection:text-[#FF8FB5] relative overflow-x-hidden">
      
      {/* Subtle background ambient mesh */}
      <div 
        className="fixed -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(90,11,40,0.18),transparent_70%)] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,47,120,0.06),transparent_70%)] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Sticky Floating Centered Navbar */}
      <Navbar
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          profile={LALITHA_DATA.profile}
          onDownloadResume={handleDownloadResume}
        />

        <About
          profile={LALITHA_DATA.profile}
        />

        <Skills
          skillsData={LALITHA_DATA.skills}
        />

        <Education />

        <Projects
          projectsList={LALITHA_DATA.projects}
        />

        <Experience />

        <Certifications />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Notification Toast */}
      {toastVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#100A0F] border border-[#FF2F78]/40 text-white shadow-[0_0_25px_rgba(255,47,120,0.35)] backdrop-blur-xl animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-[#FF4D8D] shrink-0" />
            <span className="text-xs font-mono">{toastMessage}</span>
            <button
              onClick={() => setToastVisible(false)}
              className="ml-2 text-[#777078] hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
