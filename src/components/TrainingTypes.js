import React from 'react'

const TrainingTypes = props => {
	const isEven = props.type.id % 2 === 0

	return (
		<div className="max-w-[1240px] mx-auto my-10">
			<div className={`bg-gray-200 p-8 rounded-md shadow-lg flex ${isEven ? 'flex' : 'flex-row-reverse'}`}>
				<img src={props.type.coverImg} alt="Description of the image" className="w-1/2 h-1/2 rounded-md" />
				<div className="flex">
					<div className="flex-col items-center my-auto">
						<h2 className="text-center font-bold p-5 text-2xl mb-5">{props.type.title}</h2>
						<p className="px-5">{props.type.description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default TrainingTypes
