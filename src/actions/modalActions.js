export function showModal(item) {
    return { type: "SHOW_MODAL", payload: item };
}
export function hideModal() {
    return { type: "HIDE_MODAL" };
}
