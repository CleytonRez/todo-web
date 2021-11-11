import React from 'react';
import './TodoItem.css';

// Componente que mostra as novas Tarefas na tela do Usuario.
const TodoItem = (props) => {
    console.log(props)

    // Retorna HTML com o Texto digitado pelo usuario (Tarefa) com os 3 botoes na frente.
    return (<div className="divNovaTarefa">
        <p className="textTodoItem">{props.todo.description}</p>
        <div className="buttons">
            <button className="editText" onClick={() => { props.onEdit(props.todo.id) }}>E</button>
            <button className="deleteText" onClick={() => { props.onDelete(props.todo.id) }}>D</button>
            <button className="confirmText" onClick={() => { props.onConfirm(props.todo.id) }}>C</button>
        </div>
    </div>)
}

// Exporta o Componente TodoItem
export default TodoItem