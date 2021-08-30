import {AppBar, Card, Container, Grid, Toolbar, Typography} from "@material-ui/core";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {Link, Route, Switch} from "react-router-dom";
import {Portfolio} from "../../components/Portfolio/Portfolio";
import {Resume} from "../../components/Resume/Resume";
import {Profile} from "../../components/Profile/Profile";
import {useEntryPageStyles} from "./entryPageStyles";
import {Controls} from "../../components/controls/Controls";
import {resumeData} from "../../assets/data/resumeData";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import {isMobile} from "react-device-detect";

export const EntryPage = (props) => {
    const classes = useEntryPageStyles();
    console.log(isMobile);
    return (
        <Container className={classes.root}>
            {
                isMobile ?
                    (
                        <Typography>
                            Please open in desktop. Working on making this page responsive at the moment.
                        </Typography>
                    )
                    :
                    (
                        <Grid container spacing={7}>
                            <Grid item lg={3} md={4} sm={12} xs={12}>
                                <Profile/>
                            </Grid>
                            <Grid item xs>
                                <AppBar style={{borderRadius: '10px'}} color='white' position='sticky'>
                                    <Toolbar>
                                        <Grid container spacing={1} style={{alignItems: 'center'}}>
                                            <Grid item>

                                                <Controls.Button disableElevation
                                                                 style={{backgroundColor: 'white', color: '#ffc500'}}
                                                                 text={<Typography style={{fontWeight: 'bold'}}
                                                                                   variant='body1'> Resume </Typography>}/>

                                            </Grid>
                                            <Grid item>

                                                {/*                                    <Controls.Button disableElevation
                                                     style={{backgroundColor: 'white', color: '#777777'}}
                                                     text={<Typography
                                                         style={{fontWeight: 'bold', textDecorationLine: 'none'}}
                                                         variant='body1'> Portfolio </Typography>}/>*/}

                                            </Grid>
                                            <Grid item xs/>
                                            <Grid item>
                                                {resumeData.socials.linkedin.icon}
                                            </Grid>
                                            <Grid item>
                                                {resumeData.socials.github.icon}
                                            </Grid>
                                            <Grid item>
                                                {resumeData.socials.facebook.icon}
                                            </Grid>
                                            <Grid item>
                                                <Controls.Button rounded colour='primary' icon={<EmojiPeopleIcon/>}
                                                                 text='Hire Me'/>
                                            </Grid>
                                        </Grid>
                                    </Toolbar>
                                </AppBar>
                                <Switch>
                                    <Card style={{marginTop: '3vh', minHeight: '100vh', backgroundColor: 'white'}}>
                                        <Route path='/' component={Resume}/>
                                        {/*<Route exact path='/portfolio' component={Portfolio}/>*/}
                                    </Card>

                                </Switch>
                            </Grid>
                        </Grid>
                    )
            }

        </Container>
    )
}