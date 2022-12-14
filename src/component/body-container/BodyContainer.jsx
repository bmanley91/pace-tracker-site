import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

import Calculator from '../calculator/Calculator';
import MobileMessage from '../mobile-message/MobileMessage';
import Preset from '../preset/Preset';
import Source from '../source/Source';

const BodyContainer = () => {
    const [preset, setPreset] = useState(null);

    const shouldDisplaySource = () => preset && preset.source;

    return (
        <Container
            sx={{
                bgcolor: 'background.paper',
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
                minWidth: 300,
            }}
        >
            <MobileMessage />
            <Typography variant="h6" textAlign="center" sx={{ pb: 2 }}>
                Enter race info to calculate time and pace or select a preset
            </Typography>
            <Preset updatePreset={setPreset} />
            <Calculator preset={preset} />
            {shouldDisplaySource() && (
                <Source
                    url={preset.source.url}
                    displayName={preset.source.displayName}
                />
            )}
        </Container>
    );
};

export default BodyContainer;
