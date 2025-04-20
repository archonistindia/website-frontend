import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};

export default ScrollToAnchor;
