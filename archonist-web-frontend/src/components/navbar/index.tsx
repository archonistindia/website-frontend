import { Box, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SocialLinks from '../socialLinks';
import Logo from '../../assets/logo.svg';

const menuItems = [
  { name: 'Discography', path: '/discography' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'News', path: '/news' },
  { name: 'Shop', path: '/shop' },
];

const Navbar = () => {
  const [navbarSolid, setNavbarSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavbarSolid(true);
      } else {
        setNavbarSolid(false);
      }
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
        {/* Left: Menu Items */}
        <Stack direction="row" spacing={4}>
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? '#888' : '#fff',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontFamily: 'sans-serif',
                transition: 'color 0.2s ease-in-out',
                fontSize: '14px',
                letterSpacing: '1px',
              })}
            >
              {item.name}
            </NavLink>
          ))}
        </Stack>

        {/* Center: Logo */}
        <NavLink to="/">
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '200px', color: '#fff' }}>
              <Box
                component="img"
                src={Logo}
                alt="Logo"
                sx={{
                  mt: 2,
                  width: '100%',
                  height: 'auto',
                  filter: 'invert(1)',
                }}
              />
            </Box>
          </Box>
        </NavLink>

        {/* Right: Social Links */}
        <Box>
          <SocialLinks />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
