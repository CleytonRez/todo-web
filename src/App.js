// Importa o React e o Arquivo App.css e os Componentes.
import './App.css';
import React, { useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';



// Componente (Comeca com letra Maiuscula e Retornam HTML) Principal.
function App() {

  // Criacao de Estado com a Lista de Tarefas com OBJs e chaves (informacoes) dentro.
  const [todos, setTodos] = React.useState([
    {
      "id": 1,
      "description": "Acordar"
    },
    {
      "id": 2,
      "description": "Tomar Café"
    },
    {
      "id": 3,
      "description": "Escovar Dente"
    },
    {
      "id": 4,
      "description": "Arrumar Cama"
    }
  ])

  // Funcao que adiciona ao Estado a nova Tarefa.
  const handleSetTodo = (todo) => {

    // Adiciona a TODOS a Tarefa passada como Parametro.
    todos.push(todo)

    // Chama funcao "setTodos"
    setTodos([...todos])
  }

  // Retorna as Informacoes visiveis ao Usuario.
  return (
    <div className="App">
      <TodoForm handleSetTodo={handleSetTodo} />
      <TodoList items={todos} />

    </div>
  );
}

// Exporta como Default o Componente (funcao) APP.
export default App;
