import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';
import videoSrc from '../../assets/vids/home-vid.mp4';

const HeroSection: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false); // State to toggle controls visibility
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      videoRef.current.currentTime = parseFloat(event.target.value);
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-navy-900 flex flex-col md:flex-row">
      {/* Video Section */}
      <div
        className="w-full h-full flex justify-center items-center relative"
        onMouseEnter={() => setShowControls(true)} // Show controls on hover
        onMouseLeave={() => setShowControls(false)} // Hide controls when not hovering
      >
        <div className="relative h-full w-full">
          <video
            ref={videoRef}
            className="h-full w-full object-contain"
            autoPlay={false}
            loop
            muted={isMuted}
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Custom Controls */}
          {showControls && ( // Conditionally render controls
            <div className="absolute bottom-4 left-0 right-0 bg-black/70 p-4 rounded-lg flex items-center justify-between space-x-4 z-30">
              {/* Play/Pause Button */}
              <button onClick={togglePlayPause} className="text-white">
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>

              {/* Mute/Unmute Button */}
              <button onClick={toggleMute} className="text-white">
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>

              {/* Timeline Slider */}
              <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleSeek}
                className="flex-1 mx-4"
              />

              {/* Current Time / Duration */}
              <span className="text-white text-sm">
                {Math.floor(currentTime / 60)}:
                {Math.floor(currentTime % 60).toString().padStart(2, '0')} /{' '}
                {Math.floor(duration / 60)}:
                {Math.floor(duration % 60).toString().padStart(2, '0')}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Text Section (Hidden on Mobile) */}
      <div className="hidden md:flex w-1/2 h-full flex-col justify-center items-start px-8 bg-navy-900 text-white">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left"
        >
          <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-4">
            Shree Sai Education Trust
          </h1>
          <h2 className="font-montserrat text-xl text-primary-200 mb-6">
            Empowering Communities
          </h2>
          <p className="font-lato text-lg mb-6">
            Our mission is to create sustainable change through dedicated
            programs in education, environment, healthcare, and community
            development.
          </p>
          <div className="flex space-x-4">
            <a
              href="#about"
              className="bg-primary-500 hover:bg-primary-600 transition-colors text-white font-lato py-3 px-6 rounded-md"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="inline-block bg-transparent border-2 border-white hover:bg-white/10 transition-colors text-white font-lato py-3 px-6 rounded-md"
            >
              Get Involved
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;