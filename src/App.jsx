import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
function App() {
  return (<div className="min-h-screen bg-[#090D20] text-white overflow-x-hidden"> <Header />
    <Hero /> <About />  <Features /> <Testimonial /> <FAQ /> <Footer />
  </div>);
} export default App;