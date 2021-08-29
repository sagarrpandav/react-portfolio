import {makeStyles} from '@material-ui/core/styles';

export const useTimeLineStyles = makeStyles(theme => ({
    root: {
        paddingLeft: 0
    },
    headerItem: {
        minHeight: '80px',
        '&:before': {
            display: 'none'
        }
    },
    headerItemSeperator: {
      /*minHeight: '12px'*/
    },
    connectorLine: {
      backgroundColor: '#eee'
    },
    headerDot: {
        backgroundColor: '#ffc500',
        color: 'darkslategray',
        padding: '10px',
        fontSize: 'small'
    },
    headerText: {

    },
    normalItem: {
        '&:before': {
            display: 'none'
        },
        padding: '12px'
    },
    normalDot: {
        borderColor: '#ffc500',
        backgroundColor: 'transparent'
    }

}));