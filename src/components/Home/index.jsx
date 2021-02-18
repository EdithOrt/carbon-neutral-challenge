import React, { Fragment } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import BrowserSection from './BrowserSection';
import MapSection from './MapSection';
import WelcomeSection from './WelcomeSection';

const Home = () => {
    return ( 
        <Fragment>
            <WelcomeSection />
            <BrowserSection />
            <MapSection />
        </Fragment>
     );
}
 
export default Home;