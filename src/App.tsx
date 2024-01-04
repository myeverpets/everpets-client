import React from 'react';
import './App.css';
import './components/navbar'; 
import Navbar from './components/navbar';
export default function App() {
  return (
   <>
    <Navbar />
    <div className="App">
      <p className="text-3xl font-bold underline">App</p>
    </div> 
   </>
  )
}

