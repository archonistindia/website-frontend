import { Box } from '@mui/material';
import SectionTitle from '../sectionTitle';

const SpotifyEmbed = () => {
  const playlistId = '7fGyv5caC4cgEA1weLLCf4';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        mt: 4,
        px: 2,
      }}
    >
      <SectionTitle title="Top Tracks" />
      <Box
        component="iframe"
        title="Spotify Embed: Archonist Playlist"
        src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
        sx={{
          width: {
            xs: '100%',     // full width on mobile
            sm: '90%',      // 90% on small tablets
            md: '80%',      // 80% on medium screens
            lg: '1000px',   // fixed width on large screens
          },
          height: {
            xs: '400px',
            sm: '500px',
            md: '600px',
          },
          border: 'none',
          minHeight: '360px',
        }}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </Box>
  );
};

export default SpotifyEmbed;
