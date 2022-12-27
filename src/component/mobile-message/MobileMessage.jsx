import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React from 'react';

const MobileMessage = () => {
    return (
        <Typography textAlign="center" sx={{ pb: 4 }}>
            {'Want to calculate your pace on the go? Get Pace Checker the '}
            <Link
                color="inherit"
                href="https://apps.apple.com/us/app/pace-checker/id6444779903"
                target="_blank"
            >
                iOS App Store
            </Link>
            {' or the '}
            <Link
                color="inherit"
                href="https://play.google.com/store/apps/details?id=manley.dev.pace_tracker_app&pli=1"
                target="_blank"
            >
                Google Play Store
            </Link>
            {'.'}
        </Typography>
    );
};

export default MobileMessage;
