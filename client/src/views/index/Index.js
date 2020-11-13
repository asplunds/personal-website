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
                        <div>
                            <h1 className="light-header underline slight-margin">
                                Hi <span role="img" aria-label="wave">👋</span>
                            </h1>
                        </div>
                        <p>
                            I'm Jonathan Asplund, a 16 year old swedish high school student and part time junior full stack developer. I love creating powerful web applications using the newest technologies.
                        </p>
                        <p>
                            Want to contact me? Don't hesitate to ask anything on my e-mail adress <a href="mailto:jonathan@asplund.net">jonathan@asplund.net</a>
                        </p>
                        <h2 className="light-header underline slight-margin">
                            How I work
                        </h2>
                        <p>
                            As a developer I always strive to write top quality code which is why I love using technologies such as <a href="https://www.typescriptlang.org/">TypeScript</a>, <a href="https://jsdoc.app/index.html">JSDoc</a> and <a href="https://swagger.io/">Swagger</a>. I believe a good program sits on good code. My style of programming is always looking for the best solution in terms of reusability, flexibility and maintainability. Therefore I believe strongly in a functional approach to programming problems, with this method the application avoids repetetive code and enables reusability. With that said I don't have any problems using an object oriented style, I think     it's important to find the most optimal solution for the task.
                        </p>
                        <p>
                            I'm an active proponent of collaboration in my it's imperative to have good communication with team members in order to produce the best results. Asking and giving help or advice is something I strongly believe in. 
                        </p>
                        <Tech />

                        {false && <Button
                            onClick={this.clickMe}
                            startIcon={<i className="fad fa-grin-squint-tears"></i>}
                            size="large"
                        >
                            
                                    Don't click me
                            
                        </Button>}
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