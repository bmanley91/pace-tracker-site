import { Box, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import React from 'react';

const Source = (props) => {
    return (
        <Box>
            <Typography variant="body2" color="text.secondary" align="center">
                <em>Source:</em>{' '}
                <Link color="inherit" href={props.url} target="_blank">
                    {props.displayName}
                </Link>
            </Typography>
        </Box>
    );
};

export default Source;
