import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { addModal } from "../reducers/addModalReducer";
import { editModal } from "../reducers/editModalReducer";
import { modalReducers } from "../reducers/modalReducers";
import {
    tableDataReducer,
    selectedRows,
    search
} from "../reducers/tableDataReducer";
import { viewCorrReducer } from "../reducers/viewCorrReducer";

const combined = combineReducers({
    table: tableDataReducer,
    select: selectedRows,
    search: search,
    add: addModal,
    modal: modalReducers,
    edit: editModal,
    view: viewCorrReducer
});

export const myStore = createStore(combined, composeWithDevTools());
