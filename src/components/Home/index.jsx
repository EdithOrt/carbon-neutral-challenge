import React, { Fragment } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import BrowserSection from './BrowserSection';
import MapSection from './MapSection';
import WelcomeSection from './WelcomeSection';

const Home = () => {
    return ( 
        <Fragment>
            <Navbar/>
            <WelcomeSection />
            <BrowserSection />
            <MapSection />
            <Footer />
        </Fragment>
     );
}
 
export default Home;