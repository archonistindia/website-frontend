import { Box, IconButton, Stack, Tooltip, styled } from '@mui/material';
import {
  Facebook,
  Instagram,
  Apple,
} from '@mui/icons-material';
import { FaDiscord, FaAmazon, FaSpotify } from 'react-icons/fa';
import { JSX } from 'react';

// Styled components using theme
const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  padding: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.error.main,
    transform: 'translateY(-2px)',
    backgroundColor: `${theme.palette.error.main}1A`,
  },
  '& .MuiSvgIcon-root, & svg': {
    fontSize: '20px',
  },
}));

const SocialContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  padding: '12px',
  borderRadius: '8px',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: `linear-gradient(90deg, transparent, ${theme.palette.error.main}, transparent)`,
  },
}));

interface SocialLink {
  title: string;
  icon: JSX.Element;
  url: string;
}
const socialLinks: SocialLink[] = [
  {
    title: 'Facebook',
    icon: <Facebook />,
    url: 'https://www.facebook.com/archonist.india',
  },
  {
    title: 'Instagram',
    icon: <Instagram />,
    url: 'https://www.instagram.com/archonistofficial',
  },
  {
    title: 'Amazon Music',
    icon: <FaAmazon size={20} />,
    url: 'https://music.amazon.in/artists/B08FX7TK23/archonist',
  },
  {
    title: 'Spotify',
    icon: <FaSpotify size={20} />,
    url: 'https://open.spotify.com/artist/1cz9mjlZ9KSFIUMzOOZK3k',
  },
  {
    title: 'Apple Music',
    icon: <Apple />,
    url: 'https://music.apple.com/us/artist/archonist/1527553100',
  },
  {
    title: 'Discord',
    icon: <FaDiscord size={20} />,
    url: 'https://discord.com/channels/1362875700117373090/1362875704210886831',
  },
];

const SocialLinks = () => {
  return (
    <SocialContainer>
      <Stack 
        direction="row" 
        spacing={1} 
        justifyContent="center"
        sx={{
          '& > *': {
            margin: '0 4px',
          },
        }}
      >
        {socialLinks.map((social, index) => (
          <Tooltip 
            key={index}
            title={social.title}
            placement="top"
            arrow
            sx={{
              '& .MuiTooltip-tooltip': {
                backgroundColor: theme => theme.palette.background.paper,
                color: theme => theme.palette.primary.main,
                fontSize: '0.75rem',
                padding: '4px 8px',
              },
              '& .MuiTooltip-arrow': {
                color: theme => theme.palette.background.paper,
              },
            }}
          >
            <Box 
              component="a"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIconButton
                aria-label={social.title}
              >
                {social.icon}
            </SocialIconButton>
            </Box>
          </Tooltip>
        ))}
      </Stack>
    </SocialContainer>
  );
};

export default SocialLinks;
