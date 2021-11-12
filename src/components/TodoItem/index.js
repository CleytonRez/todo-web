import React from 'react';
import './TodoItem.css';
import { MdDoneOutline } from 'react-icons/md';
import { MdDeleteOutline } from 'react-icons/md';
import { MdModeEditOutline } from 'react-icons/md';

// Componente que mostra as novas Tarefas na tela do Usuario.
const TodoItem = (props) => {
    console.log(props)

    // Retorna HTML com o Texto digitado pelo usuario (Tarefa) com os 3 botoes na frente.
    return (<div className="divNovaTarefa">
        <p className="textTodoItem">{props.todo.text}</p>
        <p className="textTodoItem">{props.todo.isChecked ? "Feito" : "A Fazer"}</p>
        <div className="buttons">
            <button className="editText" onClick={() => { props.onEdit(props.todo.id) }}><MdModeEditOutline /></button>
            <button className="deleteText" onClick={() => { props.onDelete(props.todo.id) }}><MdDeleteOutline /></button>
            <button className="confirmText" onClick={() => { props.onConfirm(props.todo.id) }}><MdDoneOutline /></button>
        </div>
    </div>)
}

// Exporta o Componente TodoItem
export default TodoItem