import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Navbar from "../components/Navbar";
import Project1 from '../components/Projects/Project1';
import Project2 from '../components/Projects/Project2';
import Project3 from '../components/Projects/Project3';
import GetData from '../utils/getData';


const Routes = () => {
    const data = GetData();
    console.log(data[2])
    return ( 
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/finca-guadalupe-zaju'>
                    <Project1
                     data={data[0]}
                    />
                </Route>
                {/* {data.map((project) => (
                    <Route path='/proyectos'>
                    <Project1
                     data={data[0]}
                    />
                    </Route>
                ))} */}
                <Route path='/recarga-acuifero'>
                    <Project2 
                    data={data[1]}
                    />
                </Route>
                <Route path='/icico'>
                    <Project3 
                    data={data[2]}
                    />
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