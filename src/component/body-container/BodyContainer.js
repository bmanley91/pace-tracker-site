import React from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import ProTip from '../../ProTip';

const BodyContainer = () => {
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
            <Typography variant="h4" component="h1" gutterBottom>
                Create React App example
            </Typography>
            <ProTip />
        </Container>
    );
};

export default BodyContainer;
