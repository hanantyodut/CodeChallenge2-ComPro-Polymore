import {
	Avatar,
	Box,
	ImageList,
	ImageListItem,
	ImageListItemBar,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
	useMediaQuery,
} from "@mui/material";
import HailIcon from "@mui/icons-material/Hail";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EngineeringIcon from "@mui/icons-material/Engineering";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import PropTypes from "prop-types";
import { objective, positionEng, positionFin, positionMan } from "./data";

export const MilestoneContent = ({
	openIntro,
	selectedData,
	selectedTeam,
	personData,
	getTeamMembersTitle,
}) => {
	Milestone.propTypes = {
		mil: PropTypes.object,
	};
	MilestoneContent.propTypes = {
		openIntro: PropTypes.bool,
		selectedMil: PropTypes.string,
		selectedData: PropTypes.array,
		selectedTeam: PropTypes.object,
		personData: PropTypes.array,
		getTeamMembersTitle: PropTypes.func,
	};

	// console.log(personData);
	// console.log(personData.members);

	return (
		<Box
			sx={{
				width: { sm: "60%" },
				height: { xs: "14%", sm: "screen" },
				borderTop: { xs: "10px solid #ece9e1", sm: "none" },
				margin: "1.5rem",
			}}>
			<Box
				sx={{
					width: "100%",
					bgcolor: "#161716",
					borderRadius: "10px",
					borderTop: "8px solid #6dd635",
					boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
				}}>
				<Typography
					sx={{
						textAlign: "center",
						padding: ".5rem",
						fontSize: "20px",
						fontWeight: "600",
						color: "#fbfbfb",
					}}>
					{openIntro
						? "Company Introduction"
						: selectedData && selectedData.length > 0
						? "Polymore Milestones"
						: getTeamMembersTitle(selectedTeam)}
				</Typography>
			</Box>
			{openIntro && (
				<Box sx={{ margin: "1.5rem" }}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
						}}>
						<Box
							sx={{
								padding: "1rem",
								bgcolor: "#161716",
								borderRadius: "20px",
								boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
								width: "45%",
							}}>
							<CompanyIntroduction />
						</Box>
						<Box
							sx={{
								width: "45%",
								height: "70%",
								overflow: "hidden",
								boxShadow: "0px 4px 7px rgba(0, 0, 0, 0.6)",
								borderRadius: "20px",
							}}>
							<img
								src="/public/DSC04182.JPG"
								alt="contoh-gambar"
								style={{
									objectFit: "cover",
									objectPosition: "100% 90%",
									AspectRatio: "6/4",
									maxWidth: "100%",
									maxHeight: "100%",
									width: "100%",
									height: "17rem",
									borderRadius: "20px",
								}}
							/>
						</Box>
					</Box>
					<Box
						sx={{
							bgcolor: "#161716",
							margin: "1.5rem 0",
							boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
							borderRadius: "20px",
						}}>
						<Typography
							sx={{
								margin: "1rem 1.5rem 0 1.5rem",
								marginTop: "2.4rem",
								paddingTop: ".5rem",
								borderBottom: "3px solid #9ca09d",
								fontWeight: "600",
								color: "#fbfbfb",
							}}>
							Why we established this company:
						</Typography>
						<List>
							{objective.map((text) => (
								<ListItem
									key={text.id}
									sx={{
										height: "3rem",
										borderRight: "2px solid #9ca09d",
										margin: "0 1rem .8rem 1rem",
										width: "90%",
									}}>
									<ListItemAvatar>
										<Avatar>
											<ReportProblemIcon />
										</Avatar>
									</ListItemAvatar>
									<ListItemText
										primary={text.primary}
										secondary={text.secondary}
										primaryTypographyProps={{ style: { color: "#fbfbfb" } }}
										secondaryTypographyProps={{ style: { color: "#fbfbfb" } }}
									/>
								</ListItem>
							))}
						</List>
					</Box>
				</Box>
			)}
			{selectedData && (
				<Box sx={{ margin: "1.5rem" }}>
					{selectedData.map((mil) => (
						<Milestone key={mil.id} mil={mil} />
					))}
				</Box>
			)}
			{selectedTeam && selectedTeam.id === 1 && (
				<MemberManagerial selectedTeam={selectedTeam} personData={personData} />
			)}
			{selectedTeam && selectedTeam.id === 2 && (
				<MemberEngineering
					selectedTeam={selectedTeam}
					personData={personData}
				/>
			)}
			{selectedTeam && selectedTeam.id === 3 && (
				<MemberFinancial selectedTeam={selectedTeam} personData={personData} />
			)}
		</Box>
	);
};

