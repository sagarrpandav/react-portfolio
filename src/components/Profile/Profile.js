import {TimelineItem, TimelineContent} from "@mui/lab";
import {Typography} from "@mui/material";
import {CustomTimeline, CustomTimeLineSeparator} from "../Timeline/CustomTimeline";
import CustomButton from "../Button/CustomButton";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GetAppIcon from '@mui/icons-material/GetApp';
import {resumeData} from "../../utils/resumeData";
import './Profile.css';

const CustomTimelineItem = ({title, text, link}) => (
    <TimelineItem>
        <CustomTimeLineSeparator/>
        <TimelineContent className="timeline_content">
            {link ? (
                <Typography className="timelineItem_text">
                    <span>{title}:</span>{" "}
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        {text}
                    </a>
                </Typography>
            ) : (
                <Typography className="timelineItem_text">
                    <span>{title}:</span> {text}
                </Typography>
            )}
        </TimelineContent>
    </TimelineItem>
);

export const Profile = () => {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">{resumeData.name}</Typography>
                <Typography className="title">{resumeData.title}</Typography>
            </div>

            <figure className="profile_image">
                <img src={require("../../assets/images/profile2.jpeg")} alt=""/>
            </figure>

            <div className="profile_information">
                <CustomTimeline icon={<PersonOutlineIcon/>}>
                    <CustomTimelineItem title="Name" text={resumeData.name}/>
                    <CustomTimelineItem title="Title" text={resumeData.title}/>
                    <CustomTimelineItem
                        title="Email"
                        text={resumeData.email}
                        link={`mailto:${resumeData.email}`}
                    />

                    {Object.keys(resumeData.socials).map((key, idx) => (
                        <CustomTimelineItem
                            key={idx}
                            title={key}
                            text={resumeData.socials[key].text}
                            link={resumeData.socials[key].link}
                        />
                    ))}
                </CustomTimeline>

                <div className="button_container" style={{display: "flex"}}>
                    <a
                        href={resumeData.resume}
                        target={"_blank"}
                        rel="noopener noreferrer"
                        className="a_nostyles"
                    >
                        <CustomButton text={"Download CV"} icon={<GetAppIcon/>}/>
                    </a>
                </div>
            </div>
        </div>
    );
};