import React from 'react';
import vir from "../assets/vir.jpg"; // Import your background image
import './Cards.css';

const Cards = () => {
  // Define an array of objects for card data
  const eventsData = [
    {
      id: 1,
      date: 'FEEL  THE  TEAMWORK ',
      title: 'By stepping into the different reality, bring your friends and fight the zombies or defeat the opponent squad with the feel of cutting-edge gaming experience.',
    },
    {
      id: 2,
      date: 'SAFE  ZONE',
      title: 'Feel free to play in the smoke-free area zone where no smoking or drinking is allowed',
    },
    {
      id: 3,
      date: 'FAMILY  JOY ',
      title: 'Bring your family to our virtual land to aboard the next level experience with our family-friendly virtual games.',
    },
    {
      id: 4,
      date: 'AGE  FRIENDLY  MODE',
      title: 'We include console gaming also like Sony PS5 which offers the 4k gaming through a big screen by having a pvp mode available.',
    },
  ];

  return (
    <div className='container p-2 mx-auto py-8' style={{ backgroundImage: `url(${vir})` }}> {/* Apply background image */}
 
     <div className='flex justify-center'>
        <p className='flex text-5xl font-bold text-white bg-black px-4 rounded-lg py-2'>TEAM UNITE: VIRTUAL LAND</p>
      </div>

      <div className='flex flex-wrap gap-4 justify-center mt-2'>
        {/* Map over the eventsData array */}
        {eventsData.map((event) => (
          <a key={event.id} href="#/" className="w-full sm:w-64 bg-purple-900 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 rainbow">
            <div className='p-4'>
              <p className='text-green-400 text-2xl mb-2'>{event.date}</p>
              <p className='text-gray-800'>{event.title}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Cards;
