# Claudia Hodoroga - Portfolio Website

This portfolio website is built using **Vite + React** and is fully responsive, supporting both desktop (with sidebar navigation) and mobile layouts.

## Features & Interactions
- **Animated Fish Tank**: Floating, bobbing, and swimming sea emojis scaled responsively between PC (98px height) and Mobile (53px height).
- **Work Grid**: Clean 2-column layout on PC (1-column on mobile) showcasing 4 selected projects. Project cards have a `rgba(47, 38, 167, 0.05)` background which increases to `20%` opacity on hover, triggering muted video loops and displaying a *"view full demo and case study"* overlay.
- **Dynamic Greetings**: Rotates greeting headers in English, Spanish, and Romanian every 3 seconds.
- **Archive List**: Media rows automatically reverse layout on mobile, keeping visual assets on top.
- **Sticky Social Navigation**: Social links dynamically attach to the bottom of the screen on mobile as a sticky overlay with glassmorphism blur.

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to the address shown in the terminal (typically `http://localhost:5173`).

### 3. Build for Production
```bash
npm run build
```
The optimized static build will be generated in the `dist/` directory, ready to be deployed to **Vercel** or other hosts.

---

## Customizing Assets & Media

All assets are located in the `public/` folder for direct, fast serving:
- **Project Thumbnails**: Add your project cards images directly to `public/photos/`. The code searches for:
  - `repot.png`
  - `blueroom.png`
  - `hackupc.png`
  - `pluma.png`
- **Project Videos (Hover)**: Add your hover demo videos directly to `public/videos/` as `.mp4` files:
  - `repot.mp4`
  - `blueroom.mp4`
  - `hackupc.mp4`
  - `pluma.mp4`
- **Profile Photo**: Change the photo in `public/photos/aboutme.jpg` to update your portrait.
- **Fish Tank Emojis**: Swap the fish PNGs in `public/fishtank-emojis/` to customize your fish tank's look.

---

## Setting up the Spotify Widget

By default, the About page displays an animated mock Spotify player showing **"Immersion, Interaction & Engagement" by Claudia Hodoroga**.

To replace this with a **live Spotify playlist or track embed**:

1. Open **Spotify** in your browser or desktop app.
2. Navigate to your chosen playlist, album, or song.
3. Click the three dots `...` -> **Share** -> **Embed playlist** / **Embed track**.
4. Customize the color/size (we recommend the compact size, height `80px`) and click **Copy**.
5. Open [src/components/SpotifyWidget.jsx](file:///c:/Users/claud/Desktop/CLAUDIA_HODOROGA/portfolio/website/src/components/SpotifyWidget.jsx) in your editor.
6. Replace the entire returned HTML inside the file with your copied `<iframe>` tag.

Example of what your code will look like:
```jsx
import React from 'react';

export default function SpotifyWidget() {
  return (
    <iframe 
      style={{ borderRadius: '16px', marginTop: '16px' }}
      src="https://open.spotify.com/embed/playlist/37i9dQZF1DX10zKzsJ6j7T?utm_source=generator&theme=0" 
      width="100%" 
      height="80" 
      frameBorder="0" 
      allowFullScreen="" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy">
    </iframe>
  );
}
```

---

## Deployment to Vercel

The project is structured to deploy seamlessly to **Vercel**:
1. Connect your Github repository to your Vercel Account.
2. Select **New Project** and import your portfolio repository.
3. Vercel will automatically detect the **Vite** framework and set the default build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**!
