import * as React from 'react';
import logo from '../images/pink-logo.png';
import cover from '../images/cover.jpg';
const IndexPage = () => {
	const [scrolled, setScrolled] = React.useState(0);

	React.useEffect(() => {
		if (typeof window !== `undefined`) {
			window.onscroll = () => {
				setScrolled(window.pageYOffset);
			};
		}
	}, []);

	return (
		<main>
			<div
				className={`w-full h-screen bg-no-repeat bg-[url('../images/cover-phone.jpg')] md:bg-[url('../images/cover.jpg')] bg-cover bg-top bg-transparent relative`}
			>
				<div className="absolute top-1/3 w-full">
					<p
						className="text-center text-white text-4xl sm:text-7xl font-serif font-bold"
						style={{
							textShadow: '2px 2px 5px gray',
						}}
					>
						Paul & Kareen
					</p>
					<p
						className="text-center text-white  text-xl font-mono"
						style={{
							textShadow: '2px 2px 5px gray',
						}}
					>
						08 Dec 2022
					</p>
				</div>
			</div>

			<div id="story" className="w-full h-screen">
				<div className="flex h-full items-center justify-center">
					<div className="max-w-5xl p-4 w-2/3">
						<div className="flex items-center justify-center flex-col text-center ">
							<img
								src={logo}
								alt="P & K Logo"
								className="h-40 w-40 mb-4"
							/>
							<h2 className="text-2xl md:text-4xl font-bold block font-serif tracking-wide text-gray-700 px-16">
								How beautiful is the day filled with love
							</h2>
							<div className="flex items-center flex-row justify-center">
								<div className="text-gray-400 px-2">
									&#8212;&#8212;
								</div>
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-3 w-3 fill-motif-pink-1"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>
								<div className="text-gray-400 px-2">
									&#8212;&#8212;
								</div>
							</div>
						</div>

						<div className="text-center space-y-4 px-16 sm:px-0">
							<p className="leading-1 text-xl md:text-2xl italic font-serif text-gray-500">
								We cordially invite you to celebrate with us as
								we take vows to be forever bound as husband and
								wife
							</p>
						</div>
					</div>
				</div>
			</div>

			<div
				id="avenue"
				className="w-full  h-screen space-y-10 sm:space-y-0 bg-motif-green-3"
			>
				<div className="h-full place-content-center grid grid-cols-1 gap-10 sm:gap-0 sm:grid-cols-2">
					<div className="flex items-center justify-center flex-col">
						<div className="flex items-center justify-center flex-col text-center">
							<h2 className="text-4xl font-bold block font-serif tracking-wide text-white">
								Venue
							</h2>
							<div className="flex items-center flex-row justify-center my-4">
								<div className="text-white px-2">
									&#8212;&#8212;
								</div>
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-3 w-3 fill-motif-pink-3"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>
								<div className="text-white px-2">
									&#8212;&#8212;
								</div>
							</div>
						</div>

						<div className="flex items-center justify-center flex-col text-center ">
							<div className="text-white leading-8 px-10">
								<ul>
									<li className="font-bold text-1xl md:text-2xl">
										XO46 Heritage Bistro, S'Maison
									</li>
									<li className="font-serif italic text-lg md:text-xl mb-2 md:mb-4">
										Conrad, Pasay City
									</li>
									<li className=" font-serif italic text-md md:text-lg mb-4">
										4:00pm - 8:00pm
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="flex justify-center p-4 h-96">
						<iframe
							width="100%"
							height="100%"
							// style="border:0"
							loading="lazy"
							allowfullscreen
							referrerpolicy="no-referrer-when-downgrade"
							src="https://www.google.com/maps/embed/v1/place?key=AIzaSyChypQIWK3JvTb5xco0Mre39D-I50itjpU
    &q=XO46 Heritage Bistro, S'Maison, Pasay City"
						></iframe>
					</div>
				</div>
			</div>

			<div id="attire" className="w-full h-screen">
				<div className="flex h-full items-center justify-center">
					<div className="max-w-5xl p-4">
						<div className="flex items-center justify-center flex-col text-center ">
							<h2 className="text-4xl font-bold block font-serif tracking-wide text-gray-700">
								Attire
							</h2>
							<div className="flex items-center flex-row justify-center">
								<div className="text-gray-400 px-2">
									&#8212;&#8212;
								</div>
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-3 w-3 fill-motif-pink-1"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>
								<div className="text-gray-400 px-2">
									&#8212;&#8212;
								</div>
							</div>
						</div>

						<div className="text-center space-y-4 px-4 sm:px-0 my-4 md:my-8">
							<div className="leading-none font-serif">
								<ul>
									<li className="font-bold text-2xl mb-4">
										Formal / Semi-Formal
									</li>
									<li className="font-serif  font-bold  italic text-xl mb-2">
										Ladies
									</li>
									<li className="font-serif italic text-md">
										Gown
									</li>
									<li className="font-serif italic text-md">
										Cocktail Dress
									</li>
									<li className="font-serif italic text-md mb-4">
										Nude Footwear
									</li>
									<li className="font-serif  font-bold  italic text-xl mb-2">
										Gentlemen
									</li>
									<li className="font-serif italic text-md">
										Coat & Tie
									</li>
									<li className="font-serif italic text-md">
										Long Sleeves Polo
									</li>
									<li className="font-serif italic text-md mb-4">
										Brown / Khaki Shoes
									</li>
								</ul>
							</div>
						</div>
						<div className="flex flex-col items-center">
							<p className="font-serif font-semibold italic text-center text-sm md:text-lg mb-2">
								We would love to see you in these colors
							</p>
							<div className="grid md:grid-cols-6 grid-cols-3 gap-2 place-items-center md:w-full ">
								<div className="h-14 md:h-20 w-14 md:w-20 rounded-full bg-motif-pink-1">
									<div classname=" rounded-full " />
								</div>
								<div className="h-14 md:h-20 w-14 md:w-20 rounded-full bg-motif-pink-2">
									<div classname=" rounded-full " />
								</div>
								<div className="h-14 md:h-20 w-14 md:w-20 rounded-full bg-motif-pink-3">
									<div classname=" rounded-full " />
								</div>
								<div className="h-14 md:h-20 w-14 md:w-20 rounded-full bg-motif-green-1">
									<div classname=" rounded-full " />
								</div>
								<div className="h-14 md:h-20 w-14 md:w-20 rounded-full bg-motif-green-2">
									<div classname=" rounded-full " />
								</div>
								<div className="h-14 md:h-20 w-14 md:w-20 rounded-full bg-motif-green-3">
									<div classname=" rounded-full " />
								</div>
							</div>
						</div>

						<div className="text-center space-y-4 px-4 sm:px-0 my-8">
							<div className="leading-none font-sans">
								<ul>
									<li className="font-bold text-sm md:text-2xl  mb-4">
										WEARING OF A FACEMASK IS A MUST
									</li>
									<li className="font-bold text-sm md:text-2xl  mb-4">
										STRICTLY NO BLACK / RED ATTIRES
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				id="rsvp"
				className="w-full h-screen bg-gray-200 flex flex-col justify-center items-center"
			>
				<div>
					<div className="flex items-center justify-center flex-col text-center">
						<h2 className="text-3xl md:text-4xl font-bold italic block font-serif tracking-wide text-gray-700">
							We can't wait to celebrate with you
						</h2>
						<div className="flex items-center flex-row justify-center">
							<div className="text-gray-400 px-2">
								&#8212;&#8212;
							</div>
							<div className="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-3 w-3 fill-motif-pink-1"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
							<div className="text-gray-400 px-2">
								&#8212;&#8212;
							</div>
						</div>
					</div>
				</div>

				<div className="text-center space-y-4 max-w-4xl mx-auto px-4 sm:px-0">
					<p className="font italic text-gray-400">
						Kindly RSVP on the following form on or before November
						15, 2022
					</p>

					<div className="max-w-3xl mx-auto">
						<div className="px-4 py-5 ">
							<a
								href="https://forms.gle/KodhBZQhpc7eMaF28"
								className="font-sans uppercase inline-flex items-center justify-center px-4 py-2  border-2 border-motif-pink-1 text-white bg-motif-pink-1"
							>
								RSVP
							</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
