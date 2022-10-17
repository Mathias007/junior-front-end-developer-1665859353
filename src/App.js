import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/aside/Sidebar";
import MainSection from "./components/main/MainSection";

import { tasksList } from "./data/tasks";

export default function App() {
    const [dataLoaded, setDataLoaded] = useState(false);
    const [tasksData, setTasksData] = useState([]);
    const [selectedTask, setSelectedTask] = useState({});

    useEffect(() => {
        setTasksData(tasksList);

        setDataLoaded(true);

        if (dataLoaded) {
            const task = tasksData.find((element) => element.id === 0);
            setSelectedTask(task);
        }
    }, [tasksData, dataLoaded]);

    const selectTask = (id) => {
        tasksData.forEach((element) => {
            if (element.status === "active") element.status = "checked";
            if (element.id === id && element.status !== "locked")
                element.status = "active";
        });

        const task = tasksData.find((element) => element.id === id);

        if (task.status !== "locked") setSelectedTask(task);
    };

    return dataLoaded ? (
        <Router>
            <div className="App">
                <Header />
                <div className="nerd-app-area">
                    <Sidebar data={tasksData} onClick={selectTask} />
                    <MainSection task={selectedTask.contexts} />
                </div>
                <Footer />
            </div>
        </Router>
    ) : null;
}
