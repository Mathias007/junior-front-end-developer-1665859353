import React, { useState } from "react";

import MessagesList from "./MessagesList";
import Message from "./Message";

import compass from "../../assets/compass.svg";

import { HEADERS } from "../../config/names";

const { CONTEXT } = HEADERS;

export default function MainSection({ task }) {
    const [selectedContext, setSelectedContext] = useState(task[0]);

    const selectContext = (id) => {
        if (!task[id].read) task[id].read = !task[id].read;

        const context = task[id];

        setSelectedContext(context);
    };

    return (
        <main className="nerd-app-area__section main">
            <h2 className="nerd-app-area__header main__header">
                <img src={compass} className="main__icon" alt="icon" />
                {"           "}
                {CONTEXT}
            </h2>
            <div className="main__content-wrapper">
                <MessagesList task={task} onClick={selectContext} />
                <Message context={selectedContext} />
            </div>
        </main>
    );
}
