import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

// Actions dos reduxers
import { deleteItem, changeDone, editItem } from "../actions/listActions";
import { showModal } from "../actions/modalActions";

// Images
import deletIcon from "../icons/excluir.png";
import doIcon from "../icons/doIcon.png";
import doneIcon from "../icons/doneIcon.png";
import editIcon from "../icons/editar.png";

// Componente para mudar a imagem do botão done quando clicado!
function DoneImg(props) {
    if (props.done) {
        return <img src={doneIcon} alt="done"></img>;
    } else {
        return <img src={doIcon} alt="undone"></img>;
    }
}

function ListItems(props) {
    const dispatch = useDispatch();

    return (
        <li className={props.item.done ? "item done" : "item"}>
            <p className="item-text">{props.item.text}</p>

            <div className="container-button">
                {/* Botão Done / Undone */}
                <button
                    className="item-button "
                    onClick={() => dispatch(changeDone(props.item.id))}
                >
                    <DoneImg done={props.item.done}></DoneImg>
                </button>

                {/* Botão Edit */}
                <button
                    className="item-button "
                    onClick={() => dispatch(showModal(props.item))}
                >
                    <img src={editIcon} alt="Editar"></img>
                </button>

                {/* Botão Delete */}
                <button
                    className="item-button "
                    onClick={() => dispatch(deleteItem(props.item.id))}
                >
                    <img src={deletIcon} alt="Deletar"></img>
                </button>
            </div>
        </li>
    );
}

export default ListItems;
