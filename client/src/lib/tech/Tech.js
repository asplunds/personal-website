import React from "react";

import "../../styles/tech.scss";

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
                    {tech.map(v => <TechItem {...v} />)}
                </div>
                
                <TechCarousel tech={tech} />
            </div>
        </div>

    );

}

function TechItem({name, description, logo, logo2}) {



    return (
        <div title={name} className="tech-item">
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


function TechCarousel(props) {

    const { tech } = props;

    const [item, setItem] = React.useState(0);

    const next = () => setItem(tech.length > item + 1 ? item + 1 : 0);
    const prev = () => setItem(0 <= item - 1 ? item - 1 : tech.length - 1);


    return (

        <>
            <h2>Debug: {item}</h2>
            <br /><br /><br /><br />
            <div className="tech-carousel-controls">
                <div className="flexer"></div>
                <div className="tech-carasousel-control tech-carasoul-control-left" onClick={prev}></div>
                <div className="tech-carasousel-control tech-carasoul-control-right" onClick={next}></div>
            </div>
            <div className="tech-carousel" style={{
                "transform": `translateX(calc(-100% * ${item} - ${item} * var(--gap-left)))`
            }}>
                {tech.map((v, i) => <TechCart {...v} current={i === item} />)}
            </div>

        </>

    );

}

function TechCart(props) {

    const {name, description, logo, logo2, current } = props;

    return (
        <div className={`tech-cart-item ${current ? "tech-cart-item-active" : ""}`}>
            <div className="tech-cart-item-inner">
                <div className="tech-cart-item-hero">
                    <div className="tech-cart-item-logo">
                        <TechItem {...props} />
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

