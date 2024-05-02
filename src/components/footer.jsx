import { KeyboardArrowRight } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import { SocMed, linkFooter } from "./data";

const Footer = () => {
	return (
		<div className="w-full bottom-0 bg-[#6dd635] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
			<div className=" tabletMax:hidden h-[32vh] bg-[#202120] text-gray-400 border-t-[3px] border-[#6dd635]">
				{/* FOOTER PT 1 */}

				<div className="flex flex-row justify-between">
					<div className="flex flex-col m-6 ml-[5rem] pr-6 border-r-[1px]">
						<p className="text-2xl font font-semibold">Stay Connected.</p>
						<p>Kept informed for our next events and projects!</p>
						<div className="flex flex-row justify-around mt-4">
							<input
								type="email"
								placeholder="E-mail address..."
								className="bg-[#cce6be] bg-opacity-35 text-[#fbfbfb] rounded-xl p-2 "
							/>
							<Button variant="contained">
								Sign Up <KeyboardArrowRight />
							</Button>
						</div>
						<div className="flex flex-row gap-4 mx-auto mt-[1.7rem]">
							{SocMed.map((soc) => (
								<Avatar
									key={soc.socialMedia}
									sx={{
										bgcolor: "#66d635",
										color: "#202120",
										"&:hover": { bgcolor: "#cce6be" },
									}}>
									<span>{soc.logo}</span>
								</Avatar>
							))}
						</div>
					</div>

					{/* FOOTER PT 2 */}

					<div className="flex flex-col m-6 items-center]">
						<div className="flex flex-row border-b-[1px] pb-4 w-[40rem] justify-around">
							<div className="flex flex-col ">
								<p className="text-2xl font font-semibold">Our Supporters.</p>
								<div className="flex flex-row gap-4 mt-3 ">
									<img src="/kemnterianparis.png" width={50} />
									<img src="/kementrianlingkungan.png" width={50} height={50} />
									<img src="/precplas.png" width={50} />
								</div>
							</div>
							<div>
								<img
									src="/logotulisputih.png"
									className=" w-[10rem] tablet:ml-8 tabletMax:ml-4"
								/>
							</div>
						</div>

						<div>
							<ul className="text-[13px] list-disc flex flex-row justify-center gap-5 mt-[1.3rem]">
								<li>PolymoreDesigns.</li>
								<li>
									Jl.Bromo Jaya, No.324, RT/RW : 002/034, Kec. Bekasi Tenggara
								</li>
								<li className="text-[#6dd635]">Our Location Map</li>
							</ul>
							<ul className="text-[10px] list-disc flex flex-row justify-center gap-5 mt-[1.3rem]">
								<li className="text-[#6dd635]">Privacy Policy</li>
								<li className="text-[#6dd635]">Site Map</li>
								<li>©2024 Polymore Designs.</li>
							</ul>
						</div>
					</div>

					{/* FOOTER PT 3 */}

					<div className="flex flex-col m-6 mr-[4rem] pl-6 border-l-[1px]">
						<p className="text-2xl font font-semibold">Navigate.</p>
						<div className="grid grid-cols-2 justify-items-start gap-x-6 gap-y-[0]">
							{linkFooter.map((link) => (
								<Button
									key={link.id}
									variant="text"
									sx={{ fontSize: "11px", padding: "4px", textWrap: "nowrap" }}>
									{link.title} <KeyboardArrowRight />
								</Button>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
