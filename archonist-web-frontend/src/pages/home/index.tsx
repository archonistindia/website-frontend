import {
  Container,
  useTheme
} from '@mui/material';
import HeroSection from '../../components/heroSection';
import SpotifyEmbed from '../../components/spotifyEmbed';
import AlbumArtVinyl from '../../components/albumArtVinyl';
import yourCoverImage from '../../assets/insanity.jpg';
import DiscographySection from '../../sections/discogrpahySection';

const Home = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        width: '100vw',
        padding: 0,
      }}
    >
      <HeroSection />
      <SpotifyEmbed />
      <DiscographySection />

    </Container>
  );
};

export default Home;
