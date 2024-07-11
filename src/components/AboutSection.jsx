// AboutSection.jsx
import React from 'react';

function AboutSection() {
  return (
    <div id="about-section" className="bg-yellow-400 py-16 pt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-modak text-green-500 text-center mb-12">Tentang Kami</h2>
        <div className="backdrop-filter backdrop-blur-sm bg-green-500 bg-opacity-70 border border-gray-100 rounded-lg shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-white font-semibold mb-6 font-mono leading-relaxed">
                Risolicious adalah tempat terbaik untuk menikmati risol dengan berbagai varian rasa yang lezat. Kami berkomitmen untuk menyajikan risol berkualitas tinggi dengan harga terjangkau.
              </p>
              <p className="text-lg text-white font-semibold mb-6 font-mono leading-relaxed">
                Setiap risol kami dibuat dengan cinta dan menggunakan bahan-bahan segar terbaik. Kami percaya bahwa makanan enak tidak harus mahal, dan itulah mengapa kami terus berinovasi untuk memberikan pengalaman kuliner terbaik bagi pelanggan kami.
              </p>
              <div className="bg-green-100 border-l-4 border-yellow-500 p-4 mb-6 rounded-r-lg">
                <p className="text-yellow-500 font-bold font-mono">Misi Kami</p>
                <p className="text-yellow-500 font-mono">Menyajikan risol terlezat dengan harga terjangkau untuk semua pecinta kuliner.</p>
              </div>
            </div>
            <div className="space-y-6">
              <img src="/tr.png" alt="Chef menyiapkan risol" className="rounded-lg shadow-md w-full h-64 object-cover"/>
              <div className="grid grid-cols-2 gap-4">
                <img src="/tb.png" alt="Bahan-bahan segar" className="rounded-lg shadow-md w-full h-40 object-cover"/>
                <img src="/TK.png" alt="Pelanggan yang puas" className="rounded-lg shadow-md w-full h-40 object-cover"/>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">Mengapa Memilih Risolicious?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-yellow-100 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-600 mb-2 font-mono">Kualitas Terbaik</h4>
                <p className="text-gray-700 font-mono">Kami hanya menggunakan bahan-bahan berkualitas terbaik untuk setiap risol kami.</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-600 mb-2 font-mono">Inovasi Rasa</h4>
                <p className="text-gray-700 font-mono">Kami selalu berinovasi untuk menciptakan varian rasa baru yang menggugah selera.</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-600 mb-2 font-mono">Pelayanan Ramah</h4>
                <p className="text-gray-700 font-mono">Tim kami siap memberikan pelayanan terbaik dengan senyum ramah.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;