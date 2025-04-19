import { useEffect, useState } from 'react';
import axios from 'axios';

const artistId = 'YOUR_ARTIST_ID'; // Get from Spotify artist profile URL

export const useSpotifyTracks = (accessToken: string) => {
  const [tracks, setTracks] = useState<any[]>([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const albumRes = await axios.get(
        `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album,single&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const allTracks: any[] = [];

      for (const album of albumRes.data.items) {
        const trackRes = await axios.get(
          `https://api.spotify.com/v1/albums/${album.id}/tracks`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        trackRes.data.items.forEach((track: any) => {
          allTracks.push({
            name: track.name,
            url: track.external_urls.spotify,
            image: album.images[0]?.url,
            album: album.name,
          });
        });
      }

      setTracks(allTracks);
    };

    if (accessToken) {
      fetchAlbums();
    }
  }, [accessToken]);

  return tracks;
};
