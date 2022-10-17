import React from "react";

import NavigationItem from "./NavigationItem";

export default function TaskNavigation(props) {
    const { data, onClick } = props;

    return (
        <nav className="navigation__area">
            <ul className="navigation__list">
                {data.map((item) => {
                    const { id, description, status } = item;

                    return (
                        <NavigationItem
                            key={id}
                            description={description}
                            status={status}
                            onClick={() => onClick(id)}
                        />
                    );
                })}
            </ul>
        </nav>
    );
}
