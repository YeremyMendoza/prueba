import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/header/header";
import { FormTask } from "./components/formTask/formtask";
import { TaskList } from "./components/taskList/tasklist";
import "./index.css";

const tasks = [];

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: tasks.length,
            titulo: "",
            descripcion: "",
            puedeGuardar: true,
            historial: [],
            busqueda: [],
        };
    }
    changeTitulo = (event) =>{
        this.setState({ titulo: event.target.value });
    }
    changeDescripcion = (event) => {
        this.setState({ descripcion: event.target.value });
    }
    limpiarFormulario = () => {
        let id = tasks.map(task => task.id);
        this.setState({
            id: Math.max.apply(null,id) + 1,
            titulo: "",
            descripcion: "",
            puedeGuardar: true
        });
    }
    guardarTarea = () => {
        let {id, titulo, descripcion } = this.state;
        id = isFinite(id)? id:0;
        tasks.push({ id , titulo, descripcion });
        this.limpiarFormulario();
    }
    verTarea = (idTask) => {
        let {id, titulo, descripcion} = tasks.find((task) => task.id === idTask);
        this.setState({ id, titulo, descripcion, puedeGuardar: false });
    }
    editarTarea = () => {
        let {id, titulo, descripcion, historial} = this.state;
        if (titulo !== "") {
            let index = tasks.findIndex(task => task.id === this.state.id);
            let task = tasks.splice(index, 1, {id, titulo, descripcion});
            historial.push(...task);
            this.setState({ historial: historial, puedeGuardar: true });
            this.limpiarFormulario();   
        }else{
            alert("campos vacios");
        }
    }
    eliminarTarea = (idTask = null) => {
        let historial = this.state.historial;
        let index = tasks.findIndex(task => task.id === idTask || task.id === this.state.id);
        
        if (index !== null) {
            let task = tasks.splice(index, 1);
            historial.push(...task);
            this.setState({ historial: historial });
        }
        alert(index !== null? "se elimino":"algo salio mal");
        this.limpiarFormulario();
    }
    buscarTarea = (event) => {
        let busqueda;
        if(event.target.value !== ""){
            busqueda = tasks.filter(task => task.titulo.toLowerCase().includes(event.target.value.toLowerCase()));
            this.setState({
                busqueda: busqueda
            });
        }else{
            this.setState({
                busqueda: []
            });
        }
    }
    render(){
        return (
            <>
            <Header />
            <h1>Todo List</h1>
            <div className="taskApp">
                <FormTask 
                changeTitulo = {this.changeTitulo} 
                changeDescripcion = {this.changeDescripcion}
                guardarTarea = {this.guardarTarea}
                titulo = {this.state.titulo}
                descripcion = {this.state.descripcion}
                puedeGuardar = {this.state.puedeGuardar? "":"disabled"}
                editarTarea = {this.editarTarea}
                eliminarTarea = {this.eliminarTarea}
                />
                <TaskList 
                tasks = {tasks} 
                verTarea = {this.verTarea}
                eliminarTarea = {this.eliminarTarea}
                buscarTarea = {this.buscarTarea}
                busqueda = {this.state.busqueda}
                />
            </div>
            </>
        );
    }
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
