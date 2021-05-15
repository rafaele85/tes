import {IconButton, makeStyles, Theme} from "@material-ui/core";
import logo from "../assets/images/logo.png";
import {testSections} from "../types/section";
import MenuIcon from "@material-ui/icons/Menu";
import {BurgerMenu} from "./burger-menu";
import {useState} from "react";

const useStyles = makeStyles((theme: Theme) => {
    return {
        container: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 0,
            paddingRight: "1.25rem",
            zIndex: 10,
        },
        logoImg: {
            height: "3rem",
            minHeight: "3.75rem",
        },
        menu: {
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
        },
        menuItem: {
            paddingLeft: "1.625rem",
            textDecoration: "none",
            fontWeight: 600,
            textTransform: "uppercase",
            paddingTop: 0,
            flexWrap: "nowrap",
            whiteSpace: "nowrap",
        },
        rightMenu: {
            paddingLeft: "2rem",
            paddingRight: "2rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            [theme.breakpoints.down("md")]: {
                display: "none",
            }
        },
        rightMenuItem: {
            paddingRight: "1rem",
            textDecoration: "none",
            fontWeight: 600,
            textTransform: "uppercase",
            paddingTop: 0,
            flexWrap: "nowrap",
            whiteSpace: "nowrap",
        },
        customMenu: {

        },


    }
});


export const Header = () => {

    const [showBurger, setShowBurger] = useState<boolean>(false);

    const openBurger = () => {
        setShowBurger(true);
    };

    const closeBurger = () => {
        setShowBurger(false);
    };

    const classes = useStyles();
    const jsxMenuItems: JSX.Element[] = [];
    testSections.forEach((s) => {
        if(s.anchor) {
            jsxMenuItems.push((
                <a key={s.anchor} href={"#"+s.anchor} className={classes.menuItem}>
                    {s.title}
                </a>
            ));
        }
    });

    return (
        <div className={classes.container}>
            <a href={"#"}>
                <img src={logo} alt={""} className={classes.logoImg}/>
            </a>
            <nav className={classes.menu}>
                {jsxMenuItems}
            </nav>
            <nav className={classes.rightMenu}>
                <a href={"#"} className={classes.rightMenuItem}>
                    Shop
                </a>
                <a href={"#"} className={classes.rightMenuItem}>
                    Tesla Account
                </a>
                <IconButton onClick={openBurger}>
                    <MenuIcon className={classes.customMenu} />
                </IconButton>
            </nav>
            <BurgerMenu onClose={closeBurger} show={showBurger} />
        </div>
    );
}


