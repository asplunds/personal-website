import React, { Component, useState } from "react";
import {
	Link,
	useLocation
} from "react-router-dom";

import { IconButton, Button } from "@material-ui/core";

import { Menu } from "@material-ui/icons";

import { Lang, LanguageSelector } from "../lib/language/Lang.jsx";

import "../styles/header.scss";


export default Header => {

	const [ current, setCurrent ] = useState(null);

	const [ menuClosed, setMenuClosed ] = useState(window.innerWidth < 1000);

	const closeMenu = () => window.innerWidth < 1000 ? setMenuClosed(true) : void 0;

	const location = useLocation();

	React.useEffect(() => {

		setCurrent(location.pathname);

	}, [location]);

	/*
	function currentHour() {
		const currentHour = Moment().format("HH");
		if (currentHour === 0 || currentHour < 12) return "Good Morning"
		else if (currentHour <= 19) return "Good Afternon"
		else return "Good Evening"
	}
	*/

	return (

		<>
		
		<div className="header-close-button">
			<IconButton
				onClick={() => setMenuClosed(false)}
				variant="contained"
				color="primary"
				aria-label="upload picture"
				component="span"
			>
				<Menu />
			</IconButton>
		</div>

		<header className={menuClosed ? "header-menu-closed" : ""}>

			<div className="header-fixed">
				<div className="header-container">
					<div className="menu-close-button">
						<HeaderItem slim onClick={() => setMenuClosed(true)} nocurrent text={<Lang langKey="HEADER_ITEM_CLOSE_MENU" />} icon="fad fa-arrow-to-left" />
					</div>

					<h1 className="light-header menu-header small-header">
						Asplund.net
						<div className="header-under-text">
							Jonathan Asplund
						</div>
					</h1>

					<LanguageSelector />

					<HeaderItem onClick={closeMenu} current={current} to="/" text={<Lang langKey="HEADER_ITEM_HOME" />} icon="fad fa-home" />

					<HeaderItem onClick={closeMenu} current={current} to="/faq" text={<Lang langKey="HEADER_ITEM_CONTACT" />} icon="fad fa-question" />

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
					<div className="header-item-flex">
						<div className="header-item-icon">
							<i className={this.props.icon}></i>
						</div>
						<div className="header-item-text">
							{this.props.text}
						</div>
					</div>
				</Button>
			</Link>

		)

	}

}