'use client';
import { useState, useEffect } from 'react';

export const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const { scrollY, innerHeight } = window;
      const { scrollHeight } = document.body;
      const totalScroll = scrollHeight - innerHeight;
      setProgress(totalScroll > 0 ? (scrollY / totalScroll) * 100 : 0);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div 
      style={{ width: `${progress}%` }}
      className="fixed top-0 left-0 h-1 bg-emerald-500 z-[100] transition-all duration-300" 
    />
  );
};
