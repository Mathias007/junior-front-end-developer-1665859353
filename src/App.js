import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/aside/Sidebar";
import MainSection from "./components/main/MainSection";

import { tasksList } from "./data/tasks";
import { STATUSES } from "./config/names";

const { CHECKED, ACTIVE, LOCKED } = STATUSES;

export default function App() {
    const [dataLoaded, setDataLoaded] = useState(false);
    const [tasksData, setTasksData] = useState([]);

    useEffect(() => {
        setTasksData(tasksList);

        setDataLoaded(true);
    }, [tasksData, dataLoaded]);

    const selectTask = (id) => {
        setTasksData(
            tasksData.map((element) => {
                if (element.status === ACTIVE) element.status = CHECKED;
                if (element.id === id && element.status !== LOCKED)
                    element.status = ACTIVE;
                return element;
            })
        );
    };

    return dataLoaded ? (
        <Router>
            <div className="App">
                <Header />
                <div className="nerd-app-area">
                    <Sidebar data={tasksData} onClick={selectTask} />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <MainSection task={tasksData[0].contexts} />
                            }
                        />
                        {tasksData.map((element) => {
                            if (element.status !== LOCKED)
                                return (
                                    <Route
                                        key={element.id}
                                        path={`/${element.id}`}
                                        element={
                                            <MainSection
                                                task={element.contexts}
                                            />
                                        }
                                    />
                                );
                            else return null;
                        })}
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    ) : null;
}
