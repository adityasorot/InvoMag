import { IconButton, makeStyles, Snackbar } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import Alert from "@material-ui/lab/Alert";
import React from "react";
const useStyles = makeStyles((theme) => ({
    cookieAlert: {
        "& .MuiSvgIcon-root": {
            color: "red",
            height: "2vh",
            width: "2vw"
        },
        backgroundColor: "#22303b",
        fontSize: "calc(0.6vh + 0.6vw)",
        width: "30vw",
        borderLeft: "0.3vw solid red"
    }
}));
const StyledSnackBar = (props) => {
    const classes = useStyles();
    return (
        <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            open={props.open}
            autoHideDuration={6000}
        >
            <Alert
                classes={{ root: classes.cookieAlert }}
                variant="filled"
                severity={props.severity}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            props.close();
                        }}
                    >
                        <Close style={{ color: "white" }} fontSize="inherit" />
                    </IconButton>
                }
            >
                {props.children}
            </Alert>
        </Snackbar>
    );
};

export default StyledSnackBar;
