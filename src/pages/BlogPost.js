import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  // Mock post data - in real app, this would come from API
  const mockPosts = useMemo(() => ({
    'building-secure-ai-applications': {
      id: 1,
      title: "Building Secure AI Applications: A Developer's Guide",
      slug: "building-secure-ai-applications",
      excerpt: "Learn how to implement security best practices when developing AI-powered applications, including data protection, model security, and secure deployment strategies.",
      content: `# Building Secure AI Applications: A Developer's Guide

As AI applications become increasingly prevalent in our digital ecosystem, the importance of implementing robust security measures cannot be overstated. This comprehensive guide will walk you through the essential security practices every developer should consider when building AI-powered applications.

## Why AI Security Matters

AI applications often process sensitive data, make critical decisions, and can be targets for sophisticated attacks. Understanding the unique security challenges in AI development is crucial for building trustworthy systems.

### Key Security Challenges

1. **Data Privacy and Protection**
2. **Model Security and Integrity**
3. **Adversarial Attacks**
4. **Secure Deployment and Monitoring**

## Data Protection Strategies

\`\`\`python
# Example: Implementing data encryption
from cryptography.fernet import Fernet
import os

class SecureDataHandler:
    def __init__(self):
        self.key = os.environ.get('ENCRYPTION_KEY') or Fernet.generate_key()
        self.cipher = Fernet(self.key)
    
    def encrypt_data(self, data):
        return self.cipher.encrypt(data.encode())
    
    def decrypt_data(self, encrypted_data):
        return self.cipher.decrypt(encrypted_data).decode()
\`\`\`

## Model Security Best Practices

### 1. Model Versioning and Integrity

Always maintain version control for your models and implement integrity checks:

\`\`\`python
import hashlib
import pickle

def calculate_model_hash(model_path):
    with open(model_path, 'rb') as f:
        model_data = f.read()
    return hashlib.sha256(model_data).hexdigest()

def verify_model_integrity(model_path, expected_hash):
    current_hash = calculate_model_hash(model_path)
    return current_hash == expected_hash
\`\`\`

### 2. Input Validation and Sanitization

\`\`\`python
import re
from typing import Any, Dict

class InputValidator:
    @staticmethod
    def validate_text_input(text: str, max_length: int = 1000) -> bool:
        if not isinstance(text, str):
            return False
        if len(text) > max_length:
            return False
        # Remove potentially harmful characters
        clean_text = re.sub(r'[<>"' + "']", '', text)
        return len(clean_text) > 0
    
    @staticmethod
    def sanitize_input(data: Dict[str, Any]) -> Dict[str, Any]:
        sanitized = {}
        for key, value in data.items():
            if isinstance(value, str):
                sanitized[key] = re.sub(r'[<>"' + "']", '', value)
            else:
                sanitized[key] = value
        return sanitized
\`\`\`

## Secure Deployment Architecture

### Container Security

When deploying AI applications using containers, implement these security measures:

\`\`\`dockerfile
# Use minimal base images
FROM python:3.9-slim

# Create non-root user
RUN useradd --create-home --shell /bin/bash app

# Set working directory
WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Change ownership and switch to non-root user
RUN chown -R app:app /app
USER app

# Expose port
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:8000/health || exit 1

# Run application
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "app:application"]
\`\`\`

## Monitoring and Alerting

Implement comprehensive monitoring to detect anomalies and potential security threats:

\`\`\`python
import logging
from datetime import datetime
from typing import Dict, Any

class SecurityMonitor:
    def __init__(self):
        self.logger = logging.getLogger('security_monitor')
        
    def log_prediction_request(self, request_data: Dict[str, Any], prediction: Any):
        log_entry = {
            'timestamp': datetime.utcnow().isoformat(),
            'request_size': len(str(request_data)),
            'prediction_confidence': getattr(prediction, 'confidence', None),
            'ip_address': request_data.get('client_ip'),
        }
        self.logger.info(f"Prediction request: {log_entry}")
    
    def detect_anomaly(self, request_data: Dict[str, Any]) -> bool:
        # Implement anomaly detection logic
        request_size = len(str(request_data))
        if request_size > 10000:  # Unusually large request
            self.logger.warning(f"Large request detected: {request_size} bytes")
            return True
        
        return False
\`\`\`

## Conclusion

Building secure AI applications requires a multi-layered approach that addresses data protection, model security, deployment best practices, and continuous monitoring. By implementing these strategies, developers can create AI systems that are both powerful and secure.

Remember that security is not a one-time implementation but an ongoing process that requires regular updates and improvements as new threats emerge.

## References

- [OWASP AI Security and Privacy Guide](https://owasp.org/www-project-ai-security-and-privacy-guide/)
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [Microsoft Responsible AI Standards](https://www.microsoft.com/en-us/ai/responsible-ai)`,
      category: "AI Security",
      tags: ["AI", "Security", "Development", "Best Practices"],
      publishedAt: "2024-09-15",
      author: "Abhay Srivastava",
      readTime: "8 min",
      featured: true,
      image: "/blog/ai-security.jpg"
    },
    'top-cybersecurity-tools-developers': {
      id: 2,
      title: "Top 10 Cybersecurity Tools Every Developer Should Know",
      slug: "top-cybersecurity-tools-developers",
      excerpt: "A comprehensive guide to essential cybersecurity tools that can help developers build more secure applications and protect against common vulnerabilities.",
      content: `# Top 10 Cybersecurity Tools Every Developer Should Know

In today's threat landscape, developers need to be equipped with the right tools to identify, prevent, and respond to security vulnerabilities. Here's a comprehensive guide to the essential cybersecurity tools that should be in every developer's toolkit.

## 1. OWASP ZAP (Zed Attack Proxy)

OWASP ZAP is one of the most popular free security testing tools, perfect for finding vulnerabilities in web applications.

### Key Features:
- Automated security scanning
- Manual testing tools
- REST API for automation
- Extensive plugin ecosystem

\`\`\`bash
# Quick scan with ZAP
zap-baseline.py -t http://localhost:3000
\`\`\`

## 2. Burp Suite

A comprehensive platform for web application security testing.

### Why It's Essential:
- Intercepting proxy
- Scanner for automated testing
- Intruder for customized attacks
- Extensible through plugins

## 3. Nmap (Network Mapper)

Essential for network discovery and security auditing.

\`\`\`bash
# Basic port scan
nmap -sS -O target_ip

# Service version detection
nmap -sV target_ip

# Comprehensive scan
nmap -A -T4 target_ip
\`\`\`

## 4. Wireshark

The world's foremost network protocol analyzer.

### Use Cases:
- Network troubleshooting
- Analysis of security protocols
- Detecting malicious traffic
- Learning network protocols

## 5. Metasploit Framework

A powerful platform for developing and executing exploit code.

\`\`\`bash
# Starting Metasploit
msfconsole

# Using a specific exploit
use exploit/multi/handler
set payload windows/meterpreter/reverse_tcp
set LHOST your_ip
set LPORT 4444
exploit
\`\`\`

## Best Practices for Tool Usage

### 1. Always Get Permission
Never use these tools on systems you don't own or have explicit permission to test.

### 2. Keep Tools Updated
Security tools are constantly updated to address new vulnerabilities and attack vectors.

### 3. Combine Multiple Tools
No single tool can catch all vulnerabilities. Use a combination for comprehensive coverage.

### 4. Understand the Output
Learn to interpret the results and understand the implications of discovered vulnerabilities.

## Conclusion

These tools form the foundation of a developer's security toolkit. Regular use and practice with these tools will significantly improve your ability to build and maintain secure applications.`,
      category: "Cybersecurity",
      tags: ["Cybersecurity", "Tools", "Development", "Security"],
      publishedAt: "2024-08-28",
      author: "Abhay Srivastava",
      readTime: "12 min",
      featured: false,
      image: "/blog/cyber-tools.jpg"
    }
  }), []);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundPost = mockPosts[slug];
      if (foundPost) {
        setPost(foundPost);
        // Simulate getting related posts
        setRelatedPosts([
          {
            title: "Machine Learning for Vulnerability Detection",
            slug: "machine-learning-vulnerability-detection",
            category: "AI Security"
          },
          {
            title: "Getting Started with Penetration Testing",
            slug: "getting-started-penetration-testing",
            category: "Penetration Testing"
          }
        ]);
      }
      setLoading(false);
    }, 1000);
  }, [slug, mockPosts]);

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
          <p className="text-gray-400">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-gray-400 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="cyber-button">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link to="/blog" className="text-cyber-green hover:text-cyber-cyan transition-colors">
            ← Back to Blog
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <span className={`px-3 py-1 text-sm rounded-full border ${getCategoryColor(post.category)}`}>
              {post.category}
            </span>
            <span className="text-gray-400 text-sm">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span className="text-gray-400 text-sm">•</span>
            <span className="text-gray-400 text-sm">{post.readTime}</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Author Info */}
          <div className="flex items-center space-x-4 py-6 border-t border-b border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-br from-cyber-green to-cyber-cyan rounded-full flex items-center justify-center">
              <span className="text-dark-navy font-bold">AS</span>
            </div>
            <div>
              <p className="text-white font-semibold">{post.author}</p>
              <p className="text-gray-400 text-sm">Final-year CSE Student | Cybersecurity & AI Enthusiast</p>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            components={{
              code({node, inline, className, children, ...props}) {
                const match = /language-(\\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-lg border border-gray-700"
                    {...props}
                  >
                    {String(children).replace(/\\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className="bg-gray-700 text-cyber-green px-1 py-0.5 rounded text-sm" {...props}>
                    {children}
                  </code>
                );
              },
              h1: ({children}) => (
                <h1 className="text-3xl font-montserrat font-bold text-white mb-6 mt-12 first:mt-0">
                  {children}
                </h1>
              ),
              h2: ({children}) => (
                <h2 className="text-2xl font-montserrat font-bold text-cyber-green mb-4 mt-10">
                  {children}
                </h2>
              ),
              h3: ({children}) => (
                <h3 className="text-xl font-semibold text-cyber-cyan mb-3 mt-8">
                  {children}
                </h3>
              ),
              p: ({children}) => (
                <p className="text-gray-300 leading-relaxed mb-6">
                  {children}
                </p>
              ),
              ul: ({children}) => (
                <ul className="text-gray-300 mb-6 space-y-2">
                  {children}
                </ul>
              ),
              li: ({children}) => (
                <li className="flex items-start">
                  <span className="text-cyber-green mr-2 mt-1">•</span>
                  <span>{children}</span>
                </li>
              ),
              blockquote: ({children}) => (
                <blockquote className="border-l-4 border-cyber-green bg-cyber-green/10 p-4 my-6 rounded-r-lg">
                  {children}
                </blockquote>
              ),
              a: ({children, href}) => (
                <a href={href} className="text-cyber-green hover:text-cyber-cyan transition-colors underline">
                  {children}
                </a>
              )
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-white font-semibold mb-4">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-dark-bg text-cyber-green text-sm rounded border border-gray-700 hover:border-cyber-green transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share Buttons */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h3 className="text-white font-semibold mb-4">Share this article:</h3>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <span>Twitter</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
              <span>LinkedIn</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
              <span>Copy Link</span>
            </button>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-8 border-t border-gray-700">
            <h3 className="text-2xl font-montserrat font-bold text-white mb-8">
              Related <span className="text-cyber-green">Articles</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <Link
                  key={index}
                  to={`/blog/${relatedPost.slug}`}
                  className="card-cyber group hover:border-cyber-green/50 transition-all duration-300"
                >
                  <span className={`inline-block px-2 py-1 text-xs rounded-full border mb-3 ${getCategoryColor(relatedPost.category)}`}>
                    {relatedPost.category}
                  </span>
                  <h4 className="text-lg font-semibold text-white group-hover:text-cyber-green transition-colors">
                    {relatedPost.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default BlogPost;