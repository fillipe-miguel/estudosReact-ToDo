import React, { Fragment, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editItem } from "../actions/listActions";

import { hideModal } from "../actions/modalActions";

function ModalEdit() {
    const dispatch = useDispatch();

    const [textEdit, setTextEdit] = useState("");

    const state = useSelector((state) => {
        return state.modalReducer;
    });

    useEffect(() => {
        setTextEdit(state.item.text);
    }, []);

    function handlerTextEdit(e) {
        setTextEdit(e.target.value);
    }

    function sendEdit(e) {
        e.preventDefault();
        dispatch(editItem(state.item.id, textEdit));
        dispatch(hideModal());
    }

    return (
        <div className="modal">
            <div className="container">
                <h1 className="todo-title">Edite sua tarefa:</h1>
                <form className="edit-form">
                    <input
                        placeholder={state.item.text}
                        value={textEdit}
                        onChange={handlerTextEdit}
                        className="input-task"
                        type="text"
                    ></input>
                    <button className="button" onClick={sendEdit}>
                        Editar Tarefa
                    </button>
                    <button
                        className="button"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(hideModal());
                        }}
                    >
                        Cancelar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ModalEdit;
