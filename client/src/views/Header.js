import React, { Component, useState } from "react";
import {
	Link,
	useLocation
} from "react-router-dom";

import Moment from "moment";

import { IconButton, Button } from "@material-ui/core";

import PhotoCamera from "@material-ui/icons/Menu";

import "../styles/header.scss";
import { store } from "../reducer.js";

export default Header => {

	const [current, setCurrent] = useState(null);
	const [loggedIn, setLoggedIn] = useState(null);

	const [menuClosed, setMenuClosed] = useState(window.innerWidth < 1000);

	const closeMenu = () => window.innerWidth < 1000 ? setMenuClosed(true) : void 0;

	const location = useLocation();

	store.subscribe(() => {

		setLoggedIn(store.getState().loggedIn);

	});

	React.useEffect(() => {

		setCurrent(location.pathname);

	}, [location]);

	const status = ["Undo was here", currentHour(), "React <3"][~~(Math.random() * 3)];

	function currentHour() {
		const currentHour = Moment().format("HH");
		if (currentHour === 0 || currentHour < 12) return "Good Morning"
		else if (currentHour <= 19) return "Good Afternon"
		else return "Good Evening"
	}

	return (

		<>
		
		<div className="header-close-button">
			<IconButton onClick={() => setMenuClosed(false)} variant="contained" color="primary" aria-label="upload picture" component="span">
				<PhotoCamera />
			</IconButton>
		</div>

		<header className={menuClosed && "header-menu-closed"}>

			<div className="header-fixed">
				<div className="header-container">
					<div className="menu-close-button">
						<HeaderItem slim onClick={() => setMenuClosed(true)} nocurrent text="Menu fuckoff" icon="fad fa-arrow-to-left" />
					</div>

					<h1 className="light-header menu-header small-header">

						Undo.club
						<div className="header-under-text">
							{status}
						</div>
					</h1>

					<HeaderItem onClick={closeMenu} current={current} to="/" text="Home" icon="fad fa-home" />

					<HeaderItem onClick={closeMenu} current={current} to="/mando" text="Mando" icon="fad fa-kiss-wink-heart" />

					<HeaderItem onClick={closeMenu} current={current} to="/faq" text="FAQ" icon="fad fa-question" />

					<wrapper-button style={{ display: loggedIn ? "block" : "none" }} onClick={() => window.handleAuthorized(false)}>
						<HeaderItem onClick={closeMenu} current={current} text="Logout" icon="fad fa-portal-exit" />
					</wrapper-button>
				</div>
			</div>

		</header>

		</>

	)


}

class HeaderItem extends Component {

	render() {

		return (

			<Link to={this.props.to || "#"}>
				<Button
					onClick={this.props.onClick}
					fullWidth
					className={`${this.props.current === this.props.to && !this.props.nocurrent ? "header-item-active " : ""}header-item ${this.props.slim ? "slim-header-item" : "lmao"}`}
				>
					<div class="header-item-flex">
						<div class="header-item-icon">
							<i className={this.props.icon}></i>
						</div>
						<div class="header-item-text">
							{this.props.text}
						</div>
					</div>
				</Button>
			</Link>

		)

	}

}