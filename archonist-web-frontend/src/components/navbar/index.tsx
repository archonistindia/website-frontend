import {
  Box,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  styled,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SocialLinks from '../socialLinks';
import Logo from '../../assets/logo.svg';

const menuItems = [
  { name: 'About', path: '/about' },
  { name: 'Discography', path: '/#discography' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'News', path: '/news' },
  { name: 'Shop', path: '/shop' },
];

const StyledNavbar = styled('nav')(({ theme }) => ({
        width: '100vw',
        position: 'fixed',
        top: 0,
        zIndex: 999,
  padding: theme.spacing(2, 0),
        transition: 'background-color 0.4s ease-in-out, border 0.4s ease-in-out',
}));

const StyledNavLink = styled(NavLink)(({ theme }) => ({
                  textDecoration: 'none',
  color: theme.palette.primary.main,
  fontWeight: 700,
                  textTransform: 'uppercase',
  fontFamily: theme.typography.fontFamily,
                  transition: 'color 0.2s ease-in-out',
                  fontSize: '20px',
                  letterSpacing: '1px',
  '&:hover': {
    color: theme.palette.error.main,
                    },
  '&.active': {
    color: theme.palette.secondary.main,
  },
}));

const LogoImage = styled('img')(({}) => ({
  width: '100%',
  height: 'auto',
  filter: 'invert(1)',
  transition: 'filter 0.3s ease',
  '&:hover': {
    filter: 'invert(1) drop-shadow(0 0 4px rgba(255, 0, 0, 0.5))',
  },
}));

const Navbar = () => {
  const theme = useTheme();
  const [navbarSolid, setNavbarSolid] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const isMenuItemActive = (path: string) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.substring(1);
    }
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setNavbarSolid(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledNavbar
      sx={{
        backgroundColor: navbarSolid 
          ? theme.palette.background.paper 
          : 'transparent',
      }}
    >
      <Box
        sx={{
          mx: 'auto',
          px: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          onClick={() => {
            window.location.href = '/';
          }}
          sx={{ 
            cursor: 'pointer', 
            width: { 
              xs: '120px', 
              sm: '200px' 
            } 
          }}
        >
          <LogoImage src={Logo} alt="Logo" />
        </Box>

        <Stack
          direction="row"
          spacing={4}
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
          }}
        >
          {menuItems.map((item) => (
            <StyledNavLink
              key={item.name}
              to={item.path}
              className={isMenuItemActive(item.path) ? 'active' : ''}
            >
              {item.name}
            </StyledNavLink>
          ))}
        </Stack>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <SocialLinks />
          </Box>

          <IconButton
            sx={{ 
              display: { xs: 'block', md: 'none' }, 
              color: theme.palette.primary.main,
              ml: 1,
              '&:hover': {
                color: theme.palette.error.main,
              },
            }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.paper,
            width: 250,
          },
        }}
      >
        <Box sx={{ p: 2, height: '100%' }}>
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.name}
                component={NavLink}
                to={item.path}
                onClick={() => setDrawerOpen(false)}
                className={isMenuItemActive(item.path) ? 'active' : ''}
                sx={{
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    sx: {
                      color: theme.palette.primary.main,
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      fontSize: '14px',
                      letterSpacing: '1px',
                      '&:hover': {
                        color: theme.palette.error.main,
                      },
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </StyledNavbar>
  );
};

export default Navbar;
