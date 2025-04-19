import React from 'react';
import { Box, IconButton, Stack, Tooltip } from '@mui/material';
import {
  Facebook,
  Instagram,
  Twitter,
  Apple,
} from '@mui/icons-material';
import MusicNoteIcon from '@mui/icons-material/MusicNote'; // Spotify
import { FaDiscord, FaAmazon, FaSpotify } from 'react-icons/fa'; // Discord icon

const SocialLinks = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Stack direction="row" spacing={1} justifyContent="center">
        <Tooltip title="Facebook">
          <IconButton component="a" href="https://www.facebook.com/archonist.india" target="_blank" sx={{ color: '#fff' }}>
            <Facebook />
          </IconButton>
        </Tooltip>

        <Tooltip title="Instagram">
          <IconButton component="a" href="https://www.instagram.com/archonistofficial" target="_blank" sx={{ color: '#fff' }}>
            <Instagram />
          </IconButton>
        </Tooltip>

        <Tooltip title="Amazon Music">
          <IconButton component="a" href="https://music.amazon.in/artists/B08FX7TK23/archonist" target="_blank" sx={{ color: '#fff' }}>
            <FaAmazon size={20} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Spotify">
          <IconButton component="a" href="https://open.spotify.com/artist/1cz9mjlZ9KSFIUMzOOZK3k" target="_blank" sx={{ color: '#fff' }}>
            <FaSpotify size={20}  />
          </IconButton>
        </Tooltip>

        <Tooltip title="Apple Music">
          <IconButton component="a" href="https://music.apple.com/us/artist/archonist/1527553100" target="_blank" sx={{ color: '#fff' }}>
            <Apple />
          </IconButton>
        </Tooltip>

        <Tooltip title="Discord">
          <IconButton component="a" href="https://discord.com/channels/1362875700117373090/1362875704210886831" target="_blank" sx={{ color: '#fff' }}>
            <FaDiscord size={24} />
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
  );
};

export default SocialLinks;
