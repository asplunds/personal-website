
import React, { Component } from "react";


import { TextField, Button, InputAdornment } from "@material-ui/core";
import "../../styles/global.scss";
import Api from "api";
import { spawnAlert } from "alert";



export default class LoginForm extends Component {

	render() {

		return (

			<article className="hentai">
				<div className="constrict">

					<div>
						<h1 className="light-header underline">
							Login
						</h1>
					</div>
					<form noValidate autoComplete="off" action="/test" method="POST" onSubmit={this.formDidSubmit.bind(this)}>
						<TextField
							name="password"
							fullWidth
							className="input-with-adornment"
							margin="normal"
							label="Password"
							variant="outlined"
							InputProps={{
								startAdornment: (
									<InputAdornment position="end">
										<i className="fad fa-key"></i>
									</InputAdornment>)
							}}
							
						/>
						<Button
							startIcon={<i className="fad fa-sign-in-alt"></i>}
							variant="contained"
							color="primary"
							size="large"
							type="submit"
						>
							Login
						</Button>
					</form>
					
				</div>
			</article>

		)

	}


	async formDidSubmit(e) {

		e.preventDefault();

		const formData = new FormData(e.target);

		new Api("/auth/login")
			.body(formData)
			.method("POST")
			.body(formData)
			.exec()
			.catch(e => {
				spawnAlert({
					status: "error",
					html: "Server is down. If you are the web master please start it with 'npm run admin' in ./src",
					icon: <i className="fad fa-exclamation-triangle"></i>,
					duration: 10000
				});
			})
			.then(resp => {
				if (resp && resp.error === false) {
					spawnAlert({
						status: "success",
						html: `Welcome back`,
						icon: <i className="fad fa-dove"></i>,
						duration: 10000
					});

					this.props.auth(true);
				}
				else if (resp && resp.error === true)
					spawnAlert({
						status: "error",
						html: resp.message,
						icon: <i className="fad fa-exclamation-triangle"></i>,
						duration: 10000
					});
			})

		

	}


}
