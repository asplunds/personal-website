import React from "react";

function Space(props) {

    const { part } = props;

    return <>
        <div style={{
            height: `${part || 30}vh`
        }}></div>
    </>;

}

export default Space;