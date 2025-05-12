import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home.tsx';  // Ajout de l'extension .tsx
import Menu from './pages/Menu.tsx';  // Ajout de l'extension .tsx
import News from './pages/News.tsx';  // Ajout de l'extension .tsx
import Career from './pages/Career.tsx';  // Ajout de l'extension .tsx
import Feedback from './pages/Feedback.tsx';  // Ajout de l'extension .tsx
import Franchising from './pages/Franchising.tsx';  // Ajout de l'extension .tsx

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Context
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/news" element={<News />} />
            <Route path="/career" element={<Career />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/franchising" element={<Franchising />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;