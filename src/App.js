// Importa o React e o Arquivo App.css
import './App.css';
import React, { useEffect } from 'react';

// Componente (Comeca com letra Maiuscula e Retornam HTML) que adiciona uma nova Tarefa na Lista.
const TodoForm = (props) => {

  // Criacao que um Estado (Objeto que é vigiado) contendo o Texto que ira para o Estado TODO.
  const [text, setText] = React.useState("") // "" Valor inicial do Estado (String Vazia)
  console.log(text)

  // Funcao que captura o Clique no botao OK.
  const handleClick = () => {

    // Seta o Valor do estado Text.
    props.handleSetTodo(text)
    console.log("Clicou!")
  }

  // Funcao que Captura oque e escrito no Input.
  const handleEvent = (event) => {

    // Seta o Texto do Input no Estado "Text".
    setText(event.target.value)
    console.log(event.target.value)
  }

  // Retorna um HTML com as informacoes para o Usuario.
  return (<div>
    <label for="fname">Nova Tarefa:</label>
    <input type="text" id="nTarefa" name="nTarefa" onChange={handleEvent} value={text} />
    <button type="button" onClick={handleClick}>OK</button>
  </div>)
}

// Componente (Comeca com letra Maiuscula e Retornam HTML) que adiciona a Lista de Tarefas para o Usuario.
const TodoList = (props) => {

  // Returna a Lista ao Usuario.
  return (
    <div>
      {
        // Mapeia as Tarefas retornando para o Usuario.
        props.items.map((todo) => {

          // Retorna as Tarefas ao usuario como (li)
          return <li>{todo}</li>
        })
      }
    </div>
  )
}

// Componente (Comeca com letra Maiuscula e Retornam HTML) Principal.
function App() {

  // Criacao de Estado com a Lista de Tarefas.
  const [todos, setTodos] = React.useState(["Acordar", "Tomar Café", "Escovar Dente", "Arrumar Cama"])

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
