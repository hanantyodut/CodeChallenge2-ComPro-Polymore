import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import {
	Avatar,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom/cjs/react-router-dom";
import {
	cardsProduct,
	machineryType,
	materialFlow,
	projectsInfo,
	protoInfo,
	services,
} from "./data";

import PropTypes from "prop-types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

import { UseTheseContext } from "./ContextProvider";
import Carousel from "react-material-ui-carousel";
import { useEffect } from "react";
import ShareIcon from "@mui/icons-material/Share";

export function Products() {
	Products.propTypes = {
		service: PropTypes.object,
	};
	const { selectedProd } = UseTheseContext();

	const isSmDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	const isSmUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));

	// useEffect(() => {
	// 	if (isSmUp) {
	// 		setSelectedProd(services[0]);
	// 	}
	// }, [isSmUp, setSelectedProd]);

	console.log(selectedProd);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="w-full h-screen z-30 bg-[#343633] pt-[3.2rem] ">
			{isSmDown && (
				<Box
					sx={{
						bgcolor: "#fbfbfb",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
						top: "0",
						position: "fixed",
						zIndex: "30",
						width: "100%",
					}}>
					<Link to="/about">
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								padding: "1rem",
								"&:hover": {
									bgcolor: "#4b5863",
									borderBottom: "5px solid #6dd635",
									color: "#6dd635",
								},
							}}>
							<KeyboardArrowLeft />
							<Typography sx={{ fontSize: "17px" }}>About Us</Typography>
						</Box>
					</Link>
					<Link to="/teams">
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								padding: "1rem",
								"&:hover": {
									bgcolor: "#4b5863",
									borderBottom: "5px solid #6dd635",
									color: "#6dd635",
								},
							}}>
							<Typography sx={{ fontSize: "17px" }}>Teams</Typography>
							<KeyboardArrowRight />
						</Box>
					</Link>
				</Box>
			)}
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					height: "100%",
				}}>
				<Box
					sx={{
						bgcolor: "#161716",
						width: { sm: "25%", xs: "100%" },
						boxShadow: "0px 3px 12px rgba(0, 0, 0, 0.3)",
					}}>
					<Box>
						{services.map((service) => (
							<ServiceContent key={service.name} service={service} />
						))}
					</Box>
				</Box>
				{isSmUp && (
					<Box sx={{ width: "75%", margin: "1rem 0" }}>
						{services.map(
							(service) =>
								selectedProd === service && (
									<Box key={service.name}>{service.content}</Box>
								)
						)}
					</Box>
				)}
			</Box>
		</div>
	);
}

function ServiceContent({ service }) {
	ServiceContent.propTypes = {
		service: PropTypes.object,
	};
	const { selectedProd, handleSelectedProd } = UseTheseContext();
	const isSmDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	const isSelected = selectedProd && selectedProd.name === service.name;
	return (
		<>
			<Box
				key={service.name}
				sx={{
					bgcolor: isSelected ? "#4B5863" : "#161716",
					color: isSelected ? "#fbfbfb" : "none",
					padding: ".5rem",
					borderBottom: "4px solid #4b5863",
					transition:
						"border-bottom-color 0.3s, color 0.3s, background-color 0.3s",
					"&:hover": {
						bgcolor: "#4B5863",
						borderBottom: "4px solid #6dd635",
					},
				}}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						margin: ".4rem .8rem",
						padding: { sm: ".4rem", xs: ".2rem" },
					}}
					onClick={() => handleSelectedProd(service)}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Avatar>
							<img src={service.image} />
						</Avatar>
						<Typography
							sx={{
								marginLeft: "1rem",
								color: isSelected ? "#6dd635" : "#fbfbfb",
							}}>
							{service.name}
						</Typography>
					</Box>
					<Box>
						<Avatar
							sx={{
								bgcolor: isSelected ? "none" : "#14751c",
								color: isSelected ? "black" : "#fbfbfb",
							}}>
							{isSelected ? (
								isSmDown ? (
									<KeyboardArrowDownIcon />
								) : (
									<KeyboardArrowRight />
								)
							) : (
								<ControlPointIcon />
							)}
						</Avatar>
					</Box>
				</Box>

				{/* PRODUCT & SERVICE CONTENT */}
			</Box>
			{selectedProd === service && isSmDown && <Box>{service.content}</Box>}
		</>
	);
}

