import React, { Component } from "react";
import Header from "./Header";

import Progress from "progress";
import "../styles/global.scss";
import "../styles/progress.scss";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const darkTheme = createMuiTheme({
	palette: {
		type: "dark",
		primary: {
			main: "#5f7bcf"
		}
	}
});

Progress.go();

export default class Base extends Component {


	render() {
		console.log(this.props.children);
		return (
			<ThemeProvider theme={darkTheme}>
				<div className="app">

					<Header history={this.props.history} />

					<main className="component">

						<section className="inner-component">

							{this.props.children}
						
						</section>

					</main>

				</div>
			</ThemeProvider>
		)

	}


}
