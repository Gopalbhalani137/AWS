import React from 'react';
import { motion } from 'framer-motion';

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
    </div>
  </motion.div>
);

export default EventCard;


// import React from 'react';
// import { motion } from 'framer-motion';

// const EventCard = ({ event }) => (
//   <motion.div
//     className="md:max-w-sm w-72 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 relative overflow-hidden cursor-pointer transition-transform duration-500 hover:translate-y-5 hover:shadow-lg"
//     whileHover={{ scale: 1.05 }}
//   >
//     <div className="relative">
//       <img
//         src={event.photo}
//         alt={`Event by ${event.chiefGuest}`}
//         className="w-full h-64 object-cover rounded-t-lg transition-opacity duration-500 hover:opacity-50"
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 flex items-end p-5 transition-opacity duration-500">
//         <div className="text-white">
//           <h5 className="text-2xl font-bold">{event.chiefGuest}</h5>
//           <p className="text-sm mt-2">{event.description}</p>
//           <p className="text-sm mt-2">Date: {event.date}</p>
//           <a
//             href={`/${event.id}`}
//             className="mt-4 inline-block px-4 py-2 text-sm font-medium bg-white text-black rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-300"
//           >
//             Read more
//           </a>
//         </div>
//       </div>
//     </div>
//   </motion.div>
// );

// export default EventCard;

// import React from 'react';
// import { motion } from 'framer-motion';

// const EventCard = ({ event }) => (
//   <motion.div
//     className="md:max-w-sm w-72 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 relative overflow-hidden cursor-pointer transition-transform duration-500 hover:translate-y-5 hover:shadow-lg"
//     whileHover={{ scale: 1.05 }}
//   >
//     <div className="relative">
//       <img
//         src={event.photo}
//         alt={`Event by ${event.chiefGuest}`}
//         className="w-full h-64 object-cover rounded-t-lg transition-opacity duration-500 hover:opacity-50"
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 flex items-end p-5 transition-opacity duration-500">
//         <div className="text-white">
//           <h5 className="text-2xl font-bold">{event.chiefGuest}</h5>
//           <p className="text-sm mt-2 line-clamp-3">{event.description}</p>
//           <p className="text-sm mt-2">Date: {event.date}</p>
//           <a
//             href={`/${event.id}`}
//             className="mt-4 inline-block px-4 py-2 text-sm font-medium bg-white text-black rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-300"
//           >
//             Read more
//           </a>
//         </div>
//       </div>
//     </div>
//   </motion.div>
// );

// export default EventCard;
