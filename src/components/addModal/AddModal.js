import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    makeStyles,
    Typography
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import Form2 from "./Form2";
import Form1 from "./Form1";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../services/services";
import { addClose } from "../../actions/modalActions";
import { refreshTable, selectAdd } from "../../actions/tableDataAdd";
import {
    addErrorF,
    addErrorT,
    custNameErrorAddF,
    custNameErrorAddT,
    custNumErrorAddF,
    custNumErrorAddT,
    invoiceAmtErrorAddF,
    invoiceAmtErrorAddT,
    invoiceNumErrorAddF,
    invoiceNumErrorAddT,
    requiredAddF,
    requiredAddT,
    resetAdd
} from "../../actions/addModalAction";
import StyledSnackBar from "../StyledSnackBar";
const useStyles = makeStyles((theme) => ({
    content: {
        background: "#2A3E4C 0% 0% no-repeat padding-box",
        backgroundColor: theme.palette.secondary.main,
        backgroundColor: theme.palette.grey[900],
        borderRadius: "6px",
        minWidth: "65vw"
    },
    root: {
        background: "#2A3E4C 0% 0% no-repeat padding-box",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "6px",
        opacity: "1",
        color: theme.palette.info.contrastText,
        font: "calc(1vh+1vw)",
        "& h6": {
            color: theme.palette.primary.contrastText
        }
    },
    closeButton: {
        position: "absolute",
        right: "0.5vh",
        top: "0.5vh",
        color: theme.palette.primary.contrastText
    },
    cancelButton: {
        color: theme.palette.info.main,
        fontSize: "calc(0.55vh + 0.45vw)",
        height: "4vh",
        width: "5vw"
    },
    enabledPredictButton: {
        color: theme.palette.primary.contrastText,
        background: "#14AFF1 0% 0% no-repeat padding-box",
        backgroundColor: theme.palette.info.main,
        fontSize: "calc(0.55vh + 0.45vw)",
        paddingTop: "0.7vh",
        paddingBottom: "0.7vh",
        height: "4vh",
        width: "5vw",
        textTransform: "none",
        "&$disabledPredictButton": {
            background: "#97A1A9 0% 0% no-repeat padding-box",
            backgroundColor: theme.palette.info.contrastText,
            fontSize: "calc(0.55vh + 0.45vw)",
            textTransform: "none",
            color: theme.palette.primary.contrastText
        }
    },
    disabledPredictButton: {},
    enabledOtherButton: {
        color: theme.palette.primary.contrastText,
        border: "0.2vh solid #14AFF1",
        borderColor: theme.palette.info.main,
        fontSize: "calc(0.55vh + 0.45vw)",
        paddingTop: "0.7vh",
        paddingBottom: "0.7vh",
        paddingLeft: "1.7vh",
        paddingRight: "1.7vh",
        height: "4vh",
        width: "5vw",
        textTransform: "none",
        "&$disabledOtherButton": {
            border: "0.2vh solid #97A1A9",
            borderColor: theme.palette.info.contrastText,
            fontSize: "calc(0.55vh + 0.45vw)",
            paddingTop: "0.7vh",
            paddingBottom: "0.7vh",
            textTransform: "none",
            color: theme.palette.info.contrastText
        }
    },
    disabledOtherButton: {},
    formLabels: {
        color: "#97A1A9",
        fontSize: "calc( 0.55vh + 0.55vw )"
    },
    astrike: {
        color: "red"
    },
    contentRoot: {
        marginTop: "1vh",
        marginLeft: "-3vw"
    },
    titleRoot: {
        background: "#2A3E4C 0% 0% no-repeat padding-box",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "6px",
        // border: "black 1px",
        opacity: "1",
        color: theme.palette.info.contrastText,
        height: "5vh",
        paddingTop: "3vh",

        "& h6": {
            color: theme.palette.primary.contrastText
        }
    },
    actionsRoot: {
        background: "#2A3E4C 0% 0% no-repeat padding-box",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "6px",
        opacity: "1",
        color: theme.palette.info.contrastText,
        height: "5vh",
        padding: "2vh"
    },
    cookieAlert: {
        "& .MuiSvgIcon-root": {
            color: theme.palette.error.dark,
            height: "2vh",
            width: "2vw"
        },
        backgroundColor: theme.palette.secondary.dark,
        fontSize: "calc(0.6vh + 0.6vw)",
        width: "30vw",
        borderLeft: "0.3vw solid red",
        borderColor: theme.palette.error.dark
    }
}));

