import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useLocation
} from "react-router-dom";
import { Home } from './Home';
import Poemario from './Poemario';
import AboutUs from './AboutUs';
import Contact from './Contact';
import { AnimatePresence } from 'framer-motion';

export const AnimatedRoutes = () => {
    const location = useLocation();
  return (
      <AnimatePresence>    
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/poemario" element={<Poemario />} />
          <Route path="/sobremi" element={<AboutUs />} />
          <Route path="/contacto" element={<Contact />} />
      </Routes>
      </AnimatePresence>
  )
}
