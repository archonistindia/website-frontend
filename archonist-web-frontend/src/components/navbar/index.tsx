import { Box, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import SocialLinks from '../socialLinks' // Ensure this path is correct

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Discography', path: '/discography' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'News', path: '/news' },
  { name: 'Shop', path: '/shop' },
];

const Navbar = () => {
  return (
    <Box
      component="nav"
      sx={{
        width: '100vw',
        backgroundColor: '#2e3131',
        py: 2,
        borderBottom: '1px solid #000',
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}
      >
        {/* Nav Links Centered */}
        <Stack direction="row" spacing={6} justifyContent="center" flex={1}>
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

        {/* Social Links on Right */}
        <Box sx={{ ml: 4 }}>
          <SocialLinks />
        </Box>
      </Stack>
    </Box>
  );
};

export default Navbar;
