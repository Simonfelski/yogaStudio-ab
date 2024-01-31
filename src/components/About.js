import React from 'react'
import dataValues from '../dataValues'
import ValuesComponent from './ValuesComponent'
import PrivateComponent from './PrivateComponent'
import dataPrivate from '../dataPrivate'
import { Link } from 'react-router-dom'


const About = props => {
	const myValues = dataValues.map(value => {
		return <ValuesComponent key={value.id} value={value} />
	})

	const myPrivateValues = dataPrivate.map(privateValue => {
		return <PrivateComponent key={privateValue.id} privateValue={privateValue} />
	})

	return (
		<div className="pt-20">
			{/* <div className="text-center mb-20 pt-8 max-w-[1240px] m-auto">
				<h1 className="font-bold text-2xl">O MNIE</h1>
				<h2 className="font-semibold">Agata Budzyńska</h2>
			</div> */}
			<div className="flex flex-col text-justify px-5 md:flex-row md:text-left md:mb-20 md:mt-20 md:max-w-[1240px] m-auto">
				<div className="mr-5">
					<h3 className="font-semibold text-2xl pb-5 md:pb-0">Hej, tu Agata Budzyńska.</h3>
					<p>
						Jestem nauczycielką jogi i trenerem medycznym. Kobietą lubiącą wyzwania, lecz dążącą do nich w swoim rytmie.
					</p>
					<p className="mt-5">
						Im więcej zdobywam wiedzy w temacie jogi, tym więcej widzę, ile jeszcze jest do odkrycia. Pragnę więc złamać
						ustalony wizerunek jogi jako tylko aktywności fizycznej. I pokazać Ci, że droga jogi to droga do spełnienia
						marzeń.
					</p>
					<div className="flex justify-center py-10 md:py-0 md:justify-end max-w-[1240px] m-auto">
						<Link
							to="/withme"
							className="mt-5 rounded-lg text-sm text-[#fff] font-semibold  py-2 px-4 bg-button hover:bg-button-hover transition duration-300">
							JAK MOŻESZ PRAKTYKOWAĆ JOGĘ?
						</Link>
					</div>

					<h3 className="font-semibold mt-5">Jak wygląda Twój normalny dzień?</h3>
					<p>
						Wstajesz zmęczona. Idziesz do pracy, która Cię stresuje. Starasz się spełniać milion ról, jak każda
						współczesna kobieta. Czujesz ból tu i ówdzie. Ale dzielnie go ignorujesz. Po wykonaniu miliona obowiązków
						zasypiasz zmęczona. I znowu się budzisz, w dokładnie tym samym stanie.
					</p>
					<p className="mt-5 mb-5">Chcę pomóc Ci przerwać to błędne koło.</p>
					<p>
						<b>Joga to nie tylko aktywność fizyczna. To metoda kształtowania ciała, umysłu i ducha.</b> Metoda
						holistyczna, która szlifuje charakter i sprawia, że wszystkie życiowe cele zmieniają status z niemożliwych
						na osiągalne. To Twój nowy styl życia. Z radością pokażę Ci, jak wprowadzić go w Twoją codzienność.
					</p>
				</div>
				<div>
					<img src="../images/about1.jpg" alt="Pozycja jogi" className="rounded-lg py-5 md:py-0" />
				</div>
			</div>

			<div className="flex flex-col px-5 text-center md:flex-row md:text-left md:mb-20 md:max-w-[1240px] m-auto ">
				<div className="mr-5 order-1 md:order-none">
					<img src="../images/about2.jpg" alt="Pozycja jogi" className="rounded-lg py-5 md:py-0" />
				</div>
				<div className='text-justify'>
					<h3 className="font-semibold py-5 md:py-0">Marzy mi się świat ludzi spełnionych i szczęśliwych. </h3>
					<p>
						Realizujących swoje marzenia z lekkością i ogromną pewnością siebie. Dokonujących zdrowych dla siebie
						wyborów na każdym kroku swojego życia. Świadomych swego ciała i charakteru. Wypoczętych. I zwyczajnie
						dobrych dla siebie i innych.
					</p>
					<p className="mt-5">
						Wiem, to brzmi nieskończenie idealistycznie. Lecz wiem, że gdy żyjesz zgodnie z jogą, jest to możliwe.
					</p>
					<div className="flex justify-center py-10 md:py-0 md:justify-end">
						<Link
							to="/contact"
							className="md:mt-5 rounded-lg text-sm text-[#fff] font-semibold bg-button py-2 px-4 hover:bg-button-hover transition duration-300">
							WYBIERZ SWOJĄ PRAKTYKĘ
						</Link>
					</div>
					<h3 className="font-semibold mt-5">Joga wcale nie była moją miłością od pierwszego wejrzenia.</h3>
					<p>Moja droga do niej była dość wyboista.</p>
					<p className="mt-5">
						Poszłam na zajęcia na wielkiej siłowni. Ogrom ludzi. Hałas. Prowadząca znudzona chyba bardziej niż my. Suche
						polecenia, jak na lekcji w-f. Sport. Sport po prostu. Bez ognia, bez głębszej idei pod spodem.
					</p>
					<p className="mt-5">
						W tym samym miejscu trafiłam na crossfit. Tu był ogień, był pot, były cele do osiągnięcia. Więc przepadłam
						na kilka miesięcy. Do czasu aż nadambitny trener niemal przymusił mnie do podniesienia ciężaru, na który nie
						byłam gotowa.
					</p>
					<p className="mt-5">
						I nabawiłam się poważnej kontuzji. Już drugiej. Bo przygodę z jogą rozpoczęłam właśnie od zalecenia lekarza,
						by się nie ruszać. Może ewentualnie rower. I joga.
					</p>
				</div>
			</div>

			<div className="flex flex-col text-justify px-5 py-10 md:py-0 md:px-0 md:text-left md:flex-row md:max-w-[1240px] m-auto">
				<div>
					<h3 className="font-semibold">Miałam wtedy 20 lat.</h3>
					<p>
						Wyobrażasz to sobie? Moja pierwsza kontuzja wynikała z tego... że byłam zbyt elastyczna. Dużo stałam na
						zablokowanym, przeprostowanym stawie. A potem kolano wpadało mi w przeprost nawet podczas chodzenia.
					</p>
					<p className="mt-5">
						Ale 20-latki raczej nie mają tendencji do słuchania lekarzy. Dlatego potrzebowałam aż dwóch kontuzji, by w
						końcu trafić na jogę.
					</p>
					<p className="mt-5">
						Nadeszła ta wiekopomna chwila. Zdecydowałam się odnaleźć studio jogi z prawdziwego zdarzenia. Chciałam
						poczuć ten klimat.
					</p>
					<p className="mt-5">
						A potem już wynikało. Krótka przygoda z Ashtanga Jogą. Potem Vinyasa Joga i Yin Joga, które praktykuję do
						dziś. Ruch i oddech i płynne przejścia w Vinyasie. Jak taniec. Skupienie na własnym wnętrzu w Yin Jodze.
					</p>
					<h3 className="font-semibold mt-5">
						Byłam zafascynowana, jak wiele potrafi ciało, gdy połączysz praktykę z siłą umysłu i ducha.
					</h3>
					<p>
						Przeszłam swoją drogę od braku wiary w to, że potrafię wykonać trudniejsze asany do chwili, gdy zostałam
						trenerem jogi. Droga ta prowadziła nie tylko przez budowanie siły, bezpiecznego zakresu ruchu czy kondycji.
						Przede wszystkim była to droga, w której zbudowałam swój charakter. Osiągnęłam wewnętrzny spokój.{' '}
						<b> I udowodniłam sobie, że mogę wszystko.</b>
					</p>
				</div>
				<div>
					<img src="../images/about5.jpg" alt="Pozycja jogi" className="rounded-lg md:ml-5 py-5 md:py-0" />
				</div>
			</div>

			<div className="m-auto px-12 py-5 md:max-w-full text-center md:mt-20 md:py-8 bg-primary">
				<h2 className="font-bold uppercase text-xl pb-5 md:pb-0">Co jest dla mnie ważne?</h2>
				<p>Mam kilka wartości, którymi kieruję się i na macie i w życiu.</p>
			</div>
			<div className="flex flex-wrap md:gap-12 justify-center m-auto py-8 bg-primary ">{myValues}</div>
			

			
		</div>
	)
}

export default About
