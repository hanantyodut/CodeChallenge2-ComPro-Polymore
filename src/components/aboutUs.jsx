import {
	Avatar,
	Box,
	Button,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@mui/icons-material";
import { TimelineDesktop } from "./timeline";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { TeamDiv, mainContMilestone } from "./data";
import React, { useEffect } from "react";
import {
	CompanyIntroduction,
	MemberEngineering,
	MemberFinancial,
	MemberManagerial,
	MilestoneContent,
} from "./mainContentAu";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PropTypes from "prop-types";

import { UseTheseContext } from "./ContextProvider";

export function AboutUs({ personData }) {
	AboutUs.propTypes = {
		personData: PropTypes.array,
	};
	console.log(personData);

	const {
		openIntro,
		//setOpenIntro,
		selectedMil,
		//setSelectedMil,
		selectedData,
		setSelectedData,
		selectedTeam,
		//setSelectedTeam,
		handleCompanyIntro,
		handleSelectedMil,
		handleSelectionTeam,
		getTeamMembersTitle,
	} = UseTheseContext();

	const isSmUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));
	const isSmDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));

	useEffect(() => {
		if (selectedMil && !openIntro && !selectedTeam) {
			const selectedData = mainContMilestone.filter(
				(item) => item.year === selectedMil
			);
			// console.log("selected Data yang dipencet", selectedData);
			setSelectedData(selectedData);
		} else {
			setSelectedData([]);
		}

		// console.log(selectedTeam);
	}, [selectedMil, openIntro, selectedTeam, setSelectedData]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div
			name="home"
			className="w-full tablet:pt-[3.5rem] bg-[#343633] flex tablet:flex-row tabletMax:flex-col"
			color="primary">
			{/* DIVISIONS BUTTON FOR MOBILE */}

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
					<Link to="/">
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
							<Typography sx={{ fontSize: "17px" }}>Homepage</Typography>
						</Box>
					</Link>
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
							<Typography sx={{ fontSize: "17px" }}>
								Products & Services
							</Typography>
							<KeyboardArrowRight />
						</Box>
					</Link>
				</Box>
			)}
			<Box
				sx={{
					bgcolor: "#161716",
					width: {
						md: "25%",
						sm: "30%",
						xs: "100%",
					},
					boxShadow: "0px 3px 12px rgba(0, 0, 0, 0.3)",
					paddingTop: { xs: "3.5rem", sm: "0" },
				}}
				className="tabletMax:h-[40rem] tablet:h-[97.8vh]">
				<Box
					sx={{
						height: { xs: "22%", sm: "17.5%" },
						bgcolor: "#343633",
						margin: { xs: ".6rem 1.5rem", sm: "1.5rem" },
						borderRadius: "10px",
						borderTop: { xs: "5px solid #6dd635", sm: "8px solid #6dd635" },
						boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
					}}>
					<Typography
						sx={{
							textAlign: "center",
							paddingTop: { xs: "0.4rem", sm: "0.7rem" },
							fontWeight: "600",
							color: "#fbfbfb",
						}}>
						{isSmUp ? "Our Company" : "Company Introduction"}
					</Typography>

					{isSmUp && (
						<Button
							variant="text"
							sx={{
								display: "flex",
								height: "45%",
								width: "50%",
								flexDirection: "column",
								margin: "auto",
								padding: ".5rem",
								bgcolor: openIntro ? "#14751c" : "none",
								marginTop: "3%",
								color: !openIntro ? "#14751c" : "#fbfbfb",
								"&:hover": { bgcolor: "#14751c", color: "#fbfbfb" },
							}}
							onClick={handleCompanyIntro}>
							<Typography sx={{ fontWeight: "bold" }}>This is us</Typography>
							{!openIntro && (
								<Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>
									Click here!
								</Typography>
							)}
						</Button>
					)}

					{/* COMPANY DESCRIPTION FOR MOBILE */}

					{isSmDown && (
						<Box sx={{ margin: "0.4rem 1rem" }}>
							<CompanyIntroduction />
						</Box>
					)}
				</Box>

				{/* TIMELINE SCROLLBAR*/}

				<Box
					className="timelineBox"
					sx={{
						height: { xs: "73%", sm: "71%" },
						borderRadius: "10px",
						bgcolor: "##161716",
						margin: ".7rem 1.5rem",
						borderTop: { xs: "5px solid #6dd635", sm: "8px solid #6dd635" },
						boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
					}}>
					<Box sx={{ bgcolor: "#ced1cb" }}>
						<Typography
							sx={{
								textAlign: "center",
								paddingTop: { xs: "0.4rem", sm: "0.7rem" },
								position: "sticky",
								top: "0",
								bgcolor: "#343633",
								zIndex: "20",
								paddingBottom: "0.3rem",
								borderBottom: "2px solid #dad7d7",
								fontWeight: "600",
								color: "#fbfbfb",
							}}>
							Polymore Timeline
						</Typography>
						<TimelineDesktop
							onSelection={handleSelectedMil}
							selectedData={selectedData}
						/>

						<Box
							sx={{
								position: "sticky",
								bottom: "0%",
								bgcolor: "#343633",
							}}>
							{isSmUp && (
								<Typography
									sx={{
										textAlign: "center",
										borderTop: "2px solid #dad7d7",
										paddingTop: "0.3rem",
										fontSize: "12px",
										fontWeight: "bold",
										color: "#14751c",
										padding: "1rem",
									}}>
									Scroll to choose milestones year & click the milestone for
									details!
								</Typography>
							)}
							{isSmDown && (
								<>
									<Typography
										sx={{
											textAlign: "center",
											borderTop: "2px solid #dad7d7",
											paddingTop: "0.3rem",
											fontWeight: "600",
											color: "#fbfbfb",
										}}>
										Achievement
									</Typography>
									<Box
										sx={{
											bgcolor: "#343633",
											height: "11.2rem",
										}}>
										{selectedMil ? (
											selectedData.map((ach, i) => (
												<AchieveArrMobile
													key={i}
													e={ach.achievement}
													year={ach.year}
												/>
											))
										) : (
											<Typography
												sx={{
													fontSize: "15px",
													fontWeight: "600",
													color: "#14751c",
													textWrap: "wrap",
													textAlign: "center",
													paddingTop: "3rem",
												}}>
												Scroll to choose milestones year & click the milestone
												for details!
											</Typography>
										)}
									</Box>
									{/* {!selectedData && (
										
									)} */}
								</>
							)}
						</Box>
					</Box>
				</Box>
			</Box>

			{/* MAIN CONTENT FOR DESKTOP*/}

			{isSmUp && (
				<MilestoneContent
					openIntro={openIntro}
					selectedData={selectedData}
					selectedTeam={selectedTeam}
					personData={personData}
					getTeamMembersTitle={getTeamMembersTitle}
				/>
			)}

			{/* DIVISIONS BUTTON FOR DESKTOP*/}

			<Box
				sx={{
					width: { sm: "20%" },
					height: "100%",
					bgcolor: "#161716",
					boxShadow: { sm: "0px 3px 12px rgba(0, 0, 0, 0.3)", xs: "none" },
				}}>
				<Box
					sx={{
						margin: { sm: "1.5rem", xs: ".3rem 1.5rem 4.4rem 1.5rem" },
						bgcolor: "#343633",
						borderRadius: "10px",
						borderTop: "8px solid #6dd635",
						boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
					}}>
					<Typography
						sx={{
							textAlign: "center",
							paddingTop: "0.7rem",
							fontWeight: "600",
							color: "#fbfbfb",
						}}>
						Our Divisions
					</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: { sm: "column", xs: "row" },
							alignItems: "center",
							height: { sm: "85vh" },
							marginTop: ".5rem",
							justifyContent: { xs: "center", sm: "around" },
							gap: { xs: "1.3rem", sm: "2rem" },
						}}>
						{TeamDiv.map((team) => (
							<TeamMember
								key={team.id}
								team={team}
								onSelectedTeam={handleSelectionTeam}
								selectedTeam={selectedTeam}
							/>
						))}
					</Box>

					{isSmDown && (
						<Box sx={{ height: "15rem" }}>
							<Typography
								sx={{
									textAlign: "center",
									paddingTop: "0.7rem",
									marginBottom: ".5rem",
									fontWeight: "600",
									color: "#fbfbfb",
								}}>
								{selectedTeam
									? getTeamMembersTitle(selectedTeam)
									: "Click the buttons above for details"}
							</Typography>
							{selectedTeam && selectedTeam.id === 1 && (
								<Box
									sx={{
										bgcolor: "#161716",
										height: "11rem",
										width: "87%",
										margin: "0 auto",
										paddingBottom: "2rem",
										paddingTop: ".2px",
										borderRadius: "10px",
									}}>
									<MemberManagerial
										selectedTeam={selectedTeam}
										personData={personData}
									/>
								</Box>
							)}
							{selectedTeam && selectedTeam.id === 2 && (
								<Box
									sx={{
										bgcolor: "#161716",
										height: "11rem",
										width: "87%",
										margin: "0 auto",
										paddingBottom: "2rem",
										paddingTop: ".2px",
										borderRadius: "10px",
									}}>
									<MemberEngineering
										selectedTeam={selectedTeam}
										personData={personData}
									/>
								</Box>
							)}
							{selectedTeam && selectedTeam.id === 3 && (
								<Box
									sx={{
										bgcolor: "#161716",
										height: "11rem",
										width: "87%",
										margin: "0 auto",
										paddingBottom: "2rem",
										paddingTop: ".2px",
										borderRadius: "10px",
									}}>
									<MemberFinancial
										selectedTeam={selectedTeam}
										personData={personData}
									/>
								</Box>
							)}
						</Box>
					)}
				</Box>
			</Box>
		</div>
	);
}

