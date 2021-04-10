import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { ErrorOutline } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { searchOff, searchValueAdd } from "../../actions/tableDataAdd";

const useStyles = makeStyles((theme) => ({
    clearButton: {
        color: theme.palette.info.main,
        fontSize: "calc( 0.6vh + 0.6vw )"
    }
}));

const NoResultsSearch = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justify="space-around"
            spacing={2}
            style={{ maxWidth: "100%" }}
        >
            <Grid item>
                <ErrorOutline
                    style={{
                        height: "5vh",
                        width: "5vw",
                        marginTop: "20vh",
                        color: "red"
                    }}
                />
            </Grid>
            <Grid item>
                <Typography
                    style={{
                        color: "white",
                        fontSize: "calc( 0.8vh + 0.8vw )"
                    }}
                >
                    No Results found
                </Typography>
            </Grid>
            <Grid item>
                <Typography
                    style={{
                        color: "#97A1A9",
                        fontSize: "calc( 0.6vh + 0.6vw )"
                    }}
                >
                    Try Adjusting your search to find what you are looking for.
                </Typography>
            </Grid>
            <Grid item>
                <Button
                    varient="text"
                    onClick={() => {
                        dispatch(searchValueAdd(""));
                        dispatch(searchOff());
                    }}
                    classes={{ root: classes.clearButton }}
                >
                    Clear Search
                </Button>
            </Grid>
        </Grid>
    );
};

export default NoResultsSearch;
