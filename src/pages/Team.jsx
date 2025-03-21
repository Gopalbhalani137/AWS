import React, { useEffect, useRef } from 'react';

const TeamData = [
  {
    title: 'Our Coordinator Team',
    members: {
      member1: {
        name: 'Ayan Parmar',
        role: 'Lead Coordinator',
        photo: '',
        linkedin: 'https://linkedin.com/in/jenlooper',
        twitter: 'https://twitter.com/jenlooper',
      },
      member2: {
        name: 'Hitansh Dave',
        role: 'Project Coordinator',
        photo: 'https://www.jenlooper.com/jen.jpg',
        linkedin: 'https://linkedin.com/in/jenlooper',
        twitter: 'https://twitter.com/jenlooper',
      },
      member3: {
        name: 'Akshat',
        role: 'Event Coordinator',
        photo: 'https://www.jenlooper.com/jen.jpg',
        linkedin: 'https://linkedin.com/in/jenlooper',
        twitter: 'https://twitter.com/jenlooper',
      },
      member4: {
        name: 'Priyanshi',
        role: 'Operations Coordinator',
        photo: 'https://www.jenlooper.com/jen.jpg',
        linkedin: 'https://linkedin.com/in/jenlooper',
        twitter: 'https://twitter.com/jenlooper',
      },
      member5: {
        name: 'Sharanya Nagar',
        role: 'Communications Coordinator',
        photo: 'https://www.jenlooper.com/jen.jpg',
        linkedin: 'https://linkedin.com/in/jenlooper',
        twitter: 'https://twitter.com/jenlooper',
      },
    }
  }, 
  {
    title: 'Our Creative Team',
    members: {
      member1: {
        name: 'Vidhi patel',
        role: 'Creative Director',
        photo: 'Photos/vidhi.jpg',
        linkedin: 'https://linkedin.com/in/jenlooper',
        twitter: 'https://twitter.com/jenlooper',
      },
      member2: {
        name: 'Dhwani Mystery',
        role: 'Visual Designer',
        photo: 'https://www.jenlooper.com/jen.jpg',
        linkedin: 'https://linkedin.com/in/jenlooper',
        twitter: 'https://twitter.com/jenlooper',
      }, 
      member3: {
        name: 'Helie Wadia',
        role: 'Content Creator',
        photo: 'https://www.jenlooper.com/jen.jpg',
        linkedin: 'https://linkedin.com/in/jenlooper',
        twitter: 'https://twitter.com/jenlooper',
      },
    }
  }, 
  {
    title: 'Our WebSite Management Team',
    members: {
      member1: {
        name: 'Gopal Bhalani',
        role: 'Lead Developer',
        photo: '/Photos/Gopal.jpg',
        linkedin: 'https://linkedin.com/in/jenlooper',
        twitter: 'https://twitter.com/jenlooper',
      },
      member2: {
        name: 'Yash Patel',
        role: 'Frontend Developer',
        photo: '/Photos/Yash.jpg',
        linkedin: 'https://linkedin.com/in/jenlooper',
        twitter: 'https://twitter.com/jenlooper',
      },
      member3: {
        name: 'Kaushal Vadher',
        role: 'Backend Developer',
        photo: 'https://www.jenlooper.com/jen.jpg',
        linkedin: 'https://linkedin.com/in/jenlooper',
        twitter: 'https://twitter.com/jenlooper',
      },
      member4: {
        name: 'Siddhant',
        role: 'UI/UX Developer',
        photo: '/Photos/Siddhant.jpeg',
        linkedin: 'https://linkedin.com/in/jenlooper',
        twitter: 'https://twitter.com/jenlooper',
      },
      member5: {
        name: 'Jainil Patel',
        role: 'DevOps Specialist',
        photo: '/Photos/jainil.jpg',
        linkedin: 'https://www.linkedin.com/in/jainil-patel-92a97b256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
        twitter: 'https://twitter.com/jenlooper',
      },
      member6: {
        name: 'Ansh patel',
        role: 'QA Engineer',
        photo: '/Photos/ansh.jpg',
        linkedin: 'https://www.linkedin.com/in/ansh-patel-114625202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        twitter: 'https://twitter.com/jenlooper',
      },
    }
  },
  {
    title: 'Our Social Media Team',
    members: {
      member1: {
        name: 'Aditya Jani',
        role: 'Social Media Strategist',
        photo: '',
        linkedin: '',
        twitter: '',
      },
      member2: {
        name: 'Shivam',
        role: 'Content Manager',
        photo: '',
        linkedin: '',
        twitter: '',
      },
    }
  },
];

