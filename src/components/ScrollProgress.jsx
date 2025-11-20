'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useIsMobile } from '../hooks/useMediaQuery';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile(768);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape' && isVisible) {
        scrollToTop();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);

  return (
    <>
      <style jsx>{`
        .progress-ring {
          transition: stroke-dashoffset 0.3s ease;
          transform: rotate(-90deg);
          transform-origin: center;
        }

        .scroll-hint {
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>

      {/* Progress Bar */}
      {!isMobile && (
        <div className="fixed top-0 left-0 w-full h-1 bg-neutral-900/50 z-50">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )}

      {/* Floating Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed ${isMobile ? 'bottom-4 right-4 w-11 h-11' : 'bottom-8 right-8 w-12 h-12'} bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center group shadow-lg z-40 transition-all duration-300 hover:scale-110 hover:bg-primary`}
          title="Press ESC to scroll to top"
        >
          <ChevronUp className="w-5 h-5 text-neutral-400 group-hover:text-neutral-100 transition-colors" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping"></div>
        </button>
      )}

      {/* Scroll Indicator */}
      {!isMobile && (
        <div className={`fixed bottom-8 left-8 text-xs text-neutral-400 transition-opacity duration-300 ${isVisible ? 'opacity-0' : 'opacity-100'}`}>
          <div className="scroll-hint">
            <span className="block mb-1">Scroll</span>
            <div className="w-6 h-1 bg-neutral-600 rounded">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
          </div>
          <span className="text-xs text-neutral-500">Press ESC for top</span>
        </div>
      )}
    </>
  );
}
