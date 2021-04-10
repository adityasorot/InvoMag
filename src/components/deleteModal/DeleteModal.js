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
import { delClose } from "../../actions/modalActions";
import { refreshTable, selectAdd } from "../../actions/tableDataAdd";
import { deleteData } from "../../services/services";

const useStyles = makeStyles((theme) => ({
    content: {
        background: "#2A3E4C 0% 0% no-repeat padding-box",
        borderRadius: "6px",
        // height: "50vh",
        minWidth: "25vw"
    },
    root: {
        background: "#2A3E4C 0% 0% no-repeat padding-box",
        borderRadius: "6px",
        // border: "black 1px",
        opacity: "1",
        color: "#97A1A9",
        font: "calc(1vh+1vw)",
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

const DeleteModal = (props) => {
    const classes = useStyles();
    const selected = useSelector((state) => state.select.selected);
    const dispatch = useDispatch();
    const apiCall = async (data) => {
        try {
            const ans = await deleteData(data);
            console.log(ans);
        } catch (err) {
            console.log(err);
        }
    };
    const deleteAction = () => {
        console.log(selected.toString());
        let data = {
            doc_id: selected.toString()
        };
        apiCall(data);
        dispatch(delClose());
        setTimeout(() => {
            dispatch(refreshTable());
            dispatch(selectAdd([]));
        }, 2000);
    };
    return (
        <Dialog
            open={props.open}
            PaperProps={{
                style: {
                    backgroundColor: "transparent"
                    //   boxShadow: 'none',
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
                    Delete record(s)?
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
                        <Typography>
                            You'll lose record(s) after this action. We can't
                            recover them once you delete.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid container>
                            <Typography>Are you sure you want to </Typography>{" "}
                            <Typography style={{ color: "red" }}>
                                &nbsp;permanently delete&nbsp;
                            </Typography>
                            <Typography> them?</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions classes={{ root: classes.actionsRoot }}>
                <Grid container justify="space-between">
                    <Grid item>
                        <Grid container></Grid>
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
                                >
                                    Cancel
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
                                    onClick={deleteAction}
                                >
                                    Delete
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

export default DeleteModal;
