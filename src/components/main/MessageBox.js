import React from "react";

import { NEW, DOT, MORE } from "../../config/names";

import { showLongDateOfThePost } from "./helpers/dateMethods";

export default function MessageBox({ contextData, onClick }) {
    const { title, content, author, created_at, read } = contextData;

    return (
        <article
            className="messages-list__message-box message-box"
            onClick={onClick}
        >
            <div className="message-box__meta">
                {!read ? (
                    <span className="meta__element meta__element--new">
                        {NEW}
                    </span>
                ) : null}
                <span className="meta__element">{author}</span>
                <span className="meta__element meta__element--separator">
                    {DOT}
                </span>
                <span className="meta__element">
                    {showLongDateOfThePost(created_at)}
                </span>
            </div>
            <h3
                className={`message-box__title ${
                    !read ? "message-box__title--new" : ""
                }`}
            >
                {title}
            </h3>
            <h3 className="message-box__short-content">
                {content.slice(0, 100)} {MORE}
            </h3>
        </article>
    );
}
