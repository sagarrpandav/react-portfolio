import {FormControl, InputLabel, Select as MUISelect, MenuItem, FormHelperText} from "@material-ui/core";

export const Select = ({name, label, value, onChange, options, error = null}) => {
    return (
        <FormControl variant="outlined"
                     style={{minWidth: '100%'}}
                     {...(error && {error: true})}>
            <InputLabel>{label}</InputLabel>
            <MUISelect
                name={name}
                label={label}
                value={value}
                onChange={onChange}>
                <MenuItem value="">None</MenuItem>
                {options.map((option, index) => (
                    <MenuItem key={option.id} value={option.id}>{option.title}</MenuItem>
                ))}
            </MUISelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    );
};