import { useState, useRef, useEffect } from "react";
import { useTasksDispatch } from "../../context/contexts";
import "./formtask.css";

export function FormTask(props){
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [count, setCount] = useState(0);

    const dispatch = useTasksDispatch();
    const inputRef = useRef(null);

    useEffect(() => {
        console.log("componente montado");

        document.title = "Count: " + count;

        return () => {
            console.log("componente desmontado o rerenderizado");
            document.title = "React component";
        }
    },[count]);

    return (
        <div className="formTask">
            <h3>Task</h3>
            <div className="titulo">
                <input type="text" ref={inputRef} onChange={(e) => setTitulo(e.target.value)} value={titulo}/>
            </div>
            <div className="descripcion">
                <textarea cols="30" onChange={(e) => setDescripcion(e.target.value)} rows="10" value={descripcion}></textarea>
            </div>
            <div className="btn-group">
                <button onClick={() => {
                    setTitulo("");
                    setDescripcion("");
                    setCount(prev => prev + 1);
                    inputRef.current.focus();
                    dispatch({
                        type: "added",
                        id: nextId++,
                        titulo: titulo,
                        descripcion: descripcion
                    });
                }} className={"btn btn-verde"} >Guardar</button>
            </div>
            {/* <div className="btn-group">
                <button className="btn btn-advertencia" onClick={() => editarTarea()}>Editado</button>
                <button className="btn btn-peligro" onClick={eliminarTarea}>Eliminar</button>
            </div> */}
        </div>
    );
}
let nextId = 0;