import React from "react";

import { Lang } from "./language/Lang.jsx";

import Title from "./Title.jsx";


export default function HowIwork() {
    return <>
        <h2 className="light-header underline slight-margin">
            <Lang langKey="FRONT_PAGE_HOW_I_WORK_TITLE" />
        </h2>
        <p>
            <Lang langKey="FRONT_PAGE_HOW_I_WORK_PARAGRAPH_2" />
        </p>
        <div>
            <Title type={3}>
                <Lang langKey="FRONT_PAGE_TECHNICAL_WORKFLOW_TITLE" />
            </Title>
        </div>
        <p>
            <Lang langKey="FRONT_PAGE_HOW_I_WORK_PARAGRAPH_3" />
        </p>
        <p>
            <Lang langKey="FRONT_PAGE_HOW_I_WORK_PARAGRAPH_1" />
        </p>
    </>
}