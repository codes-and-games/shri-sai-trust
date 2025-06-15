import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, MapPin, ArrowLeft, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { EventType } from '../types';
import { events } from '../data/mockData';
import VideoPlayer from '../components/shared/VideoPlayer';

const EventDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventType | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the event by ID
    const foundEvent = events.find((e) => e.id === id);
    
    if (foundEvent) {
      setEvent(foundEvent);
    } else {
      setNotFound(true);
    }
    
    setLoading(false);
  }, [id]);

  // Format the date


  // Image gallery navigation
  const nextImage = () => {
    if (event) {
      setCurrentImage((prev) => (prev === event.gallery.length - 1 ? 0 : prev + 1));
    }
  };

  const prevImage = () => {
    if (event) {
      setCurrentImage((prev) => (prev === 0 ? event.gallery.length - 1 : prev - 1));
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="pt-20 h-screen flex flex-col items-center justify-center bg-secondary-50">
        <h2 className="font-montserrat font-bold text-3xl text-navy-700 mb-4">Event Not Found</h2>
        <p className="font-lato text-gray-600 mb-8">The event you're looking for doesn't exist or may have been removed.</p>
        <Link
          to="/events"
          className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-lato py-3 px-6 rounded-md transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to All Events</span>
        </Link>
      </div>
    );
  }

  if (!event) return null;

  return (
    <>
      <Helmet>
        <title>{event.title} - GivingHands NGO</title>
        <meta name="description" content={event.shortDescription} />
      </Helmet>

      <div className="pt-20 bg-secondary-50 min-h-screen"> {/* Padding to account for fixed navbar */}
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-navy-900/50 z-10"></div>
          <img
            src={event.coverImage}
            alt={event.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  to="/events"
                  className="inline-flex items-center text-white mb-6 hover:text-primary-200 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  <span>Back to All Events</span>
                </Link>
                <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-4">
                  {event.title}
                </h1>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Description */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-10">
                  <h2 className="font-montserrat font-bold text-2xl text-navy-700 mb-6">
                    About This Event
                  </h2>
                  <div className="font-lato text-gray-700 space-y-4">
                    {event.description.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="font-montserrat font-bold text-2xl text-navy-700 mb-6">
                    Photo Gallery
                  </h2>

                  {/* Main image display */}
                  <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                    <img
                      src={event.gallery[currentImage]}
                      alt={`${event.title} - Image ${currentImage + 1}`}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Navigation arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                    
                    {/* Image counter */}
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white py-1 px-3 rounded-full text-sm">
                      {currentImage + 1} / {event.gallery.length}
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="grid grid-cols-5 gap-2">
                    {event.gallery.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`aspect-square rounded overflow-hidden ${
                          index === currentImage ? 'ring-2 ring-primary-500' : ''
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                {/* Event Actions */}
                

                {/* Related Content */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="font-montserrat font-bold text-xl text-navy-700 mb-4">
                    Related Events
                  </h3>
                  <div className="space-y-4">
                    {events
                      .filter(e => e.id !== event.id && e.category === event.category)
                      .slice(0, 2)
                      .map(relatedEvent => (
                        <Link
                          key={relatedEvent.id}
                          to={`/events/${relatedEvent.id}`}
                          className="block group"
                        >
                          <div className="flex gap-3">
                            <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
                              <img
                                src={relatedEvent.coverImage}
                                alt={relatedEvent.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div>
                              <h4 className="font-montserrat font-semibold text-navy-700 group-hover:text-primary-600 transition-colors">
                                {relatedEvent.title}
                              </h4>
                            </div>
                          </div>
                        </Link>
                      ))}
                    
                    {events.filter(e => e.id !== event.id && e.category === event.category).length === 0 && (
                      <p className="font-lato text-gray-600">
                        No related events found.
                      </p>
                    )}
                  </div>
                </div>

                {/* Video Feature */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="font-montserrat font-bold text-xl text-navy-700 mb-4">
                    Featured Video
                  </h3>
                  <div className="rounded-lg overflow-hidden">
                    <VideoPlayer 
                      src="https://player.vimeo.com/external/517090081.hd.mp4?s=efdb0500657091849ae95877c73cbaf8f2076c7b&profile_id=174"
                      className="aspect-video"
                    />
                  </div>
                  <p className="font-lato text-gray-600 mt-3 text-sm">
                    See how our {event.category} initiatives are making a difference.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetailPage;