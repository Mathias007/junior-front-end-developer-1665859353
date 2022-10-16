import React from "react";
import MessageBox from "./MessageBox";

export default function MessagesList() {
    return (
        <section className="main__messages-list messages-list">
            <MessageBox />
            <MessageBox />
            <MessageBox />
        </section>
    );
}
