import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    const handleMouseOver = (e) => {
      if (!e.target) return;
      
      const targetElement = e.target;
      const isInteractive = 
        targetElement.tagName === 'A' ||
        targetElement.tagName === 'BUTTON' ||
        targetElement.closest('a') ||
        targetElement.closest('button') ||
        targetElement.closest('.project-card') ||
        targetElement.closest('.back-btn-link') ||
        targetElement.closest('.nav-item') ||
        targetElement.closest('.lang-btn') ||
        targetElement.closest('.lang-btn-link') ||
        targetElement.closest('.hero-btn-link') ||
        targetElement.hasAttribute('onclick') ||
        targetElement.getAttribute('role') === 'button';
        
      if (isInteractive) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div 
      className={`custom-cursor ${hovered ? 'hovered' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#ddb332">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    </div>
  );
}
