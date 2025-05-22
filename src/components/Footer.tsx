
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-6 mt-auto">
      <div className="container mx-auto px-6 text-center">
        <p className="text-secondary-foreground">© {new Date().getFullYear()} Olivia Jardine. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
