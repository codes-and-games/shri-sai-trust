import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  controls?: boolean;
  loop?: boolean;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  autoPlay = false,
  muted = true,
  controls = true,
  loop = true,
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Set up video duration when metadata is loaded
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const setVideoDuration = () => {
      setDuration(video.duration);
    };

    // Set up event listeners
    video.addEventListener('loadedmetadata', setVideoDuration);
    video.addEventListener('timeupdate', updateProgress);

    // Auto play if specified
    if (autoPlay) {
      video.play().catch((error) => {
        console.error('Autoplay failed:', error);
        setIsPlaying(false);
      });
    }

    // Clean up
    return () => {
      video.removeEventListener('loadedmetadata', setVideoDuration);
      video.removeEventListener('timeupdate', updateProgress);
    };
  }, [autoPlay]);

  // Update progress bar as video plays
  const updateProgress = () => {
    const video = videoRef.current;
    if (video) {
      const percentage = (video.currentTime / video.duration) * 100;
      setProgress(percentage);
    }
  };

  // Toggle play/pause
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch((error) => {
        console.error('Play failed:', error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  // Toggle mute
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(!isMuted);
  };

  // Handle seeking when clicking on progress bar
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const progressBar = e.currentTarget;
    const position = e.nativeEvent.offsetX / progressBar.offsetWidth;
    video.currentTime = position * video.duration;
  };

  // Format time (seconds) to MM:SS
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={isMuted}
        loop={loop}
        playsInline
        onClick={togglePlay}
        className="w-full h-full object-cover cursor-pointer"
      />
      
      {controls && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          {/* Progress bar */}
          <div 
            className="w-full h-1 bg-gray-600 rounded-full cursor-pointer mb-3"
            onClick={handleSeek}
          >
            <div 
              className="h-full bg-primary-500 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button 
                onClick={togglePlay}
                className="text-white hover:text-primary-300 transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6" />
                )}
              </button>
              
              <button
                onClick={toggleMute}
                className="text-white hover:text-primary-300 transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="h-6 w-6" />
                ) : (
                  <Volume2 className="h-6 w-6" />
                )}
              </button>
              
              <span className="text-white text-sm font-lato">
                {videoRef.current && (
                  `${formatTime(videoRef.current.currentTime)} / ${formatTime(duration)}`
                )}
              </span>
            </div>
          </div>
        </div>
      )}
      
      {/* Big play button in the center if video is paused */}
      {!isPlaying && (
        <div 
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={togglePlay}
        >
          <div className="bg-black/30 hover:bg-black/50 transition-colors p-6 rounded-full">
            <Play className="h-12 w-12 text-white" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;