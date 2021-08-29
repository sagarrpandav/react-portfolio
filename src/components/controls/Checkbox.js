import {
    FormControl,
    InputLabel,
    FormControlLabel,
    Select as MUISelect,
    MenuItem,
    Checkbox as MUICheckBox
} from "@material-ui/core";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

export const Checkbox = ({name, label, value, onChange}) => {

    const convertToDefaultEventParam = (name, checked) => {
        return {
            target: {
                name: name,
                value: checked
            }
        };
    };

    return (
        <FormControl variant="outlined">
            <FormControlLabel
                control={<MUICheckBox color="primary" checked={value}
                                      onChange={(event, checked) => onChange(convertToDefaultEventParam(name, checked))}
                                      name={name}/>}
                label={label}
            />
        </FormControl>
    );
};