import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { TeamDiv } from "./data";
import { useMediaQuery } from "@mui/material";

const Contexts = createContext();
export const UseTheseContext = () => useContext(Contexts);
export const ContextProvider = ({ children }) => {
	ContextProvider.propTypes = {
		children: PropTypes.node,
	};

	const isSmDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));

	const [openIntro, setOpenIntro] = useState(true);
	const [selectedMil, setSelectedMil] = useState(null);
	const [selectedData, setSelectedData] = useState([]);
	const [selectedTeam, setSelectedTeam] = useState(null);

	const [selectedProd, setSelectedProd] = useState(null);

	function handleCompanyIntro() {
		setOpenIntro(true);
		setSelectedData([]);
		setSelectedTeam(null);
	}

	function handleSelectedMil(mil) {
		setSelectedMil(mil);
		setOpenIntro(false);
		setSelectedTeam(null);
	}
	function handleSelectionTeam(team) {
		setSelectedTeam(team);
		setOpenIntro(false);
		setSelectedData([]);
		setSelectedMil(null);
		// console.log(selectedTeam);
	}

	function handleSelectedProd(prod) {
		if (isSmDown) {
			if (selectedProd && selectedProd.name === prod.name) {
				setSelectedProd(null);
			} else {
				setSelectedProd(prod);
			}
		} else {
			setSelectedProd(prod);
		}
	}

	function getTeamMembersTitle(selectedTeam) {
		// console.log("TeamDiv:", TeamDiv);
		// console.log("Selected Team:", selectedTeam);

		if (
			!selectedTeam ||
			typeof selectedTeam !== "object" ||
			!("id" in selectedTeam)
		) {
			// console.log("beda format woi:", selectedTeam);
			return null;
		}

		// console.log("selectedTeam ID:", selectedTeam.id);

		const selectedTeamTitle = TeamDiv.find((team) => {
			// console.log("id nya kebaca", team.id);
			return team.id === selectedTeam.id;
		});
		// console.log("Selected Team Title:", selectedTeamTitle);
		return selectedTeamTitle ? `${selectedTeamTitle.title} Team Members` : "";
	}

	return (
		<Contexts.Provider
			value={{
				openIntro,
				setOpenIntro,
				selectedMil,
				setSelectedMil,
				selectedData,
				setSelectedData,
				selectedTeam,
				setSelectedTeam,
				handleCompanyIntro,
				handleSelectedMil,
				handleSelectionTeam,
				getTeamMembersTitle,
				selectedProd,
				setSelectedProd,
				handleSelectedProd,
			}}>
			{children}
		</Contexts.Provider>
	);
};
