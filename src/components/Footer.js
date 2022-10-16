import React from "react";

import FooterElement from "./FooterElement";

export default function Footer() {
    return (
        <footer className="nerd-footer">
            <section className="nerd-footer__section">
                <FooterElement content={"Terms of service"} />
                <FooterElement isSeparator />
                <FooterElement content={"Privacy policy"} />
                <FooterElement isSeparator />
                <FooterElement content={"Copyright"} />
            </section>
            <section className="nerd-footer__section">
                <FooterElement content={"nerd.family Version 1.2"} />
                <FooterElement isSeparator />
                <FooterElement content={"Last update 10/09/2022"} />
            </section>
        </footer>
    );
}
