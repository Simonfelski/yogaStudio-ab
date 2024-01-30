import React from 'react'
import { GiBeveledStar } from "react-icons/gi";

const ValuesComponent = (props) => {
  return (
    <div className=" p-12 md:h-1/2 md:w-4/12 text-justify">
      <h2 className="text-xl font-semibold mb-5 text-center">{props.value.title}</h2>
      <p className='flex justify-center py-5'><GiBeveledStar size={30} /></p>
      <p className="text-gray-600">{props.value.description}</p>
    </div>
  //   <div className="flip rounded-lg overflow-hidden">
  //   <div className="flip-inside relative">
  //     {/* Front side */}
  //     <div className="flip-card-front relative">
  //       <img src={props.value.coverImg} alt="Avatar" className="w-full h-full object-cover rounded-lg" />
  //       <div className="absolute top-0 right-0 p-4">
  //         <h3 className="text-2xl font-bold text-[white]">{props.value.title}</h3>
  //       </div>
  //     </div>

  //     {/* Back side */}
  //     <div className="flip-card-back rounded-lg flex-col items-center justify-center">
  //      <p className="text-lg p-4 mt-10">{props.value.description}</p>
  //       <a href="#" >Czytaj więcej</a>
  //     </div>
  //   </div>
  // </div>
);
  
}

export default ValuesComponent
