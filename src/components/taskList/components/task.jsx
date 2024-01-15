import { useState } from "react";

export function Task({task, editarTarea, eliminarTarea}){
    const [editable, setEditable] = useState(false);

    let editaroMostrar = editable? <input type="text" value = {task.titulo} onChange={(e) => {
        editarTarea({
            ...task,
            titulo: e.target.value
        });
    }}/>
    :<p>{task.id} {task.titulo}</p>;

    let botonGuardaroEditar = editable? <button className="btn btn-sm btn-advertencia" onClick={(e) => {
        setEditable(false);
    }}><i className="bi bi-floppy2"></i></button>:
    <button className="btn btn-sm btn-advertencia" onClick={() => setEditable(true)}><i className="bi bi-eye-fill"></i></button>;

    return (
        <div className="task w-100">
                <div className="titulo">
                    {editaroMostrar}
                </div>
                <div className="btn-group w-20">
                    {botonGuardaroEditar}
                    <button className="btn btn-sm btn-peligro" onClick={() => eliminarTarea(task.id)}><i className="bi bi-trash3-fill"></i></button>
                </div>
        </div>
    );
}