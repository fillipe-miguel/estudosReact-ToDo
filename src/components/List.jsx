import React from "react";
import { useSelector } from "react-redux";

import ListItem from "./ListItem";

function List(props) {
    return (
        <div>
            <h1 className="list-title">{props.title}</h1>
            <ul>
                {props.children.map((i) => {
                    return <ListItem key={i.id} item={i}></ListItem>;
                })}
            </ul>
        </div>
    );
}

export default List;
