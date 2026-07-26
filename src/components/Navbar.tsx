"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled 
          ? "top-6 w-[95%] max-w-5xl" 
          : "top-0 w-full"
      }`}
    >
      <header 
        className={`w-full border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled 
            ? "rounded-full border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] py-0" 
            : "rounded-none border-transparent bg-transparent py-2 border-b-white/5"
        }`}
      >
        <div className="px-4 md:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-1 cursor-pointer group">
            <img src="/logo-mark.png" alt="Logo" className="w-16 h-16 object-contain scale-125 group-hover:scale-150 transition-transform" />
            <span 
              className="hidden sm:block text-3xl tracking-wide mt-1 group-hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.6)] transition-all" 
              style={{ fontFamily: "'UnifrakturMaguntia', cursive", color: "#8b5cf6" }}
            >
              Brand Panther
            </span>
          </div>

          {/* Nav Links */}
          <nav className={`hidden md:flex items-center gap-1 px-2 py-1.5 transition-all duration-500 ${
            isScrolled ? "bg-white/5 rounded-full border border-white/5" : "bg-transparent"
          }`}>
            <a href="#services" className="px-5 py-1.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">Services</a>
            <a href="#work" className="px-5 py-1.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">Work</a>
            <a href="#about" className="px-5 py-1.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">About</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden lg:inline-flex border-white/20 text-white rounded-full hover:bg-white/10">Login</Button>
            <Button className="rounded-full bg-white text-black hover:bg-gray-200 font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Get Started
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}
