import {
  Box,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
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

const Navbar = () => {
  const [navbarSolid, setNavbarSolid] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const isHome =
    location.pathname === '/' &&
    (!location.hash || location.hash === '#home');

  useEffect(() => {
    const handleScroll = () => {
      setNavbarSolid(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      component="nav"
      sx={{
        width: '100vw',
        position: 'fixed',
        top: 0,
        zIndex: 999,
        py: 2,
        backgroundColor: navbarSolid ? '#2e3131' : 'transparent',
        transition: 'background-color 0.4s ease-in-out, border 0.4s ease-in-out',
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
        {/* Logo */}
        <Box
          onClick={() => {
            if (location.pathname === '/#home') {
              const el = document.getElementById('home');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.location.href = '/#home'; // for other pages
            }
          }}
          sx={{ cursor: 'pointer', width: { xs: '120px', sm: '200px' } }}
        >
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{
              width: '100%',
              height: 'auto',
              filter: 'invert(1)',
            }}
          />
        </Box>


        {/* Desktop Nav */}
        <Stack
          direction="row"
          spacing={4}
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
          }}
        >
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              style={({ isActive }) => {
                const active = !isHome && isActive;
                return {
                  textDecoration: 'none',
                  color: active ? '#888' : '#fff',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  fontFamily: 'sans-serif',
                  transition: 'color 0.2s ease-in-out',
                  fontSize: '14px',
                  letterSpacing: '1px',
                };
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </Stack>

        {/* Right: Social / Mobile */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <SocialLinks />
          </Box>

          <IconButton
            sx={{ display: { xs: 'block', md: 'none' }, color: 'white', ml: 1 }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            backgroundColor: '#1f1f1f',
            height: '100%',
            p: 2,
          }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.name}
                component={NavLink}
                to={item.path}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    sx: {
                      color: 'white',
                      textTransform: 'uppercase',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      letterSpacing: '1px',
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
