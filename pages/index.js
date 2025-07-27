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
      <span className="button__text">Login</span>
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
      <div className="absolute top-6 z-20 w-full flex text-white gap-8 justify-center">
        <button className="buttonn">Contact Us</button>
        <button className="buttonn">About Health+</button>
      </div>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-6 space-y-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-4xl"
        >
          <h1 className="text-8xl hero-title md:text-[12rem] font-extrabold text-white tracking-tight drop-shadow-lg leading-tight">
            Health<span className="text-cyan-400">Plus</span>
            <span className="text-green-700">.</span>
          </h1>

          <div className="flex justify-center items-center">
            <AddItemButton />
          </div>

          <div className="flex justify-center items-center">
            <DotLottieReact
              src="https://lottie.host/cd3d22f5-4d6c-4874-bda8-6e3c8be9a5c6/YT3tqLApVb.lottie"
              loop
              autoplay
              style={{ width: '300px', height: '300px' }}
            />
          </div>
          <h2>Choose a healthier tomorrow!</h2>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full text-center text-gray-400 py-4 border-t border-white/20">
        <p className="text-sm px-4">
          HealthPlus offers AI-powered predictions, personalized health insights, and 24/7 monitoring.
        </p>
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
