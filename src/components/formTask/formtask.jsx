import { useState } from "react";
import "./formtask.css";

export function FormTask({guardarTarea, editarTarea, eliminarTarea}){
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");


    return (
        <div className="formTask">
            <h3>Task</h3>
            <div className="titulo">
                <input type="text" onChange={(e) => setTitulo(e.target.value)} value={titulo}/>
            </div>
            <div className="descripcion">
                <textarea cols="30" onChange={(e) => setDescripcion(e.target.value)} rows="10" value={descripcion}></textarea>
            </div>
            <div className="btn-group">
                <button onClick={() => {
                    guardarTarea({titulo, descripcion});
                    setTitulo("");
                    setDescripcion("");
                }} className={"btn btn-verde"} >Guardar</button>
            </div>
            <div className="btn-group">
                <button className="btn btn-advertencia" onClick={() => editarTarea()}>Editado</button>
                <button className="btn btn-peligro" onClick={eliminarTarea}>Eliminar</button>
            </div>
        </div>
    );
}