import { Box, Typography, Button, Container } from '@mui/material';

const ComingSoon = () => {
  return (
    <Box
      sx={{
        bgcolor: '#0d0d0d',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Container>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          COMING SOON
        </Typography>
        <Typography variant="h6" color="gray" gutterBottom>
          Archonist is cooking something powerful. Stay tuned.
        </Typography>
        <Button
          variant="outlined"
          href="https://discord.com/channels/1362875700117373090/1362875704210886831"
          target="_blank"
          sx={{
            mt: 4,
            color: '#fff',
            borderColor: '#fff',
            '&:hover': { bgcolor: '#fff', color: '#000' },
          }}
        >
          Join Our Discord
        </Button>
      </Container>
    </Box>
  );
};

export default ComingSoon;
