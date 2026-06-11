import React, { useState, useEffect } from 'react';

export default function SpotifyWidget() {
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
          // Map API keys to state
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
    // Poll the serverless API every 15 seconds
    const interval = setInterval(fetchSpotifyData, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <a 
      href={trackInfo.songUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="spotify-widget-container"
      title={trackInfo.isPlaying ? `Listening: ${trackInfo.title}` : "Visit Spotify"}
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
          {trackInfo.isPlaying ? "Currently Listening" : "Recently Played"}
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
