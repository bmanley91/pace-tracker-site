import React from 'react';
import Container from '@mui/material/Container';
import Header from './component/header/Header';
import Copyright from './component/copyright/Copyright';
import BodyContainer from './component/body-container/BodyContainer';

const App = () => {
    return (
        <Container>
            <Header />
            <BodyContainer />
            <Copyright />
        </Container>
    );
};

export default App;
