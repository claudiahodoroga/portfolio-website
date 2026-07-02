import React, { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // The scrollable container is .main-content, not window
    const container = document.querySelector('.main-content');
    if (!container) return;
    const onScroll = () => setVisible(container.scrollTop > 300);
    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => {
    const container = document.querySelector('.main-content');
    if (container) container.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      className="scroll-to-top"
      onClick={scrollUp}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
