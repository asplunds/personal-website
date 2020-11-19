import React from "react";
import { useRecoilState } from "recoil";
import { Button } from "@material-ui/core";

import { langState, Lang, updateStoredLang } from "./Lang.jsx";

export default function LanguageSelector() {

    const [ lang, setLang ] = useRecoilState(langState);

    const toggle = lang === "SWE" ? "ENG" : "SWE";

    const onClick = () => updateStoredLang(toggle) || setLang(toggle); 

    return (
        <>
            <Button
                onClick={onClick}
                style={{textTransform: 'none'}}
                fullWidth
                startIcon={<i className="fad fa-language"></i>}
            >
                <Lang langKey="LANGUAGE_SELECTOR_BUTTON_CONTENT" />
            </Button>
        </>
    )
}