import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Filter } from 'lucide-react';
import EventCard from '../components/events/EventCard';
import { events } from '../data/mockData';
import { EventType } from '../types';

const EventsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.category === filter);

  // Get unique categories
  const categories = ['all', ...new Set(events.map(event => event.category))];

  return (
    <>
      <Helmet>
        <title>Events - Shri Sai Education Trust</title>
        <meta name="description" content="Explore our past and upcoming events. Join us in making a difference in communities through various social and environmental initiatives." />
      </Helmet>

      <div className="pt-20"> {/* Padding to account for fixed navbar */}
        <div className="bg-navy-700 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-4">
                Our Events
              </h1>
              <div className="h-1 w-20 bg-accent-500 mx-auto mb-6"></div>
              <p className="font-lato text-lg text-gray-300 max-w-3xl mx-auto">
                Discover our initiatives and join us in creating lasting change. 
                Browse through our events below.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="py-16 bg-secondary-50">
          <div className="container mx-auto px-4">
            {/* Filters */}
            <div className="mb-10 flex items-center flex-wrap gap-4">
              <div className="flex items-center text-navy-700 mr-4">
                <Filter className="h-5 w-5 mr-2" />
                <span className="font-montserrat font-semibold">Filter:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`py-2 px-4 rounded-full font-lato text-sm transition-colors ${
                      filter === category
                        ? 'bg-primary-500 text-white'
                        : 'bg-white text-navy-700 hover:bg-primary-100'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Events grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>

            {/* No events message */}
            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <p className="font-lato text-lg text-gray-600">
                  No events found in this category. Please check back later or try another category.
                </p>
              </div>
            )}

            {/* More events callout */}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPage;