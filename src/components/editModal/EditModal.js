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
import { useDispatch, useSelector } from "react-redux";
import { resetEdit } from "../../actions/editModalAction";
import { editClose } from "../../actions/modalActions";
import { refreshTable, selectAdd } from "../../actions/tableDataAdd";
import { editData } from "../../services/services";
import Form from "./Form";

const useStyles = makeStyles((theme) => ({
    content: {
        background: "#2A3E4C 0% 0% no-repeat padding-box",
        borderRadius: "6px",
        minWidth: "35vw"
    },
    root: {
        background: "#2A3E4C 0% 0% no-repeat padding-box",
        borderRadius: "6px",
        // border: "black 1px",
        opacity: "1",
        color: "#97A1A9",
        font: "calc(1vh+1vw)",
        // width: "80vw",
        "& h6": {
            color: "#FFFFFF"
        }
    },
    closeButton: {
        position: "absolute",
        right: "0.5vh",
        top: "0.5vh",
        color: "#FFFFFF"
    },
    cancelButton: {
        color: "#14AFF1",
        fontSize: "calc(0.55vh + 0.45vw)"
        // position: 'fixed',
        // right: "0.5vh",
        // bottom: "0vh",
    },
    enabledPredictButton: {
        color: "#FFFFFF",
        background: "#14AFF1 0% 0% no-repeat padding-box",
        fontSize: "calc(0.55vh + 0.45vw)",
        paddingTop: "0.7vh",
        paddingBottom: "0.7vh",
        paddingLeft: "2vh",
        paddingRight: "2vh",
        textTransform: "none",
        "&$disabledPredictButton": {
            background: "#97A1A9 0% 0% no-repeat padding-box",
            fontSize: "calc(0.55vh + 0.45vw)",
            textTransform: "none",
            color: "#FFFFFF"
        }
    },
    disabledPredictButton: {},
    enabledOtherButton: {
        color: "#FFFFFF",
        border: "1px solid #14AFF1",
        fontSize: "calc(0.55vh + 0.45vw)",
        paddingTop: "0.7vh",
        paddingBottom: "0.7vh",
        paddingLeft: "1.7vh",
        paddingRight: "1.7vh",
        textTransform: "none",
        "&$disabledOtherButton": {
            border: "1px solid #97A1A9",
            fontSize: "calc(0.55vh + 0.45vw)",
            paddingTop: "0.7vh",
            paddingBottom: "0.7vh",
            textTransform: "none",
            color: "#97A1A9"
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
        fontSize: "calc( 1vh + 1vw)",
        marginTop: "1vh"
    },
    titleRoot: {
        background: "#2A3E4C 0% 0% no-repeat padding-box",
        borderRadius: "6px",
        // border: "black 1px",
        opacity: "1",
        color: "#97A1A9",
        height: "5vh",
        paddingTop: "3vh",

        "& h6": {
            color: "#FFFFFF"
        }
    },
    actionsRoot: {
        background: "#2A3E4C 0% 0% no-repeat padding-box",
        borderRadius: "6px",
        // border: "black 1px",
        opacity: "1",
        color: "#97A1A9",
        height: "5vh",
        padding: "2vh"
    }
}));

const EditModal = (props) => {
    const classes = useStyles();
    const invoiceAmt = useSelector((state) => state.edit.invoiceAmt);
    const notes = useSelector((state) => state.edit.notes);
    const selected = useSelector((state) => state.select.selected);
    const dispatch = useDispatch();
    const apiCall = async (data) => {
        try {
            const ans = await editData(data);
            console.log(ans);
        } catch (err) {
            console.log(err);
        }
    };

    const editAction = () => {
        let data = {
            doc_id: selected.toString(),
            amount: invoiceAmt,
            notes: notes
        };
        apiCall(data);
        dispatch(editClose());
        dispatch(selectAdd([]));
        setTimeout(() => {
            dispatch(refreshTable());
            dispatch(resetEdit());
        }, 2000);
    };
    const resetAction = () => {
        dispatch(resetEdit());
    };
    return (
        <Dialog
            open={props.open}
            PaperProps={{
                style: {
                    backgroundColor: "transparent"
                }
            }}
            onClose={props.handleClose}
            aria-labelledby="delete-modal"
            classes={{ paper: classes.content }}
        >
            <DialogTitle
                disableTypography
                classes={{ root: classes.titleRoot }}
                id="add-modal-title"
                onClose={props.handleClose}
            >
                <Typography
                    style={{ fontSize: "calc( 1vh + 1vw )", color: "#FFFFFF" }}
                >
                    Edit Invoice
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
            {/* <form> */}
            <DialogContent dividers classes={{ root: classes.root }}>
                <Grid
                    container
                    classes={{ root: classes.contentRoot }}
                    direction="column"
                    justify="space-around"
                    spacing={2}
                >
                    <Grid item>
                        <Form />
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
                                    onClick={resetAction}
                                    classes={{
                                        root: classes.enabledOtherButton,
                                        disabled: classes.disabledOtherButton
                                    }}
                                    variant="outlined"
                                    disabled={false}
                                >
                                    Reset
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={editAction}
                                    classes={{
                                        root: classes.enabledPredictButton,
                                        disabled: classes.disabledPredictButton
                                    }}
                                    variant="contained"
                                    disabled={false}
                                >
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogActions>
            {/* </form> */}
        </Dialog>
    );
};

export default EditModal;
