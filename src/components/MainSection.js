import React from "react";

import MessagesList from "./MessagesList";
import Message from "./Message";

export default function MainSection() {
    return (
        <main className="nerd-app-area__section main">
            <h2 className="nerd-app-area__header main__header">
                Business Context
            </h2>
            <div className="main__content-wrapper">
                <MessagesList />
                <Message />
            </div>
        </main>
    );
}
