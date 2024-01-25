import React from 'react'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
	return (
    <div className='bg-[#d5c6b3]'>
    <div className=' flex justify-evenly p-16'>
      <div className='uppercase font-bold text-lg'>
        <h1>Agata Budzyńska</h1>
      </div>
      <div>
        <ul className='flex-col items-center'>
          <li><a href="#" className='flex items-center text-lg transition-transform transform hover:scale-110'><FaFacebookSquare size={20} className='m-2'/>Facebook</a></li>
          <li><a href="#" className='flex items-center text-lg transition-transform transform hover:scale-110'><FaInstagram size={20} className='m-2'/>Instagram</a></li>
          <li><a href="#" className='flex items-center text-lg transition-transform transform hover:scale-110'><FaXTwitter size={20} className='m-2'/>X (Twitter)</a></li>
        </ul>
      </div>
      <div>
        <ul>
          <li className='m-2 text-lg'><p>tel: +48 798 477 892</p></li>
          <li className='m-2 text-lg'><p>e-mail: agata@yoga.pl</p></li>
          <li className='m-2 text-lg transition-transform transform hover:scale-110'><a href="#">Sprawdź moją ofertę</a></li>
        </ul>
      </div>
    </div>
    <p className="pb-5 text-md text-center">©{new Date().getFullYear()} Agata Budzynska Yoga. All Rights Reserved.</p>
    </div>






//         <div className="flex flex-col items-center justify-center bg-[#d5c6b3] text-[#fff]">
//   <h1 className="text-2xl font-bold mb-4">Agata Budzynska</h1>
//   <ul className="flex space-x-4">
//     <li><a href="#"><FaFacebookSquare size={20} className='transition-transform transform hover:scale-110'/></a></li>
//     <li><a href="#"><FaInstagram size={20} className='transition-transform transform hover:scale-110'/></a></li>
//     <li><a href="#"><FaXTwitter size={20} className='transition-transform transform hover:scale-110'/></a></li>
//   </ul>
//   <p className="mt-4 text-sm">©{new Date().getFullYear()} Agata Budzynska Yoga. All Rights Reserved.</p>
// </div>
	)
}

export default Footer
