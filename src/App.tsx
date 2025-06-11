import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { MobileRedirect } from './components/MobileRedirect'; // Assurez-vous que le chemin est correct

// Pages
import Home from './pages/Home';  // Enlever l'extension .tsx
import Menu from './pages/Menu';
import News from './pages/News';
import Career from './pages/Career';
import Feedback from './pages/Feedback';
import Franchising from './pages/Franchising';
import QuienesSomos from './pages/QuienesSomos';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Context
import { LanguageProvider } from './context/LanguageContext';
import { LocationProvider } from './context/LocationContext';

// Nouveau composant pour gérer le scroll
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Gérer le scroll vers les ancres (#) après changement de page
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <LocationProvider>
        <Router>
        <MobileRedirect />
          <ScrollToTop />
          <div className="app">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/news" element={<News />} />
              <Route path="/career" element={<Career />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/franchising" element={<Franchising />} />
              <Route path="/quienes-somos" element={<QuienesSomos />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </LocationProvider>
    </LanguageProvider>
  );
}

export default App;