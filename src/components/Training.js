import React from 'react'

const Training = (props) => {
  return (
    <div className="bg-white shadow-lg rounded-md p-12 text-center w-1/4">
      <h2 className="text-xl font-semibold mb-5 ">{props.offer.title}</h2>
      <p className="text-gray-600">{props.offer.description}</p>
    </div>
  )
}

export default Training
