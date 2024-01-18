import React from 'react';
import './App.css';
import './components/navbar';
import HeroSection from './components/hero-section';
import Search from './components/search';
import Category from './components/category';
import Footer from './components/footer';
import AboutUs from './components/about-us';
import Navbar from './components/navbar';
export default function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <HeroSection />
        <Search />
        <Category />
        <AboutUs />
        <Footer />
      </div>
    </>
  );
}