function Milestone({ mil }) {
	return (
		<Box sx={{ height: "36.5rem" }}>
			<Typography
				sx={{
					fontSize: "130px",
					borderBottom: "4px solid black",
					lineHeight: "160px",
					fontWeight: "800",
					rotate: "270deg",
					textAlign: "end",
					top: "48%",
					left: "15%",
					position: "absolute",
					color: "#6dd635",
					width: "33rem",
					opacity: ".3",
				}}>
				{mil.year}
			</Typography>
			<Box
				sx={{
					width: "70%",
					marginLeft: "24%",
					bgcolor: "#ced1cb",
					height: "90%",
					marginTop: "3rem",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					borderRadius: "20px",
					boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
				}}>
				<div className="h-[10rem] overflow-hidden">
					<img
						src={mil.image}
						alt={mil.year}
						style={{
							objectFit: "cover",
							objectPosition: "50% 50%",
							maxWidth: "100%",
							width: "100%",
							height: "100%",
							borderTopLeftRadius: "20px",
							borderTopRightRadius: "20px",
							borderBottom: "6px solid #6dd635",
						}}
					/>
				</div>
				<Typography sx={{ margin: "0 1.5rem" }}>{mil.desc}</Typography>
				<List>
					<Typography
						sx={{
							borderBottom: "4px solid #9ca09d",
							lineHeight: "2rem",
							marginBottom: ".3rem",
							fontWeight: "700",
							margin: ".4rem 2rem",
						}}>
						Achievements :
					</Typography>
					{mil.achievement.map((ach, i) => (
						<ListItem
							key={i}
							sx={{
								height: "2.4rem",
								width: "80%",
								borderBottom: "2px solid #dde6de",
								margin: "0 1.5rem",
							}}>
							<ListItemAvatar>
								<Avatar sx={{ height: "2rem", width: "2rem" }}>
									<EmojiEventsIcon sx={{ height: "23px", width: "23px" }} />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary={ach}
								primaryTypographyProps={{
									fontSize: 12,
									fontWeight: "medium",
									letterSpacing: 0,
								}}
							/>
						</ListItem>
					))}
				</List>
			</Box>
		</Box>
	);
}

