import React from "react";

import avatar from "../assets/default_avatar.png";

export default function Message() {
    return (
        <article className="main__message-content message-content">
            <h3 className="message-content__title">
                Application has been accepted
            </h3>
            <div className="message-content__wrapper">
                <img
                    src={avatar}
                    className="message-content__avatar"
                    alt="author-avatar"
                />
                <div className="content__data">
                    <div className="message-content__meta">
                        <span className="meta__element meta__author">
                            Kirsten Aniston
                        </span>
                        <span className="meta__element meta__separator">
                            {" "}
                            ·{" "}
                        </span>
                        <span className="meta__element meta__date">
                            Today, 17th December
                        </span>
                        <span className="meta__element meta__separator">
                            {" "}
                            ·{" "}
                        </span>
                        <span className="meta__element meta__hour">11:20</span>
                    </div>
                    <div className="message-content__text">
                        <p>Hello!</p>

                        <p>
                            My name is Kirsten, and I'm super happy to announce
                            that your application to join Coders Family has been
                            accepted! 🎉 🙌
                        </p>

                        <p>
                            You really impressed us during the interview
                            process, and we'd like to offer you a project with
                            COMPANY. We've been working with COMPANY for quite
                            some time, and it's important for us to keep them
                            satisfied with our services — hence why we believe
                            you'll be a great fit for this job.
                        </p>

                        <p>
                            Here's the project overview: You'll be responsible
                            for building a database and page for recording and
                            displaying book ratings. We'd like to work in two
                            week-long sprints, we've already given you a head
                            start and prepared your tasks to deliver in your
                            first sprint.
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
}
