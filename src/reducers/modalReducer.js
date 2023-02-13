export default (state = { show: false, item: {} }, action) => {
    switch (action.type) {
        case "SHOW_MODAL":
            return { show: true, item: action.payload };

        case "HIDE_MODAL":
            return { show: false, item: {} };

        default:
            return state;
    }
};
