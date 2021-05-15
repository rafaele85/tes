import {Section} from "./section";
import {makeStyles} from "@material-ui/core";
import {testSections} from "../types/section";


const useStyles = makeStyles(() => {
    return {
        container: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            overflowX: "hidden",
            //zIndex: 10,
            //  overflowY: "hidden",
        }
    }
});

export const Home = () => {
    const classes = useStyles();
    const jsxSections = testSections.map((s) => (
            <Section section={s} key={s.title} />
        )
    );
    return (
        <div className={classes.container}>
            {jsxSections}
        </div>
    );
}


