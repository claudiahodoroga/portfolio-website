const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
};

export const getNowPlaying = async (access_token) => {
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getRecentlyPlayed = async (access_token) => {
  return fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export default async function handler(req, res) {
  // CORS configuration for Vercel
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Fallback check if environment variables are not set
  if (!client_id || !client_secret || !refresh_token) {
    return res.status(200).json({
      isPlaying: false,
      title: "Immersion, Interaction & Engagement",
      artist: "Claudia Hodoroga",
      albumImageUrl: null,
      songUrl: "https://open.spotify.com",
      message: "Environment variables not configured yet."
    });
  }

  try {
    const { access_token } = await getAccessToken();

    const nowPlayingRes = await getNowPlaying(access_token);

    if (nowPlayingRes.status === 204 || nowPlayingRes.status > 400) {
      // Nothing playing actively. Query recently played.
      const recentlyPlayedRes = await getRecentlyPlayed(access_token);
      const recentlyPlayed = await recentlyPlayedRes.json();

      if (recentlyPlayed.items && recentlyPlayed.items.length > 0) {
        const track = recentlyPlayed.items[0].track;
        return res.status(200).json({
          isPlaying: false,
          title: track.name,
          artist: track.artists.map((_artist) => _artist.name).join(', '),
          albumImageUrl: track.album.images[0].url,
          songUrl: track.external_urls.spotify,
        });
      }

      return res.status(200).json({ isPlaying: false });
    }

    const song = await nowPlayingRes.json();

    if (song.is_playing && song.item) {
      return res.status(200).json({
        isPlaying: true,
        title: song.item.name,
        artist: song.item.artists.map((_artist) => _artist.name).join(', '),
        albumImageUrl: song.item.album.images[0].url,
        songUrl: song.item.external_urls.spotify,
      });
    } else if (song.item) {
      // Song is loaded but paused
      return res.status(200).json({
        isPlaying: false,
        title: song.item.name,
        artist: song.item.artists.map((_artist) => _artist.name).join(', '),
        albumImageUrl: song.item.album.images[0].url,
        songUrl: song.item.external_urls.spotify,
      });
    }

    return res.status(200).json({ isPlaying: false });
  } catch (error) {
    console.error("Spotify API error details:", error);
    return res.status(500).json({ error: error.message });
  }
}
