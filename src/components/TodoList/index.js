// Importa React e TodoItem.
import React from 'react';
import TodoItem from '../TodoItem';

// Componente (Comeca com letra Maiuscula e Retornam HTML) que adiciona a Lista de Tarefas para o Usuario.
const TodoList = (props) => {

    // Funcao de retorno no clique no botao de Editar na Tarefa.
    const onEdit = (id) => {
        console.log("Clicou Edit!")
        console.log(id)
    }

    // Funcao de retorno no clique no botao de Delete na Tarefa.
    const onDelete = (id) => {
        console.log("Clicou Delete!")
        console.log(id)
    }

    // Funcao de retorno no clique no botao de Confirmar na Tarefa.
    const onConfirm = (id) => {
        console.log("Clicou Confirm!")
        console.log(id)
    }
    return (
        <div>
            {
                // Mapeia as Tarefas retornando para o Usuario.
                props.items.map((todo) => {

                    // Retorna as Tarefas ao usuario como (li)
                    return <TodoItem todo={todo} onEdit={onEdit} onDelete={onDelete} onConfirm={onConfirm} />
                })
            }
        </div>
    )
}

// Exporta Componente TodoList
export default TodoList