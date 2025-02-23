import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ArrowLeft } from 'lucide-react';
import FloatingDots from '../Utils/FloatingDots';
// import EventCard from '../components/EventCard';
import EventPage from '../components/EventPage';
import { link, title } from 'framer-motion/client';
const eventsData = [
  {
    id: 1,
    Title:'AWS Cloud Innovation Workshop',
    Tagline:'A Journey into Cloud Excellence',
    Date: 'February 15, 2024',
    Time: '11:00 AM - 2:00 PM',
    Location: 'Main Auditorium, Adani University',
    Attendees: '100+ Attendees',
    Maincontent:{
      topic:'A Memorable Event at Adani University!',
      description:'We recently had the privilege of hosting two incredible industry leaders: Jen Looper, Head of Academic Advocacy at AWS, and Mr. Nilesh Vaghela, AWS Community Hero and Founder of ElectroMech & CloudKida. The event brought together over 100 students passionate about cloud computing and AWS technologies.',
      about:{
        1:{
          title:'Leadership Insights from Jen Looper',
          description:' Jen Looper shared her inspiring life journey, highlighting the importance of AWS Leadership Principles. Her session focused on core values that drive success in the cloud computing industry:',
          points:[
            'Customer Obsession - Putting customers first in every decision',
            'Ownership - Taking responsibility and thinking long-term',
            'Invent and Simplify - Finding innovative solutions to complex problems',
            'Dive Deep & Learn - Understanding root causes and continuously learning',
            'Be Curious - Exploring new possibilities and staying innovative',
          ],
        },
        2:{
          title:'Technical Deep-Dive with Mr. Nilesh Vaghela',
          description:' Mr. Vaghela provided valuable insights into real-world AWS applications, focusing on:',
          points:[
            'Industry case studies of AWS technology implementation',
            'Optimizing data processing for better decision-making',
            'S3 lifecycle policies for efficient data management',
            'Building intelligent chatbots with Amazon Lex',
            'Enhancing user experience on data-intensive platforms',
          ],
        }
      }
    },
    guest:{
      guest1:{
        name:'Dr. Jen Looper',
        designation:'Head of Academic Advocacy, AWS',
        photo:'https://www.jenlooper.com/jen.jpg',
        linkedin:'https://linkedin.com/in/jenlooper',
        twitter:'https://twitter.com/jenlooper',
      },
      guest2:{
        name:'Nilesh Vaghela',
        designation:'AWS Community Builder, AWS',
        photo:'https://www.jenlooper.com/jen.jpg',
        linkedin:'https://linkedin.com/in/jenlooper',
        twitter:'https://twitter.com/jenlooper',
      },
    },

  },
];
const EventDetail=() => {
  const { id } = useParams();
  const event = eventsData.find((event) => event.id === Number(id));
  if (!event) {
    return <h2 className="text-center text-red-500">Event Not Found</h2>;
  }
  return (
    <>
      <FloatingDots />
      <div className="container mx-auto px-4 py-8">
        <EventPage event={event} />
      </div>
    </>
    
  );

}
export default EventDetail;