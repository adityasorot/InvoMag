import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core";
import Header from "./views/Header";
import Body from "./views/Body";

const useStyles = makeStyles((theme) => ({
    mainBackground: {
        background:
            "transparent radial-gradient(closest-side at 50% 50%, #58687E 0%, #39495E 100%) 0% 0% no-repeat padding-box",
        height: "100vh",
        width: "100vw",
        opacity: "1",
        overflow: "hidden"
    }
}));
const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainBackground}>
            <Header />
            <Body />
        </div>
    );
};

export default App;
