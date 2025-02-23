import React from 'react';
import { motion } from 'framer-motion';
import EventCard from './EventCard';

const eventsData = [
  {
    id: 1,
    photo: 'image1.jpg',
    description:
      'AWS experts Jen Looper & Nilesh Vaghela for insights on AWS leadership, cloud computing, and community building.',
    chiefGuest: 'Dr. Jen Looper',
    date: '23 September 2024',
  },
  {
    id: 2,
    photo: 'image1.jpg',
    description:
      'AWS experts Jen Looper & Nilesh Vaghela for insights on AWS leadership, cloud computing, and community building.',
    chiefGuest: 'Dr. Jen Looper',
    date: '23 September 2024',
  },
];

const Events = () => {
  return (
    <div className="events-container bg-[#040e15] text-white flex flex-col items-center py-8 md:pt-24 pt-36">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-cyan-200 to-[#78D3E3] text-transparent bg-clip-text md:pb-10 text-5xl font-bold text-center mb-4"
      >
        Events
      </motion.h1>
      {/* Animated and continuously pulsing horizontal line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100px' }}
        animate={{ scaleX: [1, 1.1, 1] }}
        transition={{
          width: { duration: 1, ease: 'easeOut' },
          scaleX: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
        }}
        viewport={{ once: true }}
        className="h-1 bg-gradient-to-r from-cyan-200 to-[#78D3E3] mb-8"
      />
      <div className="spinner">
        <div className="spinner__progress"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 relative pt-6 z-4">
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;