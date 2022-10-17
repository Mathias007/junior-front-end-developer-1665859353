import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";

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
        const task = tasksData.find((element) => element.id === id);

        setSelectedTask(task);
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
