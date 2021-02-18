import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Navbar from "../components/Navbar";
import SectionDataProject from '../components/SectionDataProject';


const Routes = () => {
    return ( 
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/finca-guadalupe-zaju'>
                    <SectionDataProject />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
     );
}
 
export default Routes;