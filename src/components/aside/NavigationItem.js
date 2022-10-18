import React from "react";
import { Link } from "react-router-dom";

import active from "../../assets/statuses/active.svg";
import checked from "../../assets/statuses/checked.svg";
import locked from "../../assets/statuses/locked.svg";

export default function NavigationItem({ id, title, status, onClick }) {
    return (
        <li className="navigation__element element" onClick={onClick}>
            <Link to={`/${status !== "locked" ? id : ""}`}>
                <p
                    className={`element__text ${
                        status === "locked"
                            ? "element__text--locked"
                            : status === "active"
                            ? "element__text--active"
                            : ""
                    }`}
                >
                    <span className="element__arrow">
                        <img
                            src={
                                status === "checked"
                                    ? checked
                                    : status === "active"
                                    ? active
                                    : locked
                            }
                            className="arrow"
                            alt="task-status"
                        />
                    </span>{" "}
                    {title}
                </p>
            </Link>
        </li>
    );
}
