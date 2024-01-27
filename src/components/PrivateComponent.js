import React from 'react'

const PrivateComponent = (props) => {
	return (
		<div className="rounded-md p-12 h-1/2 w-3/12 text-center">
			<h2 className="text-xl font-semibold mb-5 ">{props.privateValue.title}</h2>
			<p className="text-gray-600">{props.privateValue.description}</p>
		</div>
	)
}

export default PrivateComponent
