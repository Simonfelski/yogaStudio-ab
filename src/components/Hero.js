import React from 'react';
// import Yoga from '

const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center flex items-center justify-center mb-20">
      <img className="w-full h-full object-cover"  src='images/hero.jpg' alt="Yoga" />
      <div className="absolute inset-0 bg-[#fff] opacity-20"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center" >
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#8d6b5f] uppercase">Odkryj swoją wewnętrzną siłę</h1>
        <p className="text-lg text-[#d5c6b3] mb-4">Wybierz swoj styl:</p>
        <button className="rounded-full text-[#fff] font-semibold bg-button hover:bg-button-hover py-2 px-4 transition duration-300">
          Zapisz się
        </button>
      </div>
    </div>
  );
};

export default Hero;

// style={{ marginTop: '10%' }}