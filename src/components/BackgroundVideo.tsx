import React, { useState, useEffect, useRef } from 'react';

const DEFAULT_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260212_043536_e0d3c69f-5c0c-4533-8395-fbe962587446.mp4';

const DB_NAME = 'VacuoMediaDB';
const STORE_NAME = 'videos';

function loadVideoFromDB(): Promise<{ blob: Blob | null; fileName: string | null }> {
  return new Promise((resolve) => {
    const request = indexedDB.open(DB_NAME, 2);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        resolve({ blob: null, fileName: null });
        return;
      }
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const getBlob = store.get('bg_video');
      const getName = store.get('bg_video_name');

      let blob: Blob | null = null;
      let fileName: string | null = null;

      getBlob.onsuccess = () => {
        blob = getBlob.result || null;
      };
      getName.onsuccess = () => {
        fileName = getName.result || null;
      };

      tx.oncomplete = () => {
        resolve({ blob, fileName });
      };
      tx.onerror = () => resolve({ blob: null, fileName: null });
    };
    request.onerror = () => resolve({ blob: null, fileName: null });
  });
}

function saveVideoToDB(blob: Blob, fileName: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 2);
    request.onsuccess = () => {
      const db = request.result;
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      store.put(blob, 'bg_video');
      store.put(fileName, 'bg_video_name');
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    };
    request.onerror = () => reject(request.error);
  });
}

export const BackgroundVideo: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState<string>(DEFAULT_VIDEO_URL);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Load custom video if saved in indexedDB (e.g. gemini_generated_video_d5fbc69a.mp4)
  useEffect(() => {
    loadVideoFromDB().then(({ blob }) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        setVideoSrc(url);
      }
    });
  }, []);

  // Quietly support drag-and-drop video file update without any UI clutter
  useEffect(() => {
    const onDragOver = (e: DragEvent) => e.preventDefault();
    const onDrop = async (e: DragEvent) => {
      e.preventDefault();
      if (e.dataTransfer && e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0];
        if (file.type.startsWith('video/')) {
          await saveVideoToDB(file, file.name);
          const url = URL.createObjectURL(file);
          setVideoSrc(url);
        }
      }
    };

    window.addEventListener('dragover', onDragOver);
    window.addEventListener('drop', onDrop);
    return () => {
      window.removeEventListener('dragover', onDragOver);
      window.removeEventListener('drop', onDrop);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      key={videoSrc}
      autoPlay
      loop
      muted
      playsInline
      className="fixed inset-0 w-full h-full object-cover pointer-events-none brightness-[0.88] z-0"
      src={videoSrc}
    />
  );
};
