import React, { useState, useEffect } from 'react';

export default function SpotifyWidget({ lang }) {
  const [trackInfo, setTrackInfo] = useState({
    isPlaying: false,
    title: "Immersion, Interaction & Engagement",
    artist: "Claudia Hodoroga",
    albumImageUrl: null,
    songUrl: "https://open.spotify.com"
  });

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const res = await fetch('/api/spotify');
        if (res.ok) {
          const data = await res.json();
          setTrackInfo({
            isPlaying: data.isPlaying,
            title: data.title || "Immersion, Interaction & Engagement",
            artist: data.artist || "Claudia Hodoroga",
            albumImageUrl: data.albumImageUrl || null,
            songUrl: data.songUrl || "https://open.spotify.com"
          });
        }
      } catch (err) {
        console.error("Error loading Spotify serverless API status:", err);
      }
    };

    fetchSpotifyData();
    const interval = setInterval(fetchSpotifyData, 15000);
    return () => clearInterval(interval);
  }, []);

  const statusText = trackInfo.isPlaying
    ? (lang === 'en' ? "Currently Listening" : "Escuchando ahora")
    : (lang === 'en' ? "Recently Played" : "Escuchado recientemente");

  const visitTitle = lang === 'en' ? "Visit Spotify" : "Visitar Spotify";
  const listenTitle = lang === 'en' ? `Listening: ${trackInfo.title}` : `Escuchando: ${trackInfo.title}`;

  return (
    <a 
      href={trackInfo.songUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="spotify-widget-container"
      title={trackInfo.isPlaying ? listenTitle : visitTitle}
    >
      <div 
        className="spotify-cd"
        style={{ animationPlayState: trackInfo.isPlaying ? 'running' : 'paused' }}
      >
        {trackInfo.albumImageUrl ? (
          <img 
            src={trackInfo.albumImageUrl} 
            alt="Album Cover" 
            style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
          />
        ) : (
          "💿"
        )}
        <div className="spotify-cd-center"></div>
      </div>
      
      <div className="spotify-info">
        <span className="spotify-status">
          {statusText}
        </span>
        <span className="spotify-title" title={trackInfo.title}>
          {trackInfo.title}
        </span>
        <span className="spotify-artist" title={trackInfo.artist}>
          {trackInfo.artist}
        </span>
      </div>
      
      {trackInfo.isPlaying && (
        <div className="sound-visualizer">
          <div className="visualizer-bar"></div>
          <div className="visualizer-bar"></div>
          <div className="visualizer-bar"></div>
        </div>
      )}
    </a>
  );
}
