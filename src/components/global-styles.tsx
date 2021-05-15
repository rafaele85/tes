import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        '@global': {
            html: {
                '-webkit-font-smoothing': 'antialiased',
                '-moz-osx-font-smoothing': 'grayscale',
                height: '100%',
                width: '100%',
                overflowX: "hidden",
            },
            '*, *::before, *::after': {
                boxSizing: 'border-box',
                margin: 0,
                padding: 0,
                fontFamily: '"Rubik", sans-serif;',
                color: "#393c41",
            },
            body: {
                height: '100%',
                width: '100%',
                overflowX: "hidden",
                overflowY: "hidden",
            },
            "@keyframes animateDown": {
                "0%, 20%, 50%, 80%, 100%": {
                    transform: "translateY(0)",
                },
                "40%": {
                    transform: "translateY(5px)",
                },
                "60%": {
                    transform: "translateY(3px)",
                }
            }
        }
    })
);

export const drawerWidth=240;

export const GlobalStyles = () => {
    useStyles();

    return null;
};

