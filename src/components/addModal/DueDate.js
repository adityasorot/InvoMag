import DateFnsUtils from "@date-io/date-fns";
import {
    FormLabel,
    Grid,
    IconButton,
    makeStyles,
    TextField
} from "@material-ui/core";
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from "@material-ui/pickers";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    dateChange,
    dateErrorAddF,
    dateErrorAddT
} from "../../actions/addModalAction";
import { CalendarToday } from "@material-ui/icons";
import StyledSnackBar from "../StyledSnackBar";
const useStyles = makeStyles((theme) => ({
    formLabels: {
        color: theme.palette.info.contrastText,
        fontSize: "calc( 0.55vh + 0.55vw )"
    },
    astrike: {
        color: "red"
    },
    dateRoot: {
        color: theme.palette.info.contrastText,
        height: "4.3vh",
        width: "14vw",
        left: "7vh",
        "&$dateFocused $dateNotchedOutline": {
            borderColor: theme.palette.info.main,
            color: theme.palette.info.contrastText,
            backgroundColor: "rgba(40,60,70,0.4)"
        }
    },
    dateFocused: {},
    dateNotchedOutline: {
        borderColor: "#356680 "
    },
    dateInput: {
        color: theme.palette.primary.contrastText,
        fontSize: "calc(0.5vh + 0.5vw)"
    }
}));
const DueDate = (props) => {
    const classes = useStyles();
    // const [selectedDate, handleDateChange] = useState(new Date());
    const selectedDate = useSelector((state) => state.add.date);
    const selectedDateError = useSelector((state) => state.add.dateError);
    const dispatch = useDispatch();
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const handleDateChange = (value) => {
        let d1 = new Date();
        if (
            value.getTime() - d1.getTime() < 1000 * 60 * 60 * 24 &&
            value.getDate() < d1.getDate()
        ) {
            dispatch(dateErrorAddT());
            setTimeout(() => dispatch(dateErrorAddF()), 5000);
        } else dispatch(dateChange(value));
    };
    const renderInput = (props) => (
        <TextField
            variant="outlined"
            onClick={props.onClick}
            value={props.value}
            onChange={props.onChange}
            InputProps={{
                classes: {
                    root: classes.dateRoot,
                    focused: classes.dateFocused,
                    notchedOutline: classes.dateNotchedOutline,
                    input: classes.dateInput
                },
                endAdornment: (
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpenDatePicker(true);
                        }}
                    >
                        <CalendarToday
                            style={{ color: "white" }}
                            fontSize="inherit"
                        />
                    </IconButton>
                )
            }}
            style={props.style}
            error={props.error}
        />
    );

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container>
                <Grid item>
                    <FormLabel
                        classes={{
                            root: classes.formLabels,
                            asterisk: classes.astrike
                        }}
                        required={true}
                    >
                        Due Date
                    </FormLabel>
                    <KeyboardDatePicker
                        open={openDatePicker}
                        disableToolbar
                        format="MM/dd/yyyy"
                        id="date-picker-inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        error={selectedDateError}
                        TextFieldComponent={renderInput}
                        onClose={() => setOpenDatePicker(false)}
                        {...props}
                    />
                </Grid>
            </Grid>
            <StyledSnackBar
                open={selectedDateError}
                severity="warning"
                close={() => {
                    dispatch(dateErrorAddF());
                }}
            >
                Due Date should be greater or equal to today.
            </StyledSnackBar>
        </MuiPickersUtilsProvider>
    );
};

export default DueDate;
