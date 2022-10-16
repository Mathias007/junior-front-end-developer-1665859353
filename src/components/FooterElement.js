import React from "react";

export default function FooterElement({ content, isSeparator = false }) {
    return isSeparator ? (
        <span className="nerd-footer__element separator"> · </span>
    ) : (
        <span className="nerd-footer__element">{content}</span>
    );
}
