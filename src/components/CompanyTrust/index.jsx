import React from 'react';
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import image4 from '../../assets/images/image4.png'
import image5 from '../../assets/images/image5.png'

const CompanyTrust = () => {
    return ( 
        <div className='company-trust-container' style={{marginTop:'50px'}}>
            <div>
                <p style={{fontSize:'25px', marginTop:'50px'}}>Ellos ya confían en nosotros</p>
            </div>
            <div className='images-logos-container'>
                <img alt='img1' style={{marginRight:'20px', marginTop:'20px'}} src={image1}/>
                <img alt='img2' style={{marginRight:'20px', marginTop:'20px'}} src={image2}/>
                <img alt='img3' style={{marginRight:'20px', marginTop:'20px'}} src={image3}/>
                <img alt='img4' style={{marginRight:'20px', marginTop:'20px'}} src={image4}/>
                <img alt='img5' style={{marginRight:'20px', marginTop:'20px'}} src={image5}/>
            </div>
        </div>
     );
}
 
export default CompanyTrust;