import React, { useState } from "react";

import MessagesList from "./MessagesList";
import Message from "./Message";

export default function MainSection(props) {
    const { task } = props;

    const [selectedContext, setSelectedContext] = useState([]);

    const selectContext = (id) => {
        const context = task[id];

        setSelectedContext(context);
    };

    return (
        <main className="nerd-app-area__section main">
            <h2 className="nerd-app-area__header main__header">
                Business Context
            </h2>
            <div className="main__content-wrapper">
                <MessagesList task={task} onClick={selectContext} />
                <Message context={selectedContext} />
            </div>
        </main>
    );
}
