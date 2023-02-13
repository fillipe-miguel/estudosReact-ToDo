import React from "react";
import ReactDOM from "react-dom/client";

// Redux stuffs
import { legacy_createStore as createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// Reducers
import listReducer from "./reducers/listReducer";
import modalReducer from "./reducers/modalReducer";

// Components
import Todo from "./Todo";

// Styles
import "./index.css";

const SAVED_ITEMS = "savedItems";

function saveState(state) {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state.listReducer));
}

function loadState() {
    const actualState = localStorage.getItem(SAVED_ITEMS);
    if (actualState) {
        console.log();
        return JSON.parse(actualState);
    } else {
        return [];
    }
}

const allReducers = combineReducers({ listReducer, modalReducer });

const store = createStore(allReducers, { listReducer: loadState() });

store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <Todo />
    </Provider>
);
