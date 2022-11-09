import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { presets } from '../../data/presets-list';
const Preset = (props) => {
    const handleChange = (newValue) => {
        props.updatePreset(newValue);
    };

    return (
        <Autocomplete
            id="preset-autoselect"
            sx={{ width: '75%', mx: '12%', mb: 2 }}
            options={presets}
            autoHighlight
            getOptionLabel={(option) => option.displayName}
            onChange={(_, newValue) => {
                handleChange(newValue);
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Select a Preset"
                    inputProps={{
                        ...params.inputProps,
                    }}
                />
            )}
        />
    );
};

export default Preset;
