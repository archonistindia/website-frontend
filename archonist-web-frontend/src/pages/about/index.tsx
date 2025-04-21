import { Box, Container, Typography, Divider, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import BandImage from '../../assets/band.png';

const About = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#0d0d0d',
        color: '#fff',
        py: 8,
      }}
    >
        <Box sx={{
            padding: '100px 0px 50px 0px'
        }}>
            <Typography variant="h2" fontWeight="bold" gutterBottom align="center">
            About Archonist
            </Typography>
        </Box>

      <Container maxWidth="lg">
        <Typography variant="h6" color="gray" align="center" gutterBottom>
          Dynamic Hard Rock from Jaipur & New Delhi, India
        </Typography>

        <Box
          sx={{
            width: '100%',
            height: 'auto',
            position: 'relative',
            my: 4,
            overflow: 'hidden',
            borderRadius: '8px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
          }}
        >
          <Box
            component="img"
            src={BandImage}
            alt="Archonist Band"
            sx={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'cover',
              objectPosition: 'center',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          />
        </Box>

        <Divider sx={{ my: 4, bgcolor: 'gray' }} />
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          <strong>Archonist</strong> is a dynamic Hard Rock band born out of the grit of Jaipur and New Delhi. With an
          unrelenting drive to shake the system and elevate consciousness, Archonist crafts a sonic experience that's
          both explosive and introspective. Combining heavy riffs, soaring vocals, and thought-provoking lyrics, our music
          doesn't just entertain—it awakens.
          </Typography>
        <Box mt={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Musical Style & Sound
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8 }}>
            Our sound is an electrifying blend of raw energy, melodic hooks, and intricate guitar work. Inspired by
            classic rock, heavy metal, and alternative rock, we create tracks that balance aggression with emotion—
            offering both headbanging riffs and soul-hitting melodies.
                    </Typography>
        </Box>

        <Box mt={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Lyrical Themes & Message
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8 }}>
            Archonist explores themes like motivation, mental health, greed, social isolation, and the toxic grip of
            consumerism. Each song is a narrative—raising questions, breaking silence, and empowering listeners to
            question the system and ignite change. Our message is clear: face reality, rise above, and reclaim your mind.
          </Typography>
    </Box>

        <Box mt={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Meet the Band
          </Typography>
          <Grid container spacing={2} mt={2}>
            {[['Aken (Angoam)', 'Vocals'],
              ['Gunjan', 'Guitar & Production'],
              ['Kalpesh', 'Drums'],
              ['Dushyant', 'Guitar'],
              ['Shashwat', 'Guitar'],
              ['Ravneet', 'Bass'],
            ].map(([name, role]) => (
              <Grid size={12} key={name} >
                    <Typography variant="subtitle1">
                    <strong>{name}</strong> — {role}
                    </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Stack direction="row" justifyContent="center" mt={6}>
          <Typography variant="caption" color="gray" fontStyle="italic">
            “Our music is not just noise—it’s awareness in disguise.”
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
