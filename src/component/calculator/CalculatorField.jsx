import React from 'react';
import TextField from '@mui/material/TextField';

const CalculatorField = (props) => {
    return (
        <TextField
            sx={{ m: 1 }}
            label={props.label}
            value={props.field}
            onChange={(event) => {
                if (props.fieldTest(event.target.value)) {
                    props.setIsFieldValid(true);
                } else {
                    props.setIsFieldValid(false);
                }
                props.setField(event.target.value);
            }}
            onFocus={() => props.setFocus(props.fieldName)}
            error={!props.isFieldValid}
            helperText={props.helperText}
        />
    );
};

export default CalculatorField;
