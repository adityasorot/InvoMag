import { FormLabel, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    custNameChange,
    custNumChange,
    invoiceAmtChange,
    invoiceAmtErrorAddF,
    invoiceAmtErrorAddT,
    invoiceNumChange,
    invoiceNumErrorAddF,
    invoiceNumErrorAddT
} from "../../actions/addModalAction";
import OutlinedTextField from "../textfields/OutlinedTextField";
import StyledSnackBar from "../StyledSnackBar";

const useStyles = makeStyles((theme) => ({
    formLabels: {
        color: "#97A1A9",
        fontSize: "calc( 0.55vh + 0.55vw )"
    },
    astrike: {
        color: "red"
    },
    form: {
        // margin
    }
}));
const Form1 = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const custName = useSelector((state) => state.add.custName);
    const custNum = useSelector((state) => state.add.custNum);
    const invoiceNum = useSelector((state) => state.add.invoiceNum);
    const invoiceAmt = useSelector((state) => state.add.invoiceAmt);

    const custNameError = useSelector((state) => state.add.custNameError);
    const custNumError = useSelector((state) => state.add.custNumError);
    const invoiceNumError = useSelector((state) => state.add.invoiceNumError);
    const invoiceAmtError = useSelector((state) => state.add.invoiceAmtError);
    const requiredFields = useSelector((state) => state.add.requiredFields);

    const handleCustName = (event) => {
        dispatch(custNameChange(event.target.value));
    };
    const handleCustNum = (event) => {
        dispatch(custNumChange(event.target.value));
    };
    const handleInvoiceNum = (event) => {
        let x = event.target.value;
        if (isNaN(x)) {
            dispatch(invoiceNumErrorAddT());
            setTimeout(() => dispatch(invoiceNumErrorAddF()), 5000);
        } else {
            dispatch(invoiceNumChange(event.target.value));
        }
    };
    const handleInvoiceAmt = (event) => {
        let x = event.target.value;
        if (isNaN(x)) {
            dispatch(invoiceAmtErrorAddT());
            setTimeout(() => dispatch(invoiceAmtErrorAddF()), 5000);
        } else {
            dispatch(invoiceAmtChange(event.target.value));
        }
    };
    return (
        <Grid
            container
            classes={{ root: classes.form }}
            direction="column"
            justify="space-between"
            spacing={3}
        >
            <Grid item>
                <FormLabel
                    classes={{
                        root: classes.formLabels,
                        asterisk: classes.astrike
                    }}
                    required={true}
                    htmlFor="my-input"
                >
                    Customer Name
                </FormLabel>
                <OutlinedTextField
                    style={{ marginLeft: "2vw" }}
                    value={custName}
                    onChange={handleCustName}
                    error={custNameError}
                />
            </Grid>
            <Grid item>
                <FormLabel
                    classes={{
                        root: classes.formLabels,
                        asterisk: classes.astrike
                    }}
                    required={true}
                    htmlFor="my-input"
                >
                    Customer No.
                </FormLabel>
                <OutlinedTextField
                    value={custNum}
                    error={custNumError}
                    onChange={handleCustNum}
                    style={{ marginLeft: "3vw" }}
                />
            </Grid>
            <Grid item>
                <FormLabel
                    classes={{
                        root: classes.formLabels,
                        asterisk: classes.astrike
                    }}
                    required={true}
                    htmlFor="my-input"
                >
                    Invoice No.
                </FormLabel>
                <OutlinedTextField
                    value={invoiceNum}
                    error={invoiceNumError}
                    onChange={handleInvoiceNum}
                    style={{ marginLeft: "4vw" }}
                />
            </Grid>
            <StyledSnackBar
                open={
                    requiredFields ? false : invoiceAmtError || invoiceNumError
                }
                severity="warning"
                close={() => {
                    dispatch(invoiceAmtErrorAddF());
                    dispatch(invoiceNumErrorAddF());
                }}
            >
                Only Digits Allowed
            </StyledSnackBar>
            <Grid item>
                <FormLabel
                    classes={{
                        root: classes.formLabels,
                        asterisk: classes.astrike
                    }}
                    required={true}
                    htmlFor="my-input"
                >
                    Invoice Amount
                </FormLabel>
                <OutlinedTextField
                    error={invoiceAmtError}
                    value={invoiceAmt}
                    onChange={handleInvoiceAmt}
                    style={{ marginLeft: "2.4vw" }}
                />
            </Grid>
        </Grid>
    );
};

export default Form1;
