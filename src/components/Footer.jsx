// Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <img src="/logorisol.png" alt="Risolicious Logo" className="w-20 mx-auto md:mx-0" />
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <p className="font-mono">&copy; 2024 Risolicious. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <a href="#" className="text-white hover:text-yellow-300 mx-2 font-mono">Kebijakan Privasi</a>
            <a href="#" className="text-white hover:text-yellow-300 mx-2 font-mono">Syarat dan Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;