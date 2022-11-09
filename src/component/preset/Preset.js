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
            // renderOption={(props, option) => (
            //     <Box
            //         component="li"
            //         sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
            //         {...props}
            //     >
            //         <img
            //             loading="lazy"
            //             width="20"
            //             src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            //             srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            //             alt=""
            //         />
            //         {option.label} ({option.code}) +{option.phone}
            //     </Box>
            // )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a country"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
};

export default Preset;