const AddModal = (props) => {
    const classes = useStyles();
    const custName = useSelector((state) => state.add.custName);
    const custNum = useSelector((state) => state.add.custNum);
    const invoiceNum = useSelector((state) => state.add.invoiceNum);
    const invoiceAmt = useSelector((state) => state.add.invoiceAmt);
    const notes = useSelector((state) => state.add.notes);
    const selectedDate = useSelector((state) => state.add.date);
    const requiredFields = useSelector((state) => state.add.requiredFields);
    const dispatch = useDispatch();
    const apiCall = async (data) => {
        try {
            const ans = await addData(data);
            console.log(ans.data);
            if (ans.Data !== "Done") {
                dispatch(addErrorT());
                setTimeout(() => dispatch(addErrorF()), 9000);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = () => {
        let errorFlag = 0;
        if (custName.length === 0) {
            errorFlag = 1;
            dispatch(custNameErrorAddT());
            setTimeout(() => dispatch(custNameErrorAddF()), 6000);
        }
        if (custNum.length === 0) {
            errorFlag = 1;
            dispatch(custNumErrorAddT());
            setTimeout(() => dispatch(custNumErrorAddF()), 6000);
        }
        if (invoiceNum.length === 0) {
            errorFlag = 1;
            dispatch(invoiceNumErrorAddT());
            setTimeout(() => dispatch(invoiceNumErrorAddF()), 6000);
        }
        if (invoiceAmt.length === 0) {
            errorFlag = 1;
            dispatch(invoiceAmtErrorAddT());
            setTimeout(() => dispatch(invoiceAmtErrorAddF()), 6000);
        }
        if (errorFlag === 1) {
            dispatch(requiredAddT());
            setTimeout(() => dispatch(requiredAddF()), 6000);
            return;
        }
        const date =
            selectedDate.getDate() +
            "/" +
            (selectedDate.getMonth() + 1) +
            "/" +
            selectedDate.getFullYear();
        let data = {
            cust_name: custName,
            cust_number: custNum,
            due_in_date: date,
            amount: invoiceAmt,
            invoice_id: invoiceNum,
            notes: notes
        };
        apiCall(data);
        dispatch(addClose());
        dispatch(selectAdd([]));
        setTimeout(() => {
            dispatch(refreshTable());
            dispatch(resetAdd());
        }, 2000);
    };
    const resetAction = () => {
        dispatch(resetAdd());
    };
    return (
        <Dialog
            open={props.open}
            PaperProps={{
                style: {
                    // backgroundColor: "transparent"
                }
            }}
            onClose={props.handleClose}
            aria-labelledby="add-modal"
            classes={{ paper: classes.content }}
        >
            <StyledSnackBar
                open={requiredFields}
                close={() => {
                    dispatch(custNameErrorAddF());
                    dispatch(custNumErrorAddF());
                    dispatch(invoiceAmtErrorAddF());
                    dispatch(invoiceNumErrorAddF());
                    dispatch(requiredAddF());
                }}
                severity="warning"
            >
                Mandatory Field's can't be empty
            </StyledSnackBar>

            <DialogTitle
                disableTypography
                classes={{ root: classes.titleRoot }}
                id="add-modal-title"
                onClose={props.handleClose}
            >
                <Typography
                    style={{ fontSize: "calc( 1vh + 1vw )", color: "#FFFFFF" }}
                >
                    Add Invoice
                </Typography>
                <IconButton
                    classes={{ root: classes.closeButton }}
                    onClick={props.handleClose}
                >
                    <Close
                        style={{
                            minHeight: "3vh",
                            minWidth: "3vw",
                            paddingTop: "3vh"
                        }}
                    />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers classes={{ root: classes.root }}>
                <Grid
                    container
                    classes={{ root: classes.contentRoot }}
                    justify="space-around"
                    // spacing={2}
                >
                    <Grid item>
                        <Form1 />
                    </Grid>
                    <Grid item>
                        <Form2 />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions classes={{ root: classes.actionsRoot }}>
                <Grid container justify="space-between">
                    <Grid item>
                        <Grid container>
                            <Button
                                autoFocus
                                onClick={props.handleClose}
                                classes={{ root: classes.cancelButton }}
                            >
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justify="space-between" spacing={1}>
                            <Grid item>
                                <Button
                                    classes={{
                                        root: classes.enabledOtherButton,
                                        disabled: classes.disabledOtherButton
                                    }}
                                    variant="outlined"
                                    disabled={false}
                                    onClick={resetAction}
                                >
                                    Clear
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    classes={{
                                        root: classes.enabledPredictButton,
                                        disabled: classes.disabledPredictButton
                                    }}
                                    variant="contained"
                                    disabled={false}
                                    type="submit"
                                    onClick={handleSubmit}
                                >
                                    Add
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    );
};

export default AddModal;
