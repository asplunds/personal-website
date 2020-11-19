import React from "react";
import Footer from "./footer/Footer.jsx";


export default function View(props) {

    const { children } = props;

    return <>
        <article>
            <div className="constrict">
                {children}
            </div>
        </article>
        
        <Footer />
    </>;

}

