// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Careers from './screens/Careers';
import Company from './screens/Company'; // ✅ new
import Team from './screens/Teams'; // ✅ new

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#090D20] text-white overflow-x-hidden">
        <Header />
        <Routes>
          {/* 🏠 Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero /> <About /> <Features /> <Testimonial /> <FAQ /> <Footer />
              </>
            }
          />

          {/* ✅ Additional Pages */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/company" element={<Company />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
