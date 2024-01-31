import React from 'react';


const Hero = () => {
  return (
    <div className="relative h-screen w-11/12 m-auto flex items-center justify-center mb-20">
      <img className="w-full h-full object-cover"  src='images/hero.jpg' alt="Pozycja jogi" />
      {/* <div className="absolute inset-0 bg-third opacity-60"></div> */}
      {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center" >
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-primary uppercase">Odkryj swoją wewnętrzną siłę</h1>
      </div> */}
    </div>
  );
};

export default Hero;