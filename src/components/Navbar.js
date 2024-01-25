import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useMatch, useResolvePath } from 'react-router-dom';
import Withme from './Withme';
import Contact from './Contact';

const Navbar = () => {
  const [nav, setNav] = useState(false);

 

  const handleScroll = () => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      setNav(window.scrollY > 0);
    } else {
      setNav(false);
    }
  };

  // Sprawdz wersje, na tej nie dziala useResolvePath

  // function CustomLink({ to, children, ...props }) {
  //   const resolvedPath = useResolvePath(to)
  //   const isActive = useMatch({ path: resolvedPath.pathname, end:true })
  //   return (
  //     <li className={isActive ? 'active' : ''}>
  //       <Link to={to} {...props}>
  //         {children}
  //       </Link>
  //     </li>
  //   )
  // }


  return (
    <nav className={`sticky top-0 z-50 text-[#fff] bg-[#363434] opacity-45`}>
      <div>
        <ul className="hidden md:flex justify-between items-center max-w-[768px] mx-auto font-semibold">
          <li className={`transition-transform transform hover:scale-105 ${nav ? 'text-[#fff]' : ''}`}>
            <Link to="/">Strona Główna</Link>
          </li>
          <li className={`transition-transform transform hover:scale-105 ${nav ? 'text-[#fff]' : ''}`}>
            <Link to="/about">O mnie</Link>
          </li>
          <li className={`uppercase font-bold p-4 ${nav ? 'bg-[#8d6b5f] text-[#fff]' : 'text-[#8d6b5f]'}`}>
            <h1>Agata Budzynska</h1>
          </li>
          <li className={`transition-transform transform hover:scale-105 ${nav ? 'text-[#fff]' : ''}`}>
            <Link to="/withme">Ćwicz ze mną</Link>
          </li>
          <li className={`transition-transform transform hover:scale-105 ${nav ? 'text-[#fff]' : ''}`}>
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </div>

      <div onClick={() => setNav(!nav)} className="fixed z-50 right-3 top-3 md:hidden">
        {nav ? <AiOutlineClose size={20} className='text-[#fff]' /> : <AiOutlineMenu size={20} className='text-[#8d6b5f]' />}
      </div>

      <div
        className={
          nav
            ? 'fixed top-0 w-full h-30% border-r border-r-[#8d6b5f] bg-[#d5c6b3] ease-in-out duration-500'
            : 'fixed top-[-100%]'
        }
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-2 p-2 uppercase font-bold bg-[#8d6b5f] w-full text-center text-[#fff]">Agata Budzynska</h1>
          <ul className="text-center text-[#fff] font-semibold py-4">
            <li>
              <Link className="block mb-2" to="/">
                Strona Główna
              </Link>
            </li>
            <li>
              <Link className="block mb-2" to="/">
                O mnie
              </Link>
            </li>
            <li>
              <Link className="block mb-2" to="/">
                Ćwicz ze mną
              </Link>
            </li>
            <li>
              <Link className="block" to="/">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;