export function MaterialExchange() {
	const isSmUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));
	return (
		<Box sx={{ w: "100%" }}>
			{isSmUp && <ServiceTitle>Material Exchange</ServiceTitle>}
			<Box sx={{ width: "90%", margin: ".7rem auto" }}>
				<Typography
					sx={{
						textAlign: isSmUp ? "center" : "normal",
						color: "#fbfbfb",
						margin: { sm: "2rem 0" },
						fontSize: { xs: "12px", sm: "16px" },
					}}>
					We strive to help any organization to find their alternative raw
					materials with reuse plastics. Our target is to fully develop new raw
					material purely from reuse polyprophylene.
				</Typography>
			</Box>
			<Box>
				<Carousel>
					{materialFlow.map((phase) => (
						<Box
							key={phase.id}
							sx={{ boxShadow: "0px 3px 12px rgba(0, 0, 0, 0.3)" }}>
							<img
								src={phase.image}
								style={{
									height: window.innerWidth < 600 ? "17rem" : "28rem",
									width: "100%",
									objectFit: "cover",
									position: "relative",
									borderTop: "3px solid #4b5863",
								}}
							/>
							<Typography
								sx={{
									position: "absolute",
									bottom: "20px",
									left: "90px",
									fontWeight: "500",
									color: "#000000",
									bgcolor: "#fbfbfb",
									fontSize: { sm: "20px", xs: "15px" },
								}}>
								{phase.phase}
							</Typography>
						</Box>
					))}
				</Carousel>
			</Box>
		</Box>
	);
}

