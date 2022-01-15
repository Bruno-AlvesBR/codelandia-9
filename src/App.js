import React from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function App() 
{
  return (
    <Router>
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/test/" element={<Home />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </Router>
  )
}