import {useState, useEffect} from "react";
import {Grid, Icon, TextField, Typography} from "@mui/material";
import {resumeData} from "../../utils/resumeData";
import {TimelineDot, TimelineItem, TimelineContent} from "@mui/lab";
import CustomButton from "../../components/Button/CustomButton";
import {Snackbar, Alert} from "@mui/material";
import {ScrollableDiv} from "../../components/ScrollableDiv/ScrollableDiv";
import {CustomTimeline, CustomTimeLineSeparator} from "../../components/Timeline/CustomTimeline";
import {School, Work} from "@mui/icons-material";
import {Paper} from "@mui/material";
import './Resume.css';

export const Resume = () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        // sendEmail(e)
        //     .then((res) => {
        //         res === "true" ? setOpen("true") : setOpen("error");
        //     })
        //     .then(() => {
        //         setName("");
        //         setEmail("");
        //         setMessage("");
        //     });
    };

    return (
        <>
            {/* About me */}
            <Grid container className="section pb_45 pt_45">
                <Grid item className="section_title mb_30">
                    <span></span>
                    <h6 className="section_title_text">About Me</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" className="aboutme_text">
                        {resumeData.about}
                    </Typography>
                </Grid>
            </Grid>

            {/* Education and experiences */}
            <Grid container className="section pb_45">
                <Grid item className="section_title mb_30">
                    <span></span>
                    <h6 className="section_title_text">Resume</h6>
                </Grid>

                <Grid item xs={12}>
                    <Grid container className="resume_timeline" spacing={2}>
                        {/* Experiences */}
                        <Grid item sm={12} md={7}>
                            <ScrollableDiv>
                                <CustomTimeline title="Work Experience" icon={<Work/>}>
                                    {[...resumeData.experiences]
                                        ?.reverse()
                                        ?.map((experience, idx) => (
                                            <TimelineItem key={idx}>
                                                <CustomTimeLineSeparator/>
                                                <TimelineContent className="timeline_content">
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={12} md={7}>
                                                            <Typography className="timeline_title">
                                                                {experience.title}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid
                                                            item
                                                            xs={12}
                                                            md={5}
                                                            style={{
                                                                display: "flex",
                                                                justifyContent: "flex-end",
                                                            }}>
                                                            <Typography
                                                                variant="caption"
                                                                className="timeline_date">
                                                                {experience.date}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    {experience.institute && (
                                                        <Typography className="timeline_institute">
                                                            {experience.institute}
                                                        </Typography>
                                                    )}

                                                    <Typography
                                                        variant="body2"
                                                        className="timeline_description">
                                                        {experience.description}
                                                    </Typography>
                                                </TimelineContent>
                                            </TimelineItem>
                                        ))}
                                </CustomTimeline>
                            </ScrollableDiv>
                        </Grid>

                        {/* Education */}
                        <Grid item sm={12} md={5}>
                            <ScrollableDiv>
                                <CustomTimeline title="Education" icon={<School/>}>
                                    {[...resumeData.educations]
                                        ?.reverse()
                                        ?.map((education, idx) => (
                                            <TimelineItem key={idx}>
                                                <CustomTimeLineSeparator/>
                                                <TimelineContent className="timeline_content">
                                                    <Grid container>
                                                        <Grid item xs={12} md={7}>
                                                            <Typography className="timeline_title">
                                                                {education.title}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid
                                                            item
                                                            xs={12}
                                                            md={5}
                                                            style={{
                                                                display: "flex",
                                                                justifyContent: "flex-end",
                                                            }}>
                                                            <Typography
                                                                variant="caption"
                                                                className="timeline_date">
                                                                {education.date}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    {education.institute && (
                                                        <Typography className="timeline_institute">
                                                            {education.institute}
                                                        </Typography>
                                                    )}
                                                    <Typography
                                                        variant="body2"
                                                        className="timeline_description">
                                                        {education.description}
                                                    </Typography>
                                                </TimelineContent>
                                            </TimelineItem>
                                        ))}
                                </CustomTimeline>
                            </ScrollableDiv>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* Skills */}
            <Grid container className="section graybg pb_45 p_50">
                <Grid item xs={12}>
                    <Grid container justify="space-between" spacing={3}>
                        {resumeData.skills.map((skill, idx) => (
                            <Grid item xs={12} sm={6} md={3} key={idx}>
                                <Paper elevation={0} className="skill">
                                    <Typography variant="h6" className="skill_title">
                                        {skill.title}
                                    </Typography>
                                    {skill.description.map((element, idx2) => (
                                        <Typography
                                            variant="body2"
                                            className="skill_description"
                                            key={idx2}>
                                            <TimelineDot
                                                variant={"outlined"}
                                                className="timeline_dot"
                                            />
                                            {element}
                                        </Typography>
                                    ))}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            {/* Contact */}
            <form onSubmit={handleSubmit}>
                <Grid
                    container
                    spacing={6}
                    id="contact"
                    className="section pt_45 pb_45">
                    {/* Contact form */}
                    <Grid item xs={12} lg={7}>
                        <Grid container>
                            <Grid item className="section_title mb_30">
                                <span></span>
                                <h6 className="section_title_text">Contact Form</h6>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            name="user_name"
                                            label="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            type="email"
                                            name="user_email"
                                            label="E-mail"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            name="message"
                                            label="Message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                            multiline
                                            rows={4}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <CustomButton type="submit" text="Submit"/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Contact information */}
                    <Grid item xs={12} lg={5}>
                        <Grid container>
                            <Grid item className="section_title mb_30">
                                <span></span>
                                <h6 className="section_title_text">Contact information</h6>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Typography className="contactInfo_item">
                                            <span>Address: </span> {resumeData.address}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography className="contactInfo_item">
                                            <span>Phone: </span> {resumeData.phone}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography className="contactInfo_item">
                                            <span>Email: </span> {resumeData.email}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container className="contactInfo_socialsContainer">
                                    {Object.keys(resumeData.socials).map((key, idx) => (
                                        <Grid item className="contactInfo_social" key={idx}>
                                            <a href={resumeData.socials[key].link}>
                                                {resumeData.socials[key].icon}
                                            </a>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>

            {Boolean(open) && (
                <Snackbar
                    open={Boolean(open)}
                    autoHideDuration={4000}
                    onClose={() => setOpen(false)}>
                    {open === "true" ? (
                        <Alert onClose={() => setOpen(false)} severity="success">
                            Message Sent!
                        </Alert>
                    ) : (
                        <Alert onClose={() => setOpen(false)} severity="error">
                            Failed to send message.
                        </Alert>
                    )}
                </Snackbar>
            )}
        </>
    );
};