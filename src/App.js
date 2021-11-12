// Importa o React e o Arquivo App.css e os Componentes.
import './App.css';
import React, { useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import { deleteTodo, getTodos, postTodo, putTodo } from './api/api';



// Componente (Comeca com letra Maiuscula e Retornam HTML) Principal.
function App() {

  // Criacao de Estado com a Lista de Tarefas com OBJs e chaves (informacoes) dentro.
  const [todos, setTodos] = React.useState([])

  // Criacao do Estado de Lista de Tarefas para atualizar.
  const [todoUpdate, setTodoUpdate] = React.useState(null)

  // Variavel que recarrega os Todos.
  const loadTodos = async () => {

    // Variavel response retornando a lista de tarefas
    const response = await getTodos()

    // Chama funcao setTodos com variavel response como Parametro
    setTodos(response)
  }

  console.log(todos)


  // Funcao que chama o loadTodos que carrega a Lista de Tarefas. (useEffect precisa de dois parametros - No caso uma funcao e um Array vazio)
  React.useEffect(() => {
    loadTodos()
  }, [])

  // Funcao que adiciona ao Estado a nova Tarefa.
  const handleSetTodo = (todo) => {

    // Se for todoUpdate ele atualiza e cria Todos.
    if (todoUpdate) {
      putTodo(todo, loadTodos)
    } else {
      postTodo(todo, loadTodos)
    }

    // Chama funcao setTodoUpdate com valor nulo.
    setTodoUpdate(null)
  }


  // Funcao de retorno no clique no botao de Editar na Tarefa.
  const onEdit = (id) => {

    // Variavel que procura com todo como parametro e retorna se os IDs forem iguais.
    const todo = todos.find((todo) => {
      return (todo.id === id)
    })

    // Chama setTodoUpdate (Que atualiza a Tarefa) com todo como parametro.
    setTodoUpdate(todo)
    console.log("Clicou Edit!")
    console.log(id)
  }

  // Funcao de retorno no clique no botao de Delete na Tarefa.
  const onDelete = (id) => {

    // Funcao deleteTodo com id e loadTodos como parametro.
    deleteTodo(id, loadTodos)
    console.log("Clicou Delete!")
    console.log(id)
  }

  // Funcao de retorno no clique no botao de Confirmar na Tarefa.
  const onConfirm = (id) => {

    // Variavel que procura com todo como parametro e retorna se os IDs forem iguais.
    const todo = todos.find((todo) => {
      return (todo.id === id)
    })

    // Chama funcao que atualiza o Feito e A Fazer.
    putTodo({ ...todo, isChecked: !todo.isChecked }, loadTodos)
    console.log("Clicou Confirm!")
    console.log(id)
  }

  // Retorna as Informacoes visiveis ao Usuario.
  return (
    <div className="App">
      <TodoForm handleSetTodo={handleSetTodo} todo={todoUpdate} />
      <TodoList items={todos} onEdit={onEdit} onDelete={onDelete} onConfirm={onConfirm} />

    </div>
  );
}

// Exporta como Default o Componente (funcao) APP.
export default App;
