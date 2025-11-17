'use client';

import { useEffect, useRef, useState } from 'react';

export default function FloatingElements() {
  const containerRef = useRef(null);
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Generate random floating elements
    const newElements = [];
    for (let i = 0; i < 15; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 60 + 20,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        type: Math.random() > 0.5 ? 'cube' : 'sphere',
        color: Math.random() > 0.5 ? 'primary' : 'accent'
      });
    }
    setElements(newElements);

    // Handle mouse movement
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      
      containerRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <style jsx>{`
        .floating-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          transition: transform 0.3s ease-out;
        }

        .floating-element {
          position: absolute;
          pointer-events: none;
          animation: float var(--duration) ease-in-out infinite;
          animation-delay: var(--delay);
        }

        .cube {
          transform-style: preserve-3d;
          animation: float3d var(--duration) ease-in-out infinite;
        }

        .cube-face {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, var(--color), transparent);
          border: 1px solid var(--color);
          opacity: 0.1;
        }

        .sphere {
          background: radial-gradient(circle at 30% 30%, var(--color), transparent);
          border-radius: 50%;
          box-shadow: 0 0 30px var(--color);
          opacity: 0.15;
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
          }
          25% { 
            transform: translateY(-30px) translateX(20px) rotate(90deg); 
          }
          50% { 
            transform: translateY(-15px) translateX(-20px) rotate(180deg); 
          }
          75% { 
            transform: translateY(-40px) translateX(10px) rotate(270deg); 
          }
        }

        @keyframes float3d {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotateX(0deg) rotateY(0deg); 
          }
          25% { 
            transform: translateY(-30px) translateX(20px) rotateX(90deg) rotateY(45deg); 
          }
          50% { 
            transform: translateY(-15px) translateX(-20px) rotateX(180deg) rotateY(90deg); 
          }
          75% { 
            transform: translateY(-40px) translateX(10px) rotateX(270deg) rotateY(135deg); 
          }
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--color);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--color);
          animation: particle-float 3s ease-in-out infinite;
        }

        @keyframes particle-float {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-50px) scale(1.5);
            opacity: 0.3;
          }
        }

        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 102, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 102, 255, 0.05) 1px, transparent 1px);
          background-size: 100px 100px;
          animation: grid-move 30s linear infinite;
          pointer-events: none;
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(100px, 100px); }
        }
      `}</style>

      <div ref={containerRef} className="floating-container">
        {/* Grid overlay */}
        <div className="grid-overlay"></div>

        {/* Floating 3D elements */}
        {elements.map((element) => (
          <div
            key={element.id}
            className={`floating-element ${element.type}`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              '--duration': `${element.duration}s`,
              '--delay': `${element.delay}s`,
              '--color': `var(--${element.color})`
            }}
          >
            {element.type === 'cube' ? (
              <div className="cube" style={{ width: '100%', height: '100%' }}>
                <div className="cube-face"></div>
                <div className="cube-face" style={{ transform: 'rotateY(90deg)' }}></div>
                <div className="cube-face" style={{ transform: 'rotateY(180deg)' }}></div>
                <div className="cube-face" style={{ transform: 'rotateY(270deg)' }}></div>
                <div className="cube-face" style={{ transform: 'rotateX(90deg)' }}></div>
                <div className="cube-face" style={{ transform: 'rotateX(-90deg)' }}></div>
              </div>
            ) : (
              <div className="sphere"></div>
            )}
          </div>
        ))}

        {/* Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              '--color': `var(--${Math.random() > 0.5 ? 'primary' : 'accent'})`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </>
  );
}
