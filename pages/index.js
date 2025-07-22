// pages/index.js

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function AddItemButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/login');
  };

  return (
    <button type="button" className="button" onClick={handleClick}>
      <span className="button__text">Login</span>
      <span className="button__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          className="svg"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </span>
    </button>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader2-wrapper min-h-screen fixed inset-0 z-50 bg-blue-950 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center space-y-4 text-cyan-400 text-4xl font-bold">
          <div>
            <span className="loader2-letter">L</span>
            <span className="loader2-letter">o</span>
            <span className="loader2-letter">a</span>
            <span className="loader2-letter">d</span>
            <span className="loader2-letter">i</span>
            <span className="loader2-letter">n</span>
            <span className="loader2-letter">g</span>
            <span className="loader2-letter">.</span>
            <span className="loader2-letter">.</span>
            <span className="loader2-letter">.</span>
          </div>
          
          <div className="loader2"></div>
          
        </div>
      </div>
      
    );
  }

  return (
    <div className="flex flex-col bg-[radial-gradient(circle_at_center,_rgba(60,128,248,0.12)_0%,_transparent_90%)] min-h-screen bg-blue-950 space-y-8 relative overflow-hidden">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-6 absolute top-0 z-10">
        <div className="text-2xl text-blue-100 font-bold">
          <h3>
            Health<span className="font-extrabold text-4xl text-cyan-400">+</span>
          </h3>
        </div>
        <div className="flex space-x-12 text-xl">
          <Link href="/about" className="hover:underline font-extrabold text-cyan-400">
            About
          </Link>
          <Link href="/contact" className="hover:underline font-extrabold text-cyan-400">
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 text-center md:text-left space-y-6 z-10 relative">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-xl"
        >
          <h1 className="text-8xl hero-title md:text-[12rem] font-extrabold text-white tracking-tight drop-shadow-lg leading-tight">
            Health<span className="text-cyan-400">Plus</span>
            <span className="text-green-700">.</span>
          </h1>

          {/* Login Button */}
          <div className="flex mt-2 mb-4 justify-center">
            <AddItemButton />
          </div>
        </motion.div>

        {/* Subtitle */}
        <div className="space-y-4 text-center">
          <h2 className="font-extrabold leading-tight text-3xl text-white">
            Your Personal Companion
          </h2>
          <h2 className="text-2xl text-gray-300">
            Explore the services you need for a <br /> healthier tomorrow.
          </h2>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute w-96 h-96 bg-cyan-400 opacity-20 rounded-full -top-20 -left-20 blur-3xl"></div>
      <div className="absolute w-96 h-96 bg-cyan-500 opacity-20 rounded-full -bottom-20 -right-20 blur-3xl"></div>
    </div>
  );
}
