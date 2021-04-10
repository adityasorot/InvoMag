import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import GridHeader from "./GridHeader";
import GridTableArea from "./GridTableArea";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        background: "transparent",
        margin: "2vh"
    }
}));

const GridMain = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.mainGrid} direction="column">
            <GridHeader />
            <GridTableArea />
        </Grid>
    );
};

export default GridMain;
