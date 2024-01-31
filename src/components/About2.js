import React from 'react'
import PrivateComponent from './PrivateComponent'
import dataPrivate from '../dataPrivate'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const About2 = () => {

    const myPrivateValues = dataPrivate.map(privateValue => {
		return <PrivateComponent key={privateValue.id} privateValue={privateValue} />
	})


  return (
    <div>
    <div className="m-auto text-center mb-10 py-8 bg-primary">
				<h2 className="font-bold uppercase text-xl max-w-[1240px] m-auto pb-5 md:pb-0">A prywatnie?</h2>
				<p className="mb-10 px-12">Jaka jestem? Mam swoje dziwne zwyczaje. Może Ty podchodzisz do świata podobnie?</p>

				<div className="flex flex-wrap md:gap-12 justify-center m-auto p-1 max-w-[1240px] ">{myPrivateValues}</div>
			</div>

			<div className="text-center mt-20 mb-10 px-10">
				<h2 className="font-bold uppercase text-xl pb-5 md:pb-0">Tu znajdziesz kilka dyplomów,</h2>
				<p>które zdobyłam na mojej drodze do bycia instruktorką jogi i trenerem medycznym.</p>
				{/* dyplomy */}
			</div>

			<div className="text-center mt-20 mb-10 max-w-[1240px] m-auto">
				<div className='px-5'>
					<img src="../images/about7.jpg" alt="Zdjęcie Agaty instruktorki" className="rounded-lg shadow-xl" />
				</div>
				<div className='px-10'>
					<h2 className="font-bold uppercase text-xl mt-10 pb-5 md:pb-0">Czujesz, że chcesz ćwiczyć właśnie ze mną?</h2>
					<p className="pb-5">Joga ma wiele oblicz. Wybierz praktykę idealną właśnie dla Ciebie.</p>
					<Link
						to="/withme"
						className="rounded-lg text-sm text-[#fff] font-semibold bg-button hover:bg-button-hover py-2 px-4 transition duration-300">
						SPRAWDŹ OPCJE
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default About2
