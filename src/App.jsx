import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import avatar from './images/Screenshot 2025-08-31 014237.png';

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
        className="absolute top-20 left-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, -50, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Cursor Glow */}
      <motion.div
        className="pointer-events-none fixed w-32 h-32 rounded-full 
             bg-gradient-to-r from-pink-100 to-pink-500 
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
          <motion.div
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
            <h1 className="text-center mt-5 text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Khushi
            </h1>
            <p className="text-center text-gray-700 text-lg">
              Software Developer
            </p>

            {/* Contact */}
            <div className="flex justify-center gap-5 mt-5">
              <a
                href="mailto:pkhushi.0024@gmail.com"
                className="text-gray-700 hover:text-pink-500"
              >
                <Mail size={26} />
              </a>
              <a
                href="https://www.linkedin.com/in/khushi-26282228b/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-pink-500"
              >
                <Linkedin size={26} />
              </a>
              <a
                href="https://github.com/Khushii-24"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-pink-500"
              >
                <Github size={26} />
              </a>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="p-8 rounded-2xl shadow-xl border bg-white/80 backdrop-blur"
          >
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Skills
            </h2>
            <motion.div
              className="flex flex-wrap gap-3 text-sm"
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
                'C',
                'C++',
                'Python',
                'JavaScript',
                'DSA',
                'Competitive Programming',
                'React',
                'Next.js',
                'Node.js',
                'Tailwind',
                'CSS',
                'HTML',
                'Framer Motion',
                'MySQL',
                'AI-ML',
                'NumPy',
                'Pandas',
                'OOPS',
              ].map((skill, i) => (
                <motion.span
                  key={i}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-gray-800 text-sm font-medium shadow-sm"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Right: About + Projects */}
        <div className="col-span-2 flex flex-col gap-8">
          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="p-8 rounded-2xl shadow-xl border bg-white/80 backdrop-blur"
          >
            <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              Hi, I’m Khushi 👋 A passionate software developer who enjoys
              solving real-world problems through technology. I specialize in
              modern web development, crafting intuitive user experiences, and
              exploring the intersection of AI and software engineering. I love
              creating scalable applications that blend aesthetics with
              functionality. Always curious, always learning 🚀
            </p>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="p-8 rounded-2xl shadow-xl border bg-white/80 backdrop-blur"
          >
            <h2 className="text-2xl font-bold mb-5 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Academic Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Shopify E-commerce Website',
                  desc: 'Developed and deployed a full Shopify-based online store tailored to the client’s branding needs. Customized themes using Shopify, Liquid, HTML, CSS, and integrated payments for a seamless shopping experience.',
                  link: 'https://github.com/Khushii-24',
                  demo: 'https://github.com/Khushii-24',
                },
                {
                  title: 'Scribly – Notes Web App',
                  desc: 'Built a modern notes app using React, Vite, and Tailwind CSS. Features include creating, editing, and deleting notes with an intuitive interface that boosts productivity and organizes workflows efficiently.',
                  link: 'https://github.com/Khushii-24/SCRIBLY-NOTES-APP',
                  demo: 'https://scribly-notes-app.vercel.app/#',
                },
                {
                  title: 'Customer Churn Prediction',
                  desc: 'Created an ML model to predict customer churn using Python, Pandas, NumPy, and Scikit-learn. Identified at-risk customers and helped design data-driven retention strategies.',
                  link: 'https://github.com/Khushii-24/Customer-Churn-Prediction-using-AI-ML',
                  demo: 'https://github.com/Khushii-24/Customer-Churn-Prediction-using-AI-ML/blob/main/Customer%20Churn%20Prediction.ipynb',
                },
                {
                  title: 'Fraud Detection System',
                  desc: 'Worked on detecting fraudulent transactions with machine learning. Used preprocessing, feature engineering, and anomaly detection to enhance financial security.',
                  link: 'https://github.com/Khushii-24/Fraud-Detection-System-usig-AI-ML',
                  demo: 'https://github.com/Khushii-24/Fraud-Detection-System-usig-AI-ML/blob/main/Fraud%20Detection%20in%20Financial%20Transactions.ipynb',
                },
              ].map((proj, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-xl border shadow-md bg-white hover:shadow-lg transition flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 flex items-center justify-between">
                      {proj.title}
                      <div className="flex items-center gap-3">
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-700 hover:text-pink-500"
                        >
                          <Github size={22} />
                        </a>
                      </div>
                    </h3>
                    <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                      {proj.desc}
                    </p>
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-pink-600 font-medium hover:underline"
                    >
                      View Project →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
