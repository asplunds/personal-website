import React from "react";

import "../../styles/tech.scss";

import tech from "./technologies";
import TechItem from "./TechItem";
import CarasoulControlButton from "./TechCarasoulButton";


import {
    atom,
    useRecoilState,
    useRecoilValue
} from "recoil";

import { Lang } from "../language/Lang.jsx";


export const carasoulIndex = atom({
    key: "carasoulIndex",
    default: 0,
});

export const carasoulVisible = atom({
    key: "carasoulVisible",
    default: {
        active: false,
        delay: "carasoul"
    },
});


export default function Tech() {

    const carasoulVisibleState = useRecoilValue(carasoulVisible);

    
    return <>
        
        <h2 className="light-header underline slight-margin">
            <Lang langKey="TECH_TITLE" />
        </h2>

        <p>
            <Lang langKey="TECH_HINT_CLICK" />
        </p>
        <div className={`tech-cont ${carasoulVisibleState ? "carasoul-visible" : ""}`}>
            <div className="tech-inner">
                <div className="tech-items-grid">
                    {tech.map((v, i) => <TechItem key={i} {...v} thisIndex={i} />)}
                </div>
                
                <TechCarousel tech={tech} />
            </div>
        </div>

    </>

}





function TechCarousel(props) {

    const { tech } = props;

    const [carasoul, setCarasoul] = useRecoilState(carasoulVisible);

    const [item, setItem] = useRecoilState(carasoulIndex);

    const next = () => setItem(tech.length > item + 1 ? item + 1 : 0) || setCarasoul({ active: true, delay: "grid"});
    const prev = () => setItem(0 <= item - 1 ? item - 1 : tech.length - 1) || setCarasoul({ active: true, delay: "grid"});

    const showCarasoul = (!carasoul.active ? `tech-fade-in ` : " ") + (carasoul.delay === "carasoul" ? "tech-fade-delay" : "");

    return (

        <>
            <div className={`tech-carousel-controls ${showCarasoul}`}>
                <div className="flexer"></div>
                <div className="tech-carasousel-control tech-carasoul-control-exit" onClick={() => setCarasoul({ active: false, delay: "grid"})}>
                    <CarasoulControlButton transparent>
                        <div className="tech-carasoul-control-button tech-carasoul-control-button-exit">
                            <i className="fas fa-th"></i>
                        </div>
                    </CarasoulControlButton>
                </div>
                <div className="tech-carasousel-control tech-carasoul-control-left" onClick={prev}>
                    <CarasoulControlButton>
                        <div className="tech-carasoul-control-button tech-carasoul-control-button-left">
                            <i className="fad fa-chevron-left"></i>
                        </div>
                    </CarasoulControlButton>
                </div>
                <div className="tech-carasousel-control tech-carasoul-control-right" onClick={next}>
                    <CarasoulControlButton>
                        <div className="tech-carasoul-control-button tech-carasoul-control-button-left">
                            <i className="fad fa-chevron-right"></i>
                        </div>
                    </CarasoulControlButton>
                </div>
            </div>
            <div className={`tech-carousel ${showCarasoul}`} style={{
                "transform": `translateX(calc(-100% * ${item} - ${item} * var(--gap-left)))`
            }}>
                {tech.map((v, i) => <TechCart {...v} key={i} current={i === item} thisItem={i} />)}
            </div>

        </>

    );

}

function TechCart(props) {

    const {name, description, current, thisItem } = props;

    const [, setItem] = useRecoilState(carasoulIndex);

    const [, setCarasoul] = useRecoilState(carasoulVisible);


    return (
        <div onClick={() => setItem(thisItem) || setCarasoul({ active: true, delay: "grid" })} className={`tech-cart-item ${current ? "tech-cart-item-active" : ""}`}>
            <div className="tech-cart-item-inner">
                <div className="tech-cart-item-hero">
                    <div className="tech-cart-item-logo">
                        <TechItem alwaysShow {...props} />
                    </div>
                    <div className="tech-cart-item-heading">
                        <h1 className="light-header underline">
                            {name}
                        </h1>
                    </div>
                </div>
                <div className="tech-cart-item-content">
                    <p className="tech-cart-item-description">{description}</p>
                </div>
            </div>
        </div>
    )
}

