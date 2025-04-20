import { useEffect } from 'react';

const useScrollSpy = (sectionIds: string[]) => {
  useEffect(() => {
    const handleScroll = () => {
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            window.history.replaceState(null, '', `#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);
};

export default useScrollSpy;
