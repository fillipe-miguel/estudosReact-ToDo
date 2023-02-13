import React, { Fragment } from "react";
import { useSelector } from "react-redux";

// Components
import TodoForm from "./components/TodoForm";
import List from "./components/List";
import ModalEdit from "./components/ModalEdit";

function Todo() {
    const state = useSelector((state) => {
        return state.modalReducer;
    });

    const items = useSelector((state) => {
        return state.listReducer;
    });

    const itemsDone = items.filter((item) => item.done);
    const itemsUndone = items.filter((item) => !item.done);

    return (
        <div className="container">
            {state.show ? <ModalEdit></ModalEdit> : <Fragment></Fragment>}

            <h1 className="todo-title">Todo List</h1>

            <TodoForm></TodoForm>

            {itemsUndone.length != 0 ? (
                <List title="A fazer">{itemsUndone}</List>
            ) : (
                <Fragment></Fragment>
            )}

            {itemsDone.length != 0 ? (
                <List title="Feitos">{itemsDone}</List>
            ) : (
                <Fragment></Fragment>
            )}
        </div>
    );
}

export default Todo;
