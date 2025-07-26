import { Info, Mail } from 'lucide-react';
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
    const timer = setTimeout(() => setLoading(false), 2500); // shorter loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-950 text-cyan-400 text-4xl font-bold">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-blue-950 bg-[radial-gradient(circle_at_center,_rgba(60,128,248,0.11)_0%,_transparent_90%)] relative">
      
      
      {/* Navbar */}
      <div className="absolute top-6 z-20 w-full flex justify-center">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-2 flex gap-6 shadow-lg text-sm sm:text-base">
          <Link href="/about" className="flex items-center gap-1 hover:underline font-extrabold text-cyan-400">
            <Info size={18} /> About
          </Link>
          <Link href="/contact" className="flex items-center gap-1 hover:underline font-extrabold text-cyan-400">
            <Mail size={18} /> Contact
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 space-y-6 z-10">
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

          

          <div className="mt-4 flex justify-center items-center">
            <AddItemButton />
          </div>
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
