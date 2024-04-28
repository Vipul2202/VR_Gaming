import React from 'react';
import v from '../assets/v.png';
import j from '../assets/j.png';
import pcte from "../assets/pcte.jpg";

const Analytics = () => {
  return (
    <div id='companyi' className='bg-white py-8 px-2 md:px-0' style={{ backgroundImage: `url(${pcte})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='flex justify-center'>
        <p className='flex text-5xl font-bold text-white bg-black px-4 rounded-lg py-2'>About Us</p>
      </div>
      <div className='max-w-screen-xl mx-auto md:grid md:grid-cols-2 md:gap-8 items-center'>
        <img className='w-full md:w-[500px] mx-auto my-4 rounded-3xl' src={v} alt='/' />
        <div className='text-center md:text-left'>
          <div className="bg-gradient-to-r from-purple-700 to-black bg-opacity-70 rounded-lg p-6 mt-4">
            <h1 className='md:text-2xl sm:text-2xl text-xl font-semibold py-2 text-white font-serif'>Step into our VR gaming hub, your premier destination for immersive virtual experiences! Explore a world where excitement meets innovation, as we offer top-notch virtual reality adventures to gamers of all skill levels. Whether you’re an experienced player or a newcomer, our handpicked collection of games and experiences ensures unparalleled immersion and enjoyment. Come join us on an exciting journey into the forefront of gaming!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
