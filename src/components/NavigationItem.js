import React from "react";

import arrow from "../assets/arrow.svg";

export default function NavigationItem() {
    return (
        <li className="navigation__element element">
            <p className="element__text">
                <span className="element__arrow">
                    <img src={arrow} className="arrow" alt="arrow" />
                </span>{" "}
                Application Setup
            </p>
        </li>
    );
}
