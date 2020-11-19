import React, { Component } from "react";
import { spawnAlert } from "alert";
import Tech from "../../lib/tech/Tech.jsx";
import HowIwork from "../../lib/HowIwork.js";
import { Lang } from "../../lib/language/Lang.jsx";
import Hr from "../../lib/Hr.jsx";
import Title from "../../lib/Title.jsx";

import View from "../View.jsx";

import Space from "give-me-space";

import Wave from "../../lib/Wave.jsx"

export default class Index extends Component {

    render() {

        return <>
            <Wave />
            <View>
                <Space />
                <div>
                    <Title type={1}>
                        <Lang langKey="FRONT_PAGE_GREETING" />{" "}
                        <span role="img" aria-label="wave">👋</span>
                        <Lang langKey="FRONT_PAGE_GREETING_POST_EMOJI" />
                    </Title>
                </div>
                <p>
                    <Lang langKey="FRONT_PAGE_INTRODUCTION" />
                </p>
                <p>
                    <Lang langKey="FRONT_PAGE_CONTACT_SHORT_PARAGRAPH" />
                </p>
                <Hr />
                <Tech />
                <Hr />
                <HowIwork />
            </View>
        </>

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

