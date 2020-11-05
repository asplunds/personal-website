import React from "react";

import "../../styles/tech.scss";

import {
    atom,
    useRecoilState,
} from "recoil";

import {
    Button
} from "@material-ui/core";

const carasoulIndex = atom({
    key: "carasoulIndex",
    default: 0,
});

const carasoulVisible = atom({
    key: "carasoulVisible",
    default: false,
});


export default function Tech() {


    const tech = [
        {
            name: "Javascript",
            description: "lol",
            logo: "images/js-logo.png",
            logo2: "images/js-logo-2.png"
        },
        {
            name: "Typescript",
            description: "lol",
            logo: "images/typescript-logo-2.png",
            logo2: "images/typescript-logo.png"
        },
        {
            name: "Node JS",
            description: "lol",
            logo: "images/node-js-logo.svg"
        },
        {
            name: "Docker",
            description: "lol",
            logo: "images/docker-logo.png"
        },
        {
            name: "React",
            description: "lol",
            logo: "images/react-logo.png"
        },
        {
            name: "Sass",
            description: "lol",
            logo: "images/sass-logo.png"
        },
        {
            name: "PHP",
            description: "lol",
            logo: "images/php-logo.png"
        },
        {
            name: "Mongo DB",
            description: "lol",
            logo: "images/mongo-db-logo.png"
        },
        {
            name: "Java",
            description: "lol",
            logo: "images/java-logo.png"
        }
    ];

    return (

        <div className="tech-cont">
            <div className="tech-inner">
                <div className="tech-items-grid">
                    {tech.map((v, i) => <TechItem {...v} thisIndex={i} />)}
                </div>
                
                <TechCarousel tech={tech} />
            </div>
        </div>

    );

}

function TechItem({name, logo, logo2, thisIndex, alwaysShow}) {

    const [carasoul, setCarasoul] = useRecoilState(carasoulVisible);

    const [, setItem] = useRecoilState(carasoulIndex);


    return (
        <div title={name} className={`tech-item ${carasoul && !alwaysShow ? "tech-item-hidden" : ""}`} onClick={() => setItem(thisIndex) || setCarasoul(true)}>
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
    )
}

function CarasoulControlButton({ children, transparent }) {

    return (
        <Button
            size="small"
            color="primary"
            variant="contained"
            className={transparent && "tech-button-transparent"}
        >
            {children}
        </Button>
    )
}

function TechCarousel(props) {

    const { tech } = props;

    const [carasoul, setCarasoul] = useRecoilState(carasoulVisible);

    const [item, setItem] = useRecoilState(carasoulIndex);

    const next = () => setItem(tech.length > item + 1 ? item + 1 : 0);
    const prev = () => setItem(0 <= item - 1 ? item - 1 : tech.length - 1);

    const showCarasoul = !carasoul ? "tech-fade-in" : "";

    return (

        <>
            <div className={`tech-carousel-controls ${showCarasoul}`}>
                <div className="flexer"></div>
                <div className="tech-carasousel-control tech-carasoul-control-exit" onClick={() => setCarasoul(false)}>
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
                {tech.map((v, i) => <TechCart {...v} current={i === item} thisItem={i} />)}
            </div>

        </>

    );

}

function TechCart(props) {

    const {name, description, current, thisItem } = props;

    const [, setItem] = useRecoilState(carasoulIndex);

    return (
        <div onClick={() => setItem(thisItem)} className={`tech-cart-item ${current ? "tech-cart-item-active" : ""}`}>
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

