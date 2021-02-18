import React from 'react';
import Typed from 'react-typed'

const TypeWriter = ({string1, string2}) => {

    return ( 
        <Typed
            strings={[string1,string2]}
            typeSpeed={50}
            backSpeed={40}
            loop
        />
     );
}
 
export default TypeWriter;