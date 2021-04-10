import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    text: {
        textAlign: "left",
        font: "normal normal normal calc(1vh + 1vw)  Ubuntu, sans-serif",
        letterSpacing: "0px",
        color: theme.palette.primary.contrastText,
        opacity: 1,
        padding: "0.5vh"
    }
}));

const GridHeader = () => {
    const classes = useStyles();
    return (
        <header>
            <Typography className={classes.text}>Invoice List</Typography>
        </header>
    );
};

export default GridHeader;
