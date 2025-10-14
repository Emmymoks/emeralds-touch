import React, { useState, Suspense, lazy } from 'react';
import Header from './components/Header';
import Loader from './components/Loader';
import ThemeToggle from './components/ThemeToggle';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const Gallery = lazy(() => import('./pages/Gallery'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

export default function App() {
  const [route, setRoute] = useState('home');

  return (
    <div className="app">
      <Header onNavigate={setRoute} route={route} />

      <ThemeToggle />

      <main className="page-frame">
        <Suspense fallback={<Loader />}>
          {route === 'home' && <Home onNavigate={setRoute} />}
          {route === 'gallery' && <Gallery />}
          {route === 'about' && <About />}
          {route === 'contact' && <Contact />}
        </Suspense>
      </main>

      <footer className="site-footer">
        <div>
          © 2025 Emerald's Touch
        </div>
      </footer>
    </div>
  );
}
