import React, { Component } from "react";

import "../../styles/widgets.scss";

export default class Widgets extends Component {

    render() {

        return (
            <div className="widget-container">
                {this.props.children}
            </div>
        )

    }

}