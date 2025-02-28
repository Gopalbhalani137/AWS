import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QASection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // FAQ data
  const faqs = [
    {
      question: "How can I join the Tech Club?",
      answer: "Joining is easy! Simply click the 'Join Club' button in the navbar, fill out a quick application form, and our team will review your application within 48 hours. We welcome members of all skill levels and backgrounds."
    },
    {
      question: "What kind of events does the Tech Club organize?",
      answer: "We organize a diverse range of events including workshops, hackathons, tech talks, networking sessions, coding competitions, and collaborative project development. Our events cater to various tech interests and skill levels."
    },
    {
      question: "Do I need prior coding experience to join?",
      answer: "Not at all! While some members are experienced developers, many join with little to no coding experience. We provide resources, mentorship, and beginner-friendly workshops to help you start your tech journey."
    },
    {
      question: "How can I contribute to club projects?",
      answer: "After joining, you'll gain access to our project repository and Slack channels. You can browse ongoing projects, join project teams that interest you, or propose your own ideas during our monthly project pitch sessions."
    },
    {
      question: "Are there any membership fees?",
      answer: "Basic membership is completely free! However, we do offer a premium membership tier for $15/semester which includes exclusive workshops, priority registration for limited-seat events, and special industry networking opportunities."
    }
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" py-20 px-4 bg-[#040e15]" id="faq-section">
      <div className="max-w-4xl mx-auto">
        {/* Section Header with animation */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span 
            className="text-sm font-mono tracking-wider text-blue-400 uppercase mb-2 inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Get Answers
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-6 rounded-full opacity-80"></div>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto font-light">
            Find answers to common questions about our Tech Club. We're here to help you get started on your tech journey.
          </p>
        </motion.div>

        {/* Q&A Accordion */}
        <div className="space-y-5 mb-20">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01, boxShadow: "0 10px 30px -15px rgba(0, 128, 255, 0.25)" }}
              layoutId={`question-${index}`}
            >
              <button
                className="w-full px-8 py-5 text-left flex justify-between items-center focus:outline-none group"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium text-white text-lg tracking-wide group-hover:text-blue-400 transition-colors duration-300">
                  {faq.question}
                </span>
                <motion.div
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-colors duration-300"
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <motion.div 
                      className="px-8 pb-6 text-blue-100 font-light leading-relaxed text-lg"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Us Section */}
        <motion.div 
          className="backdrop-blur-md rounded-xl p-10 text-center border border-white/10 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ boxShadow: "0 0 40px rgba(59, 130, 246, 0.15)" }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <motion.div 
              className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-10 blur-3xl"
              style={{ background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)" }}
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 180, 270, 360],
                opacity: [0.1, 0.15, 0.1] 
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute bottom-10 right-10 w-24 h-24 rounded-full opacity-10 blur-3xl"
              style={{ background: "linear-gradient(135deg, #818cf8 0%, #6366f1 100%)" }}
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [360, 270, 180, 90, 0],
                opacity: [0.1, 0.15, 0.1] 
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          {/* Content */}
          <motion.div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4 font-sans tracking-tight">Still have questions?</h3>
            <p className="text-blue-200 mb-8 text-lg max-w-xl mx-auto font-light leading-relaxed">
              Our team is here to help! Reach out to us directly and we'll get back to you as soon as possible.
            </p>
            <motion.button
              className="
                px-8 py-4 
                bg-blue-600 
                text-white font-medium rounded-full
                hover:bg-blue-500
                transition-all duration-300
                shadow-lg shadow-blue-500/30
                text-lg tracking-wide
                flex items-center mx-auto
              "
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -10px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Contact Us</span>
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default QASection;