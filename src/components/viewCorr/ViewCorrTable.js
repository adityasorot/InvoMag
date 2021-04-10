import { makeStyles, Paper, Table, TableContainer } from "@material-ui/core";
import React from "react";
import ViewCorrTableBody from "./ViewCorrTableBody";
import ViewCorrTableHead from "./ViewCorrTableHead";

const useStyles = makeStyles((theme) => ({
    paperRoot: {
        backgroundColor: "transparent",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 0,
        width: "95%",
        overflowX: "hidden"
    },
    tableRoot: {
        // backgroundColor: "red",
        backgroundColor: "transparent",
        borderCollapse: "collapse",
        borderBottom: 0
        // height: "100%",
    }
}));

const ViewCorrTable = () => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper} classes={{ root: classes.paperRoot }}>
            <Table classes={{ root: classes.tableRoot }}>
                <ViewCorrTableHead />
                <ViewCorrTableBody />
            </Table>
        </TableContainer>
    );
};

export default ViewCorrTable;
