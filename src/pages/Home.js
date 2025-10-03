import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Binary rain effect
    const chars = '01';
    const charSize = 14;
    const columns = Math.floor(canvas.width / charSize);
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(13, 17, 23, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00FF88';
      ctx.font = `${charSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * charSize, drops[i] * charSize);

        if (drops[i] * charSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

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
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20"
      />
      
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>
      
      {/* Hero Content */}
      <motion.div 
        className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-4">
              <span className="text-cyber-green text-glow">Abhay</span>
              <br />
              <span className="text-white">Srivastava</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-cyan mx-auto rounded-full glow-effect"></div>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-xl md:text-2xl text-light-grey font-inter mb-4">
              Final-Year CSE Student | 
              <span className="text-cyber-cyan"> Cybersecurity</span> & 
              <span className="text-cyber-green"> AI Enthusiast</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Passionate about building secure applications and exploring the frontiers of artificial intelligence. 
              Currently crafting innovative solutions at the intersection of cybersecurity and AI.
            </p>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={itemVariants} 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
          >
            <div className="card-cyber text-center">
              <div className="text-cyber-green text-2xl mb-2">🎓</div>
              <h3 className="font-semibold text-white mb-1">B.Tech CSE</h3>
              <p className="text-gray-400 text-sm">SRMU Lucknow</p>
            </div>
            <div className="card-cyber text-center">
              <div className="text-cyber-cyan text-2xl mb-2">🛡</div>
              <h3 className="font-semibold text-white mb-1">Specialization</h3>
              <p className="text-gray-400 text-sm">Cybersecurity & AI</p>
            </div>
            <div className="card-cyber text-center">
              <div className="text-cyber-green text-2xl mb-2">💡</div>
              <h3 className="font-semibold text-white mb-1">Experience</h3>
              <p className="text-gray-400 text-sm">Projects & Certifications</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link 
              to="/projects" 
              className="cyber-button text-center flex items-center space-x-2 group"
            >
              <span>View Projects</span>
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              to="/contact" 
              className="cyber-button-outline text-center flex items-center space-x-2 group"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Get in Touch</span>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            variants={itemVariants}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"
          >
            <div className="flex flex-col items-center text-cyber-green">
              <span className="text-xs mb-1 font-medium opacity-80">Scroll to explore</span>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-5 h-8 border-2 border-cyber-green rounded-full flex justify-center"
              >
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-2 bg-cyber-green rounded-full mt-1"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyber-green rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Featured Projects Preview */}
      <motion.section 
        className="relative z-10 py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
              Featured <span className="text-cyber-green">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore some of my latest work in cybersecurity, AI, and web development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* NeoAssist */}
            <motion.div 
              className="card-cyber group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-cyber-green text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-2">NeoAssist</h3>
              <p className="text-gray-400 mb-4">
                AI-powered assistant with voice/text capabilities, automation features, and secure architecture.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-cyber-green/20 text-cyber-green text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-cyber-cyan/20 text-cyber-cyan text-xs rounded">NLP</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">AI</span>
              </div>
              <Link 
                to="/projects" 
                className="text-cyber-green hover:text-cyber-cyan transition-colors inline-flex items-center"
              >
                Learn More 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            {/* Encryption Tool */}
            <motion.div 
              className="card-cyber group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-cyber-cyan text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-2">Encryption Tool</h3>
              <p className="text-gray-400 mb-4">
                CLI application for data encryption/decryption with multiple cipher implementations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-cyber-green/20 text-cyber-green text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Cryptography</span>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">CLI</span>
              </div>
              <Link 
                to="/projects" 
                className="text-cyber-green hover:text-cyber-cyan transition-colors inline-flex items-center"
              >
                Learn More 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            {/* Vulnerability Scanner */}
            <motion.div 
              className="card-cyber group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-yellow-400 text-3xl mb-4">🛡</div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Vulnerability Scanner</h3>
              <p className="text-gray-400 mb-4">
                NLP-powered tool for detecting SQL injection and XSS vulnerabilities in web applications.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-cyber-green/20 text-cyber-green text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-cyber-cyan/20 text-cyber-cyan text-xs rounded">NLP</span>
                <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Security</span>
              </div>
              <Link 
                to="/projects" 
                className="text-cyber-green hover:text-cyber-cyan transition-colors inline-flex items-center"
              >
                Learn More 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="cyber-button-outline">
              View All Projects
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;