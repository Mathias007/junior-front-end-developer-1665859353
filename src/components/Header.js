import React from "react";

import logo from "../assets/logo.svg";
import avatar from "../assets/default_avatar.png";

export default function Header() {
    return (
        <header className="nerd-header">
            <img src={logo} className="nerd-header__logo" alt="logo" />
            <img
                src={avatar}
                className="nerd-header__avatar"
                alt="user-avatar"
            />
        </header>
    );
}
