import {
    makeStyles,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import React from "react";

const headCells = [
    {
        id: "invoice_id",
        numeric: false,
        disablePadding: false,
        label: "Order Number",
        style: {
            borderColor: "transparent",
            padding: "0.6vh",
            opacity: 1
        }
    },
    {
        id: "posting_id",
        numeric: false,
        disablePadding: false,
        label: "PO Number",
        style: {
            borderColor: "transparent",
            padding: "0.6vh",
            opacity: 1
        }
    },
    {
        id: "document_create_date",
        numeric: false,
        disablePadding: false,
        label: "Invoice Date",
        style: {
            borderColor: "transparent",
            padding: "0.6vh",
            opacity: 1
        }
    },
    {
        id: "due_in_date",
        numeric: true,
        disablePadding: false,
        label: "Due Date",
        style: {
            borderColor: "transparent",
            padding: "0.6vh",
            opacity: 1
        }
    },
    {
        id: "invoice_currency",
        numeric: true,
        disablePadding: false,
        label: "Currency",
        style: {
            borderColor: "transparent",
            padding: "0.6vh",
            opacity: 1
        }
    },
    {
        id: "total_open_amount",
        numeric: true,
        disablePadding: false,
        label: "Open Amount",
        style: {
            borderColor: "transparent",
            padding: "0.6vh",
            opacity: 1
        }
    }
];
const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.info.contrastText,
        "& .MuiTableCell-head": {
            color: theme.palette.info.contrastText
        }
    }
}));
const ViewCorrTableHead = () => {
    const classes = useStyles();
    return (
        <TableHead>
            <TableRow
                style={{
                    borderBottom: 0
                }}
                classes={{ root: classes.root }}
            >
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

export default ViewCorrTableHead;
