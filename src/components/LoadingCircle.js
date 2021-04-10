import { CircularProgress, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative"
    },
    bottom: {
        color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700]
    },
    top: {
        color: theme.palette.info.main,
        animationDuration: "550ms",
        position: "absolute",
        left: 0
    },
    circle: {
        strokeLinecap: "round"
    },
    typo: {
        color: theme.palette.info.contrastText,
        marginLeft: "10vw",
        marginRight: "auto",
        marginTop: "2vh",
        marginBottom: "10vh"
    }
}));

function ModifiedCircularProgress(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CircularProgress
                variant="determinate"
                className={classes.bottom}
                style={{
                    height: "7vh",
                    width: "7vh",
                    marginLeft: "10vw",
                    marginRight: "auto",
                    marginTop: "10vh"
                }}
                value={100}
            />
            <CircularProgress
                variant="indeterminate"
                // disableShrink
                style={{
                    height: "7vh",
                    width: "7vh",
                    marginLeft: "10vw",
                    marginRight: "auto",
                    marginTop: "10vh"
                }}
                className={classes.top}
                classes={{
                    circle: classes.circle
                }}
            />
        </div>
    );
}

const LoadingCircle = () => {
    const classes = useStyles();
    return (
        <div
            style={{
                height: "80%",
                paddingLeft: "35%",
                overflow: "hidden"
            }}
        >
            <ModifiedCircularProgress />
            <Typography classes={{ root: classes.typo }}>Loading</Typography>
        </div>
    );
};

export default LoadingCircle;
