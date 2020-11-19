import React from "react";

function FooterItem(props) {

    const { icon, link, name } = props;

    return <>
        <li>
            <a href={link} title={name}>
                {icon}
            </a>
        </li>
    </>

}

export default React.memo(FooterItem);