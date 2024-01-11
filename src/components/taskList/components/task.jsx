export function Task(props){
    return (
        <div className="task w-100">
                <div className="titulo">
                    <p>* {props.task.titulo}</p>
                </div>
                <div className="btn-group w-20">
                    <button className="btn btn-sm btn-advertencia" onClick={() => props.verTarea(props.task.id)}><i className="bi bi-eye-fill"></i></button>
                    <button className="btn btn-sm btn-peligro" onClick={() => props.eliminarTarea(props.task.id)}><i className="bi bi-trash3-fill"></i></button>
                </div>
        </div>
    );
}