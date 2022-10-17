import React from "react";

export default function MessageBox(props) {
    const { contextData, onClick } = props;
    const { date, author, read, title, message } = contextData;

    return (
        <article
            className="messages-list__message-box message-box"
            onClick={onClick}
        >
            <div className="message-box__meta">
                <span className="meta__element meta__author">{author}</span>
                <span className="meta__element meta__separator"> · </span>
                <span className="meta__element meta__date">{date}</span>
            </div>
            <h3 className="message-box__title">{title}</h3>
            <h3 className="message-box__short-content">
                {message.slice(0, 100)} ...
            </h3>
        </article>
    );
}
