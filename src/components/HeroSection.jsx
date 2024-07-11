import React from 'react';

function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen "> {/* Added pt-16 for top padding */}
      <div className="flex flex-col lg:flex-row w-full flex-grow">
        <div className="w-full lg:w-1/2 bg-yellow-400 p-6 sm:p-10 flex flex-col justify-center items-center lg:items-start">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl text-green-500 mb-4 lg:mb-6 font-modak text-center lg:text-left pt-40 ">
            Risolicious
          </h1>
          <p className="mb-4 lg:mb-6 text-lg sm:text-xl lg:text-2xl text-white font-mono font-semibold text-center lg:text-left">
            Coba risol terbaik dari berbagai varian dengan harga yang terjangkau namun berkualitas
          </p>
          <button className="bg-green-500 text-white font-poppins px-6 py-3 font-bold rounded hover:bg-transparent border border-green-500 transition duration-300 w-max font-mono">
            Lihat Menu
          </button>
        </div>
        <div className="w-full lg:w-1/2 bg-green-500 flex items-center justify-center flex-grow ">
          <img 
            src="/risoll.png" 
            alt="Risolicious product" 
            className="object-cover w-full h-full max-h-[50vh] lg:max-h-full"
          />
        </div>  
      </div>
    </div>
  );
}

export default HeroSection;
