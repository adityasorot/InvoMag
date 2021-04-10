import { Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { Add, Edit, Remove } from "@material-ui/icons";
import AddModal from "./addModal/AddModal";
import DeleteModal from "./deleteModal/DeleteModal";
import EditModal from "./editModal/EditModal";
import ViewCorr from "./viewCorr/ViewCorr";
import { useDispatch, useSelector } from "react-redux";
import SearchField from "./textfields/SearchField";
import { formatter } from "../utils/formatter";
import {
    addClose,
    addOpen,
    delClose,
    delOpen,
    editClose,
    editOpen,
    viewOpen,
    viewClose
} from "../actions/modalActions";
import { selectAdd } from "../actions/tableDataAdd";
import { templates, viewCorrData } from "../services/services";
import {
    viewCorrTableAdd,
    viewCorrTableDel,
    viewCorrAmount,
    viewCorrName,
    viewCorrTemplates
} from "../actions/viewCorrAction";
import { resetEdit } from "../actions/editModalAction";
import { resetAdd } from "../actions/addModalAction";
import Predict from "./Predict";

const useStyles = makeStyles((theme) => ({
    gridHeader: {
        height: "7vh"
    },
    predictHeader: {
        marginTop: "2.5vh",
        marginLeft: "1.7vw",
        width: "20vw"
    },
    add: {
        marginTop: "1.7vh",
        marginRight: "1.7vw",
        width: "40vw"
    },
    enabledOtherButton: {
        color: theme.palette.primary.contrastText,
        border: "0.2vh solid #14AFF1",
        borderColor: theme.palette.info.main,
        fontSize: "calc(0.55vh + 0.45vw)",
        paddingTop: "0.7vh",
        paddingBottom: "0.7vh",
        paddingLeft: "1.7vh",
        paddingRight: "1.7vh",
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
    disabledOtherButton: {}
}));
const TableAreaButtons = () => {
    const openAdd = useSelector((state) => state.modal.addModal);
    const openEdit = useSelector((state) => state.modal.editModal);
    const openViewCorr = useSelector((state) => state.modal.viewCorr);
    const openDelete = useSelector((state) => state.modal.deleteModal);
    const dispatch = useDispatch();
    const selected = useSelector((state) => state.select.selected);

    const handleClickOpenAdd = () => {
        dispatch(addOpen());
    };
    const handleCloseAdd = () => {
        dispatch(selectAdd([]));
        dispatch(addClose());
        dispatch(resetAdd());
    };

    const handleClickOpenDelete = () => {
        dispatch(delOpen());
    };
    const handleCloseDelete = () => {
        dispatch(selectAdd([]));
        dispatch(delClose());
    };
    const handleClickOpenEdit = () => {
        dispatch(editOpen());
    };
    const handleCloseEdit = () => {
        dispatch(selectAdd([]));
        dispatch(editClose());
        dispatch(resetEdit());
    };
    const handleClickOpenViewCorr = () => {
        apiCall(selected.toString());
        dispatch(viewOpen());
    };
    const handleCloseViewCorr = () => {
        dispatch(viewClose());
        dispatch(viewCorrTableDel());
        dispatch(selectAdd([]));
    };

    const apiCall = async (data) => {
        try {
            const res = await viewCorrData(data);
            dispatch(viewCorrTableAdd(res["invoices"]));
            let amt = formatter(parseInt(res["amount"]));
            dispatch(viewCorrAmount(amt));
            dispatch(viewCorrName(res["names"]));
            console.log(res);
            const templatesData = await templates();
            dispatch(viewCorrTemplates(templatesData));
        } catch (err) {
            console.log(err);
        }
    };
    const classes = useStyles();
    return (
        <>
            <Grid
                container
                className={classes.gridHeader}
                justify="space-between"
                alignItems="center"
            >
                <Grid
                    container
                    className={classes.predictHeader}
                    justify="space-around"
                    // alignItems="center"
                    // spacing={2}
                >
                    <Grid item sm={4} md={3} xl={3}>
                        <Predict />
                    </Grid>
                    <Grid item sm={6} md={6} xl={6}>
                        <Button
                            classes={{
                                root: classes.enabledOtherButton,
                                disabled: classes.disabledOtherButton
                            }}
                            variant="outlined"
                            onClick={handleClickOpenViewCorr}
                            disabled={selected.length < 1}
                            style={{ height: "4vh", width: "12vw" }}
                        >
                            View Correspondense
                        </Button>
                        <ViewCorr
                            handleClose={handleCloseViewCorr}
                            open={openViewCorr}
                        />
                    </Grid>
                </Grid>
                <Grid container className={classes.add} justify="space-around">
                    <Grid item>
                        <Button
                            classes={{
                                root: classes.enabledOtherButton,
                                disabled: classes.disabledOtherButton
                            }}
                            variant="outlined"
                            onClick={handleClickOpenAdd}
                            startIcon={<Add />}
                            style={{ height: "4vh", width: "4.5vw" }}
                        >
                            Add
                        </Button>
                        <AddModal handleClose={handleCloseAdd} open={openAdd} />
                    </Grid>
                    <Grid item>
                        <Button
                            classes={{
                                root: classes.enabledOtherButton,
                                disabled: classes.disabledOtherButton
                            }}
                            variant="outlined"
                            disabled={selected.length !== 1}
                            onClick={handleClickOpenEdit}
                            startIcon={<Edit />}
                            style={{ height: "4vh", width: "4.5vw" }}
                        >
                            Edit
                        </Button>
                        <EditModal
                            handleClose={handleCloseEdit}
                            open={openEdit}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            classes={{
                                root: classes.enabledOtherButton,
                                disabled: classes.disabledOtherButton
                            }}
                            variant="outlined"
                            disabled={selected.length < 1}
                            onClick={handleClickOpenDelete}
                            startIcon={<Remove />}
                            style={{ height: "4vh", width: "5.5 vw" }}
                        >
                            Delete
                        </Button>
                        <DeleteModal
                            handleClose={handleCloseDelete}
                            open={openDelete}
                        />
                    </Grid>
                    <Grid item>
                        <SearchField />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default TableAreaButtons;
