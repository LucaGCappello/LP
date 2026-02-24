import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: PointerEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const hovering =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        !!target.closest('button') ||
        !!target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovering(hovering);
    };

    window.addEventListener('pointermove', updatePosition);
    window.addEventListener('pointerover', updateHoverState);

    return () => {
      window.removeEventListener('pointermove', updatePosition);
      window.removeEventListener('pointerover', updateHoverState);
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
    width 0.35s ease,
    height 0.35s ease,
    opacity 0.35s ease,
    box-shadow 0.35s ease,
    background 0.35s ease;

  opacity: 0.8;

  /* Stronger, cleaner blue */
  background: radial-gradient(
    circle,
    rgba(37, 99, 235, 0.95) 0%,      /* Deep blue center */
    rgba(29, 78, 216, 0.75) 40%,    /* Rich mid */
    rgba(30, 64, 175, 0.35) 100%    /* Soft outer */
  );

  box-shadow:
    0 0 30px rgba(37, 99, 235, 0.6),
    0 0 60px rgba(29, 78, 216, 0.35);

  mix-blend-mode: screen;
}
        }

        .custom-cursor.cursor-hover {
          opacity: 0.9;

          background: radial-gradient(
            circle,
            rgba(96, 165, 250, 0.95) 0%,
            rgba(59, 130, 246, 0.75) 50%,
            rgba(37, 99, 235, 0.45) 100%
          );

          box-shadow:
            0 0 32px rgba(96, 165, 250, 0.6),
            0 0 70px rgba(59, 130, 246, 0.35);
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
};

export default CustomCursor;