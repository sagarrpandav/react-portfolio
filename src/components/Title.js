import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useTitleStyles = makeStyles(theme => ({
    span: {
        height: '7px',
        /* opacity: .4; */
        /* left: 0; */
        'background-color': '#ffc500',
        marginTop: '-12px'
    }
}));
export const Title = ({title}) => {
    const classes = useTitleStyles();
    return (
        <>
            <Typography variant='body1' style={{fontWeight: 'bold'}}>{title}</Typography>
            <div className={classes.span}/>
        </>
    )
}