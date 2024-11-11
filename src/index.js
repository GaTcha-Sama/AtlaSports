import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import Home from './pages/Home';
import State from './pages/State';
import Province from './pages/Province';
import Region from './pages/Region';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import GalleryCAN from './components/Home/Gallery-CAN';
import GalleryUSA from './components/Home/Gallery-USA';
import GalleryFRA from './components/Home/Gallery-FRA';
import GalleryUK from './components/Home/Gallery-UK';
import GalleryGER from './components/Home/Gallery-GER';
import GalleryITA from './components/Home/Gallery-ITA';
import GallerySPA from './components/Home/Gallery-SPA';
import GalleryIRL from './components/Home/Gallery-IRL';
import GalleryAUS from './components/Home/Gallery-AUS';
import GalleryNZL from './components/Home/Gallery-NZL';
import Header from './components/Header';
import Footer from './components/Footer';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery-can" element={<GalleryCAN />} />
        <Route path="/gallery-usa" element={<GalleryUSA />} />
        <Route path="/gallery-fra" element={<GalleryFRA />} />
        <Route path="/gallery-eng" element={<GalleryUK />} />
        <Route path="/gallery-ger" element={<GalleryGER />} />
        <Route path="/gallery-ita" element={<GalleryITA />} />
        <Route path="/gallery-spa" element={<GallerySPA />} />
        <Route path="/gallery-nzl" element={<GalleryNZL />} />
        <Route path="/gallery-aus" element={<GalleryAUS />} />
        <Route path="/gallery-irl" element={<GalleryIRL />} />
        <Route path="/state/:id" element={<State />} />
        <Route path="/province/:id" element={<Province />} />
        <Route path="/region/:id" element={<Region />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);