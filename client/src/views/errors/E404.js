import React from "react";

import { Button } from "@material-ui/core";
import {
	Link,
} from "react-router-dom";

export default function E404() {

    return (

        <article className="index-page">
                <div className="constrict">
                    <h1 className="light-header underline slight-margin">
                        Eror 404
                    </h1>
                    <p>
                        This page was not found
                    </p>
                    <Link to="/">
                        <Button
                            startIcon={<i className="fad fa-home"></i>}
                            size="large"
                            color="primary"
                            variant="contained"
                        >
                            Teleport home
                        </Button>
                    </Link>
                </div>
        </article>

    )

}