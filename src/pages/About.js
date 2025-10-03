import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { category: 'Core Programming', items: ['Python', 'C', 'SQL', 'JavaScript'] },
    { category: 'Cybersecurity Tools', items: ['Wireshark', 'Burp Suite', 'Nmap', 'Metasploit'] },
    { category: 'AI/ML', items: ['NLP', 'Machine Learning', 'AI Agents', 'Automation'] },
    { category: 'Web Technologies', items: ['React', 'Node.js', 'HTML/CSS', 'REST APIs'] },
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
            About <span className="text-cyber-green">Me</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-cyan mx-auto rounded-full glow-effect"></div>
          <p className="text-gray-400 text-xl mt-6 max-w-2xl mx-auto">
            Passionate cybersecurity enthusiast and AI developer building the future of secure technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info */}
          <motion.div variants={itemVariants}>
            <div className="card-cyber">
              <h2 className="text-2xl font-montserrat font-bold text-cyber-green mb-6">
                Get to Know Me
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hello! I'm <span className="text-cyber-green font-semibold">Abhay Srivastava</span>, 
                  a final-year Computer Science Engineering student at SRMU Lucknow with a passion for 
                  cybersecurity and artificial intelligence.
                </p>
                <p>
                  My journey into technology began with curiosity about how systems work and how to make 
                  them more secure. This led me to explore the fascinating intersection of 
                  <span className="text-cyber-cyan"> cybersecurity</span> and 
                  <span className="text-cyber-green"> AI</span>, where I've found my true calling.
                </p>
                <p>
                  I specialize in building secure applications, developing AI-powered tools, and 
                  implementing robust security measures. My hands-on experience with penetration testing 
                  tools and AI frameworks has given me a unique perspective on modern security challenges.
                </p>
                <p>
                  When I'm not coding or testing security vulnerabilities, you'll find me exploring 
                  the latest developments in machine learning, contributing to open-source projects, 
                  or sharing knowledge through technical blogs.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-dark-bg rounded-lg border border-gray-700">
                  <div className="text-cyber-green font-bold text-2xl">2026</div>
                  <div className="text-gray-400 text-sm">Expected Graduation</div>
                </div>
                <div className="text-center p-4 bg-dark-bg rounded-lg border border-gray-700">
                  <div className="text-cyber-cyan font-bold text-2xl">3+</div>
                  <div className="text-gray-400 text-sm">Major Projects</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills & Interests */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Skills Grid */}
            <div className="card-cyber">
              <h2 className="text-2xl font-montserrat font-bold text-cyber-green mb-6">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="text-white font-semibold text-sm uppercase tracking-wide">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-cyber-green/20 text-cyber-green text-sm rounded-full border border-cyber-green/30 hover:bg-cyber-green/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests & Goals */}
            <div className="card-cyber">
              <h2 className="text-2xl font-montserrat font-bold text-cyber-green mb-6">
                Interests & Goals
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-cyber-green text-xl">🎯</div>
                  <div>
                    <h3 className="text-white font-semibold">Career Goals</h3>
                    <p className="text-gray-400 text-sm">
                      Becoming a cybersecurity specialist with expertise in AI-driven security solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-cyber-cyan text-xl">🚀</div>
                  <div>
                    <h3 className="text-white font-semibold">Current Focus</h3>
                    <p className="text-gray-400 text-sm">
                      Developing AI agents for automated security testing and vulnerability assessment
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-yellow-400 text-xl">📚</div>
                  <div>
                    <h3 className="text-white font-semibold">Learning</h3>
                    <p className="text-gray-400 text-sm">
                      Advanced penetration testing, cloud security, and machine learning for cybersecurity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="card-cyber text-center">
            <div className="text-cyber-green text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-white mb-2">Security First</h3>
            <p className="text-gray-400">
              Every line of code I write prioritizes security and follows best practices to protect against vulnerabilities.
            </p>
          </div>
          <div className="card-cyber text-center">
            <div className="text-cyber-cyan text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
            <p className="text-gray-400">
              I believe in leveraging cutting-edge AI technologies to solve complex cybersecurity challenges.
            </p>
          </div>
          <div className="card-cyber text-center">
            <div className="text-yellow-400 text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
            <p className="text-gray-400">
              Knowledge sharing and teamwork are essential for building a more secure digital world.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;