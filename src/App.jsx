// App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MenuSection from './components/MenuSection';
import CartModal from './components/CartModal';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const placeOrder = (name, address, totalPrice) => {
    const orderDetails = cartItems.map(item => `${item.name} x ${item.quantity}`).join('\n');
    const message = `Order\nNama: ${name}\nAlamat: ${address}\nPesanan:\n${orderDetails}\nTotal Harga: Rp ${totalPrice.toLocaleString()}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+622225828290?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setCartItems([]);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navbar 
        cartItems={cartItems} 
        setIsCartOpen={setIsCartOpen}
        scrollToMenu={() => scrollToSection('menu-section')}
        scrollToAbout={() => scrollToSection('about-section')}
        scrollToContact={() => scrollToSection('contact-section')}
      />
      <HeroSection />
      <MenuSection addToCart={addToCart} />
      <AboutSection />
      <ContactSection />
      <Footer />
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        placeOrder={placeOrder}
      />
    </div>
  );
}

export default App;