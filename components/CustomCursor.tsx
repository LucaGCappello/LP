import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
  <>
    <div
      className={`custom-cursor ${isHovering ? 'cursor-hover' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: isHovering ? '48px' : '24px',
        height: isHovering ? '48px' : '24px',
      }}
    />
    <style>{`
      * {
        cursor: none !important;
      }

      .custom-cursor {
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        transition: 
          width 0.25s ease,
          height 0.25s ease,
          opacity 0.25s ease,
          box-shadow 0.25s ease,
          background 0.25s ease;

        opacity: 0.35;

        background: radial-gradient(
          circle,
          rgba(96, 165, 250, 0.5) 0%,
          rgba(59, 130, 246, 0.35) 50%,
          rgba(37, 99, 235, 0.15) 100%
        );

        box-shadow:
          0 0 20px rgba(96, 165, 250, 0.3),
          0 0 40px rgba(59, 130, 246, 0.15);

        mix-blend-mode: screen;
      }

      .custom-cursor.cursor-hover {
        opacity: 0.85;

        background: radial-gradient(
          circle,
          rgba(96, 165, 250, 0.9) 0%,
          rgba(59, 130, 246, 0.7) 50%,
          rgba(37, 99, 235, 0.4) 100%
        );

        box-shadow:
          0 0 30px rgba(96, 165, 250, 0.6),
          0 0 60px rgba(59, 130, 246, 0.4);
      }

      @media (hover: none) and (pointer: coarse) {
        * {
          cursor: auto !important;
        }
        .custom-cursor {
          display: none;
        }
      }
    `}</style>
  </>
);