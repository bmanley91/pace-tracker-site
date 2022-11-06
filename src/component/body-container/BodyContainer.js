import React from 'react';
import Container from '@mui/material/Container';
import Calculator from '../calculator/Calculator';

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
            <Calculator />
        </Container>
    );
};

export default BodyContainer;
