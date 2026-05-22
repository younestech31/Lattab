'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

export const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  const updateProgress = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        if (!document.body) return;
        const { scrollY, innerHeight } = window;
        const { scrollHeight } = document.body;
        const totalScroll = scrollHeight - innerHeight;
        setProgress(totalScroll > 0 ? (scrollY / totalScroll) * 100 : 0);
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, [updateProgress]);

  return (
    <div 
      className="fixed top-0 left-0 h-1 bg-emerald-500 z-[100] transition-all duration-150" 
      style={{ width: `${progress}%` }}
    />
  );
};
