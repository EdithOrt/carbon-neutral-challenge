import React from 'react';
import {Carousel} from 'antd'
import MapReusable from '../MapReusable';

const CarouselProject = ({img, lat, long}) => {
    return ( 
        <Carousel autoplay>
            <div>
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