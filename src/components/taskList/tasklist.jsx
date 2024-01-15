import { Task } from "./components/task";
import "./tasklist.css";

export function TaskList(props){
    return (
        <div className="taskList">
            <div className="searchTask w-100">
                <input type="text" onChange={props.buscarTarea} placeholder="Busqueda"/>
            </div>
            {props.tasks.map((task, index) => <Task 
            key = {index} 
            task = {task}
            editarTarea = {props.editarTarea}
            eliminarTarea = {props.eliminarTarea}
            />)}
        </div>
    );
}