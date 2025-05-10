import React, { useState } from 'react';
import { galleryItems } from '../data/mockData';

const ImageGallery: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryItems.map((item) => (
          <div key={item.id} className="relative">
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer"
              onClick={() => openModal(item.url)} // Open modal on click
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Fullscreen"
              className="max-w-full max-h-screen rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;