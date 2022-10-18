import React from "react";
import { Link } from "react-router-dom";

import { DOT } from "../../config/names";

export default function FooterElement({ content, isSeparator = false, path }) {
    return isSeparator ? (
        <span className="nerd-footer__element separator"> {DOT} </span>
    ) : (
        <Link to={path}>
            <span className="nerd-footer__element">{content}</span>
        </Link>
    );
}
