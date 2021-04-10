import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import ViewCorrTable from "./ViewCorrTable";

const useStyles = makeStyles((theme) => ({
    contentRoot: {
        fontSize: "calc( 1vh + 1vw)",
        marginTop: "1vh"
    },
    typoRoot: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 0,
        width: "95%"
    }
}));
const ViewCorrData = () => {
    const classes = useStyles();
    const viewTableName = useSelector((state) => state.view.viewCorrName);
    const viewTableAmt = useSelector((state) => state.view.viewCorrAmt);
    const templates = useSelector((state) => state.view.templates);
    const selectedTemplate = useSelector(
        (state) => state.view.selectedTemplate
    );

    return (
        <Grid
            container
            classes={{ root: classes.contentRoot }}
            direction="column"
            justify="space-around"
            spacing={2}
        >
            <Grid item>
                <Typography
                    style={{ color: "#C0C6CA" }}
                    classes={{ root: classes.typoRoot }}
                    variant="body1"
                >
                    Subject:{" "}
                </Typography>
                <Typography
                    classes={{ root: classes.typoRoot }}
                    style={{ color: "#FFFFFF" }}
                >
                    Invoice Details -{" "}
                    {viewTableName.length > 30
                        ? viewTableName.substr(0, 10 - 1) + "..."
                        : viewTableName}
                </Typography>
                <Typography
                    style={{
                        color: "#C0C6CA"
                    }}
                    classes={{ root: classes.typoRoot }}
                    varient="body1"
                >
                    Dear Sir/Madam,
                </Typography>
                <Typography
                    style={{
                        color: "#C0C6CA"
                    }}
                    classes={{ root: classes.typoRoot }}
                    varient="body1"
                >
                    {templates[selectedTemplate]
                        ? templates[selectedTemplate]
                        : templates[Object.keys(templates)[0]]}
                </Typography>
                <Typography
                    style={{
                        color: "#C0C6CA"
                    }}
                    classes={{ root: classes.typoRoot }}
                    varient="body1"
                >
                    Please find the details of the invoices below:
                </Typography>
            </Grid>
            <ViewCorrTable />
            <Grid item>
                <Typography
                    style={{
                        color: "#C0C6CA"
                    }}
                    classes={{ root: classes.typoRoot }}
                >
                    Total Amount to be Paid:{" "}
                </Typography>
                <Typography
                    classes={{ root: classes.typoRoot }}
                    style={{ color: "#FFFFFF" }}
                >
                    {viewTableAmt}
                </Typography>
                <Typography
                    style={{
                        color: "#C0C6CA"
                    }}
                    classes={{ root: classes.typoRoot }}
                    variant="body1"
                >
                    In case you have already made a payment for the above items,
                    please send us the details to ensure the payment is posted.
                </Typography>
                <Typography
                    style={{
                        color: "#C0C6CA"
                    }}
                    classes={{ root: classes.typoRoot }}
                    variant="body1"
                >
                    Let us know if we can be of any further assistance. Looking
                    forward to hearing from you.
                </Typography>
                <Typography
                    style={{
                        color: "#C0C6CA"
                    }}
                    classes={{ root: classes.typoRoot }}
                    variant="body1"
                >
                    Kind Regards,
                </Typography>
                <Typography
                    style={{
                        color: "#C0C6CA"
                    }}
                    classes={{ root: classes.typoRoot }}
                    variant="body1"
                ></Typography>
                <Typography
                    classes={{ root: classes.typoRoot }}
                    style={{ color: "#FFFFFF" }}
                >
                    [Sender’s First Name][Sender’s Last Name]{" "}
                </Typography>
                <Typography
                    style={{
                        color: "#C0C6CA"
                    }}
                    classes={{ root: classes.typoRoot }}
                    variant="body1"
                >
                    Phone :{" "}
                </Typography>
                <Typography
                    classes={{ root: classes.typoRoot }}
                    style={{ color: "#FFFFFF" }}
                >
                    [Sender’s contact number]{" "}
                </Typography>
                <Typography
                    style={{
                        color: "#C0C6CA"
                    }}
                    classes={{ root: classes.typoRoot }}
                    variant="body1"
                >
                    Fax :
                </Typography>
                <Typography
                    classes={{ root: classes.typoRoot }}
                    style={{ color: "#FFFFFF" }}
                >
                    {" "}
                    [If any]
                </Typography>
                <Typography
                    style={{
                        color: "#C0C6CA"
                    }}
                    classes={{ root: classes.typoRoot }}
                    variant="body1"
                >
                    Email :{" "}
                </Typography>
                <Typography
                    classes={{ root: classes.typoRoot }}
                    style={{ color: "#FFFFFF" }}
                >
                    {" "}
                    [Sender’s Email Address]
                </Typography>
                <Typography
                    classes={{ root: classes.typoRoot }}
                    style={{ color: "#FFFFFF" }}
                    variant="body1"
                >
                    Company Name[Sender’s Company Name]
                </Typography>
            </Grid>
        </Grid>
    );
};

export default ViewCorrData;
