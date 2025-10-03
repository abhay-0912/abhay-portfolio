import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Shri Ramswaroop Memorial University",
      location: "Lucknow, Uttar Pradesh",
      duration: "2022 - 2026",
      status: "Pursuing",
      highlights: [
        "Specialized in Cybersecurity and AI",
        "Member of Red Hat Student Community",
        "Led multiple technical workshops",
        "Active in coding competitions"
      ],
      courses: [
        "Data Structures & Algorithms",
        "Computer Networks",
        "Cybersecurity Fundamentals",
        "Database Management Systems",
        "Software Engineering"
      ],
      icon: "🎓"
    },
    {
      degree: "Higher Secondary Certificate",
      field: "Science (PCM)",
      institution: "Sumitra Modern School",
      location: "Sitapur, Uttar Pradesh",
      duration: "2019 - 2022",
      status: "Completed",
      highlights: [
        "Presented project in Annual Science Exhibition",
        "Volunteered in school’s annual fest",
      ],
      courses: [
        "Computer Science",
        "Mathematics",
        "Physics",
        "Chemistry",
        "English"
      ],
      icon: "📚"
    }
  ];

  const certifications = [
    {
      name: "Cybersecurity",
      issuer: "IBM",
      date: "2025",
      type: "Professional",
      skills: ["Network Security", "Cryptography", "Ethical Hacking"]
    },
    {
      name: "IBM cloud fundamentals", 
      issuer: "IBM",
      date: "2024",
      type: "Cloud Computing",
      skills: ["Cloud Architecture", "IBM Cloud", "Security Best Practices"]
    },
    {
      name: "Introduction to Generative AI",
      issuer: "Google",
      date: "2024",
      type: "AI/ML",
      skills: ["Generative Models", "Machine Learning", "AI Ethics"]
    },
    {
      name: "Design Thinking ",
      issuer: "tcsion",
      date: "2022",
      type: "Cybersecurity",
      skills: ["Idea Generation", "User-Centric Design", "Prototyping"]
    }
  ];

  const achievements = [    
    {
      title: "IBM Cybersecurity Specialization",
      event: "University Certification - IBM",
      description: "Completed a comprehensive specialization in Cybersecurity, covering key concepts and practical skills.",
      icon: "📜"
    },
    {
      title: "Founder & Lead",
      event: "Developer’s Club - SRM University",
      description: "Launched the university’s first developer community, connecting students with real-world projects and tech resources.",
      icon: "📋"
    },
    {
      title: "Organizer & Participant",
      event: "Smart India Hackathon – Internal Round",
      description: "Organized and participated in the internal round of SIH, fostering innovation and teamwork among peers.",
      icon: "🎤"
    },
    {
      title: "Mentor",
      event: "Peer Mentorship",
      description: "Mentored juniors in coding, mathematics, and science, guiding them through projects, competitions, and learning sessions to enhance their technical and analytical skills.",
      icon: "🧑‍🏫"
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
            My <span className="text-cyber-green">Education</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A journey of continuous learning and academic excellence in technology and innovation.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <div className={`flex flex-col lg:flex-row items-start gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Timeline Marker */}
                <div className="hidden lg:flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyber-green to-cyber-cyan rounded-full flex items-center justify-center text-2xl text-dark-navy font-bold">
                    {edu.icon}
                  </div>
                  <div className="w-1 h-32 bg-gradient-to-b from-cyber-green to-transparent mt-4"></div>
                </div>

                {/* Education Card */}
                <div className="flex-1 card-cyber group hover:scale-105 transition-all duration-300">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-montserrat font-bold text-white group-hover:text-cyber-green transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-cyber-cyan font-semibold text-lg">{edu.field}</p>
                        <p className="text-gray-400">{edu.institution}</p>
                        <p className="text-gray-500 text-sm">{edu.location}</p>
                      </div>
                      <div className="text-right">
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          edu.status === 'Pursuing' 
                            ? 'bg-cyber-green text-dark-navy' 
                            : 'bg-gray-600 text-white'
                        }`}>
                          {edu.status}
                        </div>
                        <p className="text-gray-400 mt-2">{edu.duration}</p>
                        <p className="text-cyber-cyan font-bold">{edu.gpa}</p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-cyber-green mt-1">▶</span>
                            <span className="text-gray-300">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Relevant Courses */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Relevant Coursework</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-dark-bg border border-gray-600 rounded-full text-sm text-gray-300 hover:border-cyber-green transition-colors"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="card-cyber group hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-montserrat font-bold text-white group-hover:text-cyber-green transition-colors">
                        {cert.name}
                      </h3>
                      <p className="text-cyber-cyan font-semibold">{cert.issuer}</p>
                      <p className="text-gray-400 text-sm">{cert.type}</p>
                    </div>
                    <span className="text-gray-500 text-sm">{cert.date}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-cyber-green/20 text-cyber-green rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-white mb-4">
              Academic <span className="text-yellow-400">Achievements</span>
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="card-cyber text-center group hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-montserrat font-bold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-cyber-cyan font-semibold mb-2 text-sm">{achievement.event}</p>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          className="mt-20 card-cyber text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <h3 className="text-2xl font-montserrat font-bold text-white mb-4">
            My Learning Philosophy
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I believe in the power of continuous learning and hands-on experience. 
            My academic journey is complemented by practical projects, research, and 
            real-world applications that bridge theory with practice.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-cyber-green text-3xl">🎯</div>
              <h4 className="text-white font-semibold">Goal-Oriented</h4>
              <p className="text-gray-400 text-sm">Setting clear learning objectives and achieving them systematically</p>
            </div>
            <div className="space-y-2">
              <div className="text-cyber-cyan text-3xl">🔄</div>
              <h4 className="text-white font-semibold">Iterative Learning</h4>
              <p className="text-gray-400 text-sm">Building knowledge through practice, feedback, and continuous improvement</p>
            </div>
            <div className="space-y-2">
              <div className="text-yellow-400 text-3xl">🌐</div>
              <h4 className="text-white font-semibold">Holistic Approach</h4>
              <p className="text-gray-400 text-sm">Combining technical skills with soft skills and industry awareness</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;