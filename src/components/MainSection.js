import React, { useState } from "react";

import MessagesList from "./MessagesList";
import Message from "./Message";

import compass from "../assets/compass.svg";

export default function MainSection({ task }) {
    const [selectedContext, setSelectedContext] = useState([]);

    const selectContext = (id) => {
        if (!task[id].read) task[id].read = !task[id].read;

        const context = task[id];

        setSelectedContext(context);
    };

    return (
        <main className="nerd-app-area__section main">
            <h2 className="nerd-app-area__header main__header">
                <img src={compass} className="main__icon" alt="icon" />
                {"           "}Business Context
            </h2>
            <div className="main__content-wrapper">
                <MessagesList task={task} onClick={selectContext} />
                <Message context={selectedContext} />
            </div>
        </main>
    );
}
