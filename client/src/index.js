import React from "react";
import ReactDOM from "react-dom";
import Base from "./views/Base.js";

import {
	BrowserRouter as Router,
	Route
} from "react-router-dom";

import { AnimatedSwitch } from "react-router-transition";

import Index from "./views/index/Index";
import Mando from "./views/mando/Mando";
import E404 from "./views/errors/E404";
import Faq from "./views/faq/Faq";



//import Authorize from "./views/authorization/Authorize";
import { createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { AlertContainer } from "alert";

import * as serviceWorker from "./serviceWorker";

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#5f7bcf',
		},
		secondary: {
			main: '#5f7bcf',
		},
		background: {
			paper: "#282a30",
		}
	},
});

const bounceTransition = {
		// start in a transparent, upscaled state
		atEnter: {
		opacity: 0,
		scale: 20,
		zIndex: 2
	},
		// leave in a transparent, downscaled state
		atLeave: {
		opacity: 0,
		scale: -20,
		zIndex: 1
	},
		// and rest at an opaque, normally-scaled state
		atActive: {
		opacity: 1,
		scale: 0,
		zIndex: 2
	},
};



ReactDOM.render(
	<Router>
		<Base>
		<MuiThemeProvider  theme={theme}>
			<CssBaseline />
				<AnimatedSwitch
					atEnter={bounceTransition.atEnter}
					atLeave={bounceTransition.atLeave}
					atActive={bounceTransition.atActive}
					mapStyles={mapStyles}
					className="route-wrapper"
				>
					<Route path="/" exact>
						<Index />
					</Route>
					<Route path="/mando" exact>
						<Mando />
					</Route>
					<Route path="/faq" exact>
						<Faq />
					</Route>
					{/*
					<Route path="/hentai" exact>
						<Authorize child={HentaiIndex} />
					</Route>
					<Route path="/hentai/new" exact>
						<Authorize child={HentaiCreate} />
					</Route>
					<Route path="/hentai/edit/:slug" exact render={({ match }) => (
						<Authorize child={HentaiEdit} match={match} />
					)} />
					<Route path="/hentai/upload/:slug" exact render={({ match }) => (
						<Authorize child={HentaiUpload} match={match} />
					)} />
					*/}
					<Route path="/">
						<E404 />
					</Route>
				</AnimatedSwitch>
				<AlertContainer duration={200} closeIcon={<i class="fal fa-times"></i>} />
			</MuiThemeProvider>
		</Base>
	</Router>,

	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


function mapStyles(styles) {
	return {
		opacity: styles.opacity,
		transform: `translateX(${styles.scale}%)`,
		zIndex: styles.zIndex
	}
}


