import {makeStyles} from '@material-ui/core/styles';

export const useMyTimeLineItemStyles = makeStyles(theme => ({
    root: {

    },
    normalItem: {
        '&:before': {
            display: 'none'
        },
        padding: '2px',
        paddingLeft: '19.5px',
        minHeight: '0'
    },
    connectorLine: {
        backgroundColor: '#eee'
    },
    normalDot: {
        borderColor: '#ffc500',
        backgroundColor: 'transparent',
        padding: '2px',
        boxShadow: 'none'
    }

}));