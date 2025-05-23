import React from 'react';
import { MapPin, Github, Linkedin, Instagram } from 'lucide-react';
import { ChevronDown } from "lucide-react";


const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center relative">
      <div className="page-box h-[70vh] flex flex-col justify-between">

        {/* Upper content */}
        <div className="flex flex-col gap-4 mt-40">
          <h1 className="text-7xl font-extrabold">
            <span className="text-foreground md:mr-2">OLIVIA</span>{' '}
            <span className="text-foreground">JARDINE</span>
          </h1>
          <p className="text-lg flex items-center gap-2">
            Full Stack Developer
            <MapPin className="w-5 h-5" />
            Seattle, WA
          </p>
          <a href="#portfolio" className="btn w-fit">View My Work</a>
        </div>

        {/* Social icons in bottom right */}
        <div className="absolute bottom-6 right-10 flex items-center gap-5">
          <a href="https://github.com/oliviafjardine?tab=overview&from=2025-05-01&to=2025-05-22" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-foreground transition-colors" />
          </a>
          <a href="https://linkedin.com/in/olivia-jardine" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-foreground transition-colors" />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 hover:text-foreground transition-colors" />
          </a>
        </div>
      </div>

      {/* Scroll down arrow - always bottom center of hero section, but below navbar menu */}
      <a
        href="#about"
        className="absolute inset-x-0 mx-auto w-fit bottom-6 z-0 animate-bounce cursor-pointer flex justify-center"
        onClick={e => {
          e.preventDefault();
          const el = document.getElementById('about');
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }}
      >
        <ChevronDown className="w-8 h-8 text-foreground drop-shadow-lg" />
      </a>
    </section>
  );
};

export default Hero;
