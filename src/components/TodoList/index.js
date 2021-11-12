// Importa React e TodoItem.
import React from 'react';
import TodoItem from '../TodoItem';

// Componente (Comeca com letra Maiuscula e Retornam HTML) que adiciona a Lista de Tarefas para o Usuario.
const TodoList = (props) => {

    return (
        <div>
            {
                // Mapeia as Tarefas retornando para o Usuario.
                props.items.map((todo) => {

                    // Retorna as Tarefas ao usuario como (li)
                    return <TodoItem todo={todo} onEdit={props.onEdit} onDelete={props.onDelete} onConfirm={props.onConfirm} />
                })
            }
        </div>
    )
}

// Exporta Componente TodoList
export default TodoList