import React, { Component } from "react";

import LoginForm from "./LoginForm";

import { store } from "../../reducer.js";

export default class Authorize extends Component {


	constructor(props) {

		super(props);

		const auth = this.cookie("auth") || "";

		this.state = {

			authorized: auth !== ""

		}

		window.handleAuthorized = this.handleAuthorized.bind(this);


	}

	handleAuthorized(bool) {
		if (!bool)
			document.cookie = "auth=;path/";

		try {
			this.setState({
				authorized: bool
			});
		} catch(e) {}

	}

	cookie(name) {
		const res = new RegExp(name + "=(.*?); ", "gm").exec(document.cookie + "; path=/");
		return res ? res[1] : "";
	}

	render() {

		store.dispatch({
			type: "SET_LOGGED_IN_STATE",
			state: this.state.authorized
		});

		const auth = this.handleAuthorized.bind(this);

		return (
			<div>
				{this.state.authorized ? React.createElement(this.props.child, {
					auth,
					...this.props
				}) : <LoginForm auth={auth} />}
			</div>
		)

	}


}