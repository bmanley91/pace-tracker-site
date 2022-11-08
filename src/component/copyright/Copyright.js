import React from 'react';
import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Copyright = () => {
    return (
        <Box>
            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://manley.dev">
                    manley.dev
                </Link>{' '}
                {new Date().getFullYear()}
            </Typography>
        </Box>
    );
};

export default Copyright;
