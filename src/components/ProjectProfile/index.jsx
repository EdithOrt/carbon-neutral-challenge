import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../CarouselProject';

import Tab from '../Tab';

const ProjectProfile = ({img, lat, long, data}) => {
    console.log(data[0])
    let projectOne = data[0];
    return ( 
        <div>
            <Carousel 
            img={img}
            lat={lat}
            long={long}
            />
            <Tab
            content={projectOne}
            />
            <Link to='#'>PROYECTO 1</Link>
            <Link to='#'>PROYECTO 2</Link>
            <Link to='#'>PROYECTO 3</Link>
        </div>
     );
}
 
export default ProjectProfile;