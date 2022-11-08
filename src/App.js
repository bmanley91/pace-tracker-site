import React from 'react';
import Container from '@mui/material/Container';
import Header from './component/header/Header';
import BodyContainer from './component/body-container/BodyContainer';
import Footer from './component/footer/Footer';

const App = () => {
    return (
        <Container>
            <Header />
            <BodyContainer />
            <Footer />
        </Container>
    );
};

export default App;
