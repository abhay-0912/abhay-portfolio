import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "NeoAssist",
      category: "AI",
      description: "AI-powered assistant with voice and text capabilities, featuring automation, secure architecture, and intelligent conversation handling.",
      longDescription: "NeoAssist is a comprehensive AI assistant built with Python, featuring advanced NLP capabilities, voice recognition, and automated task execution. The system includes secure user authentication, conversation memory, and integration with various APIs for enhanced functionality.",
      technologies: ["Python", "NLP", "Voice Recognition", "AI", "Security"],
      features: [
        "Voice and text interaction",
        "Automated task execution",
        "Secure user authentication",
        "Conversation memory",
        "API integrations"
      ],
      githubUrl: "https://github.com/abhay-0912/NeoAssist",
      liveUrl: null,
      image: "/projects/neoassist.png",
      status: "Completed",
      year: "2024"
    },
    {
      id: 2,
      title: "Encryption Tool",
      category: "Cybersecurity",
      description: "Command-line encryption/decryption tool implementing multiple cipher algorithms including Caesar cipher with advanced security features.",
      longDescription: "A robust CLI application for data encryption and decryption, featuring multiple cipher implementations, secure key management, and support for various file formats. Built with security best practices and optimized for performance.",
      technologies: ["Python", "Cryptography", "CLI", "Security", "Algorithms"],
      features: [
        "Multiple cipher algorithms",
        "File encryption/decryption",
        "Secure key generation",
        "CLI interface",
        "Performance optimization"
      ],
      githubUrl: "https://github.com/abhay-0912/encryption-tool",
      liveUrl: null,
      image: "/projects/encryption-tool.png",
      status: "Completed",
      year: "2024"
    },
    {
      id: 3,
      title: "AI Vulnerability Scanner",
      category: "AI",
      description: "NLP-powered vulnerability detection tool for identifying SQL injection and XSS vulnerabilities in web applications using machine learning.",
      longDescription: "An intelligent security scanner that leverages natural language processing and machine learning to detect common web vulnerabilities. Features automated scanning, detailed reporting, and false positive reduction through AI algorithms.",
      technologies: ["Python", "NLP", "Machine Learning", "Security", "Web Scraping"],
      features: [
        "Automated vulnerability scanning",
        "NLP-based detection",
        "SQL injection detection",
        "XSS vulnerability identification",
        "Detailed security reports"
      ],
      githubUrl: "https://github.com/abhay-0912/ReconViper",
      liveUrl: null,
      image: "/projects/vulnerability-scanner.png",
      status: "In Progress",
      year: "2024"
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "Web Development",
      description: "Modern, responsive portfolio website with admin dashboard, built with React, TailwindCSS, and featuring cyber-themed design.",
      longDescription: "A comprehensive portfolio website featuring a public-facing site and an admin dashboard for content management. Built with modern web technologies and featuring a cyberpunk-inspired design with animations and interactive elements.",
      technologies: ["React", "TailwindCSS", "Node.js", "Supabase", "Netlify"],
      features: [
        "Responsive design",
        "Admin dashboard",
        "Content management",
        "Blog system",
        "Contact form"
      ],
      githubUrl: "https://github.com/abhay-0912/portfolio",
      liveUrl: "https://abhay-portfolio.netlify.app",
      image: "/projects/portfolio.png",
      status: "In Progress",
      year: "2024"
    },
    {
      id: 5,
      title: "Secure File Sharing App",
      category: "Cybersecurity",
      description: "Full-stack secure file sharing platform with AES-256 encryption, JWT authentication, and role-based access control.",
      longDescription: "A secure file sharing application built with React and Node.js/Flask. The system encrypts files using AES-256 before storage, generates time-limited secure download links, and provides role-based access control for users and admins. Includes audit logging, secure authentication, and a modern responsive UI.",
      technologies: ["React", "TailwindCSS", "Node.js / Flask", "JWT", "AES-256", "MongoDB / PostgreSQL", "Docker"],
      features: [
        "AES-256 encrypted file storage",
        "JWT-based authentication",
        "Time-limited secure download links",
        "Role-based access control (Admin/User)",
        "Audit logs for monitoring",
        "Responsive, modern UI"
      ],
      githubUrl: "https://github.com/abhay-0912/secure-file-sharing-app",
      image: "/projects/securefilesharing.png",
      status: "In Progress",
      year: "2025"
    }
  ];

  const categories = ['all', 'AI', 'Cybersecurity', 'Web Development'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'AI': return 'text-cyber-green bg-cyber-green/20 border-cyber-green/30';
      case 'Cybersecurity': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'Web Development': return 'text-cyber-cyan bg-cyber-cyan/20 border-cyber-cyan/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'In Progress': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'Planning': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-4">
            My <span className="text-cyber-green">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-cyan mx-auto rounded-full glow-effect"></div>
          <p className="text-gray-400 text-xl mt-6 max-w-2xl mx-auto">
            A showcase of my work in cybersecurity, AI, and web development
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-cyber-green text-dark-navy shadow-lg shadow-cyber-green/30'
                  : 'bg-card-bg text-gray-300 hover:bg-cyber-green/20 hover:text-cyber-green border border-gray-600'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="card-cyber group cursor-pointer overflow-hidden"
            >
              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-dark-bg to-card-bg rounded-lg mb-6 flex items-center justify-center border border-gray-700">
                <div className="text-6xl opacity-50">
                  {project.category === 'AI' && '🤖'}
                  {project.category === 'Cybersecurity' && '🛡'}
                  {project.category === 'Web Development' && '🌐'}
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                {/* Title and Status */}
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-montserrat font-bold text-white group-hover:text-cyber-green transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <span className={`px-2 py-1 text-xs rounded-full border ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-dark-bg text-cyber-green text-sm rounded border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-sm">Key Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {project.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="text-gray-400 text-sm flex items-center">
                        <span className="text-cyber-green mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-700">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-cyber-green hover:text-cyber-cyan transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Code</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-cyber-cyan hover:text-cyber-green transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16 card-cyber"
        >
          <h2 className="text-2xl font-montserrat font-bold text-white mb-4">
            Interested in collaborating?
          </h2>
          <p className="text-gray-400 mb-6">
            I'm always looking for new opportunities to work on exciting projects in cybersecurity and AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:absrivastava999@gmail.com"
              className="cyber-button flex items-center space-x-2 justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Get in Touch</span>
            </a>
            <a
              href="/Abhay_Srivastava_Resume.pdf"
              download
              className="cyber-button-outline flex items-center space-x-2 justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;