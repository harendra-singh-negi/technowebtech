import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { useEffect } from 'react';
import Aos from 'aos';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once
      offset: 100,      // Offset for triggering animations
    });

    // Optional: Refresh AOS on route changes
    const handleRouteChange = () => {
      Aos.refresh();
    };

    window.addEventListener('popstate', handleRouteChange); // Detect route changes
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <div>
       <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
