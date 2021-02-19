import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../CarouselProject';

import Tab from '../Tab';

const ProjectProfile = ({name,img, lat, long, totalOffsets,aviableOffsets,coBenefits,offsetPrice,description,location,type,developer,verifier,area,jobsGenerated}) => {
    return ( 
        <div>
            <Carousel
            projectName={name} 
            img={img}
            lat={lat}
            long={long}
            />
            <Tab
            totalOffsets={totalOffsets}
            aviableOffsets={aviableOffsets}
            benefits={coBenefits}
            price={offsetPrice}
            description={description}
            location={location}
            type={type}
            developer={developer}
            verifier={verifier}
            area={area}
            jobsGenerated={jobsGenerated}
            />
            <Link to='/finca-guadalupe-zaju'>PROYECTO 1</Link>
            <Link to='/recarga-acuifero'>PROYECTO 2</Link>
            <Link to='/icico'>PROYECTO 3</Link>
        </div>
     );
}
 
export default ProjectProfile;