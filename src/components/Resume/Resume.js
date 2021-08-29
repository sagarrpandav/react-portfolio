import {Card, Grid, Typography} from "@material-ui/core";
import {resumeData} from "../../assets/data/resumeData";
import {Title} from "../Title";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import {CustomTimeLineSeparator, MyTimeLineItem} from "../TimeLine/TimeLineSeperator/MyTimeLineItem";
import {MyTimeLine} from "../TimeLine/MyTimeLine";
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import {TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@material-ui/lab";
import {useMyTimeLineItemStyles} from "../TimeLine/TimeLineSeperator/MyTimeLineItemStyle";

export const Resume = () => {
    const classes = useMyTimeLineItemStyles();
    return (
        <Grid container direction='column' style={{padding: '30px'}} spacing={4}>
            <Grid item container spacing={4}>
                <Grid item>
                    <Title title='About Me'/>
                </Grid>
                <Grid item>
                    <Typography variant='body2'>{resumeData.about}</Typography>
                </Grid>
            </Grid>
            <Grid item container>
                <Grid item>
                    <Title title='Resume'/>
                </Grid>
                <Grid item container>
                    <Grid item xs={6} style={{overflowY: 'inherit', maxHeight: '50vh'}}>
                        <MyTimeLine icon={<WorkIcon/>} title='Work Experience'>
                            {resumeData.experiences.map(exp => (
                                <TimelineItem className={classes.normalItem}>
                                    <CustomTimeLineSeparator/>
                                    <TimelineContent>
                                        <Grid container style={{width: '100%'}} spacing={2}>
                                            <Grid item xs={6}><Typography variant='body1' style={{
                                                fontWeight: 'bold',
                                                marginBottom: '-7px'
                                            }}>{exp.title}</Typography>
                                            </Grid>
                                            <Grid item xs={6} style={{textAlignLast: 'end'}}>
                                                <Typography variant='caption'
                                                            style={{color: 'darkslategray'}}>{exp.date}</Typography>
                                            </Grid>
                                            <Typography variant='body2'
                                                        style={{
                                                            color: 'gray',
                                                            padding: '12px'
                                                        }}>{exp.description}</Typography>
                                        </Grid>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </MyTimeLine>
                    </Grid>
                    <Grid item xs={6} style={{overflowY: 'inherit', maxHeight: '50vh'}}>
                        <MyTimeLine icon={<SchoolIcon/>} title='Education'>
                            {resumeData.education.map(exp => (
                                <TimelineItem className={classes.normalItem}>
                                    <CustomTimeLineSeparator/>
                                    <TimelineContent>
                                        <Grid container style={{width: '100%'}} spacing={2}>
                                            <Grid item xs={6}><Typography variant='body1' style={{
                                                fontWeight: 'bold',
                                                marginBottom: '-7px'
                                            }}>{exp.title}</Typography>
                                            </Grid>
                                            <Grid item xs={6} style={{textAlignLast: 'end'}}>
                                                <Typography variant='caption'
                                                            style={{color: 'darkslategray'}}>{exp.date}</Typography>
                                            </Grid>
                                            <Typography variant='body2'
                                                        style={{
                                                            color: 'gray',
                                                            padding: '12px'
                                                        }}>{exp.description}</Typography>
                                        </Grid>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </MyTimeLine>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container>
                <Grid item xs={1}>
                    <Title title='Skills'/>
                </Grid>
            </Grid>
            <Grid item container spacing={2}>
                {resumeData.skills.map(skill => (
                    <Grid item xs={3}>
                        <Card>
                            <div style={{textAlign: 'center'}}>
                                <Typography style={{fontWeight: 'bold'}} variant='overline'>{skill.title}</Typography>
                            </div>
                            <hr/>
                            {skill.items.map(item => (
                                <div style={{padding: '4px'}}>
                                    <Typography style={{color: "gray", display: 'flex'}}
                                                variant='body2'>
                                        <TimelineDot style={{marginRight: '5px', marginLeft: '2px'}}
                                                     className={classes.normalDot}/>
                                        {item}</Typography>
                                </div>
                            ))}

                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}