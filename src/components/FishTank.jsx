import React from 'react';

export default function FishTank() {
  return (
    <div className="fishtank">
      {/* Floating stars */}
      <img src="/fishtank-emojis/star.png" alt="star" className="fishtank-item ft-star-1" />
      <img src="/fishtank-emojis/star.png" alt="star" className="fishtank-item ft-star-2" />

      {/* Swimming fish */}
      <img src="/fishtank-emojis/fish-1.png" alt="fish" className="fishtank-item ft-fish-1" />
      <img src="/fishtank-emojis/fish-2.png" alt="fish" className="fishtank-item ft-fish-2" />

      {/* Bubbles */}
      <img src="/fishtank-emojis/bubbles.png" alt="bubbles" className="fishtank-item ft-bubbles-1" />
      <img src="/fishtank-emojis/bubbles.png" alt="bubbles" className="fishtank-item ft-bubbles-2" />

      {/* Seabed items */}
      <img src="/fishtank-emojis/plant.png" alt="plant" className="fishtank-item ft-plant" />
      <img src="/fishtank-emojis/crab.png" alt="crab" className="fishtank-item ft-crab" />
      <img src="/fishtank-emojis/conch.png" alt="conch" className="fishtank-item ft-conch-1" />
      <img src="/fishtank-emojis/key.png" alt="key" className="fishtank-item ft-key" />
      <img src="/fishtank-emojis/coral.png" alt="coral" className="fishtank-item ft-coral" />
      <img src="/fishtank-emojis/conch.png" alt="conch" className="fishtank-item ft-conch-2" />
    </div>
  );
}
