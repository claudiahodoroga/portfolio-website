import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';

/**
 * ImageGallery — clickable thumbnail grid that opens a full-screen lightbox
 * via a React portal (renders into document.body to escape any parent
 * overflow/transform that would break position:fixed).
 *
 * Props:
 *   images: Array<{ src: string, alt: string }>
 *   className: string (optional, applied to the grid wrapper)
 */
export default function ImageGallery({ images = [], className = '' }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length]);

  const openAt = (idx) => { setCurrent(idx); setOpen(true); };

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, next, prev, close]);

  // Lock body scroll while lightbox is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      // Also lock the main-content scroller
      const main = document.querySelector('.main-content');
      if (main) main.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      const main = document.querySelector('.main-content');
      if (main) main.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      const main = document.querySelector('.main-content');
      if (main) main.style.overflow = '';
    };
  }, [open]);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const delta = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    setTouchStart(null);
  };

  if (!images.length) return null;

  const lightbox = open && ReactDOM.createPortal(
    <div
      className="lightbox-overlay"
      onClick={close}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      {/* Close button */}
      <button className="lightbox-close" onClick={close} aria-label="Close">✕</button>

      {/* Prev / Next */}
      {images.length > 1 && (
        <>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
          >←</button>
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
          >→</button>
        </>
      )}

      {/* Image */}
      <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="lightbox-img"
        />
        {images[current].alt && (
          <p className="lightbox-caption">{images[current].alt}</p>
        )}
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="lightbox-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`lightbox-dot ${i === current ? 'lightbox-dot-active' : ''}`}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>,
    document.body
  );

  return (
    <>
      {/* Thumbnail grid */}
      <div className={`gallery-grid ${className}`}>
        {images.map((img, i) => (
          <button
            key={i}
            className="gallery-thumb-btn"
            onClick={() => openAt(i)}
            aria-label={`Open image: ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="gallery-thumb-img"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {lightbox}
    </>
  );
}
