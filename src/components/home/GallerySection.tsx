import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Play, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { galleryItems } from '../../data/mockData';

const GallerySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const togglePlayVideo = () => {
    if (galleryItems[currentIndex].type === 'video' && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const currentItem = galleryItems[currentIndex];

  return (
    <section id="gallery" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-navy-700 mb-3">
            Our Gallery
          </h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-6"></div>
          <p className="font-lato text-lg text-gray-700 max-w-3xl mx-auto">
            Explore our initiatives and community impact through images and videos.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-xl">
            {/* Navigation arrows */}
            <button
              onClick={prevItem}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors"
              aria-label="Previous item"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextItem}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors"
              aria-label="Next item"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Media content */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              {currentItem.type === 'image' ? (
                <img
                  src={currentItem.url}
                  alt={currentItem.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="relative w-full h-full bg-black">
                  <video
                    ref={videoRef}
                    src={currentItem.url}
                    className="w-full h-full object-cover"
                    onClick={togglePlayVideo}
                    loop
                    muted={false}
                    playsInline
                  />
                  {!isPlaying && (
                    <div
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                      onClick={togglePlayVideo}
                    >
                      <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>

          <div className="mt-6 bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-montserrat font-bold text-xl text-navy-700 mb-2">
                  {currentItem.title}
                </h3>
                <p className="font-lato text-gray-600 mb-4">
                  {currentItem.description}
                </p>
              </div>
              
              {currentItem.eventId && (
                <Link
                  to={`/events/${currentItem.eventId}`}
                  className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded transition-colors"
                >
                  <span>View Event</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>

          {/* Thumbnail navigation */}
          <div className="mt-6 grid grid-cols-5 gap-2">
            {galleryItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`overflow-hidden rounded aspect-video ${
                  index === currentIndex
                    ? 'ring-4 ring-primary-500'
                    : 'opacity-70 hover:opacity-100 transition-opacity'
                }`}
              >
                {item.type === 'image' ? (
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="relative w-full h-full bg-black">
                    <img
                      src={item.url + '?preview'}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;