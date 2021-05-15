import {IconButton, makeStyles} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(() => {
    return {
        container: {
            position: "fixed",
            top: 0,
            bottom: 0,
            right: 0,
            background: "white",
            width: "18.75rem",
            zIndex: 100,
            listStyle: "none",
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            textAlign: "start",
            transition: "transform 0.2s ease-in",

        },
        item: {
            paddingTop: "15px",
            paddingRight: 0,
            borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
        },
        link: {
            textDecoration: "none",
            fontWeight: 700,
        },
        closeWrapper: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
        },
        customClose: {
            cursor: "pointer",
        }
    }
});


const menuItems = [
    "Existing Inventory",
    "Used Inventory",
    "Trade-in",
    "Cybertruck",
    "Roadster",
]

export interface IBurgerMenuProps {
    onClose: () => void;
    show?: boolean;
}

export const BurgerMenu = (props: IBurgerMenuProps) => {
    const classes = useStyles();

    const jsxBurgerItems = menuItems.map(m => (
        <li key={m} className={classes.item}>
            <a href={"#"} className={classes.link}>
                {m}
            </a>
        </li>
    ));

    const st = (props.show ? {transform: "translateX(0)"} : {transform: "translateX(100%)"});

    return (
        <ul className={classes.container} style={st}>
            <div className={classes.closeWrapper}>
                <IconButton onClick={props.onClose}>
                    <CloseIcon className={classes.customClose} />
                </IconButton>
            </div>
            {jsxBurgerItems}
        </ul>
    );
}


