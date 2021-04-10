export const invoiceAmtEdit = (data) => ({
    type: "INV_AMT_EDIT",
    payload: data
});

export const notesEdit = (data) => ({
    type: "NOTES_EDIT",
    payload: data
});
export const resetEdit = () => ({
    type: "RESET_EDIT"
});