export function MemberManagerial({ selectedTeam, personData }) {
	MemberManagerial.propTypes = {
		selectedTeam: PropTypes.object,
		personData: PropTypes.array,
	};
	console.log(selectedTeam.id);
	console.log(personData);
	const isSmUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));
	return (
		<Box
			sx={{
				margin: { sm: "2rem 0", xs: "0" },
			}}>
			{isSmUp && (
				<HailIcon
					sx={{
						left: "40%",
						fontSize: "33rem",
						position: "absolute",
						color: "#6dd635",
						bottom: "10%",
						opacity: "0.4",
					}}
				/>
			)}
			<ImageList
				gap={10}
				sx={{
					width: { sm: "25rem", xs: "14rem" },
					margin: { sm: "7rem auto", xs: ".9rem auto" },
				}}>
				{personData[selectedTeam.id - 1]?.members.map((member, index) => (
					<ImageListItem key={member.id.value}>
						<img
							src={member.picture.large}
							alt={member.name.first}
							className="rounded-xl"
						/>
						<ImageListItemBar
							title={
								<span style={{ color: "#fbfbfb" }}>{member.name.first}</span>
							}
							subtitle={
								<span style={{ color: "#fbfbfb" }}>
									{positionMan[index].pos}
								</span>
							}
							position="below"
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
}

export function MemberEngineering({ selectedTeam, personData }) {
	MemberEngineering.propTypes = {
		selectedTeam: PropTypes.object,
		personData: PropTypes.array,
	};
	const isSmDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	const isSmUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));
	return (
		<Box
			sx={{
				margin: "2rem 0",
				height: { sm: "100%", xs: "10rem" },
			}}>
			{isSmUp && (
				<EngineeringIcon
					sx={{
						left: "40%",
						fontSize: "33rem",
						position: "absolute",
						color: "#6dd635",
						bottom: "10%",
						opacity: "0.4",
					}}
				/>
			)}
			<ImageList
				cols={isSmDown ? 5 : 3}
				gap={10}
				sx={{
					width: { sm: "80%", xs: "15.5rem" },
					margin: { sm: "4rem auto", xs: ".2rem auto" },
					height: { sm: "32rem", xs: "7.6rem" },
					padding: { sm: "0", xs: "10px" },
				}}>
				{personData[selectedTeam.id - 1]?.members.map((member, index) => (
					<ImageListItem
						key={member.id.value}
						sx={{
							width: { sm: "12.2rem", xs: "3.8rem" },
						}}>
						<img
							src={member.picture.large}
							alt={member.name.first}
							className="rounded-xl "
						/>
						<ImageListItemBar
							title={
								<span style={{ color: "#fbfbfb" }}>{member.name.first}</span>
							}
							subtitle={
								<span style={{ color: "#fbfbfb" }}>
									{positionEng[index].pos}
								</span>
							}
							position="below"
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
}

export function MemberFinancial({ selectedTeam, personData }) {
	MemberFinancial.propTypes = {
		selectedTeam: PropTypes.object,
		personData: PropTypes.array,
	};
	const isSmUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));
	const isSmDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<Box
			sx={{
				margin: "2rem 0",
			}}>
			<ImageList
				cols={isSmDown ? 4 : 3}
				gap={10}
				sx={{
					width: { sm: "80%", xs: "15.5rem" },
					margin: { sm: "4rem auto", xs: ".2rem auto" },
					height: { sm: "32rem", xs: "7.6rem" },
					padding: { sm: "0", xs: "10px" },
				}}>
				{isSmUp && (
					<SupportAgentIcon
						sx={{
							left: "40%",
							fontSize: "33rem",
							position: "absolute",
							color: "#6dd635",
							bottom: "10%",
							opacity: "0.4",
						}}
					/>
				)}
				{personData[selectedTeam.id - 1]?.members.map((member, index) => (
					<ImageListItem
						key={member.id.value}
						sx={{
							width: { sm: "12.2rem", xs: "3.8rem" },
						}}>
						<img
							src={member.picture.large}
							alt={member.name.first}
							className="rounded-xl"
						/>
						<ImageListItemBar
							title={
								<span style={{ color: "#fbfbfb" }}>{member.name.first}</span>
							}
							subtitle={
								<span style={{ color: "#fbfbfb" }}>
									{positionFin[index].pos}
								</span>
							}
							position="below"
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
}

export function CompanyIntroduction() {
	const isSmUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));
	return (
		<>
			<Typography
				sx={{ fontSize: { xs: "12px", sm: "15px" }, color: "#fbfbfb" }}>
				Polymore is a start-up company focusing in environmental improvement by
				reusing plastic waste which has a long degradation period and can cause
				harm to enviroment.
			</Typography>
			{isSmUp && (
				<Typography
					sx={{ fontSize: "15px", marginTop: "1rem", color: "#fbfbfb" }}>
					POLYMORE Inc. tidak hanya menyediakan furnitur yang sudah di desain
					jadi, namun juga menyediakan jasa pesan custom dengan design furnitur
					sesuai keinginan pelanggan.
				</Typography>
			)}
		</>
	);
}
