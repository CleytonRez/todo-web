import React, { useEffect, useRef } from 'react';
import { postTodo } from '../../api/api';
import './TodoForm.css';

// Componente (Comeca com letra Maiuscula e Retornam HTML) que adiciona uma nova Tarefa na Lista.
const TodoForm = (props) => {

    // Criacao que um Estado (Objeto que é vigiado) contendo o Texto que ira para o Estado TODO.
    const [text, setText] = React.useState("") // "" Valor inicial do Estado (String Vazia)

    // Funcao useEffect
    useEffect(() => {

        // Se for todo de props
        if (props.todo) {

            // Seta a tarefa no setText
            setText(props.todo.text)
        }
    }, [props.todo])
    console.log(text)

    // Funcao que captura o Clique no botao OK.
    const handleClick = () => {

        // Variavel body contendo as informacoes do corpo.
        const body = props.todo || {}

        // Seta o Valor do estado Text.
        props.handleSetTodo(
            {
                ...body,
                text,
                isChecked: false,

            }
        )
        console.log("Clicou!")
        setText("")
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