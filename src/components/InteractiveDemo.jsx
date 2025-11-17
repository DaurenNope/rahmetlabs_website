'use client';

import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Zap } from 'lucide-react';

export default function InteractiveDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [particles, setParticles] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const animate = () => {
        setRotation(prev => ({
          x: prev.x + 1,
          y: prev.y + 0.5,
          z: prev.z + 2
        }));
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);

  const generateParticles = () => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: Date.now() + i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 3 + 1,
        angle: Math.random() * Math.PI * 2,
        life: 1,
        color: Math.random() > 0.5 ? 'primary' : 'accent'
      });
    }
    setParticles(prev => [...prev.slice(-100), ...newParticles]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev
          .map(p => ({
            ...p,
            x: p.x + Math.cos(p.angle) * p.speed,
            y: p.y + Math.sin(p.angle) * p.speed,
            life: p.life - 0.02
          }))
          .filter(p => p.life > 0)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx>{`
        .demo-container {
          background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 212, 255, 0.1));
          border: 1px solid rgba(0, 102, 255, 0.2);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .demo-canvas {
          width: 100%;
          height: 400px;
          position: relative;
          perspective: 1000px;
        }

        .demo-cube {
          width: 150px;
          height: 150px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform-style: preserve-3d;
          transform: translate(-50%, -50%) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg);
          transition: transform 0.1s ease-out;
        }

        .cube-face {
          position: absolute;
          width: 150px;
          height: 150px;
          background: linear-gradient(45deg, rgba(0, 102, 255, 0.3), rgba(0, 212, 255, 0.3));
          border: 2px solid var(--primary);
          backdrop-filter: blur(5px);
        }

        .cube-face:nth-child(1) { transform: translateZ(75px); }
        .cube-face:nth-child(2) { transform: rotateY(90deg) translateZ(75px); }
        .cube-face:nth-child(3) { transform: rotateY(180deg) translateZ(75px); }
        .cube-face:nth-child(4) { transform: rotateY(270deg) translateZ(75px); }
        .cube-face:nth-child(5) { transform: rotateX(90deg) translateZ(75px); }
        .cube-face:nth-child(6) { transform: rotateX(-90deg) translateZ(75px); }

        .particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(1px);
        }

        .glow-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300px;
          height: 300px;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(0, 102, 255, 0.2), transparent);
          filter: blur(20px);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
        }

        .control-btn {
          background: rgba(0, 102, 255, 0.1);
          border: 1px solid rgba(0, 102, 255, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .control-btn:hover {
          background: rgba(0, 102, 255, 0.2);
          border-color: var(--primary);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 102, 255, 0.3);
        }

        .energy-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200px;
          height: 200px;
          transform: translate(-50%, -50%);
          border: 2px solid transparent;
          border-top-color: var(--primary);
          border-radius: 50%;
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>

      <section className="section bg-neutral-900/50">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4">
              <span className="block text-neutral-50 mb-2">Interactive</span>
              <span className="brand-heading block">Experience</span>
            </h2>
            <p className="text-xl brand-text max-w-3xl mx-auto">
              Immerse yourself in cutting-edge web interactions and 3D animations
            </p>
          </div>

          {/* Interactive Demo */}
          <div className="max-w-4xl mx-auto">
            <div className="demo-container rounded-2xl p-8 mb-8">
              {/* Glow Effect */}
              <div className="glow-effect"></div>
              
              {/* Energy Ring */}
              <div className="energy-ring"></div>

              {/* 3D Canvas */}
              <div 
                className="demo-canvas"
                onMouseMove={generateParticles}
              >
                {/* 3D Cube */}
                <div className="demo-cube">
                  <div className="cube-face"></div>
                  <div className="cube-face"></div>
                  <div className="cube-face"></div>
                  <div className="cube-face"></div>
                  <div className="cube-face"></div>
                  <div className="cube-face"></div>
                </div>

                {/* Particles */}
                {particles.map((particle) => (
                  <div
                    key={particle.id}
                    className="particle"
                    style={{
                      left: `${particle.x}%`,
                      top: `${particle.y}%`,
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                      background: `var(--${particle.color})`,
                      opacity: particle.life,
                      boxShadow: `0 0 ${particle.size * 2}px var(--${particle.color})`
                    }}
                  />
                ))}
              </div>

              {/* Mouse Follower */}
              <div 
                className="absolute w-8 h-8 rounded-full pointer-events-none z-10"
                style={{
                  left: mousePos.x - 16,
                  top: mousePos.y - 16,
                  background: 'radial-gradient(circle, var(--accent), transparent)',
                  boxShadow: '0 0 30px var(--accent)',
                  transition: 'all 0.1s ease-out'
                }}
              />
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="control-btn px-6 py-3 rounded-lg text-neutral-100 flex items-center gap-2"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? 'Pause' : 'Play'}
              </button>
              
              <button
                onClick={() => setRotation({ x: 0, y: 0, z: 0 })}
                className="control-btn px-6 py-3 rounded-lg text-neutral-100 flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
              
              <button
                onClick={generateParticles}
                className="control-btn px-6 py-3 rounded-lg text-neutral-100 flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                Burst
              </button>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-neutral-800/50 rounded-xl border border-neutral-700">
                <h4 className="text-lg font-semibold text-neutral-50 mb-2">3D Graphics</h4>
                <p className="brand-subtle text-sm">Real-time 3D rendering with smooth animations</p>
              </div>
              <div className="p-6 bg-neutral-800/50 rounded-xl border border-neutral-700">
                <h4 className="text-lg font-semibold text-neutral-50 mb-2">Particle System</h4>
                <p className="brand-subtle text-sm">Dynamic particle effects with physics simulation</p>
              </div>
              <div className="p-6 bg-neutral-800/50 rounded-xl border border-neutral-700">
                <h4 className="text-lg font-semibold text-neutral-50 mb-2">Mouse Tracking</h4>
                <p className="brand-subtle text-sm">Interactive cursor tracking with visual feedback</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
