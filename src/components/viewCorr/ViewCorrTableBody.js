import React from "react";
import { makeStyles, TableBody, TableCell, TableRow } from "@material-ui/core";
import { formatter } from "../../utils/formatter";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
    tableRow: {
        "& .MuiTableCell-body": {
            color: theme.palette.primary.contrastText
        },
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.primary.dark
        }
    },
    root: {
        color: "#97A1A9"
    }
}));
const ViewCorrTableBody = () => {
    const classes = useStyles();
    const viewTableData = useSelector((state) => state.view.viewCorrData);
    return (
        <TableBody classes={{ root: classes.root }}>
            {viewTableData.map((data) => {
                return (
                    <TableRow
                        hover
                        key={data.invoice_id}
                        classes={{ root: classes.tableRow }}
                    >
                        <TableCell
                            style={{
                                borderBottom: 0,
                                padding: "1vh",
                                fontSize: "calc( 0.6vh + 0.6vw)"
                            }}
                        >
                            {data.invoice_id}
                        </TableCell>
                        <TableCell
                            style={{
                                borderBottom: 0,
                                padding: "1vh",
                                fontSize: "calc( 0.6vh + 0.6vw)"
                            }}
                        >
                            {data.posting_id}
                        </TableCell>
                        <TableCell
                            style={{
                                borderBottom: 0,
                                padding: "1vh",
                                fontSize: "calc( 0.6vh + 0.6vw)"
                            }}
                        >
                            {data.document_create_date}
                        </TableCell>
                        <TableCell
                            style={{
                                borderBottom: 0,
                                padding: "1vh",
                                fontSize: "calc( 0.6vh + 0.6vw)"
                            }}
                            align="right"
                        >
                            {data.due_in_date}
                        </TableCell>
                        <TableCell
                            style={{
                                borderBottom: 0,
                                padding: "1vh",
                                fontSize: "calc( 0.6vh + 0.6vw)"
                            }}
                            align="right"
                        >
                            {data.invoice_currency}
                        </TableCell>
                        <TableCell
                            style={{
                                borderBottom: 0,
                                padding: "1vh",
                                fontSize: "calc( 0.6vh + 0.6vw)"
                            }}
                            align="right"
                        >
                            {formatter(parseInt(data.total_open_amount))}
                        </TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
    );
};

export default ViewCorrTableBody;
