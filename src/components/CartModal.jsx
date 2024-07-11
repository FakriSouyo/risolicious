// CartModal.jsx
import React, { useState } from 'react';

function CartModal({ isOpen, onClose, cartItems, removeFromCart, placeOrder }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace('k/pcs', '000'));
      return total + (price * item.quantity);
    }, 0);
  };

  const handlePlaceOrder = () => {
    if (name && address) {
      placeOrder(name, address, calculateTotal());
      onClose();
    } else {
      alert('Mohon isi nama dan alamat Anda');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-green-600 p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl text-white font-bold mb-4">Keranjang Anda</h2>
        {cartItems.length === 0 ? (
          <p className='font-semibold text-white'>Keranjang Anda kosong</p>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center mb-2 font-bold text-white">
                <span>{item.name} x {item.quantity} (@{item.price})</span>
                <button onClick={() => removeFromCart(index)} className="text-white font-semibold">Hapus</button>
              </div>
            ))}
            <div className="mt-4 mb-4 text-white font-bold">
              Total: Rp {calculateTotal().toLocaleString()}
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 mb-2 border rounded"
              />
              <input
                type="text"
                placeholder="Alamat"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-2 mb-2 border rounded"
              />
              <button onClick={handlePlaceOrder} className="w-full bg-yellow-500 font-bold text-white py-2 rounded">
                Pesan Sekarang
              </button>
            </div>
          </>
        )}
        <button onClick={onClose} className="mt-4 text-white bg-yellow-500 px-4 py-2 rounded-lg text-sm font-bold">Tutup</button>
      </div>
    </div>
  );
}

export default CartModal;