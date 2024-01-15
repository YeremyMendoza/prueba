import React, { StrictMode, useReducer } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/header/header";
import { FormTask } from "./components/formTask/formtask";
import { TaskList } from "./components/taskList/tasklist";
import { TaskProvider } from "./context/contexts";
import "./index.css";

function App (){
    return (
        <>
        <Header />
        <h1>Todo List</h1>
        <div className="taskApp">
            <TaskProvider >
                <FormTask />
                <TaskList />
            </TaskProvider>
        </div>
        </>
    );
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);

