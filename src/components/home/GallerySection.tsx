import React from 'react';
import { useNavigate } from 'react-router-dom';
import { events } from '../../data/mockData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const GallerySection: React.FC = () => {
  const navigate = useNavigate();

  const handleViewEvent = (eventId: string) => {
    navigate(`/events/${eventId}`); // Navigate to the event details page
  };

  return (
    <section id="gallery" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 max-w-2xl"> {/* Reduced width */}
        <h2 className="text-3xl font-bold text-center mb-8">Event Gallery</h2>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1} // Show only one slide at a time
        >
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={event.coverImage}
                  alt={event.title}
                  className="w-full h-96 object-cover" // Increased height
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.shortDescription}</p>
                  <button
                    onClick={() => handleViewEvent(event.id)}
                    className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition"
                  >
                    View Event
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GallerySection;