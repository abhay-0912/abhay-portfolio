import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock blog posts data - in real app, this would come from API
  const mockPosts = useMemo(() => [
    {
      id: 1,
      title: "Building Secure AI Applications: A Developer's Guide",
      slug: "building-secure-ai-applications",
      excerpt: "Learn how to implement security best practices when developing AI-powered applications, including data protection, model security, and secure deployment strategies.",
      content: "Full content here...",
      category: "AI Security",
      tags: ["AI", "Security", "Development", "Best Practices"],
      publishedAt: "2024-09-15",
      author: "Abhay Srivastava",
      readTime: "8 min",
      featured: true,
      image: "/blog/ai-security.jpg"
    },
    {
      id: 2,
      title: "Top 10 Cybersecurity Tools Every Developer Should Know",
      slug: "top-cybersecurity-tools-developers",
      excerpt: "A comprehensive guide to essential cybersecurity tools that can help developers build more secure applications and protect against common vulnerabilities.",
      content: "Full content here...",
      category: "Cybersecurity",
      tags: ["Cybersecurity", "Tools", "Development", "Security"],
      publishedAt: "2024-08-28",
      author: "Abhay Srivastava",
      readTime: "12 min",
      featured: false,
      image: "/blog/cyber-tools.jpg"
    },
    {
      id: 3,
      title: "Machine Learning for Vulnerability Detection",
      slug: "machine-learning-vulnerability-detection",
      excerpt: "Exploring how machine learning techniques can be applied to automatically detect security vulnerabilities in software applications.",
      content: "Full content here...",
      category: "AI Security",
      tags: ["Machine Learning", "Vulnerability Detection", "AI", "Security"],
      publishedAt: "2024-08-10",
      author: "Abhay Srivastava",
      readTime: "15 min",
      featured: true,
      image: "/blog/ml-vulnerability.jpg"
    },
    {
      id: 4,
      title: "Getting Started with Penetration Testing",
      slug: "getting-started-penetration-testing",
      excerpt: "A beginner's guide to penetration testing, covering essential tools, methodologies, and ethical considerations for aspiring security professionals.",
      content: "Full content here...",
      category: "Penetration Testing",
      tags: ["Penetration Testing", "Security", "Ethical Hacking", "Beginner"],
      publishedAt: "2024-07-22",
      author: "Abhay Srivastava",
      readTime: "10 min",
      featured: false,
      image: "/blog/pentest-guide.jpg"
    }
  ], []);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, [mockPosts]);

  const categories = ['all', 'AI Security', 'Cybersecurity', 'Penetration Testing', 'Development'];

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const featuredPosts = posts.filter(post => post.featured);

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
      case 'AI Security': return 'text-cyber-green bg-cyber-green/20 border-cyber-green/30';
      case 'Cybersecurity': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'Penetration Testing': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'Development': return 'text-cyber-cyan bg-cyber-cyan/20 border-cyber-cyan/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyber-green mx-auto mb-4"></div>
          <p className="text-gray-400">Loading blog posts...</p>
        </div>
      </div>
    );
  }

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
            Tech <span className="text-cyber-green">Blog</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-cyan mx-auto rounded-full glow-effect"></div>
          <p className="text-gray-400 text-xl mt-6 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on cybersecurity, AI, and modern development
          </p>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-2xl font-montserrat font-bold text-white mb-8">
              Featured <span className="text-cyber-green">Posts</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  className="card-cyber overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to={`/blog/${post.slug}`}>
                    {/* Image Placeholder */}
                    <div className="w-full h-48 bg-gradient-to-br from-dark-bg to-card-bg rounded-lg mb-6 flex items-center justify-center border border-gray-700">
                      <div className="text-4xl opacity-50">📝</div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className={`px-3 py-1 text-sm rounded-full border ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </span>
                        <span className="px-3 py-1 bg-cyber-green/20 text-cyber-green text-sm rounded-full border border-cyber-green/30">
                          Featured
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-montserrat font-bold text-white group-hover:text-cyber-green transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <span className="text-cyber-green hover:text-cyber-cyan transition-colors">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* Category Filter */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-cyber-green text-dark-navy shadow-lg shadow-cyber-green/30'
                  : 'bg-card-bg text-gray-300 hover:bg-cyber-green/20 hover:text-cyber-green border border-gray-600'
              }`}
            >
              {category === 'all' ? 'All Posts' : category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              layout
              variants={itemVariants}
              className="card-cyber group cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/blog/${post.slug}`}>
                {/* Image Placeholder */}
                <div className="w-full h-40 bg-gradient-to-br from-dark-bg to-card-bg rounded-lg mb-4 flex items-center justify-center border border-gray-700">
                  <div className="text-3xl opacity-50">📝</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 text-xs rounded-full border ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyber-green transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 pt-2">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-dark-bg text-cyber-green text-xs rounded border border-gray-700"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                    <span className="text-cyber-green hover:text-cyber-cyan transition-colors text-sm">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div variants={itemVariants} className="mt-16">
          <div className="card-cyber text-center">
            <h2 className="text-2xl font-montserrat font-bold text-cyber-green mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to my newsletter for the latest insights on cybersecurity, AI, and technology trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-dark-bg border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyber-green focus:outline-none transition-colors"
              />
              <button className="cyber-button whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Blog;