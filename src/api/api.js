// Importa Axios que conecta a API com o Front End.
import axios from "axios";

// Funcao de mostrar Tarefas.
export const getTodos = async () => {
    try {
        const response = await axios.get("http://localhost:3000/todo")
        console.log(response)
        return response.data.response
    } catch (e) {
        console.log(e.message)
    }
}

// Funcao de Criar Nova Tarefa.
export const postTodo = async (body, loadTodos) => {
    try {
        await axios.post("http://localhost:3000/todo", body)

        if (loadTodos) loadTodos();

    } catch (e) {
        console.log(e.message)
    }
}

// Funcao de Deletar Tarefa.
export const deleteTodo = async (id, loadTodos) => {
    try {
        await axios.delete("http://localhost:3000/todo/" + id)

        if (loadTodos) loadTodos();

    } catch (e) {
        console.log(e.message)
    }
}

// Funcao de Atualizar Tarefa.
export const putTodo = async (body, loadTodos) => {
    try {
        await axios.put("http://localhost:3000/todo/" + body.id, body)

        if (loadTodos) loadTodos();

    } catch (e) {
        console.log(e.message)
    }
}