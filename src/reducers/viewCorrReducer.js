const initialState = {
    viewCorrData: [],
    viewCorrAmt: "",
    viewCorrName: "",
    templates: {},
    selectedTemplate: ""
};

export const viewCorrReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_VIEW_DATA":
            return {
                ...state,
                viewCorrData: [...state.viewCorrData, ...action.payload]
            };
        case "DEL_VIEW_DATA":
            return {
                ...state,
                viewCorrData: []
            };
        case "VIEW_CORR_AMOUNT":
            return {
                ...state,
                viewCorrAmt: action.payload
            };
        case "VIEW_CORR_NAME":
            return {
                ...state,
                viewCorrName: action.payload
            };
        case "VIEW_CORR_TEMPLATES":
            return {
                ...state,
                templates: action.payload
            };
        case "VIEW_CORR_SELECTED":
            return {
                ...state,
                selectedTemplate: action.payload
            };

        default:
            return state;
    }
};
