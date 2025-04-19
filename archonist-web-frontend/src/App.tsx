import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Navbar from './components/navbar';
import Shop from './pages/shop';
import { Box } from '@mui/material';

function App() {
  return (
    <Router>
      <Box
        sx={{
          height: "100%",
          width: '100%',
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
