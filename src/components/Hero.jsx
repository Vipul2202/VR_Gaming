import React, { useEffect, useState, useRef } from 'react';
import { ReactTyped } from "react-typed";
import Protobacillus from "../assets/Protobacillus.gif";
import abc from "../assets/abc.gif";

import Navbar from './Navbar';
import './Hero.css'; // Import your CSS file

const Hero = () => {
  const scrollRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {

    const isDesktopScreen = () => {
      return window.innerWidth > 768; 
    };

    
    setIsDesktop(isDesktopScreen());

   
    const handleResize = () => {
      setIsDesktop(isDesktopScreen());
    };

    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScrollClick = () => {

    const oneStepHeight = window.innerHeight;

  
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

   
    const targetScrollPosition = currentScrollPosition + 1.0 * oneStepHeight; 

    window.scrollTo({
      top: targetScrollPosition,
      behavior: 'smooth'
    });
  };
  const handleLearnMoreClick = () => {
   
    window.open('https://internetcomputer.org/docs/current/developer-docs/getting-started/overview-of-icp', '_blank');
  };
  const handleApplyNowClick = () => {
    window.open('https://forms.gle/QyLk9ewL4o2oCuV37', '_blank');
  };

  return (
    <div id='home' className='text-white ' style={{ backgroundImage: `url(${abc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
   
      <div className='w-full mt-[-96px]  h-screen mx-auto text-center flex flex-col justify-center fadeInUp'>

        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-clip rounded-xl fade-in-up font-serif'>
          Enter the Virtual World
        </h1>
        <div className='flex justify-center items-center bg-gradient-to-b from-green-500 to-yellow-400 text-transparent bg-clip-text fade-in-up flex-col'>

          
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
          Beyond Screens: 
          </p>
          <ReactTyped
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-green-500' // Added a class 'typed-container'
            strings={['VR', 'Gaming', 'Adventure']}
            typeSpeed={120}
            backSpeed={190}
            attr="placeholder"
            loop
          >
            <input className='rounded-lg bg-transparent text-green-700' type="text" />
          </ReactTyped>
        </div>
        <div className='flex justify-center fade-in-up py-24'>
          <button onClick={handleScrollClick} className='bg-gradient-to-r from-yellow-600 to-red-400 hover:text-white hover:font-bold w-[200px] px-4 font-bold text-black md:py-2 md:px-6 rounded-md transition duration-300 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-red-400 hover:text-white hover:font-bold w-[200px]'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
