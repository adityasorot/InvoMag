import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CompanyLogo from "../assets/companyLogo.svg";
import HRCLogo from "../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
    mainBackground: {
        background: "transparent",
        boxShadow: "none",
        height: "8vh",
        marginTop: "1vh",
        opacity: "1",
        overflow: "hidden"
    },
    companyLogoText: {
        textAlign: "left",
        color: theme.palette.primary.contrastText,
        font:
            "normal normal 800 calc(1.25vh + 1.25vw) futura-pt-condensed, sans-serif"
    },
    companyLogo: {
        width: "6vh",
        height: "6vh",
        marginLeft: "2vh"
    },
    hrcLogo: {
        width: "23vh",
        height: "6vh",
        marginLeft: "19vh"
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <header className={classes.mainBackground}>
                <Grid container className={classes.mainBackground}>
                    <Grid item xl={4} xs={4} lg={4}>
                        <Grid container>
                            <Grid item>
                                <img
                                    className={classes.companyLogo}
                                    src={CompanyLogo}
                                    alt=""
                                />
                            </Grid>
                            <Grid item>
                                <Typography className={classes.companyLogoText}>
                                    ABC Products
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xl={4} xs={4} lg={4}>
                        <img className={classes.hrcLogo} src={HRCLogo} alt="" />
                    </Grid>
                    <Grid item xl={4} xs={4} lg={4}></Grid>
                </Grid>
            </header>
        </div>
    );
};

export default Header;
