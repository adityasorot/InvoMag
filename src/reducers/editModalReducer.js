const initialState = {
    notes: "",
    invoiceAmt: ""
};

export const editModal = (state = initialState, action) => {
    switch (action.type) {
        case "INV_AMT_EDIT":
            return {
                ...state,
                invoiceAmt: action.payload
            };
        case "NOTES_EDIT":
            return {
                ...state,
                notes: action.payload
            };
        case "RESET_EDIT":
            return initialState;
        default:
            return state;
    }
};
