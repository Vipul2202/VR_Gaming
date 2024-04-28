import React from 'react';
import k2 from "../assets/k2.png";
import ad1 from "../assets/ad1.png";
import my2 from "../assets/my2.jpg";
import mu2 from "../assets/mu2.jpeg";
import sh2 from "../assets/sh2.jpg";
import sp2 from "../assets/sp2.jpg";
import ac2 from "../assets/ac2.jpg";
import bgg from "../assets/bgg.jpg";
import vtttt from "../assets/vtttt.png";


const Cardjs = () => {
  return (
    <>
    <div id='about' className='bg-gray-900 py-[2%] bg-gradient-to-b from-purple-900 to-red-400' >
      <div className='flex justify-center flex-col p-2'><p className='text-5xl font-bold font-serif flex justify-center bg-gradient-to-b from-red-400 to-red-400 text-transparent bg-clip-text'>Multiplayer VR Gaming and Mystery Escape Room.  
</p>
<p className='font-bold font-serif flex justify-center text-2xl py-4 text-white'>Escape the reality by jumping into the modern era of Virtual Land in 6 Different heart-breathing categories.
</p></div>
    <div className="flex min-h-screen items-center justify-center  p-4">
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={ac2} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          
          <h1 className="font-dmserif text-3xl font-bold text-white">     ACTION   GAMES
</h1>


          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">

        
            Engage into the intense fire-fight of the different reality by taking part into biggest courageous actions.
</p>
<img className='h-24 w-24 text-white' src={vtttt} alt='logo' />
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={ad1} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 rounded-xl">
          <h1 className="font-serif text-3xl font-bold text-white">ADVENTURE  GAMES</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Be ready to experience the deep adventure by feeling the true detail of the way and enjoying the one of the best storyline. 
</p>
<img className='h-24 w-24 text-white' src={vtttt} alt='logo' />



        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full  rounded-xl w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={my2} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 rounded-xl"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">    MYSTERY   GAMES
</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Find the real truth of the Mystery by solving the puzzles or by collecting the clues by your own in a wide variety of escape rooms.
</p>
<img className='h-24 w-24 text-white' src={vtttt} alt='logo' />
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full  rounded-xl w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={mu2} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 rounded-xl"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">             MUSIC / RYTHM  GAMES

</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
For the music freaks, Score the highest by experiencing the Neon reality and bashing the marks through your hands.
</p>
<img className='h-24 w-24 text-white' src={vtttt} alt='logo' />
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full  rounded-xl w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={sp2} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 rounded-xl"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">    SPORTS  GAMES
</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Play as a Champion in the stadium andd hear the audience cheering you up. Score as the Blood of winning run through your heart.

</p>
<img className='h-24 w-24 text-white' src={vtttt} alt='logo' /> 
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full  rounded-xl w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={sh2} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 rounded-xl"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">     SHOOTING    GAMES

</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Wield the one of the deadliest weapons to shoot the evils or the Zombies and having the true feel of shooting.

</p>
<img className='h-24 w-24 text-white' src={vtttt} alt='logo' />
        </div>
      </div>
    </div>
    {/* <div className="fixed bottom-16">
      <p className="font-com text-2xl font-semibold text-white">All Images are from <a href="https://unsplash.com" className="text-blue-500">Unsplash.com</a></p>
    </div> */}
  </div>
  </div>
  </>
  
  )
}

export default Cardjs