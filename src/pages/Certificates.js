import React from 'react';
import { motion } from 'framer-motion';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Professional Certifications Cybersecurity",
      issuer: "IBM",
      issueDate: "2025",
      description: "Professional cybersecurity certification covering comprehensive security practices, network protection, and ethical hacking methodologies.",
      skills: [
        "Network Security",
        "Cryptography",
        "Ethical Hacking"
      ],
      linkedinUrl: "https://www.linkedin.com/in/srivastavabhay/details/certifications/",
      status: "Active",
      category: "Cybersecurity"
    },
    {
      id: 2,
      title: "IBM Cloud Fundamentals",
      issuer: "IBM",
      issueDate: "2024",
      description: "Comprehensive cloud computing certification focusing on IBM Cloud architecture, security best practices, and cloud infrastructure management.",
      skills: [
        "Cloud Architecture",
        "IBM Cloud",
        "Security Best Practices"
      ],
      linkedinUrl: "https://www.linkedin.com/in/srivastavabhay/details/certifications/",
      status: "Active",
      category: "Cloud Computing"
    },
    {
      id: 3,
      title: "Introduction to Generative AI",
      issuer: "Google",
      issueDate: "2024",
      description: "Professional certification in artificial intelligence and machine learning, covering generative models, AI ethics, and practical applications.",
      skills: [
        "Generative Models",
        "Machine Learning",
        "AI Ethics"
      ],
      linkedinUrl: "https://www.linkedin.com/in/srivastavabhay/details/certifications/",
      status: "Active",
      category: "AI/ML"
    },
    {
      id: 4,
      title: "Design Thinking",
      issuer: "TCSiON",
      issueDate: "2022",
      description: "Design thinking methodology certification focusing on human-centered design approaches, innovation processes, and user experience design.",
      skills: [
        "Idea Generation",
        "User-Centric Design",
        "Prototyping"
      ],
      linkedinUrl: "https://www.linkedin.com/in/srivastavabhay/details/certifications/",
      status: "Active",
      category: "Design"
    }
  ];


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
      case 'Cybersecurity': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'Cloud Computing': return 'text-cyber-cyan bg-cyber-cyan/20 border-cyber-cyan/30';
      case 'AI/ML': return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
      case 'Design': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-4">
            My <span className="text-cyber-green">Certificates</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-cyan mx-auto rounded-full glow-effect"></div>
          <p className="text-gray-400 text-xl mt-6 max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </motion.div>

        {/* Current Certifications */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-montserrat font-bold text-white mb-8">
            Current <span className="text-cyber-green">Certifications</span>
          </h2>
          
          <div className="grid grid-cols-1 gap-8">
            {certificates.map((cert) => (
              <motion.div
                key={cert.id}
                className="card-cyber overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-cyber-green text-5xl">🏆</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-cyber-green font-semibold text-lg mb-1">{cert.issuer}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`px-3 py-1 text-sm rounded-full border ${getCategoryColor(cert.category)}`}>
                          {cert.category}
                        </span>
                        <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full border border-green-400/30">
                          {cert.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 text-right">
                    <p className="text-gray-400 text-sm">Issued: <span className="text-white">{cert.issueDate}</span></p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {cert.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Skills & Competencies:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {cert.skills.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="text-cyber-green">✓</span>
                        <span className="text-gray-300 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <a
                    href={cert.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 cyber-button text-center justify-center w-full"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>View Certificate</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>



        {/* Certification Stats */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="card-cyber text-center">
            <div className="text-cyber-green text-3xl mb-2">📜</div>
            <h3 className="text-2xl font-bold text-white mb-1">4</h3>
            <p className="text-gray-400">Active Certificates</p>
          </div>
          <div className="card-cyber text-center">
            <div className="text-cyber-cyan text-3xl mb-2">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-1">4</h3>
            <p className="text-gray-400">Specialization Areas</p>
          </div>
          <div className="card-cyber text-center">
            <div className="text-yellow-400 text-3xl mb-2">🏆</div>
            <h3 className="text-2xl font-bold text-white mb-1">2022-2025</h3>
            <p className="text-gray-400">Years of Learning</p>
          </div>
          <div className="card-cyber text-center">
            <div className="text-purple-400 text-3xl mb-2">📈</div>
            <h3 className="text-2xl font-bold text-white mb-1">100%</h3>
            <p className="text-gray-400">Commitment Level</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="mt-16">
          <div className="card-cyber text-center">
            <h2 className="text-2xl font-montserrat font-bold text-cyber-green mb-4">
              Continuous Professional Development
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I believe in lifelong learning and continuously updating my skills to stay current 
              with the rapidly evolving fields of cybersecurity and artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:absrivastava999@gmail.com"
                className="cyber-button flex items-center space-x-2 justify-center"
              >
                <span>Discuss Opportunities</span>
              </a>
              <a
                href="/Abhay_Srivastava_Resume.pdf"
                download
                className="cyber-button-outline flex items-center space-x-2 justify-center"
              >
                <span>View Full Resume</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Certificates;