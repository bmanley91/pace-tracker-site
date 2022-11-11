import Box from '@mui/system/Box';
import React from 'react';
import Copyright from '../copyright/Copyright';
import Shill from '../shill/shill';

const Footer = () => {
    return (
        <Box>
            <Shill />
            <Copyright />
        </Box>
    );
};

export default Footer;
