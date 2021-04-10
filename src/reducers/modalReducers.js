const initialState = {
    addModal: false,
    editModal: false,
    deleteModal: false  ,
    viewCorr: false
};

export const modalReducers = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_M_O":
            return {
                ...state,
                addModal: true
            };
        case "DEL_M_O":
            return {
                ...state,
                deleteModal: true
            };
        case "EDIT_M_O":
            return {
                ...state,
                editModal: true
            };
        case "VIEW_M_O":
            return {
                ...state,
                viewCorr: true
            };
        case "ADD_M_C":
            return {
                ...state,
                addModal: false
            };
        case "DEL_M_C":
            return {
                ...state,
                deleteModal: false
            };
        case "EDIT_M_C":
            return {
                ...state,
                editModal: false
            };
        case "VIEW_M_C":
            return {
                ...state,
                viewCorr: false
            };
        default:
            return state;
    }
};
