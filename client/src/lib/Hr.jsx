import React from "react";

import "../styles/hr.scss";

function Hr(props) {

    return <>
        <div className="fake-hr">
            <hr style={{ display: "none" }} />
            <div className="mock-hr"></div>
        </div>
    </>

}


export default React.memo(Hr);