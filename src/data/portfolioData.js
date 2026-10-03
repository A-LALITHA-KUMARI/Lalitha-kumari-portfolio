export const LALITHA_DATA = {
  profile: {
    name: "Lalitha Kumari",
    role: "AI & Data Science Student & Aspiring Full-Stack Developer",
    status: "4th-Year B.Tech Student (Graduating 2025/2026)",
    college: "Department of Artificial Intelligence & Data Science",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    shortBio: "Passionate 4th-year engineering student bridging the gap between intelligent data-driven models and responsive, production-ready full-stack web applications.",
    avatar: "/src/assets/images/lalitha_kumari_portrait_1790964093285.jpg",
    email: "lalithakumari.dev@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    location: "India",
    resumeLink: "#contact"
  },

  skills: {
    technical: [
      { name: "Python", category: "Languages", level: "Advanced" },
      { name: "JavaScript (ES6+)", category: "Languages", level: "Proficient" },
      { name: "React.js", category: "Frontend", level: "Proficient" },
      { name: "Node.js & Express", category: "Backend", level: "Intermediate" },
      { name: "HTML5 & Modern CSS", category: "Frontend", level: "Advanced" },
      { name: "Tailwind CSS", category: "Frontend", level: "Proficient" },
      { name: "Machine Learning (Scikit-Learn)", category: "AI & Data", level: "Proficient" },
      { name: "Pandas & NumPy", category: "AI & Data", level: "Advanced" },
      { name: "SQL & Relational DBs", category: "Databases", level: "Proficient" },
      { name: "MongoDB", category: "Databases", level: "Intermediate" },
      { name: "Git & GitHub", category: "Tools", level: "Proficient" },
      { name: "REST APIs", category: "Backend", level: "Proficient" }
    ],
    categories: ["All", "Languages", "Frontend", "Backend", "AI & Data", "Databases"]
  },

  education: [
    {
      degree: "B.Tech in Artificial Intelligence & Data Science",
      institution: "Bachelor of Technology, 4th Year",
      period: "2022 — Present (Expected 2026)",
      score: "CGPA: 8.7 / 10.0",
      description: "Focusing on Machine Learning algorithms, Data Structures & Algorithms, Deep Learning, Database Management Systems, and Web Application Architectures.",
      courses: [
        "Data Structures & Algorithms",
        "Machine Learning",
        "Database Management Systems",
        "Web Technologies",
        "Deep Learning Foundations",
        "Computer Networks"
      ]
    },
    {
      degree: "Higher Secondary Certificate (Class XII)",
      institution: "Pre-University / Intermediate Education",
      period: "2020 — 2022",
      score: "Percentage: 92.4%",
      description: "Major in Mathematics, Physics, and Chemistry (MPC) with distinction in computing and analytics.",
      courses: ["Mathematics", "Physics", "Chemistry", "Computer Science Basics"]
    }
  ],

  projects: [
    {
      id: "ai-crop-disease",
      title: "AgroScan: AI Crop Disease Detector",
      category: "AI & Machine Learning",
      description: "Deep learning classification model using Convolutional Neural Networks (CNN) with a responsive React frontend allowing farmers to upload leaf photos for instant diagnosis and treatment tips.",
      techStack: ["Python", "TensorFlow", "React.js", "Flask API", "Tailwind CSS"],
      highlights: [
        "Trained CNN on 14,000+ agricultural plant leaf images with 94.2% test accuracy.",
        "Created an intuitive drag-and-drop web interface with multilingual diagnosis summaries."
      ],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: "fullstack-campus-hub",
      title: "CampusConnect: Student Collaboration Portal",
      category: "Full-Stack Web",
      description: "Full-stack MERN portal empowering university students to share course notes, organize peer study groups, and track collaborative project milestones in real-time.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth"],
      highlights: [
        "Implemented secure JWT authentication and role-based access for students and mentors.",
        "Engineered RESTful endpoints for note upload, categorised search, and discussion forums."
      ],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: "ecommerce-analytics",
      title: "Customer Churn Prediction & Analytics",
      category: "Data Science",
      description: "Exploratory data analysis and machine learning pipeline predicting customer churn probability with an interactive dashboard built using React and charting components.",
      techStack: ["Python", "Scikit-Learn", "Pandas", "React.js", "FastAPI"],
      highlights: [
        "Engineered feature importance evaluation identifying 3 leading churn indicators.",
        "Achieved 0.88 ROC-AUC score across comparative Random Forest and XGBoost evaluations."
      ],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: "dev-portfolio",
      title: "Interactive Minimalist Developer Portfolio",
      category: "Frontend",
      description: "Sleek, responsive dark-mode personal website built with React, Vite, and Tailwind CSS featuring smooth scroll navigation, glassmorphism, and responsive layouts.",
      techStack: ["React 19", "Vite", "JavaScript", "Tailwind CSS"],
      highlights: [
        "Mobile-first responsive design supporting 360px to 1440px viewports.",
        "Zero external CSS bloated libraries with pure modular React architecture."
      ],
      github: "https://github.com",
      demo: "#"
    }
  ],

  experience: [
    {
      role: "Web Development & AI Intern",
      organization: "Academic Internship Program",
      type: "Internship",
      period: "May 2024 — July 2024",
      location: "Hybrid",
      description: "Contributed to building internal web dashboards and integrating predictive machine learning models for dataset classification.",
      points: [
        "Developed responsive frontend modules using React.js and REST APIs.",
        "Assisted in preprocessing and cleaning tabular datasets with Pandas for supervised ML training.",
        "Collaborated with peers using Git and GitHub following standard code review processes."
      ]
    },
    {
      role: "Technical Lead & Coordinator",
      organization: "University AI & Coding Club",
      type: "Campus Leadership",
      period: "Aug 2023 — Present",
      location: "On-Campus",
      description: "Organizing coding workshops, hackathon mentoring sessions, and peer learning circles for junior engineering students.",
      points: [
        "Conducted hands-on sessions on Python programming, Git essentials, and Web development basics for 120+ students.",
        "Organized 2 internal college mini-hackathons promoting collaborative project builds."
      ]
    }
  ],

  certifications: [
    {
      title: "Python for Data Science and Machine Learning",
      issuer: "Coursera / DeepLearning.AI",
      date: "2024",
      credentialId: "PY-DS-88421",
      skills: ["Python", "NumPy", "Pandas", "Scikit-Learn"]
    },
    {
      title: "The Complete 2024 Web Development Bootcamp",
      issuer: "Udemy",
      date: "2024",
      credentialId: "WD-FULL-39201",
      skills: ["React.js", "Node.js", "Express", "MongoDB", "REST APIs"]
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford Online / Coursera",
      date: "2023",
      credentialId: "ML-STAN-11928",
      skills: ["Supervised Learning", "Regression", "Classification", "Neural Networks"]
    },
    {
      title: "Database Management Systems & SQL",
      issuer: "NPTEL",
      date: "2023",
      credentialId: "NPTEL-DBMS-5541",
      skills: ["Relational Algebra", "SQL Queries", "Normalization", "Indexing"]
    }
  ],

  gallery: [
    {
      title: "Campus Hackathon 2024",
      caption: "Collaborating with my team during the 36-hour Smart Campus Hackathon.",
      tag: "Hackathon",
      accent: "from-[#5A0B28] to-[#100A0F]"
    },
    {
      title: "AI Workshop Presentation",
      caption: "Demonstrating CNN image classification fundamentals to junior peers.",
      tag: "Leadership",
      accent: "from-[#300615] to-[#100A0F]"
    },
    {
      title: "Capstone Project Demo Day",
      caption: "Presenting AgroScan AI Crop Disease Detector to faculty evaluators.",
      tag: "Academic",
      accent: "from-[#5A0B28] to-[#300615]"
    },
    {
      title: "Technical Symposium",
      caption: "Participating in college paper presentations on emerging NLP trends.",
      tag: "Symposium",
      accent: "from-[#300615] to-[#100A0F]"
    }
  ]
};
