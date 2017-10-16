function appendItemReducer(state, action) {
    switch (action.type) {
        case "APPEND_ITEM":
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]};

        default:
            return state;
    }
}
