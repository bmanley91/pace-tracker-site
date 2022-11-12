import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React from 'react';

const Shill = () => {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mt: 1 }}
        >
            {'Do you enjoy this site? '}
            <Link color="inherit" href="https://ko-fi.com/bmanley91">
                Buy me a coffee ☕️
            </Link>
        </Typography>
    );
};

export default Shill;
