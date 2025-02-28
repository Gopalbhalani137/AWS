import React from 'react'
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ArrowLeft } from 'lucide-react';
import FloatingDots from '../Utils/FloatingDots';
const EventPage = ({event}) => {
  return (
    <div>
      <section className="relative w-full min-h-screen">
      <div
        className="w-full h-full fixed inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('https://assets-global.website-files.com/6534e2876a9176ae6b44f345/653e549bdeea6f44f706a6aa_hero%20imgv3-p-2000.webp')",
          zIndex: -10,
        }}
      />
      <FloatingDots />
      <div className="relative z-10 container mx-auto md:pl-16 px-4">
        {/* Back navigation */}
        {/* <Link 
          to="/events" 
          className="inline-flex items-center text-cyan-200 hover:text-white transition-all duration-300 group mb-8"
        > */}
          <Link to="/">
        <div className='flex flex-row items-center md:pt-8 transition-all duration-300 group mb-8'>
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300 " />
          <span>Back to Events</span>
        </div>
          </Link>
        {/* </Link> */}
        {/* Main content card */}
        <div className="bg-gradient-to-b from-[#1a1f2e]/80 to-[#161e2d]/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/5 mt-10">
          {/* Header Section */}
          <div className="text-center py-12 px-4 border-b border-white/5">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-200 to-blue-400 text-transparent bg-clip-text mb-4">
              {event.Title}
            </h1>
            <p className="text-xl text-cyan-200">
              {event.Tagline}
            </p>
          </div>
          {/* Event Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
            {/* Date Card */}
            <div className="bg-white/5 hover:bg-white/10 transition-all duration-300 p-6 rounded-xl border border-white/10 hover:border-cyan-200/30">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-3 text-cyan-200" />
                <span className="text-white">{event.Date}</span>
              </div>
            </div>
            {/* Time Card */}
            <div className="bg-white/5 hover:bg-white/10 transition-all duration-300 p-6 rounded-xl border border-white/10 hover:border-cyan-200/30">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-cyan-200" />
                <span className="text-white">{event.Time}</span>
              </div>
            </div>
            {/* Location Card */}
            <div className="bg-white/5 hover:bg-white/10 transition-all duration-300 p-6 rounded-xl border border-white/10 hover:border-cyan-200/30">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-cyan-200" />
                <span className="text-white">{event.Location}</span>
              </div>
            </div>
            {/* Attendees Card */}
            <div className="bg-white/5 hover:bg-white/10 transition-all duration-300 p-6 rounded-xl border border-white/10 hover:border-cyan-200/30">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-3 text-cyan-200" />
                <span className="text-white">{event.Attendees}</span>
              </div>
            </div>
          </div>
          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 p-8 pt-0">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">🌟{event.Maincontent.topic}</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                {event.Maincontent.description}
                </p>
                {Object.values(event.Maincontent.about).map((section, idx) => (
                  <div key={idx} className="mb-8">
                    <h4 className="text-xl font-bold text-white mb-4">{section.title}</h4>
                    <p className="text-gray-200 leading-relaxed mb-4">{section.description}</p>
                    <ul className="list-disc list-inside text-gray-200 space-y-2">
                      {section.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Speaker Profile */}
              {event?.guest && Object.values(event.guest).map((guest, index) => (
  <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-200/30 transition-all duration-300">
    <div className="flex items-center mb-6">
      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
        <img src={guest.photo} alt={guest.name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{guest.name}</h3>
        <p className="text-cyan-200">{guest.designation}</p>
      </div>
    </div>
    <div className="flex gap-4 justify-center">
                  <a href={guest.twitter} target="_blank" rel="noopener noreferrer" 
                    className="text-white hover:text-cyan-200 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href={guest.linkedin} target="_blank" rel="noopener noreferrer" 
                    className="text-white hover:text-cyan-200 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
  </div>
))}

              {/* Event Tags */}
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-cyan-200/10 hover:bg-cyan-200/20 transition-colors duration-300 text-cyan-200 rounded-full text-sm">#AWSCommunity</span>
                  <span className="px-4 py-2 bg-cyan-200/10 hover:bg-cyan-200/20 transition-colors duration-300 text-cyan-200 rounded-full text-sm">#CloudComputing</span>
                  <span className="px-4 py-2 bg-cyan-200/10 hover:bg-cyan-200/20 transition-colors duration-300 text-cyan-200 rounded-full text-sm">#Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
export default EventPage
