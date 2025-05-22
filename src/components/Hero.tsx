import React from 'react';
import { MapPin, Github, Linkedin, Instagram } from 'lucide-react';
import { ChevronDown } from "lucide-react";


const Hero = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="relative w-[80%] max-w-3xl h-[60%] bg-background/15 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-foreground/60 flex flex-col justify-between">

        {/* Upper content */}
        <div className="flex flex-col gap-4 mt-[10rem]">
        <h1 className="text-6xl font-bold">
          <span className="text-foreground md:mr-2">Olivia</span>{' '}
          <span className="text-foreground">Jardine</span>
        </h1>


          <p className="text-lg flex items-center gap-2">
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

      {/* Scroll down arrow */}
      <a href="#portfolio" className="absolute bottom-6 animate-bounce">
        <ChevronDown className="w-8 h-8 text-foreground" />
      </a>
    </section>
  );
};

export default Hero;
