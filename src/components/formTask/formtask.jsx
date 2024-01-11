import "./formtask.css";

export function FormTask(props){
    return (
        <div className="formTask">
            <h3>Task</h3>
            <div className="titulo">
                <input type="text" onChange={props.changeTitulo} value={props.titulo}/>
            </div>
            <div className="descripcion">
                <textarea cols="30" onChange={props.changeDescripcion} rows="10" value={props.descripcion}></textarea>
            </div>
            <div className="btn-group">
                <button onClick={props.guardarTarea} className={"btn btn-verde"} disabled={props.puedeGuardar}>Guardar</button>
            </div>
            <div className="btn-group">
                <button className="btn btn-advertencia" onClick={props.editarTarea}>Editado</button>
                <button className="btn btn-peligro" onClick={props.eliminarTarea}>Eliminar</button>
            </div>
        </div>
    );
}