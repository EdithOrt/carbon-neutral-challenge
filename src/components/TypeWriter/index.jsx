import React from 'react';
import Typed from 'react-typed'

const TypeWriter = () => {

    return ( 
        <Typed
            strings={['Conoce más de nuestros proyectos para comprar bonos de carbono.', 'Conoce más de nuestros proyectos para comprar bonos de carbono.']}
            typeSpeed={50}
            backSpeed={40}
            loop
        />
     );
}
 
export default TypeWriter;