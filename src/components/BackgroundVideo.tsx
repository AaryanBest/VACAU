import React, { useEffect, useRef } from 'react';

const CLOUDINARY_VIDEO_URL =
  'https://res.cloudinary.com/mdsllmyy/video/upload/gemini_generated_video_d5fbc69a_gwr_video_mvp.mp4';

export const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Safe catch for autoplay restrictions
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      key={CLOUDINARY_VIDEO_URL}
      autoPlay
      loop
      muted
      playsInline
      className="fixed inset-0 w-full h-full object-cover pointer-events-none brightness-[0.85] contrast-[1.05] z-0"
      src={CLOUDINARY_VIDEO_URL}
    />
  );
};
