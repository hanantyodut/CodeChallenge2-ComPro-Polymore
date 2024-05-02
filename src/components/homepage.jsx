import { Link } from "react-router-dom/cjs/react-router-dom";
import { client, services } from "./data";
import { UseTheseContext } from "./ContextProvider";
import { useEffect } from "react";

export function Homepage() {
	const { selectedProd, handleSelectedProd } = UseTheseContext();
	console.log(selectedProd);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div name="home" className="homes w-full bg-[#f9f6ee]  ">
			<div
				className="homeHero w-full h-screen "
				style={{
					backgroundImage:
						"linear-gradient(to top, rgba(0, 0, 0, 1) 4%, rgba(0, 0, 0, 0)), url(/homepagehero.jpg)",
					backgroundSize: "cover",
				}}>
				<div className="flex flex-col items-center justify-center tabletMax:pt-[6rem] pt-[10rem]">
					<img
						src="/compro-logo-transparent.png"
						className="tablet:w-[30rem] w-[14rem]"
					/>
					<p className="comp-desc mt-2 ml-1rem tabletMax:text-lg text-2xl font-head italic text-[#6dd635] font-semibold text-center rounded-md">
						Change your wastes into treasures!
					</p>
					<div className="mt-[10rem] flex tablet:flex-row flex-col items-center gap-6 justify-center w-full">
						<Link to="/about">
							<button className="text-[#fff] bg-[#fbfbfb] bg-opacity-20 hover:bg-[#14571c] p-3 border2 border-[#14571c] border-solid  rounded-[3px] text-lg font-semibold duration-200">
								About Polymore
							</button>
						</Link>
						<Link to="/product">
							<button className="text-[#fff] bg-[#fbfbfb] bg-opacity-20  hover:bg-[#14571c] p-3 border2 duration-200 border-[#14571c] border-solid rounded-[3px] text-lg font-semibold">
								Our Products?
							</button>
						</Link>
					</div>
				</div>
			</div>

			{/* FOR MAIN VIDEO */}

			<div className=" w-full bg-black h-[57vh] tablet:h-[80vh] flex flex-col items-center">
				<div className="w-[90%] h-[.1px] border-b-gray-800 border-solid border-[1px]"></div>
				<div className="pt-[2rem]">
					<p className="text-gray-400 text-center font-semibold text-4xl tabletMax:text-xl">
						Our very first project.
					</p>
				</div>
				<div className="flex flex-row tabletMax:flex-col tablet:mx-40 tablet:gap-[5rem] items-center pb-[3rem]">
					<video
						src="/VideoProyekKKN.mp4"
						autoPlay
						loop
						muted
						className="video tablet:w-[70%] rounded-2xl mx-auto shadow-xl"
					/>
					<div className="comp-overview text-gray-400  flex flex-col items-center">
						<div className="border-b-2 border-gray-500 w-[70%] mb-4">
							<p className="text-center pt-2 tablet:text-lg font-bold text-[#6dd635]">
								Brief Introduction
							</p>
						</div>
						<div className="tablet:px-4 px-3">
							<p className="text-center tabletMax:text-sm">
								<em>POLYMORE</em> is a company that focused on preserving
								environment by recycling all plastic wastes and re-processed
								them into useful products.
							</p>
						</div>
					</div>
				</div>
				<div className="w-[90%] h-[.1px] border-b-gray-800 border-solid border-[1px]"></div>
			</div>

			{/* FOR PRODUCTS & SERVICES */}

			<div className="tablet:h-[47vh] bg-black w-full overflow-hidden">
				<p className="text-gray-400 text-center font-semibold text-4xl tabletMax:text-xl mb-[1rem] tabletMax:mb-[1rem]">
					Products Overview
				</p>
				<p className="text-gray-400 text-center tablet:mb-[2rem] tabletMax:mb-[.7rem] tablet:text-lg font-semibold">
					Click on the button for details!
				</p>
				<Link to="/product">
					<div className=" tabletMax:overflow-scroll  tabletMax: mx-[2rem] tabletMax:mb-[3rem] tabletMax:p-4 tabletMax:border-[1px] tabletMax:border-solid tabletMax:border-[#fbfbfb] rounded-lg tablet:mb-[4rem]">
						{" "}
						<div className="flex flex-row mx-auto tablet:w-[90%] tablet:h-[73%] tablet:gap-4 tabletMax:gap-3 w-[170%] tablet:mb-[2rem]">
							{services.map((service) => (
								<button
									key={service.name}
									className="  flex flex-col justify-center items-center bg-[#fbfbfb] bg-opacity-25 text-[#6dd635] rounded-lg tablet:text-xl font-semibold  hover:bg-[#14571c] hover:text-[#fbfbfb] duration-200 tablet:w-[30rem] pb-2 tabletMax:w-[40rem] "
									onClick={() => handleSelectedProd(service)}>
									<img
										src={service.image}
										className="img-service opacity-45 tablet:w-[8rem] tabletMax:w-[3rem]"
									/>
									<p className="hidden tabletMax:block tablet:text-md text-wrap text-center leading-tight">
										{service.name.split(" ").length > 1
											? service.name.split(" ").slice(0, 1).join("")
											: service.name}
									</p>
									<p className="hidden tablet:block tablet:text-md text-wrap text-center leading-tight">
										{service.name}
									</p>
								</button>
							))}
						</div>
					</div>
				</Link>
				<div className="w-[90%] h-[.1px] border-b-gray-800 border-solid border-[1px] mx-auto mb-[3rem]"></div>
			</div>

			{/* TESTIMONIALSSS */}
			<div className="w-full tabletMax:h-[84vh] tablet:h-[65vh] bg-black tablet:pt-3 ">
				<div className="tablet:w-[80%] justify-around mx-auto flex tabletMax:flex-col tablet:flex-row items-center">
					<div className="testimony tablet:w-[40%] tablet:h-[24rem] tabletMax:mx-[2rem] tabletMax:w-[80%] ">
						<p className="text-center  mb-[1rem] tablet:text-3xl tabletMax:text-xl font-semibold  text-gray-400">
							Our Client Testimonies?
						</p>
						<ul className="flex flex-col gap-4 tabletMax: overflow-scroll overflow-x-hidden tablet:mx-4  tabletMax:h-[10rem] p-6 border-[1px] border-solid border-[#fbfbfb] rounded-lg tablet:h-[20rem] ">
							{client.map((client) => (
								<li
									key={client.id}
									className="grid  bg-[#cce6be] bg-opacity-30 tablet:mx-4 tablet:mt-2 tablet:p-3 rounded-lg ">
									<img
										src={client.image}
										alt={client.name}
										className="row-span-2 rounded-tl-md rounded-bl-md"
									/>
									<h3 className=" text-white tablet:font-semibold tablet:text-xl tabletMax:font-semibold tabletMax:text-md  ">
										{client.name}
									</h3>
									<p className="italic text-white ">{client.message}</p>
								</li>
							))}
						</ul>
					</div>
					<div
						name="Contact"
						className=" flex justify-center items-center tabletMax:w-[80%] mt-[2rem] tabletMax:p-4 tabletMax:border-[1px] rounded-lg tablet:w-[50%] tabletMax:mb-[6rem] ">
						<form
							method="POST"
							action="https://getform.io/f/eapdneza"
							className="flex flex-col w-full items-center">
							<div className="tablet:pb-4 tabletMax:pt-[.3rem] w-full">
								<p className="tablet:text-3xl tabletMax:text-2xl font-semibold text-gray-400">
									Contact us right here
								</p>
								<p className="text-gray-300 py-4">Submit your message below!</p>
							</div>
							<input
								className="bg-[#cce6be] bg-opacity-30 p-2 rounded-lg w-full text-gray-400"
								type="text"
								placeholder="Name"
								name="name"
							/>
							<input
								className="my-4 p-2 bg-[#cce6be] bg-opacity-30 rounded-lg w-full text-gray-400"
								type="email"
								placeholder="Email"
								name="email"
							/>
							<textarea
								className="bg-[#cce6be] bg-opacity-30 p-2 rounded-lg w-full text-gray-400"
								name="message"
								rows={5}
								placeholder="message"></textarea>
							<button className="text-black bg-[#fbfbfb] bg-opacity-50 rounded-lg w-[10rem] mt-4 h-[3rem] hover:text-white font-semibold duration-300 hover:bg-[#14571c] hover:border-white">
								contact us!
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
