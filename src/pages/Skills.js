import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "from-cyber-green to-green-400",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "JavaScript", level: 90, icon: "🟨" },
        { name: "TypeScript", level: 85, icon: "🔷" },
        { name: "HTML5", level: 95, icon: "🟧" },
        { name: "CSS3", level: 90, icon: "🎨" },
        { name: "Tailwind CSS", level: 90, icon: "💨" },
        { name: "Next.js", level: 80, icon: "▲" },
        { name: "Vue.js", level: 75, icon: "💚" }
      ]
    },
    {
      title: "Backend Development", 
      color: "from-cyber-cyan to-blue-400",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Python", level: 80, icon: "🐍" },
        { name: "Express.js", level: 85, icon: "🚂" },
        { name: "Django", level: 75, icon: "🎯" },
        { name: "REST APIs", level: 90, icon: "🔌" },
        { name: "GraphQL", level: 70, icon: "📊" },
        { name: "Microservices", level: 75, icon: "🔗" },
        { name: "Serverless", level: 70, icon: "☁️" }
      ]
    },
    {
      title: "Database & Cloud",
      color: "from-purple-500 to-pink-400", 
      skills: [
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "PostgreSQL", level: 80, icon: "🐘" },
        { name: "MySQL", level: 75, icon: "🐬" },
        { name: "Redis", level: 70, icon: "🔴" },
        { name: "AWS", level: 80, icon: "☁️" },
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "Kubernetes", level: 65, icon: "⚓" },
        { name: "Firebase", level: 85, icon: "🔥" }
      ]
    },
    {
      title: "DevOps & Tools",
      color: "from-yellow-500 to-orange-400",
      skills: [
        { name: "Git", level: 90, icon: "📦" },
        { name: "GitHub Actions", level: 80, icon: "⚙️" },
        { name: "Jenkins", level: 70, icon: "👨‍💼" },
        { name: "Webpack", level: 75, icon: "📦" },
        { name: "Linux", level: 80, icon: "🐧" },
        { name: "Nginx", level: 70, icon: "🌐" },
        { name: "Monitoring", level: 75, icon: "📊" },
        { name: "Testing", level: 85, icon: "🧪" }
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      level: "Associate"
    },
    {
      name: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2023", 
      level: "Professional"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      level: "Professional"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-navy pt-20">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyber-green/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-cyber-cyan/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-white mb-6">
            Technical <span className="text-cyber-green">Skills</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise, continuously evolved through 
            real-world projects and cutting-edge technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="space-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              {/* Category Header */}
              <div className="text-center">
                <h2 className="text-3xl font-montserrat font-bold text-white mb-4">
                  {category.title}
                </h2>
                <div className={`h-1 w-32 mx-auto bg-gradient-to-r ${category.color} rounded-full`}></div>
              </div>

              {/* Skills Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="card-cyber group hover:scale-105 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-center">
                      {/* Skill Icon */}
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>

                      {/* Skill Name */}
                      <h3 className="text-lg font-montserrat font-semibold text-white mb-4">
                        {skill.name}
                      </h3>

                      {/* Skill Level Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Proficiency</span>
                          <span className="text-cyber-green font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-dark-bg rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1.5, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                              ease: "easeOut"
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-white mb-4">
              Professional <span className="text-cyber-cyan">Certifications</span>
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyber-cyan to-blue-400 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="card-cyber text-center group hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  🏆
                </div>
                <h3 className="text-xl font-montserrat font-bold text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-cyber-cyan font-semibold mb-2">{cert.level}</p>
                <p className="text-gray-400 mb-2">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="mt-20 card-cyber text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-2xl font-montserrat font-bold text-white mb-4">
            Continuous Learning Journey
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
            languages, and methodologies to stay at the forefront of web development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["AI/ML Integration", "Web3 Technologies", "Cloud Architecture", "Performance Optimization"].map((area, index) => (
              <motion.span
                key={area}
                className="px-4 py-2 bg-gradient-to-r from-cyber-green to-cyber-cyan text-dark-navy font-semibold rounded-full text-sm"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {area}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;