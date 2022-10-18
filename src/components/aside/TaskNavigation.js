import React from "react";

import NavigationItem from "./NavigationItem";

export default function TaskNavigation({ data, onClick }) {
    return (
        <nav className="navigation__area">
            <ul className="navigation__list">
                {data.map((item) => {
                    const { id, title, status } = item;

                    return (
                        <NavigationItem
                            key={id}
                            id={id}
                            title={title}
                            status={status}
                            onClick={() => onClick(id)}
                        />
                    );
                })}
            </ul>
        </nav>
    );
}
