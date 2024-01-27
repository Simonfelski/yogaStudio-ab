import React from 'react'

const Training = (props) => {
  return (
    <div className=" rounded-md p-12 text-center w-1/4">
      <h2 className="text-xl font-semibold mb-5 ">{props.offer.title}</h2>
      <p className="text-gray-600">{props.offer.description}</p>
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
