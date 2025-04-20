import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Navbar from './components/navbar';
import Shop from './pages/shop';
import { Box } from '@mui/material';
import About from './pages/about';
import ScrollToAnchor from './components/scrollToAnchor';

function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      >
        {/* Sticky Navbar */}
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            bgcolor: 'background.paper',
            boxShadow: 1,
          }}
        >
          <Navbar />
        </Box>

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flex: 1,
            width: '100vw'
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
