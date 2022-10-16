import logo from "./logo.svg";
import arrow from "./arrow.svg";
import avatar from "./default_avatar.png";

import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="nerd-header">
                <img src={logo} className="nerd-header__logo" alt="logo" />
                <img
                    src={avatar}
                    className="nerd-header__avatar"
                    alt="user-avatar"
                />
            </header>
            <div className="nerd-app-area">
                <aside className="nerd-app-area__section navigation">
                    <h2 className="nerd-app-area__header navigation__header">
                        Your Tasks
                    </h2>
                    <nav className="navigation__area">
                        <ul className="navigation__list">
                            <li className="navigation__element element">
                                <p className="element__text">
                                    <span className="element__arrow">
                                        <img
                                            src={arrow}
                                            className="arrow"
                                            alt="arrow"
                                        />
                                    </span>{" "}
                                    Application Setup
                                </p>
                            </li>
                            <li className="navigation__element element">
                                <p className="element__text">
                                    <span className="element__arrow">
                                        <img
                                            src={arrow}
                                            className="arrow"
                                            alt="arrow"
                                        />
                                    </span>{" "}
                                    Application Setup
                                </p>
                            </li>
                            <li className="navigation__element element">
                                <p className="element__text">
                                    <span className="element__arrow">
                                        <img
                                            src={arrow}
                                            className="arrow"
                                            alt="arrow"
                                        />
                                    </span>{" "}
                                    Application Setup
                                </p>
                            </li>
                            <li className="navigation__element element">
                                <p className="element__text">
                                    <span className="element__arrow">
                                        <img
                                            src={arrow}
                                            className="arrow"
                                            alt="arrow"
                                        />
                                    </span>{" "}
                                    Application Setup
                                </p>
                            </li>
                            <li className="navigation__element element">
                                <p className="element__text">
                                    <span className="element__arrow">
                                        <img
                                            src={arrow}
                                            className="arrow"
                                            alt="arrow"
                                        />
                                    </span>{" "}
                                    Application Setup
                                </p>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <main className="nerd-app-area__section main">
                    <h2 className="nerd-app-area__header main__header">
                        Business Context
                    </h2>
                    <div className="main__content-wrapper">
                        <section className="main__messages-list messages-list">
                            <article className="messages-list__message-box message-box">
                                <div className="message-box__meta">
                                    <span className="meta__element meta__author">
                                        Olga Nelson
                                    </span>
                                    <span className="meta__element meta__separator">
                                        {" "}
                                        ·{" "}
                                    </span>
                                    <span className="meta__element meta__date">
                                        Dec 17
                                    </span>
                                </div>
                                <h3 className="message-box__title">
                                    New sprint, tasks and intro information
                                </h3>
                                <h3 className="message-box__short-content">
                                    Hi Eric, congratulations on completing the
                                    previous assingment. This time you will have
                                    to focus on ...
                                </h3>
                            </article>
                        </section>
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
                                        <span className="meta__element meta__hour">
                                            11:20
                                        </span>
                                    </div>
                                    <div className="message-content__text">
                                        <p>Hello!</p>

                                        <p>
                                            My name is Kirsten, and I'm super
                                            happy to announce that your
                                            application to join Coders Family
                                            has been accepted! 🎉 🙌 
                                        </p>

                                        <p>
                                            You really impressed us during the
                                            interview process, and we'd like to
                                            offer you a project with COMPANY.
                                            We've been working with COMPANY for
                                            quite some time, and it's important
                                            for us to keep them satisfied with
                                            our services — hence why we believe
                                            you'll be a great fit for this job.
                                        </p>

                                        <p>
                                            Here's the project overview: You'll
                                            be responsible for building a
                                            database and page for recording and
                                            displaying book ratings. We'd like
                                            to work in two week-long sprints,
                                            we've already given you a head start
                                            and prepared your tasks to deliver
                                            in your first sprint.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </main>
            </div>
            <footer className="nerd-footer">
                <section className="nerd-footer__section">
                    <span className="nerd-footer__element">
                        Terms of service
                    </span>
                    <span className="nerd-footer__element separator"> · </span>
                    <span className="nerd-footer__element">
                        Privacy policy
                    </span>
                    <span className="nerd-footer__elementt separator"> · </span>
                    <span className="nerd-footer__element">Copyright</span>
                </section>
                <section className="nerd-footer__section">
                    <span className="nerd-footer__element">
                        nerd.family Version 1.2
                    </span>
                    <span className="nerd-footer__element separator"> · </span>
                    <span className="nerd-footer__element">
                        Last update 10/09/2022
                    </span>
                </section>
            </footer>
        </div>
    );
}

export default App;