function AchieveArrMobile({ e, year }) {
	AchieveArrMobile.propTypes = {
		e: PropTypes.array,
		year: PropTypes.string,
	};
	return (
		<List>
			<Typography
				sx={{
					textAlign: "center",
					fontWeight: "650",
					lineHeight: "1px",
					fontSize: "17px",
					marginBottom: ".7rem",
					color: "#14715c",
				}}>
				{year}
			</Typography>
			{e.map((ach, i) => (
				<ListItem key={i} sx={{ height: "3.2rem", width: "87%" }}>
					<ListItemAvatar>
						<Avatar sx={{ height: "30px", width: "30px" }}>
							<EmojiEventsIcon sx={{ height: "20px", width: "20px" }} />
						</Avatar>
					</ListItemAvatar>
					<ListItemText
						primary={ach}
						primaryTypographyProps={{
							fontSize: 12,
							fontWeight: "medium",
							letterSpacing: 0,
							color: "#fbfbfb",
						}}
					/>
				</ListItem>
			))}
		</List>
	);
}

function TeamMember({ onSelectedTeam, team, selectedTeam }) {
	TeamMember.propTypes = {
		team: PropTypes.object,
		onSelectedTeam: PropTypes.func,
		selectedTeam: PropTypes.object,
	};
	const isSelected = selectedTeam?.id === team.id;
	return (
		<Button
			variant="text"
			sx={{
				bgcolor: isSelected ? "#14751c" : "none",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				width: { sm: "11rem", xs: "5rem" },
				height: { sm: "10rem", xs: "5rem" },
				color: isSelected ? "#fbfbfb" : "#14751c",
				item: "lg",
				"&:hover": { bgcolor: "#14751c", color: "#fbfbfb" },
			}}
			onClick={() => onSelectedTeam(team)}>
			{React.cloneElement(team.image, {
				sx: { fontSize: { xs: "3rem", sm: "5rem" } },
			})}
			<Typography
				sx={{ fontSize: { xs: "11px", sm: "15px" }, fontWeight: "700" }}>
				{team.title}
			</Typography>
		</Button>
	);
}
