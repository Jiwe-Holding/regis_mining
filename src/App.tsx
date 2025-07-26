import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import Partnerships from './components/Partnerships';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Activities />
      <Partnerships />
      <Impact />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;