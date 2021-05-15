import {makeStyles, Theme} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {ISection} from "../types/section";
const Fade = require("react-reveal/Fade");

const useStyles = makeStyles((theme: Theme) => {
    return {
        wrap: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100vh",
            minHeight: "100%",
            width: "100%",
            overflowX: "hidden",
            overflowY: "hidden",
            background: "orange",
            //backgroundImage: `url(${modelS})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        },
        itemText: {
            flex: 0,
            display: "flex",
            flexDirection: "column",
            paddingTop: "4rem",
            textAlign: "center",
            zIndex: -1,
        },
        buttons: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        buttonGroup: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "2rem",
            [theme.breakpoints.down("md")]: {
                flexDirection: "column",
            }
        },
        leftButton: {
            backgroundColor: "rgba(23, 26, 32, 0.8)",
            height: "2.5rem",
            width: "16rem",
            color: "white",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100px",
            opacity: 0.85,
            textTransform: "uppercase",
            fontSize: "0.75rem",
            cursor: "pointer",
            margin: "0.5rem",
        },
        rightButton: {
            backgroundColor: "rgba(23, 26, 32, 0.8)",
            height: "2.5rem",
            width: "16rem",
            color: "white",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100px",
            textTransform: "uppercase",
            fontSize: "0.75rem",
            cursor: "pointer",
        },
        downArrow: {
            //marginTop: "1.25rem",
            height: "2.5rem",
            cursor: "pointer",
            animation: "animateDown infinite 1.5s !important",
            overflowX: "hidden",
            fill: "black",
        },
    }
});

export interface ISectionProps {
    section: ISection;
}

export const Section = (props: ISectionProps) => {
    const classes = useStyles();
    const bgst = {
        backgroundImage: `url(${props.section.backgroundImg})`,
    };
    let titlest;
    if(props.section.titleColor) {
        titlest = {
            color: props.section.titleColor
        }
    }
    let arrowst;
    if(props.section.arrowColor) {
        arrowst = {
            fill: `${props.section.arrowColor}`
        }
    }
    let jsxRightButton;
    if(props.section.rightBtnText) {
        jsxRightButton = (
            <button className={classes.rightButton}>
                {props.section.rightBtnText}
            </button>
        );
    }

    return (
        <div id={props.section.anchor} className={classes.wrap} style={bgst}>
            <Fade bottom>
                <div className={classes.itemText}>
                    <h1 style={titlest}>{props.section.title}</h1>
                    <p style={titlest}>{props.section.description}</p>
                </div>
            </Fade>
            <div className={classes.buttons}>
                <Fade bottom>
                    <div className={classes.buttonGroup}>
                        <button className={classes.leftButton}>
                            {props.section.leftBtnText}
                        </button>
                        {jsxRightButton}
                    </div>
                </Fade>
                <ArrowDropDownIcon className={classes.downArrow} style={arrowst} />
            </div>
        </div>
    );
}


