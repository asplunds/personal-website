import React from "react";

import {
    Button
} from "@material-ui/core";

export default function CarasoulControlButton({ children, transparent }) {

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