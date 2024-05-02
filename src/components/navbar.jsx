import { Close, HamMenu } from "../assets/icons";
import { navList, SocMed } from "./data";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

export function Navbar() {
	const [nav, setNav] = useState(false);
	const [socMed, setSocMed] = useState(false);

	function handleClick() {
		setNav((e) => !e);
	}

	function handleClickSoc() {
		setSocMed((e) => !e);
	}

	let navRef = useRef();
	let socMedRef = useRef();

	useEffect(() => {
		let closeOnClickOutside = (e) => {
			if (!navRef.current.contains(e.target)) {
				setNav(false);
			}
			if (!socMedRef.current.contains(e.target)) {
				setSocMed(false);
			}
		};
		document.addEventListener("mousedown", closeOnClickOutside);
	});

	return (
		<div className="navbar w-full h-[3.5rem] fixed shadow-md tabletMax:bottom-0  ">
			<div className="tabletMax:shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.2)] w-full h-full flex flex-row justify-between items-center bg-[white] z-50">
				<Link to="/">
					<img
						src="/compro-logo-transparent.png"
						className=" w-[75px] tablet:ml-8 tabletMax:ml-4"
					/>
				</Link>

				{/* FOR MAIN NAVLIST DESKTOP */}

				<ul className="hidden tablet:flex h-full flex-row items-center">
					{navList.map((item) => (
						<Link key={item.name} to={item.link}>
							<li className="text-lg  p-4 h-full duration-200  hover:text-white hover:bg-gray-600 hover:border-b-[#6dd635] hover:border-b-[5px] text-nowrap">
								{item.menu}
							</li>
						</Link>
					))}
				</ul>

				{/* BURGER MENU ACTIVATES NAV */}
				<div className="burger mx-auto tablet:hidden " ref={navRef}>
					<div
						onClick={handleClick}
						className=" relative duration-200 h-full p-2.5 logo   cursor-pointer hover:fill-white hover:bg-gray-600 hover:border-b-[#6dd635] hover:border-b-[5px]">
						{!nav ? <HamMenu /> : <Close />}
					</div>
				</div>

				{/* CONTACT BUTTON ACTIVATES */}
				<div className="dropSoc" ref={socMedRef}>
					<p
						className=" h-full tablet:mr-4 p-3.5 font-semibold tablet:text-[1.2em] hover:text-white hover:bg-gray-600 hover:border-b-[#6dd635] hover:border-b-[5px] duration-300 cursor-pointer text-nowrap"
						onClick={handleClickSoc}>
						Contact Us!
					</p>
				</div>
			</div>

			{/* THE MOBILE DROP DOWN LIST */}

			<ul
				className={
					!nav
						? "inactive shadow-md absolute bottom-[2rem] tabletMax:w-screen tabletMax:left-0 bg-[#fbfbfb] duration-300 "
						: "active shadow-md absolute bottom-[3.5rem] tabletMax:w-screen tabletMax:left-0 bg-[#fbfbfb] duration-300 "
				}>
				{navList.map((item) => (
					<Link key={item.name} to={item.link}>
						<li className="h-[3rem] tabletMax:text-center p-[4px] duration-200 hover:font-semibold hover:text-white hover:bg-gray-600 hover:border-b-[#6dd635] hover:border-b-[5px] border-t-gray-600 border-2">
							{item.menu}
						</li>
					</Link>
				))}
			</ul>

			{/* MOBILE DROP DOWN LIST CONTACT US */}

			<ul
				className={
					!socMed
						? " inactive bg-[#fbfbfb] duration-300 shadow-md absolute tabletMax:bottom-[2rem] tabletMax:w-screen tablet:right-[10px]"
						: " active bg-[#fbfbfb]  duration-300 shadow-md absolute tabletMax:bottom-[3.5rem] tabletMax:w-screen tablet:right-[10px]"
				}>
				{SocMed.map((media) => (
					<li
						key={media.socialMedia}
						className=" hover:text-white duration-200 hover:bg-gray-600 hover:border-b-[#6dd635] hover:border-b-[5px] cursor-pointer border-t-gray-600 border-2">
						<a
							href={media.link}
							className="text-nowrap flex gap-4 p-[5px] items-center"
							target="_blank">
							{media.logo} {media.socialMedia}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
