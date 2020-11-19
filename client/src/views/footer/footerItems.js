import React from "react";

const fontAwesome = className => <><i className={className}></i></>

export default [
    {
        name: "Github",
        link: "https://github.com/asplunds",
        icon: fontAwesome("fab fa-github")
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/jonathan-asplund-11a31a1a2/",
        icon: fontAwesome("fab fa-linkedin")
    },
    {
        name: "LinkedIn",
        link: "https://www.facebook.com/profile.php?id=100010938940087",
        icon: fontAwesome("fab fa-facebook-square")
    },
    {
        name: "E-mail",
        link: "mailto:" + ["t", "e", "n", ".", "d", "n", "u", "l", "p", "s", "a", "@", "n", "a", "h", "t", "a", "n", "o", "j"].reverse().join(""),
        icon: fontAwesome("fas fa-envelope")
    },
]
