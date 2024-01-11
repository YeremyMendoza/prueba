import { Task } from "./components/task";
import "./tasklist.css";

export function TaskList(props){
    let tareas = props.busqueda.length === 0? props.tasks:props.busqueda;
    return (
        <div className="taskList">
            <div className="searchTask w-100">
                <input type="text" onChange={props.buscarTarea} placeholder="Busqueda"/>
            </div>
            {tareas.map((task, index) => <Task 
            key = {index} 
            task = {task} 
            verTarea = {props.verTarea}
            puedeGuardar = {props.puedeGuardar}
            eliminarTarea = {props.eliminarTarea}
            />)}
        </div>
    );
}