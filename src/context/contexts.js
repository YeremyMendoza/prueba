import { useContext, useReducer } from "react";
import { createContext } from "react";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export function TaskProvider({children}){
    const [tasks, dispatcher] = useReducer(controlTasks, initialTasks);
    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={ dispatcher }>
                {children}
            </TasksDispatchContext.Provider> 
        </TasksContext.Provider>
    );
}

export function useTasks(){
    return useContext(TasksContext);
}

export function useTasksDispatch(){
    return useContext(TasksDispatchContext);
}

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
                if(task.id === action.task.id){
                    return action.task
                }
                return task;
            });
        case "deleted":
            return tasks.filter(task => task.id !== action.id);
        default:
            throw Error("Action not especified");
    }
}

const initialTasks = []