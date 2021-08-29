import {usePortfolioStyles} from "./profileStyle";
import {Card, Typography} from "@material-ui/core";
import Image from "../../assets/FOT_0060  2.JPG";
import {MyTimeLine} from "../TimeLine/MyTimeLine";
import {resumeData} from "../../assets/data/resumeData";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {TimelineContent, TimelineItem} from "@material-ui/lab";
import {MyTimeLineItem} from "../TimeLine/TimeLineSeperator/MyTimeLineItem";
import {Controls} from "../controls/Controls";
import GetAppIconRounded from '@material-ui/icons/GetApp';
import Resume from '../../assets/data/Sagar_Resume.pdf';

const CustomItem = ({title, text, link}) => {
    return (
        <TimelineItem>
            <TimelineContent>
                <span>
                    {title}
                </span>
                {link ? (<Typography variant=''>
                    <span>{title}</span>
                    <a href={link} target='_blank'>{text}</a>
                </Typography>) : (
                    <Typography variant=''>
                        <span>{title}</span>
                        {text}
                    </Typography>
                )}
            </TimelineContent>
        </TimelineItem>
    )
};

export const Profile = () => {
    const classes = usePortfolioStyles();
    return (
        <Card className={classes.root}>
            <div className={classes.profile}>
                <Typography variant='body1' className={classes.name}>{resumeData.name}</Typography>
                <Typography variant='body2' className={classes.title}>{resumeData.title}</Typography>
            </div>
            <div className={classes.profileImage}>
                <img style={{width: '100%'}} src={Image}/>
            </div>
            <div className={classes.info}>
                <MyTimeLine icon={<PersonOutlineIcon/>}>
                    <MyTimeLineItem title='Name' text={resumeData.name}/>
                    <MyTimeLineItem title='Title' text={resumeData.title}/>
                    <MyTimeLineItem title='Email' text={resumeData.email}/>
                    <MyTimeLineItem title='Birthdate' text={resumeData.birthDate}/>
                    <MyTimeLineItem title='Linkedin' text={resumeData.socials.linkedin.text} link={resumeData.socials.linkedin.link}/>
                    {/*{Object.keys(resumeData.socials).map(socialKey => (
                        <MyTimeLineItem title={socialKey} text={resumeData.socials[socialKey].text}
                                        link={resumeData.socials[socialKey].link}/>
                    ))}*/}
                </MyTimeLine>
                <div style={{textAlign: 'center'}}>
                    <Controls.Button onClick={()=> {window.open(Resume)}} colour='primary' rounded={true} size='small' text=' Download CV ' icon={<GetAppIconRounded disableFocusRipple className={classes.icon}/>}/>
                </div>
            </div>
        </Card>
    )
}