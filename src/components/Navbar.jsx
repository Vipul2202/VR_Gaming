import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import civil from "../assets/civil.png";

const Navbar = ({ navigate }) => {
  const [nav, setNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const closeNavOnOutsideClick = (event) => {
      if (nav && !event.target.closest('.navbar-sidebar')) {
        setNav(false);
      }
    };

    document.addEventListener('click', closeNavOnOutsideClick);

    return () => {
      document.removeEventListener('click', closeNavOnOutsideClick);
    };
  }, [nav]);

  useEffect(() => {
    const closeMenuOnScroll = () => {
      setIsMenuOpen(false); // Close the menu when the user scrolls
    };

    window.addEventListener('scroll', closeMenuOnScroll);

    return () => {
      window.removeEventListener('scroll', closeMenuOnScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const redirectToReview = () => {
    window.location.href = 'https://maps.app.goo.gl/kc4om2GCTMdXVHZB8';
  };

  return (
    <div className='flex justify-between items-center h-24 w-full mx-auto px-4 text-white py-2 bg-black'>
      <div className='mt-2 hidden sm:block'>
        <img className='h-auto w-44' src={civil} alt='logo' />
      </div>
      <ul className='hidden md:flex font-bold text-xl rounded-md'>
        <li onClick={() => navigate('/')} className='p-4 hover:text-blue-700'>Home</li>
        <a href='#companyi'><li onClick={() => navigate("/#companyi")} className='p-4 hover:text-blue-700'>About</li></a>
        <a href='#review'><li className='p-4 hover:text-blue-700' onClick={() => navigate('/#review')}>Reviews</li></a>
        <a href='#about'><li className='p-4 hover:text-blue-700' onClick={() => navigate('/#about')}>VR Gaming</li></a>
        <li className='p-4 hover:text-blue-700' onClick={() => navigate('/contact')}>Contact</li>
      </ul>
      <div>
        <button onClick={redirectToReview} className='bg-gradient-to-r from-pink-600 to-purple-700 px-4 font-bold text-black md:py-2 py-2 md:px-6 rounded-md transition duration-300 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-red-400 hover:text-white hover:font-bold'>Write your Review</button>
      </div>
      <div onClick={toggleMenu} className='block md:hidden cursor-pointer'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={`navbar-menu fixed inset-0 ${isMenuOpen ? '' : 'hidden'}`}>
        <div className={`"navbar-backdrop fixed inset-0 bg-gray-800 opacity-25 `} onClick={toggleMenu}></div>
        <nav className="fixed bg-black top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6  border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <svg className="h-12" alt="logo" viewBox="0 0 10240 10240">
                {/* Your SVG path for the logo */}
              </svg>
            </a>
            <button className="navbar-close" onClick={toggleMenu}>
              <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <div className="flex justify-center items-center p-2 flex-col space-y-4">
              <img
                src={civil}
                className="h-28 w-28"
                alt="Logo"
              />
              <label className="flex items-center cursor-pointer">
              </label>
            </div>
            <ul className="text-black">
              <li onClick={() => navigate('/')} className='p-4 text-white'>Home</li>
              <a href='#companyi'><li onClick={() => navigate("/#companyi")} className='p-4 text-white hover:text-blue-700'>About</li></a>
              <a href='#review'><li className='p-4 hover:text-blue-700 text-white' onClick={() => navigate('/#review')}>Reviews</li></a>
              <a href='#about'><li className='p-4 hover:text-blue-700 text-white' onClick={() => navigate('/#about')}>VR Gaming</li></a>
              <li className='p-4 hover:text-blue-700 text-white' onClick={() => navigate('/contact')}>Contact</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
