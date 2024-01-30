import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Arrow(props) {
	const { className, style, onClick } = props
	return <div className={className} style={{ ...style, display: 'block', color: 'black', }} onClick={onClick} />
}

const Recommendation = props => {
	let settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		// nextArrow: <Arrow />,
		// prevArrow: <Arrow />,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	}

	return (
		<div className="max-w-[1240px] m-auto my-20">
			<h2 className="text-center text-2xl font-bold mb-5 md:mb-10 uppercase"> Opinie</h2>
			<Slider {...settings}>
                
				{props.reviews.map(review => (
					<div key={review.id} className="bg-white shadow-lg rounded-md p-12 text-center w-1/4">
						<h3 className="">{review.title}</h3>
						<p>{review.description}</p>
					</div>
				))}
                
			</Slider>
		</div>
	)
}

export default Recommendation




