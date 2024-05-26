import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import State from './pages/State';
import About from './pages/About';
import Error from './pages/Error';
import GalleryCAN from './components/Home/Gallery-CAN';
import GalleryUSA from './components/Home/Gallery-USA';
import GalleryFRA from './components/Home/Gallery-FRA';
import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery-can" element={<GalleryCAN />} />
        <Route path="/gallery-usa" element={<GalleryUSA />} />
        <Route path="/gallery-fra" element={<GalleryFRA />} />
        <Route path="/state" element={<State />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);