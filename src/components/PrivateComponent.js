import React from 'react'
import { GiBeveledStar } from "react-icons/gi";

const PrivateComponent = (props) => {
	return (
		<div className="rounded-md p-12 md:h-1/2 md:w-3/12 text-center">
			<h2 className="text-xl font-semibold mb-5 ">{props.privateValue.title}</h2>
			<p className='flex justify-center py-5'><GiBeveledStar size={30} /></p>
			<p className="text-gray-600">{props.privateValue.description}</p>
		</div>
	)
}

export default PrivateComponent
