import React, { StrictMode, useReducer } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/header/header";
import { FormTask } from "./components/formTask/formtask";
import { TaskList } from "./components/taskList/tasklist";
import "./index.css";

const initialTasks = [];
let nextId = 0;

function App (){
    const [tasks, dispatcher] = useReducer(controlTasks, initialTasks);

    function handleAddTask(task) {
        dispatcher({
            type: "added",
            id: nextId++,
            titulo: task.titulo,
            descripcion: task.descripcion
        });
    }
    function handleEditTask (task) {
        dispatcher({
            type: "changed",
            task: task
        });
    }
    function handleDeleteTask (idTask) {
        dispatcher({
            type: "deleted",
            id: idTask
        });
    }
    return (
        <>
        <Header />
        <h1>Todo List</h1>
        <div className="taskApp">
            <FormTask 
            guardarTarea = {handleAddTask}
            editarTarea = {handleEditTask}
            eliminarTarea = {handleDeleteTask}
            />
            <TaskList 
            tasks = {tasks}
            editarTarea = {handleEditTask}
            eliminarTarea = {handleDeleteTask}
            />
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

function controlTasks(tasks, action){
    switch (action.type) {
        case "added":
            return [
                ...tasks,
                {
                    id: action.id,
                    titulo: action.titulo,
                    descripcion: action.descripcion
                }
            ];
        case "changed":
            return tasks.map(task => {
                if(task.id === action.id){
                    return {
                        id: task.id,
                        titulo: action.titulo,
                        descripcion: action.descripcion
                    }
                }
                return task;
            });
        case "deleted":
            return tasks.filter(task => task.id !== action.id);
        default:
            throw Error("Action not especified");
    }
}