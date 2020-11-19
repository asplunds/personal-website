import React from "react";

import "../../styles/footer.scss";
import FooterItem from "./FooterItem.jsx";
import items from "./footerItems";

export default function Footer(props) {

    return <>
        <footer className="footer">
            <div className="footer-inner">
                <ul className="footer-ul">
                    { items.map((v, i) => <FooterItem {...v} key={i} />) }
                </ul>
                <div style={{
                    display: "flex",
                }}>
                    <span>Proudly powered by <a target="_blanc" href="https://github.com/facebook/react">React.js</a></span>
                    <span style={{ flex: 1, minWidth: 10 }}></span>
                    <span>Made with <i className="fas fa-heart"></i> in Stcokholm</span>
                </div>
            </div>
        </footer>
    </>

}