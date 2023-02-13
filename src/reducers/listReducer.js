export default (state = [], action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.payload];

        case "DELETE_ITEM":
            return state.filter((i) => i.id != action.payload);

        case "CHANGE_DONE":
            return state.map((it) => {
                if (it.id == action.payload) it.done = !it.done;
                return it;
            });

        case "EDIT_ITEM":
            return state.map((it) => {
                if (it.id == action.payload.id) it.text = action.payload.text;
                return it;
            });

        default:
            return state;
    }
};
