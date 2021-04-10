export const tableDataReducer = (
    state = { data: [], refresh: false, pre: false },
    action
) => {
    switch (action.type) {
        case "ADD_DATA":
            console.log(action.payload);
            return {
                ...state,
                data: [...state.data, ...action.payload]
            };
        case "REFRESH":
            if (state.pre) return state;
            else
                return {
                    ...state,
                    refresh: !state.refresh
                };
        case "DEL_DATA":
            return {
                ...state,
                data: []
            };
        case "MODIFY_DATA": {
            let list = action.payload;
            let flag = 0;
            let listDoc = [];
            for (let index in list) {
                listDoc.push(list[index]["doc_id"]);
            }
            for (let index in state.data) {
                let ans = listDoc.indexOf(state.data[index]["doc_id"]);
                if (ans !== -1) {
                    state.data[index]["predict_date"] =
                        list[ans]["predictions"];
                    flag = 1;
                }
            }
            if (flag) {
                state.pre = true;
            }
            return {
                ...state
            };
        }
        case "PRE_F":
            return {
                ...state,
                pre: false
            };
        default:
            return state;
    }
};

export const selectedRows = (state = { selected: [] }, action) => {
    switch (action.type) {
        case "ADD":
            return {
                selected: action.payload
            };
        default:
            return state;
    }
};

export const search = (
    state = { on: false, searchData: [], value: "" },
    action
) => {
    switch (action.type) {
        case "usingSearch":
            return {
                ...state,
                on: true
            };
        case "notUsingSearch":
            return {
                ...state,
                on: false
            };
        case "MODIFY_DATA": {
            let list = action.payload;
            let flag = 0;
            let listDoc = [];
            for (let index in list) {
                listDoc.push(list[index]["doc_id"]);
            }
            for (let index in state.searchData) {
                let ans = listDoc.indexOf(state.searchData[index]["doc_id"]);
                if (ans !== -1) {
                    state.searchData[index]["predict_date"] =
                        list[ans]["predictions"];
                    flag = 1;
                }
            }
            if (flag) {
                state.pre = true;
            }
            return {
                ...state
            };
        }
        case "SEARCH_DATA":
            return {
                ...state,
                searchData: action.payload
            };
        case "VALUE":
            return {
                ...state,
                value: action.payload
            };
        default:
            return state;
    }
};
