import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <footer className="relative overflow-hidden pt-16 pb-10 border-t border-white/10">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Logo and Description */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white">
                <span className="text-blue-400">Tech</span>Club
              </h2>
            </div>
            <p className="text-blue-100 text-sm mb-6 leading-relaxed">
              Join our vibrant community of tech enthusiasts, developers, and innovators. 
              We host events, hackathons, and workshops to help you grow your skills.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {[
                { icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z", name: "Website", url: "#" },
                { icon: "M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z", name: "Instagram", url: "https://instagram.com" },
                { icon: "M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0", name: "Facebook", url: "https://facebook.com" },
                { icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z", name: "Twitter", url: "https://twitter.com" },
                { icon: "M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zM8.95 9.4H6.16v10.5h2.8V9.4h-.01zm1.35-4.58a1.64 1.64 0 0 0-1.82 1.62 1.64 1.64 0 0 0 1.64 1.64 1.64 1.64 0 0 0 1.82-1.64 1.65 1.65 0 0 0-1.64-1.62zM20 12.27c0-2.62-1.63-3.9-3.7-3.9a3.5 3.5 0 0 0-3.19 1.88h-.04V9.4h-2.8v10.5h2.8v-5.53a2.1 2.1 0 0 1 1.91-2.29c1.03 0 1.74.62 1.74 2.2v5.62H20V12.27z", name: "LinkedIn", url: "https://linkedin.com" },
                { icon: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z", name: "Gmail", url: "mailto:contact@techclub.com" },
                { icon: "M19.952 5.672a1.36 1.36 0 00-2.375-1.348 12.035 12.035 0 00-1.992 3.234 14.88 14.88 0 00-1.372-.916c-.083-.05-.171-.097-.256-.145a9.173 9.173 0 00-1.11-.533 8.17 8.17 0 00-.89-.314c-.052-.016-.105-.032-.158-.046a6.936 6.936 0 00-.855-.177c-.078-.012-.156-.022-.235-.031a6 6 0 00-1.146-.006 6.385 6.385 0 00-1.336.198c-.045.013-.09.027-.134.04a5.356 5.356 0 00-.777.312c-.044.02-.088.041-.13.063a5.115 5.115 0 00-1.11.745 4.504 4.504 0 00-.834 1.446 4.04 4.04 0 00-.189 1.104c-.01.132-.01.265-.001.397.034.443.107.873.269 1.278.249.628.7 1.176 1.222 1.592.468.372.997.681 1.55.897.855.336 1.74.572 2.633.746.072.014.145.027.218.04.527.093 1.057.165 1.592.212l.06.005c.119.01.24.022.36.03.11.007.22.01.33.011.192.001.384-.005.576-.019.248-.019.493-.05.735-.098l.066-.012c.132-.025.265-.058.394-.095 1.36-.39 2.504-1.231 3.136-2.552.206-.428.312-.893.298-1.36a2.11 2.11 0 00-.238-.96 1.78 1.78 0 00-.892-.818 2.597 2.597 0 00-.382-.127 2.01 2.01 0 00-.833.01c.138-.386.294-.758.466-1.114l.9.009c1.16 1.13 1.973 2.571 2.336 4.198.187.836.364 1.698.211 2.551-.3 1.67-.926 3.223-2.01 4.481a9.862 9.862 0 01-3.63 2.746 11.619 11.619 0 01-4.55.803c-.779-.033-1.54-.19-2.28-.41l-.066-.022a10.344 10.344 0 01-1.986-.858c-2.004-1.148-3.548-3.05-4.35-5.263-.56-1.546-.596-3.207-.447-4.828.17-1.829.912-3.565 2.056-4.957 1.048-1.273 2.923-1.958 4.523-1.736.16.022.32.049.478.08l.173.029a7.08 7.08 0 11.146.24c.18.035.36.073.536.113.096.022.192.045.288.07a9.803 9.803 0 011.391.45c.308.125.609.261.904.408.077.038.156.069.235.108.101.05.189.12.276.183.325.243.624.508.894.795a4.27 4.27 0 11.116 1.489z", name: "Discord", url: "https://discord.com" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.name}
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5"
                  >
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-5">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Events', 'Projects', 'Team', 'Blogs'].map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-blue-100 hover:text-blue-400 transition-colors duration-300 flex items-center text-sm"
                  >
                    <svg className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-5">Resources</h3>
            <ul className="space-y-2">
              {['Hackathons', 'Tutorials', 'Documentation', 'FAQ', 'Community', 'Support'].map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-blue-100 hover:text-blue-400 transition-colors duration-300 flex items-center text-sm"
                  >
                    <svg className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-5">Stay Updated</h3>
            <p className="text-blue-100 text-sm mb-4">
              Subscribe to our newsletter for the latest updates, events, and tech news.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              <motion.button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-4 py-2 font-medium transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-100">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-4 md:mb-0"
          >
            © {new Date().getFullYear()} TechClub. All rights reserved.
          </motion.p>
          <div className="flex space-x-6">
            <motion.a 
              href="#privacy" 
              className="hover:text-blue-400 transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#terms" 
              className="hover:text-blue-400 transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              Terms of Service
            </motion.a>
            <motion.a 
              href="#contact" 
              className="hover:text-blue-400 transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              Contact Us
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;