import React from "react";

import FooterElement from "./FooterElement";

import { FOOTER } from "../../config/names";

const { TERMS, POLICY, COPYRIGHT, VERSION, UPDATE } = FOOTER;

export default function Footer() {
    return (
        <footer className="nerd-footer">
            <section className="nerd-footer__section">
                <FooterElement content={TERMS} path="#" />
                <FooterElement isSeparator />
                <FooterElement content={POLICY} path="#" />
                <FooterElement isSeparator />
                <FooterElement content={COPYRIGHT} path="#" />
            </section>
            <section className="nerd-footer__section">
                <FooterElement content={VERSION} path="#" />
                <FooterElement isSeparator />
                <FooterElement content={UPDATE} path="#" />
            </section>
        </footer>
    );
}
