import {FormControl, FormControlLabel, FormLabel, Radio} from "@material-ui/core";
import {RadioGroup as MUIRadioGroup} from '@material-ui/core';

export const RadioGroup = ({name, value, onChange, label, items}) => {
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <MUIRadioGroup row
                           name={name}
                           value={value}
                           onChange={onChange}>
                {items.map((item, index) => (
                    <FormControlLabel key={item.id} value={item.id} control={<Radio/>} label={item.title}/>
                ))}
            </MUIRadioGroup>
        </FormControl>
    )
};