// import { useState } from "react";
import "./App.css";
import { Homepage } from "./components/homepage";
import { Navbar } from "./components/navbar";
import { AboutUs } from "./components/aboutUs";
import { Products } from "./components/product";
import { Teams } from "./components/teams";
import Footer from "./components/footer";
import theme from "./components/theme";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TeamDiv } from "./components/data";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import { ContextProvider } from "./components/ContextProvider";

function App() {
	const [personData, setPersonData] = useState([]);
	const url = "https://randomuser.me/api";

	useEffect(() => {
		const fetchData = async () => {
			try {
				const teamData = await Promise.all(
					TeamDiv.map(async (team) => {
						const res = await fetch(`${url}?results=${team.member}`);
						const data = await res.json();
						return { ...team, members: data.results };
					})
				);
				setPersonData(teamData);
				// console.log(teamData);
			} catch (error) {
				console.error("Error in fetching members:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<ContextProvider>
				<Router>
					<div className="App">
						<Navbar />
						<div className="Content">
							<Switch>
								<Route exact path="/">
									<Homepage />
								</Route>
								<Route path="/about">
									<AboutUs personData={personData} />
								</Route>
								<Route path="/product">
									<Products />
								</Route>
								<Route path="/teams">
									<Teams personData={personData} />
								</Route>
							</Switch>
						</div>
						<Footer />
					</div>
				</Router>
			</ContextProvider>
		</ThemeProvider>
	);
}

export default App;
