import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({path, name}) => {
    return ( 
        <Link className='button' to={path}>{name}</Link>
     );
}
 
export default Button;