import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import logo from '../../assets/images/logo.png'

const Navbar = () => {
    return ( 
        <div className='nav'>
            <MenuOutlined style={{ fontSize: '25px', color: '#ffffff'}} />
            <img src={logo}/>
            <ShoppingCartOutlined style={{ fontSize: '35px', color: '#ffffff'}} />
        </div>
     );
}
 
export default Navbar;