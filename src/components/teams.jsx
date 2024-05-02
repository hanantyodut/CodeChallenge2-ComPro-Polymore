import {
	Avatar,
	Box,
	ImageList,
	ImageListItem,
	Typography,
	useMediaQuery,
} from "@mui/material";
import PropTypes from "prop-types";
import { positionEng, positionFin, positionMan } from "./data";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { Link } from "react-router-dom/cjs/react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { useEffect } from "react";

export function Teams({ personData }) {
	Teams.propTypes = {
		personData: PropTypes.array,
	};

	const isSmUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));
	const isSmDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));

	const positionManNewId = [
		...positionMan.map((pos, i) => ({ ...pos, id: i + 1 })),
	];
	console.log(positionManNewId);
	const positionEngNewId = [
		...positionEng.map((pos, i) => ({
			...pos,
			id: i + positionMan.length + 1,
		})),
	];
	const positionFinNewId = [
		...positionFin.map((pos, i) => ({
			...pos,
			id: i + positionMan.length + positionEng.length + 1,
		})),
	];

	const positions = [
		...positionManNewId,
		...positionEngNewId,
		...positionFinNewId,
	];

	console.log(positions);

	let memberIdCounter = 1; // Initialize a counter for unique member IDs

	// Map each team's members while assigning unique IDs
	const mappedMembers = personData.flatMap((team) =>
		team.members.map((member) => ({
			...member,
			id: memberIdCounter++, // Assign unique member ID
			teamId: team.id, // Store the team ID for reference
		}))
	);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	console.log(mappedMembers);

	console.log(personData);
	console.log(personData.map((person) => person.members));
	return (
		<div
			name="home"
			className="w-full pt-[3.5rem] bg-[#161716] flex tablet:flex-row tabletMax:flex-col"
			color="primary">
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
					<Link to="/product">
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
							<Typography sx={{ fontSize: "17px" }}>
								Products & Services
							</Typography>
						</Box>
					</Link>
					<Link to="/">
						<Box sx={{ padding: "0 1rem" }}>
							<Avatar
								sx={{
									"&:hover": {
										bgcolor: "#4b5863",
										borderBottom: "5px solid #6dd635",
										color: "#6dd635",
									},
								}}>
								<HomeIcon />
							</Avatar>
						</Box>
					</Link>
				</Box>
			)}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					alignItems: "center",
				}}>
				<Box
					sx={{
						width: "90%",
						bgcolor: "#343633",
						borderRadius: "10px",
						borderTop: "8px solid #6dd635",
						boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
						height: "3.5rem",
						margin: { sm: "1.5rem auto", xs: "1rem auto" },
					}}>
					<Typography
						sx={{
							textAlign: "center",
							padding: ".5rem",
							fontSize: "20px",
							fontWeight: "600",
							color: "#fbfbfb",
						}}>
						Meet our members!
					</Typography>
				</Box>
				<ImageList
					cols={isSmUp ? 4 : 1}
					sx={{
						width: { sm: "85%" },
						bgcolor: "#161716",
						pb: "4rem",
						margin: { xs: "0 1rem" },
						overflowY: "visible",
					}}>
					{mappedMembers.map((member, i) => (
						<ImageListItem
							key={i}
							sx={{
								display: "flex",
								flexDirection: { sm: "column", xs: "row" },
								alignItems: { sm: "start", xs: "center" },
								width: { sm: "90%", xs: "95%" },
								bgcolor: "#343633",
								padding: "1rem",
								borderRadius: { xs: "10px", sm: "20px" },
								margin: isSmDown && ".6rem",
								marginLeft: { sm: "1rem" },
								mb: isSmUp && "1rem",
							}}>
							<img
								src={member.picture.large}
								style={{
									objectFit: "cover",
									objectPosition: "50% 20%",
									maxWidth: "100%",
									margin: "0 auto",
									borderRadius: "10px",
								}}
							/>
							<Box sx={{ width: "100%", marginLeft: isSmDown && ".5rem" }}>
								<Box sx={{}}>
									<Typography
										sx={{
											fontSize: { sm: "20px", xs: "16px" },
											fontWeight: "650",
											color: "#fbfbfb",
										}}>
										{`${member.name.first} ${member.name.last}`}
									</Typography>
									<Typography sx={{ fontSize: "15px", color: "#fbfbfb" }}>
										{positions[i].pos}
									</Typography>
								</Box>
								<Box
									sx={{
										borderTop: "2px solid #6dd635",
										width: { xs: "10rem", sm: "100%" },
									}}>
									<Box>
										<Typography
											sx={{
												display: "flex",
												flexDirection: isSmDown ? "column" : "row",
												fontWeight: "600",
												fontSize: "13px",
												color: "#fbfbfb",
											}}>
											{"E-mail : "}
											<Typography
												sx={{
													fontSize: { xs: "11px", sm: "13px" },
													color: "#fbfbfb",
													marginLeft: { sm: ".6rem" },
												}}>
												{member.email}
											</Typography>
										</Typography>
									</Box>

									<Typography
										sx={{
											display: "flex",
											flexDirection: isSmDown ? "column" : "row",
											fontWeight: "600",
											fontSize: "13px",
											color: "#fbfbfb",
										}}>
										{"Telephone : "}
										<Typography
											sx={{
												fontSize: "13px",
												color: "#fbfbfb",
												marginLeft: { sm: ".6rem" },
											}}>
											{member.phone}
										</Typography>
									</Typography>
								</Box>
							</Box>
						</ImageListItem>
					))}
				</ImageList>
			</Box>
		</div>
	);
}
