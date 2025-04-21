import { Box } from '@mui/material';
import HeroBanner from '../../assets/hero-banner.png';

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: {
          xs: '1080px', // Default height for smaller screens
          // At 1920px width and above, adjust height to show full image
          [`@media (min-width: 1920px)`]: {
            height: 'auto',
            aspectRatio: '1920/1080', // Adjust this ratio to match your image's actual dimensions
          }
        },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        component="img"
        src={HeroBanner}
        alt="Hero Banner"
        sx={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          [`@media (min-width: 1920px)`]: {
            objectFit: 'contain', // Shows full image without cropping
            height: 'auto',
            width: '100%',
          }
        }}
      />
    </Box>
  );
};

export default HeroSection;
