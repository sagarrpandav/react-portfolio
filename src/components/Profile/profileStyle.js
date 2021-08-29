import {makeStyles} from '@material-ui/core/styles';

export const usePortfolioStyles = makeStyles(theme => ({
    root: {
        borderRadius: '6px',
        width: '100%',
        display: 'inline-block',
        boxShadow: '0 2px 92px 0 rgb(0 0 0 / 13%)',
    },
    profile: {
        padding: '8%'
    },
    name: {
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    title: {
        color: 'gray'
    },
    profileImage: {
        marginTop: '-2%',
        '-webkit-clip-path': 'polygon(0 9%, 100% 0, 100% 94%, 0% 100%)',
        clipPath: 'polygon(0 9%, 100% 0, 100% 94%, 0% 100%)',
        width: '100%',
        height: '30vh'
    },
    info: {
        top: 0,
        left: 0,
        margin: '-44px 10px 30px'
    },
    test: {
        paddingLeft: '0',
        backgroundColor: "red"
    },
    icon: {
        background: 'white',
        borderRadius: '50px',
        height: '27px',
        lineHeight: '29px',
        justifyContent: 'center',
        alignContent: 'center'
    }
}));