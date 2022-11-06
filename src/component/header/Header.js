import { AppBar, Toolbar } from '@mui/material';
import React from 'react';

const Header = () => {
    const displayDesktop = () => {
        return <Toolbar>Pace Checker</Toolbar>;
    };

    return (
        <header>
            <AppBar position="sticky">{displayDesktop()}</AppBar>
        </header>
    );
};

export default Header;
