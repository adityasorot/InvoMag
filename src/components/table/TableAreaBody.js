import {
    Checkbox,
    makeStyles,
    TableBody,
    TableCell,
    TableRow
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    "@global": {
        "*::-webkit-scrollbar": {
            width: "0.4vw"
        },
        "*::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.info.contrastText,
            "-webkit-border-radius": "20vw"
        }
    },
    tableRow: {
        "& .MuiTableCell-body": {
            color: theme.palette.primary.contrastText
        },
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.primary.dark
        },
        height: "3vh",
        "&$selectedRow": {
            backgroundColor: theme.palette.primary.light
        }
    },
    root: {
        color: theme.palette.info.contrastText,
        "&$checked": {
            "& .MuiSvgIcon-root": {
                fill: theme.palette.info.main
            }
        }
    },
    checked: {},
    selectedRow: {}
}));

const TableAreaBody = (props) => {
    const classes = useStyles();
    const tableData = useSelector((state) => state.table.data);
    const usingSearch = useSelector((state) => state.search.on);
    const searchData = useSelector((state) => state.search.searchData);
    let { handleClick, isSelected } = props;
    const dueDateCheckFunc = (dueDateStr) => {
        let dueDate = new Date(dueDateStr);
        let todayDate = new Date();
        if (dueDate <= todayDate) {
            return true;
        }
        return false;
    };
    const agingBucket = (data) => {
        let days = Math.round(
            (new Date(data.predict_date) - new Date(data.due_in_date)) / one_day
        );
        if (days < 0) return "<0 days";
        if (days >= 0 && days <= 15) return "0-15 days";
        if (days >= 16 && days <= 30) return "16-30 days";
        if (days >= 31 && days <= 45) return "31-45 days";
        if (days >= 46 && days <= 60) return "46-60 days";
        return ">60 days";
    };
    const one_day = 1000 * 60 * 60 * 24;
    return (
        <TableBody classes={{ root: classes.root }}>
            {(usingSearch ? searchData : tableData).map((data) => {
                const isItemSelected = isSelected(data.doc_id);
                return (
                    <TableRow
                        hover
                        onClick={(event) => handleClick(event, data.doc_id)}
                        role="checkbox"
                        selected={isItemSelected}
                        key={data.doc_id}
                        classes={{
                            root: classes.tableRow,
                            selected: classes.selectedRow
                        }}
                    >
                        <TableCell
                            style={{ borderBottom: 0, width: "2vw" }}
                            padding="checkbox"
                        >
                            <Checkbox
                                classes={{
                                    root: classes.root,
                                    checked: classes.checked
                                }}
                                checked={isItemSelected}
                            />
                        </TableCell>
                        <TableCell style={{ borderBottom: 0, width: "10vw" }}>
                            {data.name_customer}
                        </TableCell>
                        <TableCell style={{ borderBottom: 0, width: "10vw" }}>
                            {data.cust_number}
                        </TableCell>
                        <TableCell style={{ borderBottom: 0, width: "9vw" }}>
                            {data.invoice_id}
                        </TableCell>
                        <TableCell
                            style={{ borderBottom: 0, width: "9vw" }}
                            align="right"
                        >
                            {data.total_open_amount}
                        </TableCell>
                        <TableCell
                            style={
                                dueDateCheckFunc(data.due_in_date)
                                    ? {
                                          borderBottom: 0,
                                          width: "8vw",
                                          color: "red"
                                      }
                                    : { borderBottom: 0, width: "8vw" }
                            }
                            align="right"
                        >
                            {data.due_in_date}
                        </TableCell>
                        <TableCell
                            style={{ borderBottom: 0, width: "12vw" }}
                            align="right"
                        >
                            {data.predict_date ? data.predict_date : "''"}
                        </TableCell>
                        <TableCell style={{ borderBottom: 0, width: "12vw" }}>
                            {data.predict_date ? agingBucket(data) : "''"}
                        </TableCell>
                        <TableCell style={{ borderBottom: 0, width: "10vw" }}>
                            {data.notes !== " "
                                ? data.notes.length > 10
                                    ? data.notes.substr(0, 10 - 1) + "..."
                                    : data.notes
                                : "NA"}
                        </TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
    );
};

export default TableAreaBody;
