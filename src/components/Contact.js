import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
	return (
		
		<div>
		
			{/* <div className="flex-col justify-center text-center max-w-[1240px] mx-auto mt-10">
				<h2 className="font-bold text-5xl mb-5 uppercase">Kontakt</h2>
				<h3 className="font-semibold text-xl">Agata Budzyńska</h3>
			</div> */}
			<div className='max-w-[1240px] mx-auto'>
				<h3 className="font-bold mb-5 text-center text-2xl mt-5">Masz do mnie pytanie?</h3>
				<p>
					Zastanawiasz się, jaką praktykę wybrać? Chcesz uzupełnić informacje dotyczące wyjazdów warsztatowych? Poznać
					szczegóły oferty dla firm lub umówić się na zajęcia indywidualne? A może po prostu zaprosić mnie na wywiad?
					Lub podzielić się czymś, co właśnie wpadło Ci do głowy?
				</p>
				<p className="mt-5">Pisz swobodnie. Odpowiem, gdy tylko zejdę z maty.</p>
			</div>

			<div className='text-center'>
				<p className='uppercase'>Formularz Kontaktowy tutaj</p>
			</div>

			{/* <div className="max-w-[800px] mx-auto py-16 px-4">
				<div className="bg-gray-200 p-8 rounded-md w-full mx-auto relative shadow-lg text-center">
					<h3 className="font-semibold text-xl mb-5">Zaobserwuj mnie też w social mediach.</h3>
					<p>
						To tu pokazuję, jak prawidłowo wykonać poszczególne asany. Dzielę się też wydarzeniami, w których możesz
						wziąć udział. Promuję sukcesy moich uczniów. I daję potężną dawkę pozytywnej motywacji. Prowadzę profile na
						Facebooku i Instagramie. Wybierz to medium, z którego najczęściej korzystasz.
					</p>
					<div className="flex justify-center p-5">
						<a className="mx-3 transition-transform transform hover:scale-110" href="#">
							<FaFacebook size={20} />
						</a>
						<a className="mx-3 transition-transform transform hover:scale-110" href="#">
							<FaInstagram size={20} />
						</a>
						<a className="mx-3 transition-transform transform hover:scale-110" href="#">
							<FaXTwitter size={20} />
						</a>
					</div>
				</div>
			</div> */}
		</div>
	)
}

export default Contact
