import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import HomeBot from './components/Homebot';
import Careers from './screens/Careers';
import Company from './screens/Company';
import Team from './screens/Teams';
import Support from './screens/Support'; // ✅ added import

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
                <Hero />
                <About />
                <Features />
                <Testimonial />
                <FAQ />
                <HomeBot /> {/* ✅ included */}
                <Footer />
              </>
            }
          />

          {/* ✅ Additional Pages */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/company" element={<Company />} />
          <Route path="/team" element={<Team />} />
          <Route path="/support" element={<Support />} /> {/* ✅ added support route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
