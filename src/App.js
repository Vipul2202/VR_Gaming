import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Cardjs from './components/Cardjs';
import Home  from './components/Home';
import ContactUs from './components/ContactUs';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';

function App() {
  return (
    // <div>
    //   <Navbar />
    //   <Hero />
    //   <Analytics />
    //   <Newsletter />
    //   <Cardjs />
    //   <Cards />
    //   <ContactUs />
    //   <Footer />
    // </div>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/footer' element={<footer/>}/>
      </Routes>
    </Router>
  );
}

export default App;
