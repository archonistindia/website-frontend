import {
  Container,
  useTheme
} from '@mui/material';
import HeroSection from '../../components/heroSection';

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
    </Container>
  );
};

export default Home;
