import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#6dd635",
		},
		secondary: {
			main: "#cce6be",
		},
		background: {
			light: "#fbfbfb",
			main: "#f9f6ee",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 10,
				},
			},
		},
	},
	typography: {
		fontFamily: "Raleway",
	},
});

export default theme;
