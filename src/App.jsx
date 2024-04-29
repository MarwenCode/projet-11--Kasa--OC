import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import AppartDetails from './pages/appartmentDetails/AppartDetails';
import Footer from './components/footer/Footer';
import "./App.css"


function App() {


  return (
    <Router>
   
  
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apartment/:id" element={<AppartDetails />} />
      
      </Routes>

      <Footer />
   
  </Router>

  )
}

export default App
