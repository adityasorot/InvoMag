export const tableDataAdd = (tableData) => ({
    type: "ADD_DATA",
    payload: tableData
});

export const tableDataDel = () => ({
    type: "DEL_DATA"
});

export const PRE_F = () => ({
    type: "PRE_F"
});

export const tableDataModify = (data) => ({
    type: "MODIFY_DATA",
    payload: data
});

export const refreshTable = () => ({
    type: "REFRESH"
});
export const selectAdd = (selected) => ({
    type: "ADD",
    payload: selected
});

export const searchOn = () => ({
    type: "usingSearch"
});

export const searchOff = () => ({
    type: "notUsingSearch"
});

export const searchDataAdd = (searchData) => ({
    type: "SEARCH_DATA",
    payload: searchData
});

export const searchValueAdd = (value) => ({
    type: "VALUE",
    payload: value
});
