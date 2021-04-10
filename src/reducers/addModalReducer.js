const initialState = {
    custName: "",
    custNum: "",
    invoiceNum: "",
    invoiceAmt: "",
    notes: "",
    date: new Date(),
    invoiceAmtError: false,
    invoiceNumError: false,
    custNameError: false,
    custNumError: false,
    dateError: false,
    requiredFields: false,
    addError: false
};

export const addModal = (state = initialState, action) => {
    switch (action.type) {
        case "CUST_NAME":
            return {
                ...state,
                custName: action.payload
            };
        case "ADD_ERROR_T":
            return {
                ...state,
                addError: true
            };
        case "ADD_ERROR_F":
            return {
                ...state,
                addError: false
            };
        case "CUST_NUM":
            return {
                ...state,
                custNum: action.payload
            };
        case "INV_NUM":
            return {
                ...state,
                invoiceNum: action.payload
            };
        case "INV_AMT":
            return {
                ...state,
                invoiceAmt: action.payload
            };
        case "NOTES":
            return {
                ...state,
                notes: action.payload
            };
        case "DATE":
            return {
                ...state,
                date: action.payload
            };
        case "RESET_ADD":
            return initialState;

        case "CUST_NAME_ERRORADD_T":
            return {
                ...state,
                custNameError: true
            };
        case "CUST_NUM_ERRORADD_T":
            return {
                ...state,
                custNumError: true
            };
        case "INV_AMT_ERRORADD_T":
            return {
                ...state,
                invoiceAmtError: true
            };
        case "INV_NUM_ERRORADD_T":
            return {
                ...state,
                invoiceNumError: true
            };
        case "DATE_ERRORADD_T":
            return {
                ...state,
                dateError: true
            };
        case "CUST_NAME_ERRORADD_F":
            return {
                ...state,
                custNameError: false
            };
        case "CUST_NUM_ERRORADD_F":
            return {
                ...state,
                custNumError: false
            };
        case "INV_AMT_ERRORADD_F":
            return {
                ...state,
                invoiceAmtError: false
            };
        case "INV_NUM_ERRORADD_F":
            return {
                ...state,
                invoiceNumError: false
            };
        case "DATE_ERRORADD_F":
            return {
                ...state,
                dateError: false
            };
        case "REQUIRED_ADD_F":
            return {
                ...state,
                requiredFields: false
            };
        case "REQUIRED_ADD_T":
            return {
                ...state,
                requiredFields: true
            };
        default:
            return state;
    }
};
