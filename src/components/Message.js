import React from "react";

import avatar from "../assets/default_avatar.png";

export default function Message(props) {
    const { context } = props;
    const { author, date, hour, message, read, title } = context;

    return (
        <article className="main__message-content message-content">
            <h3 className="message-content__title">{title}</h3>
            <div className="message-content__wrapper">
                <img
                    src={avatar}
                    className="message-content__avatar"
                    alt="author-avatar"
                />
                <div className="content__data">
                    <div className="message-content__meta">
                        <span className="meta__element meta__author">
                            {author}
                        </span>
                        <span className="meta__element meta__separator">
                            {" "}
                            ·{" "}
                        </span>
                        <span className="meta__element meta__date">{date}</span>
                        <span className="meta__element meta__separator">
                            {" "}
                            ·{" "}
                        </span>
                        <span className="meta__element meta__hour">{hour}</span>
                    </div>
                    <div className="message-content__text">{message}</div>
                </div>
            </div>
        </article>
    );
}
