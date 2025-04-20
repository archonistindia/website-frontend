import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';
import Shop from './pages/shop';
import About from './pages/about';
import ScrollToAnchor from './components/scrollToAnchor';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
      <ScrollToAnchor />
        <div style={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: '#000000',
          backgroundImage: 'radial-gradient(circle at center, #1F2025 0%, #000000 100%)',
        }}>
          <Navbar />
          <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
          </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
