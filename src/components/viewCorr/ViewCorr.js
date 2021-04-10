import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormLabel,
    Grid,
    IconButton,
    InputBase,
    makeStyles,
    NativeSelect,
    Typography,
    withStyles
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DownloadPdf from "./DownloadPdf";
import ViewCorrData from "./ViewCorrData";
import { viewCorrSelected } from "../../actions/viewCorrAction";
const useStyles = makeStyles((theme) => ({
    content: {
        background: "#2A3E4C 0% 0% no-repeat padding-box",
        borderRadius: "6px",
        height: "70vh",
        minWidth: "90vw"
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
        opacity: "1",
        color: "#97A1A9",
        height: "5vh",
        padding: "2vh"
    },
    margin: {
        marginRight: "6vh"
    },
    optionInput: {
        color: "#FFFFFF"
    }
}));
const BootstrapInput = withStyles((theme) => ({
    root: {
        width: "15vw",
        height: "2vh",
        fontSize: "calc( 0.7vh + 0.7vw )"
    },
    input: {
        borderRadius: 4,
        backgroundColor: "tranparent",
        border: "0.2vh solid #356680",
        color: "white",
        paddingLeft: "1vw",
        "&:focus": {
            borderRadius: 4,
            borderColor: "#14AFF1"
        }
    }
}))(InputBase);
const ViewCorr = (props) => {
    const classes = useStyles();
    const selected = useSelector((state) => state.select.selected);
    const templates = useSelector((state) => state.view.templates);
    const selectedTemplate = useSelector(
        (state) => state.view.selectedTemplate
    );
    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(viewCorrSelected(e.target.value));
    };
    useEffect(() => {
        dispatch(viewCorrSelected(Object.keys(templates)[0]));
    }, [templates]);
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
                <Grid container justify="space-between">
                    <Typography
                        style={{
                            fontSize: "calc( 1vh + 1vw )",
                            color: "#FFFFFF"
                        }}
                    >
                        View Correspondence ({selected.length})
                    </Typography>
                    <FormControl className={classes.margin}>
                        <Grid container alignItems="center">
                            <FormLabel>
                                <Typography
                                    style={{
                                        color: "#C0C6CA",
                                        marginRight: "1vh"
                                    }}
                                >
                                    Views
                                </Typography>
                            </FormLabel>
                            <NativeSelect
                                id="demo-customized-select-native"
                                value={selectedTemplate}
                                onChange={handleChange}
                                input={<BootstrapInput />}
                                label="Age"
                            >
                                {Object.keys(templates).map((name) => {
                                    return (
                                        <option
                                            key={name}
                                            style={{
                                                backgroundColor: "#283A46",
                                                color: "#FFFFFF"
                                            }}
                                            value={name}
                                        >
                                            {name}
                                        </option>
                                    );
                                })}
                            </NativeSelect>
                        </Grid>
                    </FormControl>
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
                </Grid>
            </DialogTitle>
            {/* <form> */}
            <DialogContent dividers classes={{ root: classes.root }}>
                <ViewCorrData />
            </DialogContent>
            <DialogActions classes={{ root: classes.actionsRoot }}>
                <Grid container justify="space-between">
                    <Grid item>
                        <Grid container></Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justify="space-between" spacing={2}>
                            <Grid item>
                                <Button
                                    classes={{
                                        root: classes.enabledOtherButton,
                                        disabled: classes.disabledOtherButton
                                    }}
                                    variant="outlined"
                                    disabled={false}
                                    onClick={props.handleClose}
                                >
                                    Cancel
                                </Button>
                            </Grid>
                            <Grid item>
                                <DownloadPdf
                                    classes={{
                                        root: classes.enabledPredictButton,
                                        disabled: classes.disabledPredictButton
                                    }}
                                    variant="contained"
                                    closefunc={props.handleClose}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogActions>
            {/* </form> */}
        </Dialog>
    );
};

export default ViewCorr;
