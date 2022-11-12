import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React from 'react';

import { presets } from '../../resources/presets-list';
import { logAnalyticsEvent } from '../../util/firebase';

const Preset = (props) => {
    const handleChange = (newValue) => {
        logAnalyticsEvent('preset-selected');
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
