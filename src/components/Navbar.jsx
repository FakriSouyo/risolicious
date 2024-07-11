// Navbar.jsx
import React, { useState, useEffect } from 'react';

const Navbar = ({ cartItems, setIsCartOpen, scrollToMenu, scrollToAbout, scrollToContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white bg-opacity-70 backdrop-blur-md shadow-md' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="logo">
            <img 
              src="/logorisol.png" 
              alt="Risolicious product" 
              className="object-contain w-14"
            />
          </div>
          
          {/* Tombol hamburger untuk tampilan mobile */}
          <button 
            className="md:hidden text-green-500"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          
          {/* Menu untuk desktop */}
          <div className="hidden md:flex space-x-4 font-bold font-mono">
            <a href="#" className="text-green-500 hover:text-green-600 transition-colors">Beranda</a>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              scrollToMenu();
            }} className="text-green-500 hover:text-green-600 transition-colors">Menu</a>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              scrollToAbout();
            }} className="text-green-500 hover:text-green-600 transition-colors">Tentang</a>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              scrollToContact();
            }} className="text-green-500 hover:text-green-600 transition-colors">Kontak</a>
          </div>
          {/* Tombol keranjang */}
          <div className="flex items-center space-x-4">
            <button onClick={() => setIsCartOpen(true)} className="text-green-500 hover:text-green-600 transition-colors relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu untuk mobile */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-bold font-mono">
          <a href="#" className="block text-green-500 hover:text-green-600 transition-colors">Beranda</a>
          <a href="#" onClick={(e) => {
            e.preventDefault();
            scrollToMenu();
            setIsMenuOpen(false);
          }} className="block text-green-500 hover:text-green-600 transition-colors">Menu</a>
          <a href="#" onClick={(e) => {
            e.preventDefault();
            scrollToAbout();
            setIsMenuOpen(false);
          }} className="block text-green-500 hover:text-green-600 transition-colors">Tentang</a>
          <a href="#" onClick={(e) => {
            e.preventDefault();
            scrollToContact();
            setIsMenuOpen(false);
          }} className="block text-green-500 hover:text-green-600 transition-colors">Kontak</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;