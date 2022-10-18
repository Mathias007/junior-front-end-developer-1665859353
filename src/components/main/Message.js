import React from "react";

import avatar from "../../assets/default_avatar.png";

import { DOT } from "../../config/names";

import {
    getDaysAgo,
    showHourOfThePost,
    showShortDateOfThePost,
} from "./helpers/dateMethods";

export default function Message({ context }) {
    const { title, content, author, created_at } = context;

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
                        <span className="meta__element">{author}</span>
                        <span className="meta__element meta__element--separator">
                            {DOT}
                        </span>
                        <span className="meta__element">
                            {getDaysAgo(created_at)},{" "}
                            {showShortDateOfThePost(created_at)}
                        </span>
                        <span className="meta__element meta__element--separator">
                            {DOT}
                        </span>
                        <span className="meta__element">
                            {showHourOfThePost(created_at)}
                        </span>
                    </div>
                    <div className="message-content__text">{content}</div>
                </div>
            </div>
        </article>
    );
}
