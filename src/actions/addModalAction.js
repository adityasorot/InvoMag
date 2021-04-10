export const custNameChange = (data) => ({
    type: "CUST_NAME",
    payload: data
});

export const custNumChange = (data) => ({
    type: "CUST_NUM",
    payload: data
});

export const invoiceNumChange = (data) => ({
    type: "INV_NUM",
    payload: data
});

export const invoiceAmtChange = (data) => ({
    type: "INV_AMT",
    payload: data
});

export const notesChange = (data) => ({
    type: "NOTES",
    payload: data
});

export const dateChange = (data) => ({
    type: "DATE",
    payload: data
});

export const resetAdd = () => ({
    type: "RESET_ADD"
});

export const custNameErrorAddT = () => ({
    type: "CUST_NAME_ERRORADD_T"
});

export const custNumErrorAddT = () => ({
    type: "CUST_NUM_ERRORADD_T"
});

export const invoiceNumErrorAddT = () => ({
    type: "INV_NUM_ERRORADD_T"
});

export const invoiceAmtErrorAddT = () => ({
    type: "INV_AMT_ERRORADD_T"
});
export const dateErrorAddT = () => ({
    type: "DATE_ERRORADD_T"
});

export const custNameErrorAddF = () => ({
    type: "CUST_NAME_ERRORADD_F"
});

export const custNumErrorAddF = () => ({
    type: "CUST_NUM_ERRORADD_F"
});

export const invoiceNumErrorAddF = () => ({
    type: "INV_NUM_ERRORADD_F"
});

export const invoiceAmtErrorAddF = () => ({
    type: "INV_AMT_ERRORADD_F"
});

export const dateErrorAddF = () => ({
    type: "DATE_ERRORADD_F"
});

export const requiredAddF = () => ({
    type: "REQUIRED_ADD_F"
});

export const requiredAddT = () => ({
    type: "REQUIRED_ADD_T"
});

export const addErrorT = () => ({
    type: "ADD_ERROR_T"
});
export const addErrorF = () => ({
    type: "ADD_ERROR_F"
});
