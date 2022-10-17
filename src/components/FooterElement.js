import React from "react";
import { Link } from "react-router-dom";

export default function FooterElement({ content, isSeparator = false, path }) {
    return isSeparator ? (
        <span className="nerd-footer__element separator"> · </span>
    ) : (
        <Link to={path}>
            <span className="nerd-footer__element">{content}</span>
        </Link>
    );
}
