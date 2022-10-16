import React from "react";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";

export default function App() {
    return (
        <div className="App">
            <Header />
            <div className="nerd-app-area">
                <Sidebar />
                <MainSection />
            </div>
            <Footer />
        </div>
    );
}
