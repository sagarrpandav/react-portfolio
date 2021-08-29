import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import {useTimeLineStyles} from "./useTimelineStyles";
import {Typography} from "@material-ui/core";

import {MyTimeLineItem} from "./TimeLineSeperator/MyTimeLineItem";

export const MyTimeLine = ({title, icon, children}) => {
    const classes = useTimeLineStyles();
    return (
        <Timeline className={classes.root}>
            <TimelineItem className={classes.headerItem}>
                <TimelineSeparator className={classes.headerItemSeperator}>
                    <TimelineDot className={classes.headerDot}>
                        {icon}
                    </TimelineDot>
                    <TimelineConnector className={classes.connectorLine}/>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6' className={classes.headerText}>{title}</Typography>
                </TimelineContent>
            </TimelineItem>
            {children}
           {/* <MyTimeLineItem text='sdsa'/>*/}
        </Timeline>
    );
}