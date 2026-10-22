import React, { useState, useEffect, useRef } from 'react';

const CLOUDINARY_VIDEO_URL =
  'https://res.cloudinary.com/mdsllmyy/video/upload/gemini_generated_video_d5fbc69a.mp4';

export const BackgroundVideo: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState<string>(CLOUDINARY_VIDEO_URL);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-play enforcement on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback for strict browser autoplay policies
      });
    }
  }, [videoSrc]);

  return (
    <video
      ref={videoRef}
      key={videoSrc}
      autoPlay
      loop
      muted
      playsInline
      className="fixed inset-0 w-full h-full object-cover pointer-events-none brightness-[0.9] z-0"
      src={videoSrc}
    />
  );
};
