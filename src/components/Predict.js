import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PRE_F, selectAdd, tableDataModify } from "../actions/tableDataAdd";
import { predictionApi, predictionApiData } from "../services/services";
import throttle from "../utils/throttle";
const useStyles = makeStyles((theme) => ({
    enabledPredictButton: {
        color: theme.palette.primary.contrastText,
        background: "#14AFF1 0% 0% no-repeat padding-box",
        backgroundColor: theme.palette.info.main,
        fontSize: "calc(0.55vh + 0.45vw)",
        paddingTop: "0.7vh",
        paddingBottom: "0.7vh",
        height: "4vh",
        width: "6vw",
        textTransform: "none",
        "&$disabledPredictButton": {
            background: "#97A1A9 0% 0% no-repeat padding-box",
            backgroundColor: theme.palette.info.contrastText,
            fontSize: "calc(0.55vh + 0.45vw)",
            textTransform: "none",
            color: theme.palette.primary.contrastText
        }
    },
    disabledPredictButton: {}
}));

const Predict = () => {
    const classes = useStyles();
    const selected = useSelector((state) => state.select.selected);
    const dispatch = useDispatch();
    const apiCall = async (data) => {
        console.log("call");
        try {
            console.log(data);
            const res = await predictionApiData(data);
            console.log(res);
            const pred = await predictionApi(res);
            console.log(pred);
            dispatch(tableDataModify(pred));
            dispatch(selectAdd([]));
        } catch (err) {
            console.log(err);
        }
    };
    const handleClick = () => {
        throttle(() => apiCall(selected.toString()), 2000);
        setTimeout(() => dispatch(PRE_F()), 5000);
    };
    return (
        <Button
            classes={{
                root: classes.enabledPredictButton,
                disabled: classes.disabledPredictButton
            }}
            variant="contained"
            onClick={handleClick}
            disabled={selected.length < 1}
        >
            Predict
        </Button>
    );
};

export default Predict;
