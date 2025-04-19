import { Box } from '@mui/material';
import HeroBanner from '../../assets/hero-banner.png';

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: {
          xs: '400px',   // mobile
          sm: '500px',   // tablet
          md: '800px',   // desktop
          lg: '1200px',  // large screens
          // xl: '1px',  // extra large
        },
        backgroundImage: `url(${HeroBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

export default HeroSection;
