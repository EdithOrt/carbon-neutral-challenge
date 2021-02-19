import React from 'react';
import {Carousel} from 'antd'
import MapReusable from '../MapReusable';

const CarouselProject = ({projectName,img, lat, long}) => {
    return ( 
        <Carousel autoplay>
            <div>
              <h3>{projectName}</h3>
              <img src={img} />
            </div>
            <div>
              <MapReusable
              lat = {lat}
              long = {long}
              />
            </div>
        </Carousel>
     );
}
 
export default CarouselProject;