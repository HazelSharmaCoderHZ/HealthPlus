import { Info, Mail } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function AddItemButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/login');
  };

  return (
    <button type="button" className="button" onClick={handleClick}>
      <span className="button__text">Start</span>
      <span className="button__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round"
             viewBox="0 0 24 24" className="svg">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </span>
    </button>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-between bg-blue text-cyan-400 text-4xl font-bold">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between min-h-screen bg-blue bg-[radial-gradient(circle_at_center,_rgba(205,222,252,0.17)_0%,_transparent_90%)] relative">
      
      {/* Navbar */}
      {/* Navbar */}
<div className="absolute top-0 z-20 w-full px-8 py-4 flex items-center justify-between text-white border-b border-gray-600 backdrop-blur-md">
  {/* Left - Logo */}
  <h3 className="text-4xl tracking-wide text-cyan-200">
    <span>&ensp;</span><span className="font-extrabold">+</span> HEALTHPLUS
  </h3>

  {/* Right - Links */}
  <div className="flex gap-8">
    <span className="hover:text-green-400 hover:scale-105 transform transition duration-200 cursor-pointer">Contact</span>
     <span>&ensp;</span><span>&ensp;</span>
    <span className="hover:text-green-400 hover:scale-105 transform transition duration-200 cursor-pointer">About</span>
    <span>&ensp;</span><span>&ensp;</span>
    <span className="hover:text-green-400 hover:scale-105 transform transition duration-200 cursor-pointer">Services</span>
    <span>&ensp;</span><span>&ensp;</span>
  </div>
</div>


      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-6  z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          
          <h1 className="text-8xl hero-title md:text-[17rem] font-extrabold text-white tracking-tight drop-shadow-lg leading-tight">
            YOUR HEALTH IS OUR PRIORITY.
          </h1>
          <h3> AI-powered predictions, personalized health insights, and 24/7 monitoring<br></br> Choose a healthier tomorrow!</h3>

          <div className="flex justify-center items-center">
            <AddItemButton />
          </div>
          <div className="flex animm justify-center items-center">
            <DotLottieReact
              src="https://lottie.host/cd3d22f5-4d6c-4874-bda8-6e3c8be9a5c6/YT3tqLApVb.lottie"
              loop
              autoplay
              style={{ width: '400px', height: '400px' }}
            />
          </div>

          <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <h2 className="text-xl font-semibold mb-6 text-center">
        We would love to hear from you —
      </h2>
      
      <div className="flex items-center gap-4">
        {/* GitHub */}
        <div className="social-button">
          <button className="relative w-12 h-12 rounded-full group">
            <div className="floater w-full h-full absolute top-0 left-0 bg-black rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
            <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-black rounded-full">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:fill-[#171543] fill-white duration-300"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.17 6.839 9.481.5.092.683-.217.683-.481
                  0-.237-.009-.866-.013-1.699-2.782.603-3.37-1.338-3.37-1.338-.454-1.15-1.11-1.458-1.11-1.458-.906-.619.069-.606.069-.606
                  1.002.071 1.527 1.03 1.527 1.03.89 1.529 2.34 1.087 2.911.831.091-.645.348-1.087.634-1.338-2.22-.252-4.555-1.11-4.555-4.94
                  0-1.09.39-1.986 1.028-2.682-.103-.252-.446-1.268.098-2.642 0 0 .837-.268 2.75 1.024a9.563 9.563 0 012.496-.335
                  9.58 9.58 0 012.496.335c1.913-1.292 2.75-1.024 2.75-1.024.544 1.374.202 2.39.1 2.642.64.696 1.027 1.592 1.027
                  2.682 0 3.839-2.338 4.685-4.567 4.933.358.309.678.916.678 1.847 0 1.334-.012 2.412-.012 2.74
                  0 .267.18.577.688.481A12.01 12.01 0 0022 12c0-5.523-4.477-10-10-10z"
                  fill="#FFFFFF"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* LinkedIn */}
        <div className="social-button">
          <button className="relative w-12 h-12 rounded-full group">
            <div className="floater w-full h-full absolute top-0 left-0 bg-blue-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
            <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-500 rounded-full">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:fill-[#171543] fill-white duration-300"
                  d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z
                  M8.5,19H6V10h2.5V19z M7.3,9 h-0.1C6.4,9,6,8.6,6,8.1V7.9c0-0.5,0.4-0.9,0.9-0.9h0.1C7.6,7,8,7.4,8,7.9v0.1C8,8.6,7.6,9,7.3,9z
                  M19,19h-2.5v-4.9 c0-1.2-0.4-2-1.4-2c-0.8,0-1.3,0.6-1.5,1.2h-0.1V19H10V10h2.3v1.3h0C12.7,10.7,14,9.9,15.5,9.9c2.1,0,3.5,1.4,3.5,3.8V19z"
                  fill="#FFFFFF"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Email */}
        <div className="social-button">
          <button className="relative w-12 h-12 rounded-full group">
            <div className="floater w-full h-full absolute top-0 left-0 bg-red-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
            <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-red-400 rounded-full">
              <svg
                height="32"
                width="32"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:fill-[#171543] fill-white duration-300"
                  d="M28 5H4c-1.104 0-2 .896-2 2v18c0 1.104.896 2 2 2h24c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zm0 4.879L16 18 4 9.879V7l12 8 12-8v2.879zM4 23V11.885l11.446 7.63c.269.18.594.274.921.274s.652-.094.92-.274L28 11.885V23H4z"
                  fill="#FFFFFF"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>

        </motion.div>
        
      </main>

      {/* Footer */}
      <footer className="w-full text-center text-gray-400 py-4 border-t border-white/20">
        <p className="mt-2 text-xs text-gray-600">
          &copy; {new Date().getFullYear()} HealthPlus. All rights reserved.
        </p>
      </footer>

      {/* Background Circles */}
      <div className="absolute w-96 h-96 bg-cyan-400 opacity-20 rounded-full -top-20 -left-20 blur-3xl"></div>
      <div className="absolute w-96 h-96 bg-cyan-500 opacity-20 rounded-full -bottom-20 -right-20 blur-3xl"></div>
    </div>
  );
}
