'use client';

import { useState, useEffect, useRef } from 'react';

export default function MagneticCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState([]);
  const cursorRef = useRef(null);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add to trail
      setTrail(prev => [...prev.slice(-10), { x: e.clientX, y: e.clientY, id: Date.now() }]);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Clean up trail
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prev => prev.slice(-5));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx>{`
        .cursor-trail {
          position: fixed;
          width: 8px;
          height: 8px;
          background: radial-gradient(circle, rgba(0, 102, 255, 0.6), transparent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transition: opacity 0.5s ease-out;
        }

        .magnetic-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.8), rgba(0, 102, 255, 0.4));
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.15s ease-out;
          box-shadow: 0 0 20px rgba(0, 102, 255, 0.5);
        }

        .magnetic-cursor.hover {
          transform: scale(2);
          background: radial-gradient(circle, rgba(0, 255, 170, 0.8), rgba(0, 102, 255, 0.4));
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
      `}</style>

      {/* Trail effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: (index + 1) / trail.length * 0.3,
            transform: `scale(${(index + 1) / trail.length})`
          }}
        />
      ))}

      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`magnetic-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: position.x - 10,
          top: position.y - 10,
        }}
      >
        <div className="absolute inset-0 rounded-full animate-pulse" 
             style={{ 
               background: 'radial-gradient(circle, transparent, rgba(0, 102, 255, 0.3))',
               transform: 'scale(2)'
             }}>
        </div>
      </div>
    </>
  );
}
