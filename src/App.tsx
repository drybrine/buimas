import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './page/index.css';

// layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';
import Profil from './pages/Profil';
import Product from './pages/Product';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
