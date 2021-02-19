import React from 'react';
import ProjectProfile from '../ProjectProfile';

const Project1 = ({data}) => {
    console.log(data[0].img)
    return ( 
        <div className='projects-views'>
            <ProjectProfile
            img={data[0].img}
            lat={23.100273}
            long={-101.908098}
            data={'data[0]'}
            />
        </div>
     );
}
 
export default Project1;