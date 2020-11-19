import React from "react";

function Title(props) {

    const { type, children, ...rest } = props;

    return React.createElement(`h${type}`, {
        ...rest,
        ...{ className: "light-header underline slight-margin" }
    }, children);

}

export default React.memo(Title);