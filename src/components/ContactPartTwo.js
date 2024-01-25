import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactPartTwo = () => {
	return (
		<div className="max-w-[800px] mx-auto py-16 px-4">
            <div className="bg-gray-200 p-8 rounded-md w-full mx-auto relative shadow-lg text-center">
			<h3 className="font-semibold text-xl mb-5">Zaobserwuj mnie też w social mediach.</h3>
			<p>
				To tu pokazuję, jak prawidłowo wykonać poszczególne asany. Dzielę się też wydarzeniami, w których możesz wziąć
				udział. Promuję sukcesy moich uczniów. I daję potężną dawkę pozytywnej motywacji. Prowadzę profile na Facebooku
				i Instagramie. Wybierz to medium, z którego najczęściej korzystasz.
			</p>
            <div className='flex justify-center p-5'>
                <a className='mx-3 transition-transform transform hover:scale-110' href="#"><FaFacebook size={20} /></a>
                <a className='mx-3 transition-transform transform hover:scale-110' href="#"><FaInstagram size={20} /></a>
                <a className='mx-3 transition-transform transform hover:scale-110' href="#"><FaXTwitter size={20} /></a>
            </div>
            </div>
		</div>
	)
}

export default ContactPartTwo
