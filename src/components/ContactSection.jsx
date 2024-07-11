// ContactSection.jsx
import React, { useState } from 'react';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Di sini Anda bisa menambahkan logika untuk mengirim email
    console.log('Form submitted:', formData);
    // Reset form setelah submit
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact-section" className="bg-green-500 py-16 pt-40">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-modak text-white text-center mb-12">Hubungi Kami</h2>
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-green-500 mb-6 font-mono">Informasi Kontak</h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-700 font-mono">
                  <svg className="w-6 h-6 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Jl. Teuku Umar No.RT.12, Pamusian
                </p>
                <p className="flex items-center text-gray-700 font-mono">
                  <svg className="w-6 h-6 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  +62 1255 6670 198
                </p>
                <p className="flex items-center text-gray-700 font-mono">
                  <svg className="w-6 h-6 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  info.risolicious@gmail.com
                </p>
              </div>
              <h3 className="text-2xl font-bold text-green-500 mt-8 mb-4 font-mono">Jam Operasional</h3>
              <p className="text-gray-700 font-mono">Senin - Jumat: 16:00 - 21:00</p>
              <p className="text-gray-700 font-mono">Sabtu - Minggu: 13:00 - 20:00</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-500 mb-6 font-mono">Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-mono mb-2">Nama</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-mono mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-mono mb-2">Pesan</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-yellow-400 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-300"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;