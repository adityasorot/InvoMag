import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewCorrSelected } from "../../actions/viewCorrAction";
const { jsPDF } = require("jspdf");
require("jspdf-autotable");
const DownloadPdf = (props) => {
    const viewTableName = useSelector((state) => state.view.viewCorrName);
    const viewTableAmt = useSelector((state) => state.view.viewCorrAmt);
    const templates = useSelector((state) => state.view.templates);
    const selectedTemplate = useSelector(
        (state) => state.view.selectedTemplate
    );
    const viewTableData = useSelector((state) => state.view.viewCorrData);
    const dispatch = useDispatch();
    const { closefunc, classes, varient } = props;
    useEffect(() => {
        dispatch(viewCorrSelected(Object.keys(templates)[0]));
    }, []);
    const handleClick = () => {
        const doc = new jsPDF();
        let lineHeight =
            doc.getLineHeight("dwqsdqwqzxH") / doc.internal.scaleFactor;
        doc.setFont("helvetica", "bold");
        var yPos = 10;
        var xPos = 10;
        doc.text("Subject:", xPos, yPos);
        let names =
            viewTableName.length > 30
                ? viewTableName.substr(0, 10 - 1) + "..."
                : viewTableName;
        doc.setFont("helvetica", "normal");
        doc.text(`Invoice Details - ${names}`, 35, yPos);
        yPos += lineHeight;
        doc.text("Dear Sir/Madam,", xPos, yPos);
        yPos += lineHeight;
        doc.setFontSize(13);
        lineHeight =
            doc.getLineHeight("dwqsdqwqzxH") / doc.internal.scaleFactor;
        let splitTitle = doc.splitTextToSize(templates[selectedTemplate], 180);
        let lines = splitTitle.length;
        let blockHeight = lines * lineHeight;
        doc.text(splitTitle, xPos, yPos);
        yPos += blockHeight;

        const headCells = [
            "invoice_id",
            "posting_id",
            "document_create_date",
            "due_in_date",
            "invoice_currency",
            "total_open_amount"
        ];
        let listBody = [];
        // console.log(viewTableData);
        let index = [
            "invoice_id",
            "posting_id",
            "document_create_date",
            "due_in_date",
            "invoice_currency",
            "total_open_amount"
        ];
        for (let key in viewTableData) {
            let data = viewTableData[key];
            let iterList = [];
            for (let iter in index) {
                iterList.push(data[index[iter]]);
            }
            listBody.push(iterList);
        }
        doc.autoTable({
            startY: yPos,
            head: [headCells],
            body: listBody
        });
        yPos = doc.lastAutoTable.finalY;
        yPos += 10;
        doc.text(`Total Amount to be Paid: ${viewTableAmt}`, xPos, yPos);
        yPos += lineHeight;
        let endText = `In case you have already made a payment for the above items, please send us the details to ensure the payment is posted.
        
        Let us know if we can be of any further assistance. Looking forward to hearing from you.




        Kind Regards,

        [Sender’s First Name][Sender’s Last Name]

        Phone : [Sender’s contact number]

        Fax : [If any]

        Email : [Sender’s Email Address]

        Company Name[Sender’s Company Name]`;
        splitTitle = doc.splitTextToSize(endText, 180);
        doc.text(splitTitle, xPos, yPos);
        doc.save("ViewCorr.pdf");
        closefunc();
    };
    return (
        <Button onClick={handleClick} classes={classes} varient={varient}>
            Download
        </Button>
    );
};

export default DownloadPdf;
