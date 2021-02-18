import React from 'react';

import { Input } from 'antd'

const Browser = () => {
    return ( 
        <div className='browser-container'>
            <Input.Search
            placeholder="Busca aquí las empresas que ya forman parte de este cambio."
            />
        </div>
     );
}
 
export default Browser;