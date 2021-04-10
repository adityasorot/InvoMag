import { InputAdornment, makeStyles, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    searchDataAdd,
    searchOff,
    searchOn,
    searchValueAdd
} from "../../actions/tableDataAdd";

const useStyles = makeStyles((theme) => ({
    enabledSearch: {
        color: theme.palette.info.contrastText,
        height: "4vh",
        width: "16vw",
        "& .MuiOutlinedInput-input": {
            paddingLeft: "1vw",
            paddingBottom: "0.5vh",
            paddingTop: 0,
            paddingRight: 0
        },
        "&$searchFocused $notchedOutline": {
            borderColor: theme.palette.secondary.main,
            color: theme.palette.info.contrastText,
            backgroundColor: "rgba(40,60,70,0.4)"
        }
    },
    searchLabel: {
        color: theme.palette.info.contrastText
    },
    searchFocused: {},
    notchedOutline: {
        borderColor: theme.palette.info.contrastText
    },
    input: {
        fontSize: "calc(0.6vh + 0.6vw)",
        "&::placeholder": {
            textOverflow: "ellipsis ",
            color: theme.palette.info.contrastText,
            fontSize: "calc(0.55vh + 0.45vw)"
        }
    }
}));

const SearchField = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const value = useSelector((state) => state.search.value);
    const searchFunc = (e) => {
        console.log(e.target.value);
        if (e.target.value.length === 0) {
            dispatch(searchOff());
            dispatch(searchValueAdd(e.target.value));
            dispatch(searchDataAdd([]));
        } else {
            dispatch(searchValueAdd(e.target.value));
            dispatch(searchOn());
        }
    };
    return (
        <TextField
            variant="outlined"
            placeholder="Search"
            onChange={searchFunc}
            value={value}
            InputProps={{
                classes: {
                    root: classes.enabledSearch,
                    focused: classes.searchFocused,
                    notchedOutline: classes.notchedOutline,
                    input: classes.input
                },
                endAdornment: (
                    <InputAdornment>
                        <Search />
                    </InputAdornment>
                )
            }}
            InputLabelProps={{
                classes: {
                    root: classes.searchLabel,
                    focused: classes.searchFocused
                }
            }}
        />
    );
};

export default SearchField;
