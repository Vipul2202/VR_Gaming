import React from 'react';
import hello from "../assets/hello.jpg";
import woman from "../assets/woman.png";
import vipul from "../assets/vipul.jpg";

const reviews = [
  {
    img: vipul,
    name: 'Vansh Gupta',
    rating: 4.5,
    review: 'Exceptional VR gaming experience! Immersive environments, responsive controls, and a vast selection of games. A must-visit for gaming enthusiasts!',
    color: 'from-blue-500 to-purple-600',
  },
  {
    img: woman,
    name: 'Drishti Jain',
    rating: 5,
    review: 'Top-tier VR gaming destination! Cutting-edge technology, friendly staff, and a thrilling selection of games. An unforgettable experience for gamers of all levels',
    color: 'from-pink-500 to-red-600',
  },
  {
    img: hello,
    name: 'Harsh Verma',
    rating: 4,
    review: 'Incredible VR gaming venue! Jaw-dropping visuals, smooth controls, and an electrifying atmosphere. An essential destination for gaming aficionados seeking unparalleled excitement',
    color: 'from-green-500 to-blue-600',
  },
];

const Newsletter = () => {
  return (
    <div id='review' className='w-full py-16 text-white px-4'>
      <p className='text-5xl font-bold font-serif flex justify-center bg-gradient-to-b from-purple-900 to-red-400 text-transparent bg-clip-text'>Customer Reviews</p>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-6'>
        {reviews.map((review, index) => (
          <div key={index} className={`bg-gradient-to-br ${review.color} rounded-lg p-6 mt-4`}>
            <div className='flex items-center mb-4'>
              <img src={review.img} alt='User' className='w-12 h-12 rounded-full mr-4' />
              <div>
                <h3 className='text-lg font-bold'>{review.name}</h3>
                <div className='flex items-center'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-yellow-400 mr-1' viewBox='0 0 20 20' fill='currentColor'>
                    <path fillRule='evenodd' d='M6.293 7.707a1 1 0 00-1.414 1.414l1.086 1.086-1.086 1.086a1 1 0 101.414 1.414l1.086-1.086 1.086 1.086a1 1 0 001.414-1.414l-1.086-1.086 1.086-1.086a1 1 0 00-1.414-1.414L9.5 9.586 8.414 8.5a1 1 0 00-1.121-.207zM10 2a1 1 0 01.992.876L11 3v6.303l2.93 2.93a1 1 0 11-1.414 1.414l-3.707-3.707a1 1 0 00-.293-.207V3a1 1 0 011-1zM2 10a1 1 0 01.293-.707l3.707-3.707a1 1 0 011.414 1.414L5 8.303V15a1 1 0 01-1.707.707l-3-3A1 1 0 011 11V3a1 1 0 011-1h6a1 1 0 01.707.293l-3 3A1 1 0 012 7V10z' clipRule='evenodd' />
                  </svg>
                  <span className='text-yellow-400 font-semibold'>{review.rating}</span>
                </div>
              </div>
            </div>
            <p className='text-sm'>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsletter;
