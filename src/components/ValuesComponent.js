import React from 'react'

const ValuesComponent = (props) => {
  return (
    // <div className="bg-[#fff] shadow-2xl rounded-md p-12 h-1/2 w-3/12 text-center">
    //   <h2 className="text-xl font-semibold mb-5 ">{props.value.title}</h2>
    //   <p className="text-gray-600">{props.value.description}</p>
    // </div>
    <div className="flip rounded-lg overflow-hidden">
    <div className="flip-inside relative">
      {/* Front side */}
      <div className="flip-card-front relative">
        <img src={props.value.coverImg} alt="Avatar" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute top-0 right-0 p-4">
          <h3 className="text-2xl font-bold text-[white]">{props.value.title}</h3>
        </div>
      </div>

      {/* Back side */}
      <div className="flip-card-back rounded-lg flex-col items-center justify-center">
       <p className="text-lg p-4 mt-10">{props.value.description}</p>
        <a href="#" >Czytaj więcej</a>
      </div>
    </div>
  </div>
);
  
}

export default ValuesComponent