export function FurnitureAppliance() {
	const isSmUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));
	const isSmDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<Box sx={{ w: "100%" }}>
			<Box sx={{ w: "100%" }}>
				{isSmUp && <ServiceTitle>Product Furnitures & Appliances</ServiceTitle>}
				<Box sx={{ width: "100%" }}>
					<Box sx={{ width: { xs: "90%", sm: "100%" } }}>
						<Typography
							sx={{
								textAlign: isSmUp ? "center" : "normal",
								color: "#fbfbfb",
								margin: { xs: "1rem 1rem", sm: "2rem 0" },
								fontSize: { xs: "12px", sm: "16px" },
							}}>
							Look into our readied products.
						</Typography>
					</Box>
					<Box
						sx={{ overflowX: { xs: "scroll", sm: "hidden" }, width: "100%" }}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								bgcolor: isSmDown && "#161716",
								borderTop: "3px solid #4b5863",
								padding: { xs: "1rem", sm: "3rem" },
								alignItems: "center",
								gap: "1.5rem",
								width: { sm: "100%", xs: "220%" },
							}}>
							{cardsProduct.map((product) => (
								<Card
									key={product.id}
									sx={{
										maxWidth: { sm: 345, xs: 320 },
										height: { sm: "20rem", xs: "19rem" },
									}}>
									<CardMedia component="img" image={product.image} />
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											justifyContent: "space-around",
											bgcolor: { xs: "#343633", sm: "#ced1cb" },
										}}>
										<CardContent
											sx={{
												height: { xs: "5.7rem", sm: "7rem" },
												borderTop: "3px solid #14571c",
											}}>
											<Typography
												gutterBottom
												sx={{
													fontWeight: "550",
													color: { xs: "#fbfbfb", sm: "#161716" },
												}}>
												{product.title}
											</Typography>
											<Typography
												variant="body2"
												sx={{ color: { xs: "#fbfbfb", sm: "#161716" } }}>
												{product.desc}
											</Typography>
										</CardContent>
										<CardActions
											sx={{
												marginTop: { xs: "1.5rem", sm: "0" },
											}}>
											<Button
												size="small"
												variant="text"
												sx={{ color: { sm: "#14571c" } }}>
												Share{" "}
												<ShareIcon
													sx={{
														fontSize: 14,
														color: { sm: "#14571c" },
														marginLeft: "3px",
													}}
												/>
											</Button>
											<Button
												size="small"
												variant="text"
												sx={{ color: { sm: "#14571c" } }}>
												Learn More{" "}
												<ControlPointIcon
													sx={{
														fontSize: 14,
														color: { sm: "#14571c" },
														marginLeft: "3px",
													}}
												/>
											</Button>
										</CardActions>
									</Box>
								</Card>
							))}
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
export function ProjectsPartners() {
	const isSmUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));
	const isSmDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<Box sx={{ w: "100%" }}>
			<Box sx={{ w: "100%" }}>
				{isSmUp && <ServiceTitle>Projects Partners</ServiceTitle>}
				<Box sx={{ width: "90%", margin: ".7rem auto" }}>
					<Typography
						sx={{
							textAlign: isSmUp ? "center" : "normal",
							color: "#fbfbfb",
							margin: { sm: "2rem 0", xs: "1.2rem 0" },
							fontSize: { xs: "12px", sm: "16px" },
						}}>
						Our company is open to any upcoming projects and collaboration to
						help create a healthier environment!
					</Typography>
				</Box>
				<Box sx={{ borderTop: "3px solid #4b5863" }}>
					<Box
						sx={{
							display: "flex",
							flexDirection: { sm: "row", xs: "column" },
							margin: { sm: "2.5rem", xs: "1rem 1.5rem" },
							gap: { xs: "1rem" },
							justifyContent: { sm: "space-around" },
						}}>
						{projectsInfo.map((project) => (
							<Box
								key={project.id}
								style={{
									display: isSmDown ? "grid" : "flex",
									gridTemplateColumns: "27% 73%",
									flexDirection: "column",
								}}
								className="grid-cols-2">
								<img
									src={project.image}
									className="rounded-[50%] tablet:w-[15rem] tabletMax:w-[4.95rem] row-span-2"
								/>
								{isSmUp && (
									<span className="w-[1px] h-[2rem] border-r-[#6dd635] border-r-[2px] mx-auto"></span>
								)}
								<Typography
									sx={{
										fontSize: { xs: "14px", sm: "16px" },
										fontWeight: "650",
										color: "#6dd635",
										textAlign: { sm: "center" },
										padding: { sm: "4px" },
										border: isSmUp && "2px solid #6dd635",
										borderRadius: "10px",
									}}>
									{project.title}
								</Typography>
								<Typography
									sx={{
										color: "#fbfbfb",
										fontSize: { xs: "12px", sm: "14px" },
										width: { sm: "15rem" },
										textAlign: { sm: "center" },
										paddingTop: { sm: "2rem" },
									}}>
									{project.desc}
								</Typography>
							</Box>
						))}
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
export function ResearchContent() {
	const isSmUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));
	return (
		<Box sx={{ w: "100%" }}>
			<Box sx={{ w: "100%" }}>
				{isSmUp && <ServiceTitle>Research & Experiment</ServiceTitle>}
				<Box sx={{ width: "90%", margin: ".7rem auto" }}>
					<Typography
						sx={{
							textAlign: isSmUp ? "center" : "normal",
							color: "#fbfbfb",
							margin: { sm: "2rem 0", xs: "1.2rem 0" },
							fontSize: { xs: "12px", sm: "16px" },
						}}>
						We always continuing our development for better quality of the
						products and increase the percentage of the waste consumption with
						minimum material & pollution waste.
					</Typography>
				</Box>
				<Box
					sx={{
						display: { sm: "flex" },
						flexDirection: "row",
						borderTop: "3px solid #4b5863",
					}}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							margin: { xs: ".5rem 1.5rem", sm: "2rem" },
							width: { sm: "50%" },
							paddingRight: isSmUp && "1rem",
							borderRight: isSmUp && "3px solid #161716",
						}}>
						<Box>
							<Typography
								sx={{
									color: "#fbfbfb",
									marginBottom: "1rem",
									fontSize: { xs: "14px", sm: "16px" },
									fontWeight: "600",
									textAlign: "center",
								}}>
								Materials Prototype
							</Typography>
						</Box>
						<Box sx={{ overflowX: { xs: "scroll", sm: "hidden" } }}>
							<Box
								sx={{
									display: "flex",
									flexDirection: { xs: "row", sm: "column" },
									width: { xs: "150%", sm: "100%" },
									gap: "1rem",
								}}>
								{protoInfo.map((material) => (
									<Box
										key={material.id}
										className="tablet:grid grid-cols-2 tablet:bg-[#161716] rounded-[10px] flex flex-col items-center"
										style={{ gridTemplateColumns: "20% 80%" }}>
										<img
											src={material.image}
											className="row-span-2 tabletMax:rounded-xl tablet:rounded-tl-[10px] tablet:rounded-bl-[10px] tabletMax:w-[4rem] w-[6rem]"
										/>

										<Typography
											sx={{
												fontSize: { xs: "13px", sm: "16px" },
												fontWeight: "550",
												color: "#6dd635",
											}}>
											{material.title}
										</Typography>
										<Typography
											sx={{
												color: "#fbfbfb",
												fontSize: { xs: "11px", sm: "14px" },
											}}>
											{material.desc}
										</Typography>
									</Box>
								))}
							</Box>
						</Box>
					</Box>
					<Box
						sx={{ marginTop: { xs: "2rem", sm: "0" }, width: { sm: "50%" } }}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								margin: { xs: ".5rem 1.5rem", sm: "2rem" },
								paddingRight: isSmUp && "1rem",
							}}>
							<Typography
								sx={{
									color: "#fbfbfb",
									marginBottom: "1rem",
									fontSize: { xs: "14px", sm: "16px" },
									fontWeight: "600",
									textAlign: "center",
								}}>
								Machinery Experiment
							</Typography>
							<Box
								sx={{
									bgcolor: { sm: "#161716" },
									height: { sm: "20rem" },
									borderRadius: { sm: "12px" },
									display: "flex",
									flexDirection: { sm: "column", xs: "row" },
									alignItems: "center",
								}}>
								<img
									src="/public/machinery.jpeg"
									className="tabletMax:w-[7rem] tabletMax:rounded-tl-lg tabletMax:rounded-bl-lg tablet:w-[100%] tablet:mx-auto tablet:h-[7rem] object-cover tablet:rounded-t-xl tablet:border-b-[#6dd635] border-b-3px border-solid"
								/>
								<Typography
									sx={{
										color: "#fbfbfb",
										fontSize: { xs: "12px", sm: "16px" },
										margin: { xs: "0 1rem", sm: "1rem" },
									}}>
									Currently we have 4 main machinery for our production
									activities:
								</Typography>
								<ul className="list-disc">
									{machineryType.map((machine) => (
										<li
											key={machine.id}
											className="text-[#6dd635] tabletMax:text-[10px]">
											{machine.name}
										</li>
									))}
								</ul>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

function ServiceTitle({ children }) {
	ServiceTitle.propTypes = {
		children: PropTypes.string,
	};
	return (
		<Box
			sx={{
				margin: "1rem auto",
				width: "80%",
				bgcolor: "#161716",
				borderRadius: "10px",
				borderTop: "8px solid #6dd635",
				boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
				color: "#fbfbfb",
			}}>
			<Typography
				sx={{
					textAlign: "center",
					lineHeight: "2.5rem",
					fontWeight: "650",
					fontSize: "1.5rem",
				}}>
				{children}
			</Typography>
		</Box>
	);
}
