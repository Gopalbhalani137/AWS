import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const EventCard = ({ event }) => (
  <motion.div
    className="md:max-w-sm w-72 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.3, ease: 'easeInOut' },
    }}
  >
    <a>
      <img
        className=""
        src={event.photo}
        alt={`Event by ${event.chiefGuest}`}
      />
    </a>
    <div className="p-5">
      <a>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {event.chiefGuest}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {event.description}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Date: {event.date}
      </p>
      <Link to={`/event/${event.id}`}>
      <a
        href={`/${event.id}`}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-transparent bg-[#ffffff] rounded-lg"
      >
        Read more
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
      </Link>
      
    </div>
  </motion.div>
);

export default EventCard;