import { createMuiTheme } from "@material-ui/core/styles";

export const pxToRem = (px) => `${px / 22.5}rem`;
export const pxToVw = (px) =>
    `${(100 / document.documentElement.clientWidth) * px}vw`;

export const pxToVh = (px) =>
    `${px / (document.documentElement.clientHeight * 0.01)}vh`;

export default createMuiTheme({
    palette: {
        primary: {
            main: "#273D49CC",
            // main: "#CD7925",
            light: "#2A5368",
            dark: "#283A46",
            contrastText: "#FFFFFF"
        },
        secondary: {
            main: "#2A3E4C",
            dark: "#22303b"

            // contrastText: "#FFFFFF"
        },
        info: {
            main: "#14AFF1",
            contrastText: "#97A1A9"
        }
    },
    typography: {
        fontFamily: "Ubuntu, sans-serif"
    },
    overrides: {
        MuiTypography: {
            body1: {
                fontSize: ["calc( 0.65vh + 0.65vw )"],
                fontFamily: "Ubuntu, sans-serif"
            }
        },
        MuiTableCell: {
            root: {
                fontSize: ["calc( 0.55vh + 0.55vw )"],
                paddingTop: "0.2vh",
                paddingBottom: "0.2vh",
                paddingLeft: "1vh",
                paddingRight: "1vh",
                fontFamily: "Ubuntu, sans-serif"
                // font: "italic small-caps bold calc( 0.65vh + 0.65vw ) Georgia, serif",
            }
            // body: {
            //     color: "#FFFFFF"
            // }
            // head: {
            //     color: "#97A1A9"
            // }
        },
        MuiSvgIcon: {
            root: {
                height: "2vh",
                width: "2vh"
            }
        }
    }
});
