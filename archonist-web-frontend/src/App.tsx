import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { theme } from './theme/theme';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';
import Shop from './pages/shop';
import About from './pages/about';
import ScrollToAnchor from './components/scrollToAnchor';
import Footer from './components/Footer';
import News from './pages/news';
import './assets/fonts/fonts.css';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
      <ScrollToAnchor />
        <Box
          sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
            width: '100vw',
            background: theme.palette.background.default,
          backgroundImage: 'radial-gradient(circle at center, #1F2025 0%, #000000 100%)',
          }}
        >
          <Navbar />
          <Box
            component="main"
            sx={{
              flex: 1,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              justifyContent: 'flex-start',
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
