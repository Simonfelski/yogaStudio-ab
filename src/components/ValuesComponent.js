import React from 'react'

const ValuesComponent = (props) => {
  return (
    <div className="bg-[#fff] shadow-2xl rounded-md p-12 h-1/2 w-3/12 text-center">
      <h2 className="text-xl font-semibold mb-5 ">{props.value.title}</h2>
      <p className="text-gray-600">{props.value.description}</p>
    </div>
  )
}

export default ValuesComponent
