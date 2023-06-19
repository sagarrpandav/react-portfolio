import './App.css';
import {Container, Grid} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {Resume} from "./pages/Resume/Resume";
import {Header} from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Portfolio} from "./pages/Portfolio/Portfolio";

function App() {
    return (
        <Container className={"top_60"} maxWidth={'xl'}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={4} lg={3}>
                    <Profile/>
                </Grid>
                <Grid item xs>
                    <Header/>
                    <div className="main-content container_shadow">
                        <Routes>
                            <Route path="/portfolio" element={<Portfolio/>}>
                            </Route>
                            <Route path="/" element={<Resume/>}>
                            </Route>
                            <Route path="*" element={<Resume/>}>
                            </Route>
                        </Routes>
                    </div>
                    <div className="top_50">
                        <Footer/>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
