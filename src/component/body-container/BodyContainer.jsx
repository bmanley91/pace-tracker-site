import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import Calculator from '../calculator/Calculator';
import { Typography } from '@mui/material';
import Preset from '../preset/Preset';
import Source from '../source/Source';

const BodyContainer = () => {
    const { t } = useTranslation();

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
            <Typography variant="h6" textAlign="center" sx={{ pb: 2 }}>
                {t('instructions')}
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
