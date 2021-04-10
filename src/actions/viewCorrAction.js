export const viewCorrTableAdd = (tableData) => ({
    type: "ADD_VIEW_DATA",
    payload: tableData
});

export const viewCorrTableDel = () => ({
    type: "DEL_VIEW_DATA"
});

export const viewCorrAmount = (data) => ({
    type: "VIEW_CORR_AMOUNT",
    payload: data
});

export const viewCorrName = (data) => ({
    type: "VIEW_CORR_NAME",
    payload: data
});

export const viewCorrTemplates = (data) => ({
    type: "VIEW_CORR_TEMPLATES",
    payload: data
});

export const viewCorrSelected = (data) => ({
    type: "VIEW_CORR_SELECTED",
    payload: data
});
