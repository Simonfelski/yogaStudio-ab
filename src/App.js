import React from 'react'
import { Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Withme from './components/Withme'
import AboutIntro from './components/AboutIntro'
import Footer from './components/Footer'
import dataCard from './dataCard'
import dataTraining from './dataTraining'
import dataTrainingTypes from './dataTrainingTypes'
import Card from './components/Card'
import Training from './components/Training'
import TrainingTypesIntro from './components/TrainingTypesIntro'
import TrainingTypes from './components/TrainingTypes'
import Quote from './components/Quote'
import Contact from './components/Contact'
import About from './components/About'
import dataRecommendation from './dataRecommendation'
import Recommendation from './components/Recommendation'

function App() {
	const cards = dataCard.map(item => {
		return <Card key={item.id} item={item} />
	})

	const trainings = dataTraining.map(offer => {
		return <Training key={offer.id} offer={offer} />
	})

	const types = dataTrainingTypes.map(type => {
		return <TrainingTypes key={type.id} type={type} />
	})

	


	return (
	
		<div>
			<Navbar />
			<Routes>
				<Route path ='/' element={[<Hero />, <AboutIntro />, <section className="flex justify-between m-auto max-w-[1240px] my-10">{cards}</section>,<Recommendation reviews={dataRecommendation} /> , <Footer /> ]} />
				<Route path ='/about' element= {<About />} />
				<Route path ='/withme' element= {[<Withme />, <section className="flex flex-wrap m-auto max-w-screen-xl justify-evenly gap-4 my-10">{trainings}</section>, <TrainingTypesIntro />, <section>{types}</section>, <Quote />, <Footer />]} />
				<Route path ='/contact' element= {[<Contact />, <Footer />]} />
			</Routes>

			
			
		</div>
	
	)
}

export default App