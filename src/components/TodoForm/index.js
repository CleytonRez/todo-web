import React, { useEffect } from 'react';
import './TodoForm.css';

// Componente (Comeca com letra Maiuscula e Retornam HTML) que adiciona uma nova Tarefa na Lista.
const TodoForm = (props) => {

    // Criacao que um Estado (Objeto que é vigiado) contendo o Texto que ira para o Estado TODO.
    const [text, setText] = React.useState("") // "" Valor inicial do Estado (String Vazia)
    console.log(text)

    // Funcao que captura o Clique no botao OK.
    const handleClick = () => {

        // Seta o Valor do estado Text.
        props.handleSetTodo(
            {
                description: text,
                id: Math.random()
            }
        )
        console.log("Clicou!")
    }

    // Funcao que Captura oque e escrito no Input.
    const handleEvent = (event) => {

        // Seta o Texto do Input no Estado "Text".
        setText(event.target.value)
        console.log(event.target.value)
    }

    // Retorna um HTML com o Titulo, Input e Botao de OK para o Usuario.
    return (
        <div className="container">
            <label for="nTarefa" className="nTarefa">Nova Tarefa:</label>
            <input type="text" id="nTarefa" name="nTarefa" className="input" onChange={handleEvent} value={text} />
            <button type="button" className="button" onClick={handleClick}>OK</button>
        </div>
    )
}

// Exporta Componente TodoForm
export default TodoForm