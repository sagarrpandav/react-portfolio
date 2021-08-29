import {TextField} from "@material-ui/core";

export const Input = ({name, label, value, onChange, error}) => {

    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...(error && {error: true, helperText: error})}
        />
    )
};