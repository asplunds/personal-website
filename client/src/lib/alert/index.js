import React, { Component } from "react";

import "./x-alert.scss";

window.ALERT_CONTAINER = null;

class AlertContainer extends Component<{}> {

	constructor(props) {
		super(props);

		window.ALERT_CONTAINER = null; // clear old instance;
		window.ALERT_CONTAINER = this; // create reference to global container variable;

		this.state = {
			children: []
		}

		this.id = `___x-alert-container-${Date.now()}`;

		this.duration = this.props.duration || 250;

		this.container = React.createRef();
	}

	setChildren(arr) {

		let position = 0;
		const children = arr
			.map((v, i, arr) => {

				v.position = position;
				if (!v.hidden)
					position++;
				if (!v.ref)
					v.ref = React.createRef();
				if (v.height)
					v.bottom = arr.slice(0, i).reduce((t, c) => t + (c.hidden ? 0 : c.height), 0) * -1;
				if (!v.timeout && v.duration)
					v.timeout = setTimeout(() => {
						if (!v.hidden)
							this.hideAlert(v.id);
					}, v.duration);

				return v;

			});

		return new Promise(resolve =>
			this.setState({
				children
			}, resolve)
		);
			

	}

	render() {
		window.ALERT_CONTAINER = this;

		return (

			<div className="x-alerts" id={this.id}>
				<style>{`
					#${this.id} {
						--duration: ${this.duration}ms;
						--timing-function: ${this.props.timing || "ease-in"};
					}
				`}</style>

				<div ref={this.container} className="x-alerts-inner">
					{this.state.children.map(this.generateAlert.bind(this))}
				</div>	
			</div>

		);

	}

	generateAlert(alert, i, arr) {

		/* 	
		*	this basically makes the first item animate since it can't
		*	animate if it starts off at it's animation end. Using animation
		*	is a sub optimal solution thus I made this. When I used animation
		*	there was a problem of the animation breaking when a new alert appeared
		*/
		if (alert.position === 0 && !alert.fixPosition)
			setTimeout(() => {
				this.setChildren(arr.map(v => {
					if (v.position === 0)
						v.fixPosition = true;
					
						if (v.ref && v.ref.current)
							v.height = v.ref.current.getBoundingClientRect().height;

					return v;
				}));
			}, 0)
			

		return (

			<div
				ref={alert.ref}
				className={`x-alert
					${alert.height ? `x-alert-started` : ""}
					${alert.status ? `x-alert-${alert.status}` : ""}
					${alert.fading ? "x-alert-fading" : ""}
					${alert.hidden ? "x-alert-hidden" : ""}`}
				key={alert.id}
				id={alert.id}
				style={{
					transform: `translateY(${(!alert.hasOwnProperty("bottom") ? "100%" : `${alert.bottom}px`)})`
				}}
			>
				<div className="x-alert-inner"
					onMouseOver={() => this.preventHide(alert)}
					onMouseOut={() => this.continueHide(alert)}
				>
					<div className="x-alert-column x-alert-icon">
						{alert.icon}
					</div>
					<div className="x-alert-column x-alert-content">
						{alert.html}
					</div>
					<div onClick={(() => this.hideAlert(alert.id))} className="x-alert-column x-alert-close">
						{this.props.closeIcon || "x"}
					</div>
					<div
						class={`x-alert-progress ${alert.fixPosition ? "x-alert-active" : ""}`}
					>
						<div
							className="x-alert-progress-bar"
							style={{
								transitionDuration: `${alert.duration || 0}ms`
							}}	
						></div>
					</div>
				</div>
			</div>

		);

		

	}

	continueHide(alert) {

		const currentChildren = this.state.children;

		this.setChildren(currentChildren.map(v => {

			if (v.id !== alert.id || !alert.duration || !alert.ref) return v;
			
			const progressBar = alert.ref.current.querySelector(".x-alert-progress-bar");

			const transform = window
				.getComputedStyle(progressBar)
				.transform;
			// basically just check what the scaleX is and use it as progress
			const progress = transform
				.substr("matrix(".length)
				.split(",")[0];

			v.timeout = setTimeout(() => {
				if (!v.hidden)
					this.hideAlert(v.id);
			}, v.duration * +progress);

			setTimeout(() => {
				progressBar.style.setProperty("transform", "scaleX(0)");
			}, 100)
			

			return v;
		}));

	}

	preventHide(alert) {

		const currentChildren = this.state.children;

		this.setChildren(currentChildren.map(v => {
			if (v.id !== alert.id || !alert.duration || !alert.ref || !alert.timeout) return v;
			
			const progressBar = alert.ref.current.querySelector(".x-alert-progress-bar");

			const transform = window
				.getComputedStyle(progressBar)
				.transform;
			// basically just check what the scaleX is and use it as progress
			const progress = +transform
				.substr("matrix(".length)
				.split(",")[0];

			clearTimeout(v.timeout);

			progressBar.style.setProperty("transform", `scaleX(${progress})`);
			progressBar.style.setProperty("transition-duration", `${v.duration * +progress}ms`);

			return v;
		}));

	}

	hideAlert(id) {

		const currentChildren = this.state.children;

		this.setChildren(currentChildren.map(v => {
			if (v.id === id)
				v.fading = true;

			return v;
		}));

		setTimeout(() => {

			this.setChildren(currentChildren.map(v => {
				if (v.id === id)
					v.hidden = true;

				return v;
			}));
		}, this.duration);

	}

	

}



const spawnAlert = alert => {

	const cont = window.ALERT_CONTAINER;

	if (!cont || !(cont instanceof AlertContainer))
		throw new Error("Undefined container");

	const currentChildren = cont.state.children;
	
	return cont.setChildren(
		[Object.assign({id: "__x-alert-" + Date.now()}, alert), ...currentChildren]
	);


}

export { AlertContainer, spawnAlert } 