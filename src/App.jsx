import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [route, setRoute] = useState('home');

  return (
    <div className="app">
      <Header onNavigate={setRoute} route={route} />

      <main className="page-frame">
        {route === 'home' && <Home onNavigate={setRoute} />} {/* ✅ Pass onNavigate */}
        {route === 'gallery' && <Gallery />}
        {route === 'about' && <About />}
        {route === 'contact' && <Contact />}
      </main>

      <footer className="site-footer">
        <div>
          © 2025 Emerald's Touch
        </div>
      </footer>
    </div>
  );
}
