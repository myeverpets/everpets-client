import React from 'react';
import './App.css';
import './components/navbar';
import HeroSection from './components/hero-section'; 
// import Navbar from './components/navbar';
export default function App() {
  return (
   <>
    {/* <Navbar /> */}
    <div className="App">
      <HeroSection />
    </div> 
   </>
  )
}

