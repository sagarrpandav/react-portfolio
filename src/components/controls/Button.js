import {Button as MUIButton, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: 'none'
    },
    rounded: {
        margin: theme.spacing(0.5),
        borderRadius: '30px',
        border: 'none',
        boxShadow: 'none'
    },
    label: {
        textTransform: 'none'
    }
}));

export const Button = ({text, size, colour, icon, variant, onClick, rounded, ...other}) => {

    const classes = useStyles();
    return (
        <MUIButton classes={{root: rounded ? classes.rounded : classes.root, label: classes.label}}
                   variant={variant || "contained"}
                   size={size || "large"}
                   color={colour || "inherit"}
                   onClick={onClick}
                   endIcon={icon ? icon : null}
                   {...other}>
            {text}
        </MUIButton>
    )
};