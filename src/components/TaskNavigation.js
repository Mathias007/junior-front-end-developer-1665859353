import React from "react";
import NavigationItem from "./NavigationItem";

export default function TaskNavigation() {
    return (
        <nav className="navigation__area">
            <ul className="navigation__list">
                <NavigationItem />
                <NavigationItem />
                <NavigationItem />
                <NavigationItem />
            </ul>
        </nav>
    );
}
