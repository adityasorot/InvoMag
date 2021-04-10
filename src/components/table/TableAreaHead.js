import {
    Checkbox,
    makeStyles,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import React from "react";

const headCells = [
    {
        id: "name_customer",
        numeric: false,
        disablePadding: false,
        label: "Customer Name",
        style: {
            borderColor: "transparent",
            opacity: 1,
            width: "10vw"
        }
    },
    {
        id: "cust_number",
        numeric: false,
        disablePadding: false,
        label: "Customer #",
        style: {
            borderColor: "transparent",
            opacity: 1,
            width: "10vw"
        }
    },
    {
        id: "order_id",
        numeric: false,
        disablePadding: false,
        label: "Invoice #",
        style: {
            borderColor: "transparent",
            opacity: 1,
            width: "9vw"
        }
    },
    {
        id: "total_open_amount",
        numeric: true,
        disablePadding: false,
        label: "Invoice Amount",
        style: {
            borderColor: "transparent",
            opacity: 1,
            width: "9vw"
        }
    },
    {
        id: "due_in_date",
        numeric: true,
        disablePadding: false,
        label: "Due Date",
        style: {
            borderColor: "transparent",
            opacity: 1,
            width: "8vw"
        }
    },
    {
        id: "predict_date",
        numeric: true,
        disablePadding: false,
        label: "Predicted Payment Date",
        style: {
            borderColor: "transparent",
            opacity: 1,
            width: "12vw"
        }
    },
    {
        id: "predict_age_bucket",
        numeric: false,
        disablePadding: false,
        label: "Predictes Aging Bucket",
        style: {
            borderColor: "transparent",
            opacity: 1,
            width: "12vw"
        }
    },
    {
        id: "notes",
        numeric: false,
        disablePadding: false,
        label: "Notes",
        style: {
            borderColor: "transparent",
            opacity: 1,
            width: "10vw"
        }
    }
];
const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.info.contrastText,
        "& .MuiTableCell-head": {
            color: theme.palette.info.contrastText
        },
        "&$checked": {
            "& .MuiSvgIcon-root": {
                fill: theme.palette.info.main
            }
        }
    },
    checked: {}
}));
const TableAreaHead = (props) => {
    const classes = useStyles();
    const { onSelectAllClick, numSelected, rowCount } = props;
    return (
        <TableHead>
            <TableRow
                style={{
                    height: "4vh"
                }}
                classes={{ root: classes.root }}
            >
                <TableCell
                    style={{
                        borderColor: "transparent"
                    }}
                    padding="checkbox"
                >
                    <Checkbox
                        classes={{
                            root: classes.root,
                            checked: classes.checked
                        }}
                        indeterminate={
                            numSelected > 0 && numSelected < rowCount
                        }
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        style={headCell.style}
                        key={headCell.id}
                        align={headCell.numeric ? "right" : "left"}
                        padding={headCell.disablePadding ? "none" : "default"}
                    >
                        <Typography>{headCell.label}</Typography>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

export default TableAreaHead;
