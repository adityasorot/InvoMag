import { FormLabel, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { invoiceAmtEdit, notesEdit } from "../../actions/editModalAction";
import OutlinedTextField from "../textfields/OutlinedTextField";

const useStyles = makeStyles((theme) => ({
    formLabels: {
        color: "#97A1A9",
        fontSize: "calc( 0.55vh + 0.55vw )"
    },
    astrike: {
        color: "red"
    },
    notesRoot: {
        color: "#97A1A9",
        width: "14vw",
        "&$notesFocused $notesNotchedOutline": {
            borderColor: "#14AFF1 ",
            color: "#97A1A9",
            backgroundColor: "rgba(40,60,70,0.4)"
        }
    },
    notesFocused: {},
    notesNotchedOutline: {
        borderColor: "#356680 "
    },
    notesInput: {
        color: "#FFFFFF",
        fontSize: "calc( 0.6vh + 0.6vw )"
    },
    form2: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "33vw"
    }
}));

const Form = () => {
    const classes = useStyles();
    const invoiceAmt = useSelector((state) => state.edit.invoiceAmt);
    const notes = useSelector((state) => state.edit.notes);
    const dispatch = useDispatch();
    const handleInvoiceAmt = (event) => {
        dispatch(invoiceAmtEdit(event.target.value));
    };
    const handleNotes = (event) => {
        dispatch(notesEdit(event.target.value));
    };
    return (
        <Grid
            container
            classes={{ root: classes.form2 }}
            direction="column"
            spacing={2}
            justify="space-around"
        >
            <Grid item xl={10}>
                <FormLabel
                    classes={{
                        root: classes.formLabels,
                        asterisk: classes.astrike
                    }}
                    htmlFor="my-input"
                >
                    Invoice Amount
                </FormLabel>
                <OutlinedTextField
                    value={invoiceAmt}
                    onChange={handleInvoiceAmt}
                    style={{
                        marginLeft: "6.4vw"
                        // marginTop: "-3vh"
                        // width: "20vw"
                    }}
                />
            </Grid>
            <Grid item xl={10}>
                <FormLabel classes={{ root: classes.formLabels }}>
                    Notes
                </FormLabel>
                <OutlinedTextField
                    multiline
                    value={notes}
                    onChange={handleNotes}
                    rows={5}
                    InputProps={{
                        classes: {
                            root: classes.notesRoot,
                            focused: classes.notesFocused,
                            notchedOutline: classes.notesNotchedOutline,
                            input: classes.notesInput
                        }
                    }}
                    style={{
                        marginLeft: "10vw",
                        marginTop: "1vh"
                    }}
                />
            </Grid>
        </Grid>
    );
};

export default Form;
