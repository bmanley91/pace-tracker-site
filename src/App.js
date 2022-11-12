import Container from '@mui/material/Container';
import React from 'react';

import BodyContainer from './component/body-container/BodyContainer';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import { logAnalyticsEvent } from './util/firebase';

const App = () => {
    logAnalyticsEvent('page-load');

    return (
        <Container>
            <Header />
            <BodyContainer />
            <Footer />
        </Container>
    );
};

export default App;
