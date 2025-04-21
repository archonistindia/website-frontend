import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
  styled,
  useTheme,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  Email,
  Phone,
} from '@mui/icons-material';
import Logo from '../../assets/logo.svg';

const StyledFooter = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.main,
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(4),
  position: 'relative',
  '&::before': {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: `linear-gradient(90deg, transparent, ${theme.palette.error.main}, transparent)`,
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.error.main,
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  '&:hover': {
    color: theme.palette.error.main,
    transform: 'translateY(-2px)',
    backgroundColor: `${theme.palette.error.main}1A`,
  },
  transition: 'all 0.3s ease',
}));

const StyledList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  '& li': {
    marginBottom: '10px',
  },
});

const NewsletterButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: theme.palette.primary.main,
  borderColor: theme.palette.error.main,
  '&:hover': {
    backgroundColor: `${theme.palette.error.main}1A`,
    borderColor: theme.palette.error.light,
  },
}));

const LogoImage = styled('img')({
                  display: 'block',
                  maxWidth: '180px',
                  width: '100%',
                  height: 'auto',
  filter: 'brightness(1)',
  transition: 'filter 0.3s ease',
  '&:hover': {
    filter: 'brightness(1.2)',
                    },
});

const Footer = () => {
  const theme = useTheme();

  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Band Info Section */}
          <Grid>
            <Box sx={{ mb: 2 }}>
              <LogoImage 
                src={Logo} 
                alt="Archonist"
              />
            </Box>
            <Typography variant="body2" sx={{ mb: 2, color: theme.palette.text.secondary }}>
              Unleashing the power of metal since 2020. Join us on our journey through the realms of heavy music.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <SocialIcon>
                <Facebook />
              </SocialIcon>
              <SocialIcon>
                <Twitter />
              </SocialIcon>
              <SocialIcon>
                <Instagram />
              </SocialIcon>
              <SocialIcon>
                <YouTube />
              </SocialIcon>
            </Box>
        </Grid>

          {/* Quick Links Section */}
          <Grid>
            <Typography variant="h6" gutterBottom sx={{ 
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: theme.palette.error.main,
            }}>
              Quick Links
          </Typography>
            <StyledList>
              <li><StyledLink href="/">Home</StyledLink></li>
              <li><StyledLink href="/shop">Shop</StyledLink></li>
              <li><StyledLink href="/about">About</StyledLink></li>
              <li><StyledLink href="/discography">Discography</StyledLink></li>
              <li><StyledLink href="/tour">Tour Dates</StyledLink></li>
            </StyledList>
          </Grid>

          {/* Contact Info Section */}
          <Grid>
            <Typography variant="h6" gutterBottom sx={{ 
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: theme.palette.error.main,
            }}>
              Contact
            </Typography>
            <StyledList>
              <li>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Email fontSize="small" sx={{ color: theme.palette.error.main }} />
                  <StyledLink href="mailto:archonistindia@gmail.com">
                    archonistindia@gmail.com
                  </StyledLink>
                </Box>
              </li>
              <li>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Phone fontSize="small" sx={{ color: theme.palette.error.main }} />
                  <StyledLink href="tel:+918447008604">
                    +91 844-700-8604
                  </StyledLink>
                </Box>
              </li>
            </StyledList>
          </Grid>

          {/* Newsletter Section */}
          <Grid>
            <Typography variant="h6" gutterBottom sx={{ 
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: theme.palette.error.main,
            }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: theme.palette.text.secondary }}>
              Subscribe for exclusive updates, tour dates, and merch releases.
            </Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                placeholder="Your Email"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: theme.palette.primary.main,
                    '& fieldset': {
                      borderColor: `${theme.palette.error.main}4D`,
                    },
                    '&:hover fieldset': {
                      borderColor: theme.palette.error.main,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: theme.palette.error.main,
                    },
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: theme.palette.text.secondary,
                  },
                }}
              />
              <NewsletterButton
                variant="outlined"
                fullWidth
              >
                Subscribe
              </NewsletterButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: `1px solid ${theme.palette.error.main}1A`,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            © {new Date().getFullYear()} Archonist. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;