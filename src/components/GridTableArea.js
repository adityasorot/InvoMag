import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import TableArea from "./table/TableArea";
import TableAreaButtons from "./TableAreaButtons";

const useStyles = makeStyles((theme) => ({
    gridTableArea: {
        background: "#273D49CC 0% 0% no-repeat padding-box",
        backgroundColor: theme.palette.primary.main,
        marginTop: "2vh",
        marginLeft: "1vw",
        marginRight: "1vw",
        marginBottom: "auto",
        height: "80vh",
        width: "96%"
    }
}));
const GridTableArea = () => {
    const classes = useStyles();
    return (
        <Grid
            container
            classes={{ root: classes.gridTableArea }}
            direction="column"
        >
            <Grid item>
                <TableAreaButtons />
                <TableArea />
            </Grid>
        </Grid>
    );
};

export default GridTableArea;
