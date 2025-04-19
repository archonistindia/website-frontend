import { Box } from '@mui/material';
import HeroBanner from '../../assets/hero-banner.png';

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Box
        component="img"
        src={HeroBanner}
        alt="Hero Banner"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </Box>
  );
};

export default HeroSection;
