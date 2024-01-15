import { Task } from "./components/task";
import { useTasks } from "../../context/contexts";
import "./tasklist.css";

export function TaskList(props){
    const tasks = useTasks();
    
    return (
        <div className="taskList">
            <div className="searchTask w-100">
                <input type="text" onChange={props.buscarTarea} placeholder="Busqueda"/>
            </div>
            {tasks.map((task, index) => <Task 
            key = {index} 
            task = {task}
            />)}
        </div>
    );
}