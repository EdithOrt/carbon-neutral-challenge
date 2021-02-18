import React from 'react';
import Browser from '../../Browser';
import CompanyTrust from '../../CompanyTrust';

const BrowserSection = () => {
    return ( 
    <div className='browser'>
        <Browser />
        <CompanyTrust />
    </div>
    );
}
 
export default BrowserSection;