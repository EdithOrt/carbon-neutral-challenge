import React from 'react';
import logo from '../../assets/images/logo.png'

import {FacebookFilled, InstagramFilled, LinkedinFilled, TwitterCircleFilled} from '@ant-design/icons'

const Footer = () => {
    return ( 
        <div className='footer'>
            <div>
                <img src={logo} alt='logo'/>
            </div>
            <div style={{marginBottom: '45px'}}>
                <FacebookFilled style={{fontSize: '30px', color:'#ffffff', marginRight:'10px'}} />
                <InstagramFilled style={{fontSize: '30px', color:'#ffffff', marginRight:'10px'}} />
                <LinkedinFilled style={{fontSize: '30px', color:'#ffffff', marginRight:'10px'}} />
                <TwitterCircleFilled style={{fontSize: '30px', color:'#ffffff', marginRight:'10px'}} />
            </div>
        </div>
     );
}
 
export default Footer;