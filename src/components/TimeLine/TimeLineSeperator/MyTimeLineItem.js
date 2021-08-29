import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineItem from "@material-ui/lab/TimelineItem";
import {useMyTimeLineItemStyles} from "./MyTimeLineItemStyle";
import {Typography} from "@material-ui/core";

export const MyTimeLineItem = ({title, text, link}) => {
    const classes = useMyTimeLineItemStyles();
    return (
        <TimelineItem className={classes.normalItem}>
            <CustomTimeLineSeparator/>
            <TimelineContent>
                {link ? (<Typography variant='body2'>
                    <span style={{textTransform: 'capitalize'}}>{title}: </span>
                    <a style={{textDecorationLine: 'none'}} href={link} target='_blank'><span
                        style={{color: '#777'}}>{text} </span></a>
                </Typography>) : (
                    <Typography variant='body2'>
                        <span style={{textTransform: 'capitalize'}}>{title}: </span>
                        <span style={{color: '#777'}}>{text} </span>
                    </Typography>
                )}
            </TimelineContent>
        </TimelineItem>
    );
}

export const CustomTimeLineSeparator = () => {
    const classes = useMyTimeLineItemStyles();
    return (
        <TimelineSeparator>
            <TimelineDot className={classes.normalDot}/>
            <TimelineConnector className={classes.connectorLine}/>
        </TimelineSeparator>
    )
}