import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Help from '../help/Help';

const Header = () => {
    const displayDesktop = () => {
        return (
            <Toolbar>
                <Grid container>
                    <Grid item xs={11.5}>
                        <Typography variant="h6">Pace Checker</Typography>
                    </Grid>

                    <Grid container item xs={0.5} justifyContent="flex-end">
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
