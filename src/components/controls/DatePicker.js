import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';

import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';

export const DatePicker = ({name, label, value, onChange}) => {
    const convertToDefaultEventParam = (name, date) => {
        return {
            target: {
                name: name,
                value: date
            }
        };
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
                                label={label}
                                name={name}
                                value={value}
                                onChange={(date) => onChange(convertToDefaultEventParam(name, date))}/>
        </MuiPickersUtilsProvider>
    )
};