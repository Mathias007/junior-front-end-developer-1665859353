import React from "react";

export default function MessageBox({ contextData, onClick }) {
    const { title, content, author, created_at, read } = contextData;

    const date = new Date(created_at).toLocaleDateString();

    return (
        <article
            className="messages-list__message-box message-box"
            onClick={onClick}
        >
            <div className="message-box__meta">
                {!read ? <span className="meta__element meta__element--new">NEW</span> : null}
                <span className="meta__element">{author}</span>
                <span className="meta__element meta__element--separator"> · </span>
                <span className="meta__element">{date}</span>
            </div>
            <h3 className={`message-box__title ${!read ? "message-box__title--new" : ""}`}>{title}</h3>
            <h3 className="message-box__short-content">
                {content.slice(0, 100)} ...
            </h3>
        </article>
    );
}
