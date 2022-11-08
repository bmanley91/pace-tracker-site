import React from 'react';
import { MenuItem, TextField } from '@mui/material';
import { presets } from '../../data/presets';

const Preset = (props) => {
    const handleChange = (event) => {
        props.updatePreset(event.target.value);
    };

    return (
        <TextField
            select
            label="Preset"
            id="preset-select"
            onChange={handleChange}
            sx={{ width: '50%', mx: '25%', mb: 2 }}
        >
            <MenuItem value={''}>{<em>None</em>}</MenuItem>
            <MenuItem value={presets.nycMenFullQualifier}>
                {presets.nycMenFullQualifier.displayName}
            </MenuItem>
            <MenuItem value={presets.nycMenHalfQualifier}>
                {presets.nycMenHalfQualifier.displayName}
            </MenuItem>
            <MenuItem value={presets.nycWomenFullQualifier}>
                {presets.nycWomenFullQualifier.displayName}
            </MenuItem>
            <MenuItem value={presets.nycWomenHalfQualifier}>
                {presets.nycWomenHalfQualifier.displayName}
            </MenuItem>
        </TextField>
    );
};

export default Preset;
