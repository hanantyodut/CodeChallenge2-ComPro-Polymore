import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineDot,
	TimelineContent,
	TimelineOppositeContent,
} from "@mui/lab";
import { Box, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";

// import { Exchange, Furniture, Partner, Research } from "../assets/icons";
import { timelineSteps } from "./data";
// import { SquareDot } from "../assets/icons";
import theme from "./theme";

export const TimelineDesktop = ({ onSelection, selectedData }) => {
	TimelineDesktop.propTypes = {
		onSelection: PropTypes.func,
		selectedData: PropTypes.array,
	};

	const milestone = timelineSteps;
	// console.log(selectedData);

	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					bgcolor: { sm: "#ced1cb", xs: "none" },
					borderRadius: "1px",
				}}>
				<Timeline>
					{[...milestone]
						.sort((a, b) => a.year - b.year)
						.map((event, i) => (
							<StepMilestone
								event={event}
								i={i}
								key={event.id}
								onSelection={onSelection}
								selectedData={selectedData}
							/>
						))}
				</Timeline>
				<Box sx={{ bgcolor: "secondary" }}></Box>
			</Box>
		</ThemeProvider>
	);
};

function StepMilestone({ event, i, onSelection, selectedData }) {
	StepMilestone.propTypes = {
		event: PropTypes.object,
		i: PropTypes.any,
		onSelection: PropTypes.func,
		selectedData: PropTypes.array,
	};
	// console.log(selectedData);
	const isSelected =
		selectedData && selectedData.some((item) => item.year === event.year);
	return (
		<TimelineItem key={event.id}>
			<TimelineOppositeContent
				color="gray"
				fontSize="12px"
				sx={{
					bgcolor: isSelected ? "#cce6be" : "none",
					borderRadius: "10px",
					height: { sm: "3rem", xs: "3rem" },
					width: { sm: "5rem", xs: "1rem" },
					marginLeft: { sm: ".5rem" },
					marginRight: { sm: ".5rem", xs: ".5rem" },
				}}>
				<Typography sx={{ fontSize: "15px" }}>{event.month}</Typography>
				{event.year}
			</TimelineOppositeContent>
			<TimelineSeparator>
				<TimelineDot color="primary" variant="outlined" />
				{i !== timelineSteps.length - 1 && <TimelineConnector />}
			</TimelineSeparator>
			<TimelineContent sx={{ width: "240px" }}>
				<Box
					className="box-timeline-content"
					sx={{
						width: "10rem",
						height: "4.7rem",
						display: "flex",
						padding: "5px",
						"&:hover": { bgcolor: "#cce6be", cursor: "pointer" },
						bgcolor: isSelected ? "#cce6be" : "none",
						borderRadius: "10px",
					}}
					onClick={() => onSelection(event.year)}>
					{event.icon}
					<Typography
						className="wraptext"
						sx={{
							fontSize: "12px",
							whiteSpace: "normal",
						}}>
						{event.title}
					</Typography>
				</Box>
			</TimelineContent>
		</TimelineItem>
	);
}
