import { makeStyles, TextField } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
    enabledSearch: {
        color: "#97A1A9",
        height: "4.3vh",
        width: "14vw",
        // left: "7vh",
        "&$searchFocused $notchedOutline": {
            borderColor: "#14AFF1 ",
            color: "#97A1A9",
            backgroundColor: "rgba(40,60,70,0.4)"
        },
        "&$error $notchedOutline": {
            borderColor: "red",
            color: "#97A1A9",
            backgroundColor: "rgba(40,60,70,0.4)"
        }
    },
    searchFocused: {},
    error: {},
    notchedOutline: {
        borderColor: "#356680 "
    },
    input: {
        color: "#FFFFFF",
        fontSize: "calc(0.5vh + 0.5vw)"
    }
}));

const OutlinedTextField = (props) => {
    const classes = useStyles();
    return (
        <TextField
            variant="outlined"
            InputProps={{
                classes: {
                    root: classes.enabledSearch,
                    focused: classes.searchFocused,
                    notchedOutline: classes.notchedOutline,
                    input: classes.input,
                    error: classes.error
                }
            }}
            {...props}
        />
    );
};

export default OutlinedTextField;
