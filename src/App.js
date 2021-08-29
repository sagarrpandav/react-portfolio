import {EntryPage} from "./pages/EntryPage/EntryPage";
import {useAppStyles} from "./AppStyles";
import {ThemeProvider} from "@material-ui/styles";
import {createMuiTheme} from "@material-ui/core";

const customTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#ffc500",
        },
        secondary: {
            main: "#f83245",
            light: "#f8324526"
        },
        background: {
            default: "#f4f5fd"
        }
    }
});


function App() {
    const classes = useAppStyles();
    return (
        <div className={classes.root}>
            <ThemeProvider theme={customTheme}>
                <EntryPage/>
            </ThemeProvider>
        </div>
    );
}

export default App;
