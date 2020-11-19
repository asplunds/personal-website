import languages from "./languages";
import { atom, useRecoilValue } from "recoil";
import LanguageSelectorComponent from "./LanguageSelector";

const retrieveStoredLang = () => {
    return window.localStorage.getItem("language") || null;
}

const lang = atom({
    key: "lang",
    default: retrieveStoredLang() || "ENG"
});

export const updateStoredLang = lang => {    
    return window.localStorage.setItem("language", lang);
}

export function Lang(props) {

    const selectedLang = useRecoilValue(lang);

    const { langKey } = props;

    const res =  languages[langKey] ? languages[langKey].find(({ language }) => language === selectedLang).content || "NO TEXT" : "NO TEXT";

    return res;
}

export const LanguageSelector = LanguageSelectorComponent;
export const langState = lang;