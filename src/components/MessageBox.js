import React from "react";

export default function MessageBox() {
    return (
        <article className="messages-list__message-box message-box">
            <div className="message-box__meta">
                <span className="meta__element meta__author">Olga Nelson</span>
                <span className="meta__element meta__separator"> · </span>
                <span className="meta__element meta__date">Dec 17</span>
            </div>
            <h3 className="message-box__title">
                New sprint, tasks and intro information
            </h3>
            <h3 className="message-box__short-content">
                Hi Eric, congratulations on completing the previous assingment.
                This time you will have to focus on ...
            </h3>
        </article>
    );
}
