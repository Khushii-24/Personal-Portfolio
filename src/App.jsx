import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import avatar from './images/developer_avatar.png';

const LeetcodeIcon = ({ size = 26 }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const TiltCard = ({ children, className = '', ...props }) => {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [6, -6]);
  const rotateY = useTransform(x, [0, 1], [-6, 6]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    x.set(mouseX / width);
    y.set(mouseY / height);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={`${className} transition-shadow duration-300 ease-out hover:shadow-2xl hover:border-slate-300/80`}
      {...props}
    >
      <div style={{ transform: 'translateZ(12px)', transformStyle: 'preserve-3d' }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

export default function Portfolio() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex justify-center items-start p-8">
      {/* Background Gradient Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ 
          x: [0, 80, -40, 0], 
          y: [0, 50, 80, 0],
          scale: [1, 1.2, 0.9, 1],
          backgroundColor: ['#cbd5e1', '#93c5fd', '#cbd5e1']
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-3xl opacity-35"
        animate={{ 
          x: [0, -90, 40, 0], 
          y: [0, -60, -90, 0],
          scale: [1, 0.8, 1.1, 1],
          backgroundColor: ['#bfdbfe', '#a5f3fc', '#bfdbfe']
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ 
          x: [0, 40, -30, 0], 
          y: [0, -50, 30, 0],
          scale: [1, 1.3, 0.8, 1],
          backgroundColor: ['#93c5fd', '#c084fc', '#93c5fd']
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Cursor Glow */}
      <motion.div
        className="pointer-events-none fixed w-32 h-32 rounded-full 
             bg-gradient-to-r from-slate-200 to-slate-600 
             mix-blend-multiply filter blur-xl opacity-75"
        style={{
          left: cursorPos.x - 64,
          top: cursorPos.y - 64,
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Container */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {/* Left: Profile + Skills */}
        <div className="col-span-1 flex flex-col gap-8">
          {/* Profile Card */}
          <TiltCard
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="p-8 rounded-2xl shadow-xl border bg-white/80 backdrop-blur"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto shadow-md">
              <img
                src={avatar}
                alt="Khushi"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-center mt-5 text-3xl font-extrabold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
              Khushi
            </h1>
            <p className="text-center text-gray-700 text-lg">
              Software Developer
            </p>

            {/* Contact */}
            <div className="flex justify-center gap-4 mt-5">
              <motion.a
                href="mailto:pkhushi.0024@gmail.com"
                className="text-gray-600 flex items-center justify-center p-2 rounded-full bg-slate-50 border border-slate-100 shadow-sm"
                whileHover={{ 
                  scale: 1.15, 
                  color: '#ea4335',
                  borderColor: '#fca5a5',
                  backgroundColor: '#fef2f2'
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                title="Email"
              >
                <Mail size={22} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/khushi-26282228b/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 flex items-center justify-center p-2 rounded-full bg-slate-50 border border-slate-100 shadow-sm"
                whileHover={{ 
                  scale: 1.15, 
                  color: '#0077b5',
                  borderColor: '#93c5fd',
                  backgroundColor: '#eff6ff'
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                title="LinkedIn"
              >
                <Linkedin size={22} />
              </motion.a>
              <motion.a
                href="https://github.com/Khushii-24"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 flex items-center justify-center p-2 rounded-full bg-slate-50 border border-slate-100 shadow-sm"
                whileHover={{ 
                  scale: 1.15, 
                  color: '#181717',
                  borderColor: '#cbd5e1',
                  backgroundColor: '#f8fafc'
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                title="GitHub"
              >
                <Github size={22} />
              </motion.a>
              <motion.a
                href="https://leetcode.com/u/khushi_624/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 flex items-center justify-center p-2 rounded-full bg-slate-50 border border-slate-100 shadow-sm"
                whileHover={{ 
                  scale: 1.15, 
                  color: '#ffa116',
                  borderColor: '#fde047',
                  backgroundColor: '#fffbeb'
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                title="LeetCode"
              >
                <LeetcodeIcon size={22} />
              </motion.a>
            </div>
          </TiltCard>

          {/* Skills */}
          <TiltCard
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="p-8 rounded-2xl shadow-xl border bg-white/80 backdrop-blur"
          >
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
              Skills
            </h2>
            <motion.div
              className="flex flex-wrap gap-2.5 text-sm"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {[
                'C++',
                'Python',
                'JavaScript',
                'Java',
                'SQL',
                'React.js',
                'Next.js',
                'Tailwind CSS',
                'Zustand',
                'FastAPI',
                'Node.js',
                'REST APIs',
                'WebSockets',
                'MySQL',
                'MongoDB',
                'PostgreSQL',
                'Oracle XE',
                'XGBoost',
                'scikit-learn',
                'spaCy',
                'NLP',
                'RAG',
                'Git',
                'Docker',
                'System Design',
                'DSA',
              ].map((skill, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1.5 rounded-lg backdrop-blur-sm bg-slate-50/60 border border-slate-200/50 text-gray-800 text-sm font-medium shadow-sm"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: '#f1f5f9',
                    borderColor: '#94a3b8'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </TiltCard>
        </div>

        {/* Right: About + Experience + Projects */}
        <div className="col-span-2 flex flex-col gap-8">
          {/* About Me */}
          <TiltCard
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="p-8 rounded-2xl shadow-xl border bg-white/80 backdrop-blur"
          >
            <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              Hi, I'm Khushi 👋 A B.Tech Information Technology student at NSUT, Delhi, I build full-stack applications spanning React/Next.js frontends and FastAPI/Node.js backends, with a growing focus on AI-powered features like RAG pipelines and intelligent automation. Most recently, I worked as a Software Developer Intern at Vanderlande Logistics (Siemens), building production-style tools for real-time industrial operations. I enjoy turning complex, real-world problems into clean, scalable software — always curious, always learning 🚀
            </p>
          </TiltCard>

          {/* Experience */}
          <TiltCard
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="p-8 rounded-2xl shadow-xl border bg-white/80 backdrop-blur"
          >
            <h2 className="text-2xl font-bold mb-5 bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h3 className="font-bold text-lg text-gray-900">
                    Software Developer Intern
                  </h3>
                  <span className="text-sm text-gray-600 font-medium">May 2026 – July 2026</span>
                </div>
                <h4 className="text-blue-700 font-semibold text-sm">Vanderlande Logistics (Siemens)</h4>
                <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                  Built production-style tools for real-time industrial operations; completed a mentor-guided project strengthening backend API design, system architecture, and automated reporting workflows.
                </p>
              </div>
              <hr className="border-gray-200/60" />
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h3 className="font-bold text-lg text-gray-900">
                    AICTE EduSkills Virtual Internship
                  </h3>
                  <span className="text-sm text-gray-600 font-medium">Feb 2025 – March 2025</span>
                </div>
                <h4 className="text-blue-700 font-semibold text-sm">AICTE EduSkills</h4>
                <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                  Focused on AI/ML fundamentals, including data preprocessing, model building, and evaluation techniques.
                </p>
              </div>
            </div>
          </TiltCard>

          {/* Projects */}
          <TiltCard
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="p-8 rounded-2xl shadow-xl border bg-white/80 backdrop-blur"
          >
            <h2 className="text-2xl font-bold mb-5 bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
              Academic Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "DevSync – Real-Time Engineering Collaboration Platform",
                  desc: "A real-time collaboration platform for engineering teams with live Kanban boards, shared documentation, role-based access, and audit-logged activity, plus AI-assisted task breakdown and RAG-powered semantic search.",
                  link: "https://github.com/Khushii-24/Devsync",
                  demo: "https://devsync-neon.vercel.app/"
                },
                {
                  title: "Airport Operations Chatbot – Vanderlande Industries",
                  desc: "A menu-driven chatbot for airport technicians offering real-time baggage tracking and SCADA alarm monitoring via live SSE updates, alongside an automated PDF/Excel reporting pipeline.",
                  link: "https://github.com/Khushii-24/vl-chatbot",
                },
                {
                  title: "Resume-IQ – Talent Screening System",
                  desc: "An AI-powered resume screening tool that ranks candidates ATS-style using skill extraction and cosine similarity, with SHAP-based explainability.",
                  link: "https://github.com/Khushii-24/Resume-IQ-Talent-Screening-System",
                  demo: "https://resume-iq-talent-screening-system.vercel.app/"
                },
                {
                  title: "AI-Driven Smart Classroom",
                  desc: "An AI-powered timetable generator that builds conflict-free schedules based on faculty, room, and time-slot constraints.",
                  link: "https://github.com/Pawnios/AI-driven-smart-classroom",
                }
              ].map((proj, i) => (
                <TiltCard
                  key={i}
                  className="p-6 rounded-xl border shadow-md bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 flex items-center justify-between">
                        {proj.title}
                        <div className="flex items-center gap-3">
                          <a
                            href={proj.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-700 hover:text-blue-700"
                          >
                            <Github size={22} />
                          </a>
                        </div>
                      </h3>
                      <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                        {proj.desc}
                      </p>
                    </div>
                    {proj.demo && (
                      <div className="mt-4">
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-blue-700 font-medium hover:underline inline-block"
                        >
                          View Project →
                        </a>
                      </div>
                    )}
                  </div>
                </TiltCard>
              ))}
            </div>
          </TiltCard>
        </div>
      </div>
    </div>
  );
}
