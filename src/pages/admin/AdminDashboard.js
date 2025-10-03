import React, { useState } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Mock admin components - in a real app, these would be separate files
const Dashboard = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-montserrat font-bold text-white">Dashboard Overview</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="card-cyber text-center">
        <div className="text-cyber-green text-3xl mb-2">📝</div>
        <h3 className="text-2xl font-bold text-white mb-1">4</h3>
        <p className="text-gray-400">Blog Posts</p>
      </div>
      <div className="card-cyber text-center">
        <div className="text-cyber-cyan text-3xl mb-2">💼</div>
        <h3 className="text-2xl font-bold text-white mb-1">4</h3>
        <p className="text-gray-400">Projects</p>
      </div>
      <div className="text-yellow-400 text-3xl mb-2">📬</div>
      <h3 className="text-2xl font-bold text-white mb-1">12</h3>
      <p className="text-gray-400">Messages</p>
    </div>
    <div className="card-cyber text-center">
      <div className="text-purple-400 text-3xl mb-2">👁</div>
      <h3 className="text-2xl font-bold text-white mb-1">1.2k</h3>
      <p className="text-gray-400">Page Views</p>
    </div>
  </div>
);

const ProjectsManager = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-montserrat font-bold text-white">Manage Projects</h1>
      <button className="cyber-button">Add New Project</button>
    </div>
    <div className="card-cyber">
      <p className="text-gray-300">Project management interface would go here...</p>
    </div>
  </div>
);

const BlogManager = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-montserrat font-bold text-white">Manage Blog Posts</h1>
      <button className="cyber-button">New Post</button>
    </div>
    <div className="card-cyber">
      <p className="text-gray-300">Blog management interface would go here...</p>
    </div>
  </div>
);

const SkillsManager = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-montserrat font-bold text-white">Manage Skills</h1>
    <div className="card-cyber">
      <p className="text-gray-300">Skills management interface would go here...</p>
    </div>
  </div>
);

const CertificatesManager = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-montserrat font-bold text-white">Manage Certificates</h1>
    <div className="card-cyber">
      <p className="text-gray-300">Certificates management interface would go here...</p>
    </div>
  </div>
);

const MessagesManager = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-montserrat font-bold text-white">Contact Messages</h1>
    <div className="card-cyber">
      <p className="text-gray-300">Messages management interface would go here...</p>
    </div>
  </div>
);

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const sidebarItems = [
    {
      name: 'Dashboard',
      path: '/admin/dashboard',
      icon: '📊'
    },
    {
      name: 'Projects',
      path: '/admin/projects',
      icon: '💼'
    },
    {
      name: 'Blog Posts',
      path: '/admin/blog',
      icon: '📝'
    },
    {
      name: 'Skills',
      path: '/admin/skills',
      icon: '⚡'
    },
    {
      name: 'Certificates',
      path: '/admin/certificates',
      icon: '🏆'
    },
    {
      name: 'Messages',
      path: '/admin/messages',
      icon: '📬'
    }
  ];

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-dark-navy">
      <div className="flex">
        {/* Sidebar */}
        <motion.aside
          className={`${
            sidebarOpen ? 'w-64' : 'w-16'
          } bg-card-bg border-r border-gray-700 min-h-screen transition-all duration-300`}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4">
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-cyber-green to-cyber-cyan rounded-lg flex items-center justify-center">
                <span className="text-dark-navy font-montserrat font-bold">AS</span>
              </div>
              {sidebarOpen && (
                <span className="text-white font-montserrat font-bold text-lg">
                  Admin Panel
                </span>
              )}
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              {sidebarItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-cyber-green text-dark-navy font-semibold'
                        : 'text-gray-300 hover:bg-dark-bg hover:text-cyber-green'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    {sidebarOpen && <span>{item.name}</span>}
                  </Link>
                );
              })}
            </nav>

            {/* Logout Button */}
            <div className="absolute bottom-4 left-4 right-4">
              <button
                onClick={handleLogout}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-red-400 hover:bg-red-400/20 transition-all duration-200 w-full ${
                  !sidebarOpen && 'justify-center'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                {sidebarOpen && <span>Logout</span>}
              </button>
            </div>
          </div>
        </motion.aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Top Bar */}
          <header className="bg-dark-bg border-b border-gray-700 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="text-gray-400 hover:text-cyber-green transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <h1 className="text-xl font-semibold text-white">
                  Portfolio Admin
                </h1>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-gray-300">Welcome, Abhay</span>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button-outline text-sm px-4 py-2"
                >
                  View Site
                </a>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/projects" element={<ProjectsManager />} />
                <Route path="/blog" element={<BlogManager />} />
                <Route path="/skills" element={<SkillsManager />} />
                <Route path="/certificates" element={<CertificatesManager />} />
                <Route path="/messages" element={<MessagesManager />} />
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;