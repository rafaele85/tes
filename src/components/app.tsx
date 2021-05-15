import {createMuiTheme, CssBaseline, makeStyles, MuiThemeProvider} from "@material-ui/core";
import {GlobalStyles} from "./global-styles";
import {Header} from "./header";
import {Home} from "./home";

const useStyles = makeStyles(() => {
    return {
        app: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            height: "100vh",
        }
    }
});

const theme = createMuiTheme({palette: {type: "light"}});
export const App = () => {
    const classes = useStyles();
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            <div className={classes.app}>
                <Header />
                <Home />
            </div>
        </MuiThemeProvider>
    );
}


