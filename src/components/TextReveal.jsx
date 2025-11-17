'use client';

import { useState, useEffect, useRef } from 'react';

export default function TextReveal({ 
  text, 
  delay = 0, 
  duration = 0.05, 
  className = '', 
  revealOnScroll = false 
}) {
  const [isVisible, setIsVisible] = useState(!revealOnScroll);
  const [revealedChars, setRevealedChars] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (revealOnScroll && !isVisible) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }
  }, [revealOnScroll, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const chars = text.split('');
    let currentChar = 0;

    const interval = setInterval(() => {
      if (currentChar < chars.length) {
        setRevealedChars(currentChar + 1);
        currentChar++;
      } else {
        clearInterval(interval);
      }
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [text, duration, isVisible]);

  const chars = text.split('');
  
  return (
    <>
      <style jsx>{`
        .text-reveal {
          display: inline-block;
        }

        .char {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px) rotateX(-90deg);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .char.revealed {
          opacity: 1;
          transform: translateY(0px) rotateX(0deg);
        }

        .char.space {
          width: 0.3em;
        }

        .char.punctuation {
          color: var(--primary);
          font-weight: 600;
        }

        .char.highlight {
          color: var(--accent);
          font-weight: 600;
          text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
        }

        .glitch {
          position: relative;
          animation: glitch 2s ease-in-out infinite;
        }

        @keyframes glitch {
          0%, 100% { 
            text-shadow: 
              2px 0 var(--primary),
              -2px 0 var(--accent);
          }
          25% { 
            text-shadow: 
              -2px 0 var(--primary),
              2px 0 var(--accent);
          }
          50% { 
            text-shadow: 
              2px 2px var(--primary),
              -2px -2px var(--accent);
          }
          75% { 
            text-shadow: 
              -2px -2px var(--primary),
              2px 2px var(--accent);
          }
        }

        .wave {
          display: inline-block;
          animation: wave 2s ease-in-out infinite;
        }

        @keyframes wave {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .bounce {
          display: inline-block;
          animation: bounce 1s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

      <span ref={ref} className={`text-reveal ${className}`}>
        {chars.map((char, index) => {
          const isRevealed = index < revealedChars;
          const isSpace = char === ' ';
          const isPunctuation = /[.,!?;:]/.test(char);
          const isHighlight = /[A-Z]/.test(char) && index > 0;
          
          return (
            <span
              key={index}
              className={`
                char
                ${isRevealed ? 'revealed' : ''}
                ${isSpace ? 'space' : ''}
                ${isPunctuation ? 'punctuation' : ''}
                ${isHighlight ? 'highlight' : ''}
              `}
              style={{
                transitionDelay: isRevealed ? `${delay + index * duration}s` : '0s'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          );
        })}
      </span>
    </>
  );
}
