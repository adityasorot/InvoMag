import { FormLabel, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { notesChange } from "../../actions/addModalAction";
import OutlinedTextField from "../textfields/OutlinedTextField";
import DueDate from "./DueDate";

const useStyles = makeStyles((theme) => ({
    formLabels: {
        color: "#97A1A9",
        fontSize: "calc( 0.55vh + 0.55vw )"
    },
    astrike: {
        color: "red"
    },

    form2: {
        // backgroundColor:"blue",
        // marginTop: "3vh",
        // marginLeft: "3vh",
        // minWidth: "24vw",
        // height: "32vh",
    },
    notesRoot: {
        color: "#97A1A9",
        // height: "4.3vh",
        width: "14vw",
        left: "7vh",
        marginTop: "2vh",
        // display: "inline-block",
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
        fontSize: "calc(0.5vh + 0.5vw)"
    }
}));

const Form2 = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const notes = useSelector((state) => state.add.notes);

    const handleNotes = (event) => {
        dispatch(notesChange(event.target.value));
    };

    return (
        <Grid
            container
            classes={{ root: classes.form2 }}
            direction="column"
            spacing={3}
        >
            <Grid item>
                <DueDate style={{ marginLeft: "1vw" }} />
            </Grid>
            <Grid item>
                <FormLabel classes={{ root: classes.formLabels }}>
                    Notes
                </FormLabel>
                <OutlinedTextField
                    value={notes}
                    onChange={handleNotes}
                    multiline
                    rows={6}
                    InputProps={{
                        classes: {
                            root: classes.notesRoot,
                            focused: classes.notesFocused,
                            notchedOutline: classes.notesNotchedOutline,
                            input: classes.notesInput
                        }
                    }}
                    style={{ marginLeft: "3vw", marginTop: "-2vh" }}
                />
            </Grid>
        </Grid>
    );
};

export default Form2;
