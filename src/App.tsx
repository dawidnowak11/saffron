import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/utils/ScrollToTop';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';
import { Reservations } from './pages/Reservations';
import { Contact } from './pages/Contact';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;