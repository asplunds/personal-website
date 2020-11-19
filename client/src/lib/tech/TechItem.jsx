import React from "react";

import { useRecoilState } from "recoil";

import { carasoulIndex, carasoulVisible } from "./Tech";

export default function TechItem({ name, logo, logo2, thisIndex, alwaysShow }) {

    const [ carasoul, setCarasoul ] = useRecoilState(carasoulVisible);

    const [, setItem ] = useRecoilState(carasoulIndex);

    return <>
        <div title={name} style={{
            cursor: alwaysShow ? "initial" : "pointer"
        }} className={`tech-item ${carasoul.active && !alwaysShow ? "tech-item-hidden" : ""}`} onClick={() => setItem(thisIndex) || setCarasoul({ active: true, delay: "carasoul" })}>
            <div className="tech-item-inner">
                <div className="tech-item-movable tech-item-background-color"></div>
                {logo2 &&
                    <div className="tech-item-movable tech-item-content logo-item-content-2" style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/${logo2})`
                    }}></div>
                }
                <div className={`tech-item-movable tech-item-content ${logo2 ? "tech-item-has-logo-2" : ""}`} style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/${logo})`
                }}></div>
                
            </div>
        </div>
    </>
}