import {
  Box,
  useTheme
} from '@mui/material';
import HeroSection from '../../components/heroSection';

const Home = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: '100vh',
      }}
    >
      <Box>
        {/* Hero Section */}
        <HeroSection />
        {/* <Box textAlign="center" mb={8}>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            ARCHONIST
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Post-Grunge | Alt-Metal | Hindi-English Fusion
          </Typography>
          <Typography
            variant="body1"
            maxWidth="sm"
            mx="auto"
            mt={2}
            sx={{ color: 'text.secondary' }}
          >
            Not just music — it's a mindset. A sound that punches through the fake and finds truth.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 4, backgroundColor: '#212121', '&:hover': { backgroundColor: '#111' } }}
          >
            Listen Now
          </Button>
        </Box> */}

        {/* About and Sound */}
        {/* <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ bgcolor: '#1a1a1a', color: '#fff', height: '100%' }}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  About the Band
                </Typography>
                <Typography variant="body2" color="grey.400">
                  Archonist reflects pain, war, love, and rebellion. With brutal riffs and real talk, we're the anthem of the underdogs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ bgcolor: '#1a1a1a', color: '#fff', height: '100%' }}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Our Sound
                </Typography>
                <Typography variant="body2" color="grey.400">
                  Hefty guitars, slamming drums, dominant vocals. A war cry built with old-school soul and a modern sonic edge.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid> */}
      </Box>
    </Box>
  );
};

export default Home;
