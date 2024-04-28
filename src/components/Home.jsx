import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Analytics from './Analytics';

import Cardjs from './Cardjs';
import Cards from './Cards';

import Footer from './Footer';
import ActiveSlider from './Newsletter';

const Home = () => {
  const nav = useNavigate();
  return (
    <>
      <Navbar navigate={nav} />
      <Hero />
      <Analytics />
      <ActiveSlider />
      <Cardjs />
      <Cards />

      <Footer navigate={nav} />
    </>
  )
}

export default Home