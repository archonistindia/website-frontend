import {
  Container,
  useTheme
} from '@mui/material';
import HeroSection from '../../components/heroSection';
import SpotifyEmbed from '../../components/spotifyEmbed';
import DiscographySection from '../../sections/discogrpahySection';
import useScrollSpy from '../../customHooks/useScrollSpy';

const Home = () => {
  const theme = useTheme();
  useScrollSpy(['about', 'discography', 'gallery', 'news', 'shop']);

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
      <div id='home'>
        <HeroSection />
      </div>
      <SpotifyEmbed />
      <div id='discography' style={{ padding: '2rem 0' }}>
        <DiscographySection />
      </div>

    </Container>
  );
};

export default Home;
