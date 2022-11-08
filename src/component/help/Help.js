import React from 'react';
import HelpIcon from '@mui/icons-material/Help';
import Popover from '@mui/material/Popover';
import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Help = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <IconButton
                aria-label="help"
                aria-describedby={id}
                onClick={handleClick}
            >
                <HelpIcon style={{ color: 'white' }} />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                PaperProps={{
                    style: { width: '30%' },
                }}
            >
                <Box sx={{ p: 2 }}>
                    <Typography variant="h6">How to</Typography>
                    <Typography>
                        Enter the distance of your race in miles. Then enter
                        either your pace or total time and the other will be
                        automatically calculated
                    </Typography>
                </Box>
            </Popover>
        </>
    );
};

export default Help;
