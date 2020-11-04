import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { spawnAlert } from "alert";
import Tech from "../../lib/tech/Tech";


import {
	Link,
} from "react-router-dom";

export default class Index extends Component {

    render() {

        return (
            <article className="index-page">
                <div className="constrict">
                    <div>
                        <h1 className="light-header underline slight-margin">
                            Undo.club
                        </h1>
                        <p>
                            Welcome to my web app
                        </p>
                        <h2 className="light-header underline slight-margin">
                            Who dis?
                        </h2>
                        <p>
                            Hi <span role="img" aria-label="wave">👋</span>,<br /> I'm Undo, best known as a Discord admin. I administer several large Discord communities. When I'm not slamming the gavel I'm probably working on a web developement project. As a fullstack developer I love making rich frontend web applications with powerful, flexible and dynamic backends.
                        </p>
                        <p>
                            ( ͡° ͜ʖ ͡°) Bröther please click below
                        </p>
                        <div>
                            <Link to="/faq">
                                <Button
                                    startIcon={<i className="fad fa-question-square"></i>}
                                    size="large"
                                    color="primary"
                                    variant="contained"
                                >
                                    Read FAQ
                                </Button>
                            </Link>
                        </div>

                        <Tech />

                        <Button
                            onClick={this.clickMe}
                            startIcon={<i className="fad fa-grin-squint-tears"></i>}
                            size="large"
                        >
                            
                                    Don't click me
                            
                        </Button>
                    </div>
                </div>
            </article>
        )

    }

    clickMe() {

        fetch("https://icanhazdadjoke.com/", {
            headers: {
                accept: "application/json"
            }
        })
            .then(d => d.json())
            .then(({ joke }) => {
                spawnAlert({
                    status: "success",
                    html: joke,
                    icon: <i className="fad fa-grin-squint-tears"></i>,
                    duration: 6000
                });
            })
        
    }

}