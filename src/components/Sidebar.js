import React from "react";

import TaskNavigation from "./TaskNavigation";

export default function Sidebar() {
    return (
        <aside className="nerd-app-area__section navigation">
            <h2 className="nerd-app-area__header navigation__header">
                Your Tasks
            </h2>
            <TaskNavigation />
        </aside>
    );
}
