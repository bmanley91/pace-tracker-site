import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import Help from '../help/Help';

const Header = () => {
    const displayDesktop = () => {
        return (
            <Toolbar>
                <Grid container>
                    <Grid item xs={11.5}>
                        <Typography variant="h4">Pace Checker</Typography>
                    </Grid>

                    <Grid container item xs={0.4} justifyContent="flex-end">
                        <Help />
                    </Grid>
                </Grid>
            </Toolbar>
        );
    };

    return (
        <header>
            <AppBar position="sticky">{displayDesktop()}</AppBar>
        </header>
    );
};

export default Header;