const Team = () => {
  // Create refs for animation elements
  const sectionRefs = useRef([]);
  const observerRef = useRef(null);

  // Function to handle back button click
  const handleBackClick = () => {
    window.history.back();
  };

  useEffect(() => {
    // Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    // Target all the elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        animatedElements.forEach((el) => observerRef.current.unobserve(el));
      }
    };
  }, []);

  // Add CSS for animations and styling
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes pulse {
        0%, 100% {
          box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.2);
        }
        50% {
          box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
        }
      }
      
      .animate-on-scroll {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67);
      }
      
      .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
      
      .section-title {
        position: relative;
        display: inline-block;
        padding-bottom: 12px;
      }
      
      .section-title::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 4px;
        background: linear-gradient(90deg, #3B82F6, #60A5FA);
        border-radius: 4px;
      }
      
      .card-hover {
        transition: all 0.3s ease;
      }
      
      .card-hover:hover {
        transform: scale(1.02);
        border-color: rgba(59, 130, 246, 0.5);
        box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.1), 
                    0 8px 10px -6px rgba(59, 130, 246, 0.1);
      }
      
      .card-shine {
        position: relative;
        overflow: hidden;
      }
      
      .social-icon {
        transition: all 0.3s ease;
      }
      
      .social-icon:hover {
        transform: translateY(-3px);
        color: #3B82F6;
      }
      
      .team-card {
        transition: all 0.3s ease;
        border: 2px solid transparent;
        position: relative;
        z-index: 1;
      }
      
      .gradient-bg-1 {
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%);
      }
      
      .gradient-bg-2 {
        background: linear-gradient(135deg, rgba(236, 72, 153, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%);
      }
      
      @keyframes floatAnimation {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      
      .floating-shape {
        animation: floatAnimation 8s ease-in-out infinite;
      }
      
      .team-title-gradient {
        background: linear-gradient(90deg, #3B82F6, #8B5CF6);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        display: inline;
      }
      
      .role-badge {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.025em;
        line-height: 1.25;
        transition: all 0.2s ease;
        background: linear-gradient(90deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
        color: #3B82F6;
      }
      
      .dark .role-badge {
        background: linear-gradient(90deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
        color: #60A5FA;
      }
      
      .team-card:hover .role-badge {
        background: linear-gradient(90deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
      }
      
      .dark .team-card:hover .role-badge {
        background: linear-gradient(90deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3));
      }
      
      .back-button {
        display: inline-flex;
        align-items: center;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        font-weight: 600;
        transition: all 0.2s ease;
        background-color: white;
        color: #3B82F6;
        border: 1px solid rgba(59, 130, 246, 0.2);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
      }
      
      .back-button:hover {
        background-color: #f0f7ff;
        box-shadow: 0 4px 8px rgba(59, 130, 246, 0.1);
        transform: translateY(-1px);
      }
      
      .dark .back-button {
        background-color: rgba(30, 41, 59, 0.8);
        color: #60A5FA;
        border: 1px solid rgba(96, 165, 250, 0.2);
      }
      
      .dark .back-button:hover {
        background-color: rgba(30, 41, 59, 1);
        box-shadow: 0 4px 8px rgba(59, 130, 246, 0.15);
      }
      
      .back-icon {
        margin-right: 0.5rem;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Function to render a single team member
  const renderTeamMember = (member, index) => {
    return (
      <div 
        className="animate-on-scroll opacity-0 card-hover"
        key={member.name + index}
        style={{ 
          transitionDelay: `${index * 100}ms`,
        }}
      >
        <div className="team-card bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden card-shine transition-all duration-300">
          <div className="aspect-square overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
            {member.photo ? (
              <img
                className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                src={member.photo}
                alt={`${member.name}`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.parentNode.innerHTML = `
                    <div class="w-full h-full bg-gradient-to-br from-blue-400/20 to-indigo-500/20 dark:from-blue-500/20 dark:to-indigo-600/20 flex items-center justify-center">
                      <span class="text-5xl font-bold bg-gradient-to-br from-blue-500 to-indigo-600 text-transparent bg-clip-text">
                        ${member.name.charAt(0)}
                      </span>
                    </div>
                  `;
                }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-indigo-500/20 dark:from-blue-500/20 dark:to-indigo-600/20 flex items-center justify-center">
                <span className="text-5xl font-bold bg-gradient-to-br from-blue-500 to-indigo-600 text-transparent bg-clip-text">
                  {member.name.charAt(0)}
                </span>
              </div>
            )}
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {member.name}
            </h3>
            {member.role && (
              <p className="mt-2">
                <span className="role-badge">
                  {member.role}
                </span>
              </p>
            )}
            
            <div className="flex mt-4 space-x-3">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  className="social-icon text-gray-500 hover:text-[#0077b5] dark:text-gray-400 dark:hover:text-[#0077b5]"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s LinkedIn profile`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
              {member.twitter && (
                <a
                  href={member.twitter}
                  className="social-icon text-gray-500 hover:text-[#00acee] dark:text-gray-400 dark:hover:text-[#00acee]"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s Twitter profile`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Function to render a team section
  const renderTeamSection = (teamSection, sectionIndex) => {
    // Convert members object to array
    const membersArray = Object.values(teamSection.members);
    
    // Alternate section styles
    const sectionClasses = sectionIndex % 2 === 0 
      ? 'gradient-bg-1' 
      : 'gradient-bg-2';
    
    return (
      <div key={sectionIndex}>
        {sectionIndex > 0 && (
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50 dark:from-transparent dark:to-gray-800/50"></div>
          </div>
        )}
        
        <div 
          ref={el => (sectionRefs.current[sectionIndex] = el)}
          className={`team-section py-24 ${sectionClasses}`}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="mb-16 animate-on-scroll opacity-0">
              <h2 className="section-title text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-10 inline-block">
                {teamSection.title}
              </h2>
            </div>

            <div className="grid gap-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {membersArray.map((member, index) => renderTeamMember(member, index))}
            </div>
          </div>
          
          {/* Decorative floating elements */}
          <div className="absolute right-0 top-24 w-64 h-64 bg-blue-400/5 dark:bg-blue-400/10 rounded-full blur-3xl floating-shape" style={{ animationDelay: '0s' }}></div>
          <div className="absolute left-0 bottom-24 w-80 h-80 bg-purple-400/5 dark:bg-purple-400/10 rounded-full blur-3xl floating-shape" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    );
  };

  // Decorative shapes for the background
  const renderBackgroundElements = () => {
    return (
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/5 rounded-full mix-blend-multiply blur-3xl floating-shape" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/5 rounded-full mix-blend-multiply blur-3xl floating-shape" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-indigo-400/10 dark:bg-indigo-600/5 rounded-full mix-blend-multiply blur-3xl floating-shape" style={{ animationDelay: '5s' }}></div>
      </div>
    );
  };

  // Back button component
  const renderBackButton = () => {
    return (
      <div className="container mx-auto px-4 pt-6">
        <button 
          onClick={handleBackClick} 
          className="back-button"
          aria-label="Go back"
        >
          <svg className="back-icon w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>
      </div>
    );
  };

  return (
    <div className="relative bg-gradient-to-b w-screen from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {renderBackgroundElements()}
      
      {/* Back Button at the top */}
      {renderBackButton()}
      
      <div className="pt-16 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll opacity-0">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
              Meet Our <span className="team-title-gradient">Amazing Team</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The dedicated professionals who bring our vision to life through creativity, innovation, and passion
            </p>
          </div>
        </div>
      </div>
      
      {/* Map through all team sections and display them */}
      {TeamData.map((teamSection, index) => renderTeamSection(teamSection, index))}
    </div>
  );
};

export default Team;