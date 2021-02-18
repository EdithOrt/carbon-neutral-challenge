import React, { Fragment, useState } from 'react';
import ReactMapGL from 'react-map-gl'

import TypeWriter from '../TypeWriter'

const MapProject = () => {
    
    const [viewport, setViewport] = useState({
        width: 400,
        height: 400,
        latitude: 23.100273,
        longitude: -101.908098,
        width: 'auto',
        height: '100%',
        zoom: 4,
      });
      
    return (
        <Fragment>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken= {"pk.eyJ1IjoiZWxpdGhvcnQiLCJhIjoiY2tsOXE1dWtjMmVjczMycW1ka215bGtxbSJ9.Yh7gvuNImFz4RClUBw0PeQ"}
                mapStyle="mapbox://styles/elithort/ckl9ydp9u1e6817nnhlxmr6m4"
                onViewportChange={nextViewport => setViewport(nextViewport)}
            >
                Marcadores aquí
            </ReactMapGL>
            <div className='resume-container'>
                <div className='content-typewriter'>
                    <TypeWriter />
                </div>
                <div className='button-show-map'>
                    <button>ClickME!</button>
                </div>
            </div>
        </Fragment> 
     );
}
 
export default MapProject;