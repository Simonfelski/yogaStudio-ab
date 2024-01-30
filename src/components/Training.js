import React from 'react'
import { GiBeveledStar } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Training = (props) => {
  return (
    <div className=" rounded-md p-12 text-center md:w-1/4">
      <h2 className="text-xl font-semibold mb-5 ">{props.offer.title}</h2>
      <p className='flex justify-center py-5'><GiBeveledStar size={30} /></p>
      <p className="text-gray-600 pb-5">{props.offer.description}</p>
      <Link to='/contact' className="rounded-lg text-sm text-[#fff] font-semibold bg-button hover:bg-button-hover py-2 px-4 transition duration-300">Zapisz się</Link>
    </div>

    
    // <div className="flip rounded-lg overflow-hidden">
    //   <div className="flip-inside relative">
    //     {/* Front side */}
    //     <div className="flip-card-front relative">
    //       <img src={props.offer.coverImg} alt="Avatar" className="w-full h-full object-cover rounded-lg" />
    //       <div className="absolute top-0  p-4">
    //         <h3 className="text-2xl font-bold text-[white]">{props.offer.title}</h3>
    //       </div>
    //     </div>

    //     {/* Back side */}
    //     <div className="flip-card-back rounded-lg flex-col items-center justify-center">
    //      <p className="text-lg p-4 mt-10">{props.offer.description}</p>
    //       <a href="#" >Czytaj więcej</a>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Training
