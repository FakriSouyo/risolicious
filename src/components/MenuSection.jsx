// MenuSection.jsx
import React, { useState } from 'react';

const menuItems = [
  {
    name: 'Mayonice',
    displayName: 'mayonice\nmayonise',
    image: 'mayonice.png',
    price: '3k/pcs',
    description: 'sosis, telur dan mayonaise',
    backgroundColor: 'bg-transparent',
    textColor: 'text-yellow-300',
    rating: 5
  },
  {
    name: 'Cokolat',
    displayName: 'cokolat\ncokolat',
    image: 'cokolat.png',
    price: '3k/pcs',
    description: 'Selai coklat dan Milo',
    backgroundColor: 'bg-transparent',
    textColor: 'text-green-500',
    rating: 4
  },
  {
    name: "Say ur's",
    displayName: "say ur's\nsay ur's",
    image: 'say ur.png',
    price: '3k/pcs',
    description: 'berbagai sayur dan ayam',
    backgroundColor: 'bg-transparent',
    textColor: 'text-yellow-300',
    rating: 5
  },
  {
    name: 'Bolo nice',
    displayName: 'bolonice\nbolonice',
    image: 'bolonice.png',
    price: '4k/pcs',
    description: 'jamur, kornet dan bolognese',
    backgroundColor: 'bg-transparent',
    textColor: 'text-green-500',
    rating: 4
  }
];

function MenuCard({ item, addToCart }) {
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    if (count > 0) {
      addToCart({ ...item, quantity: count });
      setCount(0);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-64 ">
      <div className={`${item.backgroundColor} p-4 relative`}>
        <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-xl" />
        
        <div className="absolute bottom-2 left-6">
          
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold font-mono text-lg">{item.name}</h3>
        <p className="text-gray-600 font-mono font-semibold">{item.price}</p>
        <p className="text-sm text-gray-500 font-mono mt-1">{item.description}</p>
        <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={() => setCount(Math.max(0, count - 1))} className="bg-yellow-400 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold">-</button>
          <span className="mx-2 font-semibold">{count}</span>
          <button onClick={() => setCount(count + 1)} className="bg-yellow-400 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold">+</button>
        </div>
        <button onClick={handleAddToCart} className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">Tambah</button>
      </div>
      </div>
    </div>
  );
}

function MenuSection({ addToCart }) {
  return (
    <div id="menu-section" className="bg-green-500 py-12 pt-40 ">
      <div className="container mx-auto">
        <h2 className="text-6xl font-modak text-white text-center mb-8">Daftar Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {menuItems.map((item, index) => (
            <MenuCard key={index} item={item} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuSection;