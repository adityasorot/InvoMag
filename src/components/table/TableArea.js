import {
    CircularProgress,
    makeStyles,
    Paper,
    Snackbar,
    Table,
    TableContainer,
    Typography
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { searchInvoice, tableDataGet } from "../../services/services";
import TableAreaBody from "./TableAreaBody";
import TableAreaHead from "./TableAreaHead";
import { useSelector, useDispatch } from "react-redux";
import debounce from "../../utils/debounce";
import {
    tableDataAdd,
    tableDataDel,
    selectAdd,
    searchDataAdd
} from "../../actions/tableDataAdd";
import Alert from "@material-ui/lab/Alert";
import NoResultsSearch from "./NoResultsSearch";
import throttle from "../../utils/throttle";
import LoadingCircle from "../LoadingCircle";

const useStyles = makeStyles((theme) => ({
    paperRoot: {
        backgroundColor: "transparent",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 0,
        width: "95%",
        height: "63vh",
        overflowX: "hidden"
    },
    paperHeaderRoot: {
        backgroundColor: "transparent",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "2vh",
        marginBottom: 0,
        width: "95%",
        maxHeight: "4.5vh",
        overflow: "hidden"
    },
    tableRoot: {
        backgroundColor: "transparent",
        borderCollapse: "collapse",
        borderBottom: 0
    }
}));

const TableArea = () => {
    const classes = useStyles();
    const tableData = useSelector((state) => state.table.data);
    const refresh = useSelector((state) => state.table.refresh);
    const searchData = useSelector((state) => state.search.searchData);
    const usingSearch = useSelector((state) => state.search.on);
    const addError = useSelector((state) => state.add.addError);
    const searchValue = useSelector((state) => state.search.value);
    const dispatch = useDispatch();
    let [next, setNext] = useState(false);
    let [count, setCount] = useState(1);
    const [searchCount, setSearchCount] = useState(1);
    let [newData, setNewData] = useState(false);

    const fetchData = async () => {
        console.log("fetchData");
        if (usingSearch) {
            try {
                const data = await searchInvoice(searchValue, searchCount, 50);
                if (searchCount === 1) dispatch(searchDataAdd([]));
                console.log(data["invoices"]);
                dispatch(searchDataAdd(data["invoices"]));
                setNext(true);
                setNewData(true);
                if (data["invoices"].length === 0) setNewData(false);
            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                const data = await tableDataGet(count, 50);
                if (count === 1) dispatch(tableDataDel());
                dispatch(tableDataAdd(data["invoices"]));
                setNext(true);
                setNewData(true);
                if (data["invoices"].length === 0) setNewData(false);
            } catch (err) {
                console.log(err);
            }
        }
    };

    const fetchDataThrottle = () => {
        if (usingSearch) {
            setSearchCount(searchCount + 1);
            fetchData();
        } else {
            setCount(count + 1);
            fetchData();
        }
    };

    const fetchMoreData = () => {
        if (usingSearch) {
            if (searchCount <= 2) fetchDataThrottle();
            else throttle(() => fetchDataThrottle(), 1000);
        } else {
            if (count <= 2) fetchDataThrottle();
            else throttle(() => fetchDataThrottle(), 1000);
        }
    };
    // const [selected, setSelected] = React.useState([]);
    const selected = useSelector((state) => state.select.selected);

    const handleSelectAllClick = (event) => {
        if (usingSearch) {
            if (event.target.checked) {
                const newSelecteds = searchData.map((n) => n.doc_id);
                dispatch(selectAdd(newSelecteds));
                return;
            }
            dispatch(selectAdd([]));
        } else {
            if (event.target.checked) {
                const newSelecteds = tableData.map((n) => n.doc_id);
                dispatch(selectAdd(newSelecteds));
                return;
            }
            dispatch(selectAdd([]));
        }
    };

    const handleClick = (event, doc_id) => {
        const selectedIndex = selected.indexOf(doc_id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, doc_id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        dispatch(selectAdd(newSelected));
    };

    const isSelected = (doc_id) => selected.indexOf(doc_id) !== -1;
    const time = debounce(() => fetchData(), 3000);
    useEffect(() => {
        console.log("time");
        time();
    }, [usingSearch, searchValue]);

    const refreshFunc = () => {
        setTimeout(() => {
            setCount(1);
            dispatch(tableDataDel());
            fetchData();
            console.log("refresh");
        }, 3000);
    };

    useEffect(() => {
        setCount(1);
        dispatch(tableDataDel());
        fetchData();
    }, [refresh]);

    useEffect(() => {
        if (newData === false) setNext(false);
    }, [newData]);

    return (
        <>
            <TableContainer
                component={Paper}
                classes={{ root: classes.paperHeaderRoot }}
            >
                <Snackbar open={addError} autoHideDuration={9000}>
                    <Alert severity="error">
                        There was an Add error. It could be a duplicate invoice
                        number.
                    </Alert>
                </Snackbar>
                <Table classes={{ root: classes.tableRoot }}>
                    <TableAreaHead
                        numSelected={selected.length}
                        onSelectAllClick={handleSelectAllClick}
                        rowCount={
                            usingSearch ? searchData.length : tableData.length
                        }
                    />
                </Table>
            </TableContainer>
            <TableContainer
                component={Paper}
                classes={{ root: classes.paperRoot }}
                id="scroll-div"
            >
                <InfiniteScroll
                    dataLength={
                        usingSearch ? searchData.length : tableData.length
                    }
                    refreshFunction={refreshFunc}
                    pullDownToRefresh
                    pullDownToRefreshContent={
                        <h3 style={{ textAlign: "center" }}>
                            &#8595; Pull down to refresh
                        </h3>
                    }
                    releaseToRefreshContent={
                        <h3 style={{ textAlign: "center" }}>
                            &#8593; Release to refresh
                        </h3>
                    }
                    pullDownToRefreshThreshold={1}
                    next={fetchMoreData}
                    hasMore={next}
                    scrollableTarget="scroll-div"
                    loader={<LoadingCircle />}
                    endMessage={
                        usingSearch ? (
                            <NoResultsSearch />
                        ) : (
                            <Typography
                                style={{
                                    color: "white",
                                    fontSize: "calc( 1vh + 1vw )",
                                    marginLeft: "40vw",
                                    marginRight: "auto",
                                    padding: "5vh"
                                }}
                            >
                                No More Data
                            </Typography>
                        )
                    }
                >
                    <Table stickyHeader classes={{ root: classes.tableRoot }}>
                        <TableAreaBody
                            handleClick={handleClick}
                            isSelected={isSelected}
                        />
                    </Table>
                </InfiniteScroll>
            </TableContainer>
        </>
    );
};

export default TableArea;
