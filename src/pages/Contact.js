import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, you would send data to your backend
      console.log('Form data:', data);
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "absrivastava999@gmail.com",
      link: "mailto:absrivastava999@gmail.com"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 9369039149",
      link: "tel:+919369039149"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Lucknow, Uttar Pradesh, India",
      link: null
    },
    {
      icon: "🎓",
      label: "University",
      value: "SRMU Lucknow",
      link: null
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://www.linkedin.com/in/srivastavabhay/",
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      icon: "💻",
      url: "https://github.com/abhay-0912",
      color: "hover:text-gray-300"
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "https://x.com/AbhaySriva21285",
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram",
      icon: "📸",
      url: "https://www.instagram.com/abhaysrivastava1011/",
      color: "hover:text-pink-400"
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
            Get In <span className="text-cyber-green">Touch</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-cyan mx-auto rounded-full glow-effect"></div>
          <p className="text-gray-400 text-xl mt-6 max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, or just have a conversation about technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <div className="card-cyber">
              <h2 className="text-2xl font-montserrat font-bold text-cyber-green mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-white hover:text-cyber-green transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="border-t border-gray-700 pt-8">
                <h3 className="text-white font-semibold mb-4">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 p-3 bg-dark-bg rounded-lg border border-gray-700 hover:border-cyber-green/50 transition-all duration-300 group ${social.color}`}
                    >
                      <span className="text-xl">{social.icon}</span>
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="mt-8 p-4 bg-cyber-green/10 border border-cyber-green/30 rounded-lg">
                <h3 className="text-cyber-green font-semibold mb-2">Current Availability</h3>
                <p className="text-gray-300 text-sm">
                  Open to internships, freelance projects, and collaboration opportunities. 
                  Usually respond within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="card-cyber">
              <h2 className="text-2xl font-montserrat font-bold text-cyber-green mb-8">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register("name", { 
                      required: "Name is required",
                      minLength: { value: 2, message: "Name must be at least 2 characters" }
                    })}
                    className={`w-full px-4 py-3 bg-dark-bg border rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none ${
                      errors.name 
                        ? 'border-red-400 focus:border-red-400' 
                        : 'border-gray-600 focus:border-cyber-green border-glow'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={`w-full px-4 py-3 bg-dark-bg border rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none ${
                      errors.email 
                        ? 'border-red-400 focus:border-red-400' 
                        : 'border-gray-600 focus:border-cyber-green border-glow'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    {...register("subject", { required: "Please select a subject" })}
                    className={`w-full px-4 py-3 bg-dark-bg border rounded-lg text-white transition-all duration-300 focus:outline-none ${
                      errors.subject 
                        ? 'border-red-400 focus:border-red-400' 
                        : 'border-gray-600 focus:border-cyber-green border-glow'
                    }`}
                  >
                    <option value="">Select a subject</option>
                    <option value="internship">Internship Opportunity</option>
                    <option value="collaboration">Project Collaboration</option>
                    <option value="freelance">Freelance Work</option>
                    <option value="mentorship">Mentorship</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={6}
                    {...register("message", { 
                      required: "Message is required",
                      minLength: { value: 10, message: "Message must be at least 10 characters" }
                    })}
                    className={`w-full px-4 py-3 bg-dark-bg border rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none resize-none ${
                      errors.message 
                        ? 'border-red-400 focus:border-red-400' 
                        : 'border-gray-600 focus:border-cyber-green border-glow'
                    }`}
                    placeholder="Tell me about your project, opportunity, or what you'd like to discuss..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Newsletter Subscription */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    {...register("newsletter")}
                    className="mt-1 w-4 h-4 bg-dark-bg border border-gray-600 rounded focus:ring-cyber-green focus:ring-2"
                  />
                  <label className="text-gray-300 text-sm">
                    Subscribe to my newsletter for updates on cybersecurity, AI, and technology trends
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : 'cyber-button hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-400"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <p className="text-green-400 text-center">
                      ✅ Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                    <p className="text-red-400 text-center">
                      ❌ Failed to send message. Please try again or contact me directly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div variants={itemVariants} className="mt-16">
          <div className="card-cyber text-center">
            <h2 className="text-2xl font-montserrat font-bold text-cyber-green mb-6">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="/Abhay_Srivastava_Resume.pdf"
                download
                className="flex flex-col items-center p-6 bg-dark-bg rounded-lg border border-gray-700 hover:border-cyber-green/50 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">📄</div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyber-green transition-colors">
                  Download Resume
                </h3>
                <p className="text-gray-400 text-sm">Get my latest resume in PDF format</p>
              </a>

              <a
                href="https://calendly.com/abhay-srivastava"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-dark-bg rounded-lg border border-gray-700 hover:border-cyber-green/50 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">📅</div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyber-green transition-colors">
                  Schedule a Call
                </h3>
                <p className="text-gray-400 text-sm">Book a 30-minute conversation</p>
              </a>

              <a
                href="https://github.com/abhay-0912"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-dark-bg rounded-lg border border-gray-700 hover:border-cyber-green/50 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">💻</div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyber-green transition-colors">
                  View Projects
                </h3>
                <p className="text-gray-400 text-sm">Check out my GitHub repositories</p>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;