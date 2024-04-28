import React,{useState} from "react";
import hrry from "../assets/hrry.png";
import { useNavigate } from 'react-router-dom';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = ({navigate}) => {
  const [nav, setNav] = useState(false);
  return (
    <div className="bg-gradient-to-r from-blue-400 to-green-500 rounded-xl rounded-b-none mx-auto  px-4 grid lg:grid-cols-3 gap-8 text-gray-300" navigate={nav} >
      <div className="text-black">
        <img src={hrry} alt="Logo" className="h-14 w-25 m-2" />
        <div></div>
        <p className="py-4">433/2B, College road, civil lines, Ludhiana</p>
        <p>+91 7527055053</p>
        <p className="mt-2">virtulland@gmail.com</p>
        <div className="flex justify-between md:w-[75%] my-6">
          <a
            href="https://www.facebook.com/profile.php?id=61558679300847"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare size={30} />
          </a>
          <a
            href="https://www.instagram.com/virtulland?igsh=MW5vMWYxdzZ4bzRxeQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare size={30} />
          </a>
          <a
            href="https://youtube.com/@Virtulland?si=yHJ8J6iVFAStPdnZ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutubeSquare size={30} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6 text-black">
        <div>
          <h6 className="font-bold text-black">QUICK LINKS</h6>
          <ul className="font-semibold">
          <a href="#home"><li onClick={() => navigate('/#home')} className='p-4'>Home</li></a>
        <a href='#companyi'><li onClick={() => navigate("/#companyi")} className='p-4'>About</li></a>
        <a href='#review'><li className='p-4' onClick={() => navigate('/#review')}>Reviews</li></a>
        <a href='#about'><li className='p-4' onClick={() => navigate('/#about')}>VR Gaming</li></a>
      <a href="#harry"><li className='p-4' onClick={() => navigate('/contact')}>Contact</li></a>  
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-black">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-black">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
