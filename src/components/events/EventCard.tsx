import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EventType } from '../../types';

interface EventCardProps {
  event: EventType;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  // Format the date
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow transform hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="relative w-full aspect-video overflow-hidden">
        <img
          src={event.coverImage}
          alt={event.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-0 right-0 bg-primary-500 text-white py-1 px-3 rounded-bl-lg font-lato text-sm capitalize">
          {event.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-montserrat font-bold text-xl text-navy-700 mb-2">
          {event.title}
        </h3>
        
        
        
        <p className="font-lato text-gray-700 mb-6 line-clamp-3">
          {event.shortDescription}
        </p>
        
        <Link
          to={`/events/${event.id}`}
          className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-lato py-2 px-4 rounded-md transition-colors"
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
};

export default EventCard;