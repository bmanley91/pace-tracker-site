import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import React from 'react';

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
