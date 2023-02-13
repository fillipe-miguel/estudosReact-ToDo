import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions/listActions";

function TodoForm() {
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    function handleChange(event) {
        setText(event.target.value);
    }

    function addItemEvent(event) {
        event.preventDefault();

        if (!text == "") {
            setText("");
            dispatch(addItem(text));
        }
    }

    return (
        <form className="todo-form">
            <input
                required
                placeholder="Coloque sua tarefa aqui:"
                className="input-task"
                onChange={handleChange}
                type="text"
                value={text}
            ></input>

            <button className="button" onClick={addItemEvent}>
                Adicionar Tarefa
            </button>
        </form>
    );
}

export default TodoForm;
