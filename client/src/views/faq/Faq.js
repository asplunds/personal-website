import React from "react";

import {
    Link,
} from "react-router-dom";

import "../../styles/faq.scss";


import { Button } from "@material-ui/core";


export default function Faq() {

    return (


        <article className="index-page">
            <div>
                <Link to="/">
                    <Button
                        startIcon={<i className="fad fa-long-arrow-left"></i>}
                        color="primary"
                        size="large"
                    >
                        Back
                    </Button>
                </Link>

            </div>
            <div className="constrict">
                <div>
                    <h1 className="light-header underline slight-margin">
                        FAQ - Frequently Asked Questions
                    </h1>
                </div>
                <div className="faq-list">
                    <p>
                        <span className="hide-on-touch">Hover</span><span className="hide-on-pointer">Tap</span> to expand
                    </p>
                    <FaqItem>
                        <H3 title="Can you unban me? PLZ" />
                        <P text="Nope." />
                    </FaqItem>

                    <FaqItem>
                        <H3 title="Why can't I DM you?" />
                        <P text="I turned them off because I get a lot of dumb questions and it's annoying" />
                    </FaqItem>

                    <FaqItem>
                        <H3 title="Why don't you like Discord's reply feature?" />
                        <ul>
                            <li>
                                It clutters chat making it harder to read
                            </li>
                            <li>
                                People including me get pinged way more often
                            </li>
                            <li>
                                It duplicates embeds such as YT videos and GIFs
                            </li>
                        </ul>
                        <P text="I'm not saying I hate it but it can be annoying" />
                    </FaqItem>

                    <FaqItem>
                        <H3 title="Can you unban me? PLZZZ" />
                        <P text="Still no." />
                    </FaqItem>

                    <FaqItem>
                        <H3 title="Can you add NSFW channel?" />
                        <P text="Probably not" />
                    </FaqItem>
                    <FaqItem>
                        <H3 title="How long did it take you to make this FAQ?" />
                        <P text="Way too long. For devs: I used React.js + sass" />
                    </FaqItem>
                </div>
            </div>
        </article>
    )

}

function FaqItem(props) {

    const reference = React.createRef();

    const [headerHeight, setHeaderHeight] = React.useState(0);
    const [totalHeight, setTotalHeight] = React.useState(0);

    React.useEffect(() => {

        

        function handleResize() {

            if (!reference.current) return;

            const { height: header } = reference.current.querySelector("[class*='header']").getBoundingClientRect();

            const total = [...reference.current.children[0].children]
                .reduce((t, c) => {
                    return t + +c.getBoundingClientRect().height;
                }, 0);
            
        
            setHeaderHeight(header);
            setTotalHeight(total);

        }

        function deBounce() {

            setTimeout(handleResize, 10);

        } 

        window.addEventListener("resize", deBounce);
        document.addEventListener("DOMContentLoaded", deBounce);


        deBounce();

        return () => {
            //handleResize();
            window.removeEventListener("resize", deBounce);
            document.removeEventListener("DOMContentLoaded", deBounce);
        }
    });

    return (
        <>
            <div className="faq-item" ref={reference} style={{
                "--header-height": `${headerHeight}px`,
                "--total-height": `${totalHeight}px`
            }}>
                <div className="faq-item-inner">
                    <div className="faq-item-hider">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );

}

function P(props) {

    return (
        <p>{props.text}</p>
    );

}

function H3(props) {

    return (

        <h1 className="light-header short-underline underline slight-margin">
            {props.title}
        </h1>

    );

}