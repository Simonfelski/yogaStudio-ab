import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  const closeNavbar = () => {
    if (window.innerWidth <= 768) {
      setNav(false);
    }
  };
 

  const handleScroll = () => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      setNav(window.scrollY > 0);
    } else {
      setNav(false);
    }
  };


  return (
    <nav className={`relative top-0 z-50 text-[black] mb-10 opacity- `}>
      <div className='relative'>
        <ul className="hidden md:flex justify-between items-center max-w-[768px] mx-auto font-bold text-xl absolute top-2 inset-x-44">
          <li className={` transition-transform transform hover:scale-105 ${nav ? 'text-[#fff]' : ''}`}>
            <NavLink to="/" exact activeClassName="active-link">Strona Główna</NavLink>
          </li>
          <li className={` transition-transform transform hover:scale-105 ${nav ? 'text-[#fff]' : ''}`}>
            <NavLink to="/about">O mnie</NavLink>
          </li>
          {/* <li className={`uppercase font-bold p-4 ${nav ? 'bg-[#8d6b5f] text-[#fff]' : 'text-[#fff]'}`}>
            <h1>Agata Budzynska</h1>
          </li> */}
          <li className={` transition-transform transform hover:scale-105 ${nav ? 'text-[#fff]' : ''}`}>
            <NavLink to="/withme">Ćwicz ze mną</NavLink>
          </li>
          <li className={` transition-transform transform hover:scale-105 ${nav ? 'text-[#fff]' : ''}`}>
            <NavLink to="/contact">Kontakt</NavLink>
          </li>
        </ul>
      </div>

      <div onClick={() => setNav(!nav)} className="fixed z-50 right-5 top-10 md:hidden">
        {nav ? <AiOutlineClose size={20} className='text-[#fff]' /> : <AiOutlineMenu size={20} className='text-secondary' />}
      </div>

{/* kolory dla rozwinietej nawigacji */}
      <div
        className={
          nav
            ? 'fixed top-0 w-full h-30% border-r border-r-secondary bg-primary ease-in-out duration-500'
            : 'fixed top-[-100%]'
        }
      >
        <div className="flex flex-col items-center justify-center">
          {/* <h1 className="mb-2 p-2 uppercase font-bold bg-[#8d6b5f] w-full text-center text-[#fff]">Agata Budzynska</h1> */}
          <ul className="text-center text-[#fff] font-semibold py-4 ">
            <li>
              <NavLink className="block mb-2" to="/" onClick={closeNavbar}>
                Strona Główna
              </NavLink>
            </li>
            <li>
              <NavLink className="block mb-2" to="/about" onClick={closeNavbar}>
                O mnie
              </NavLink>
            </li>
            <li>
              <NavLink className="block mb-2" to="/withme" onClick={closeNavbar}>
                Ćwicz ze mną
              </NavLink>
            </li>
            <li>
              <NavLink className="block" to="/contact" onClick={closeNavbar}>
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;