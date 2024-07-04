import logo from '../../assets/logo.png'
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = function() {
    return (
        <header className="Header">
            <div className='headerContent'>
                <img src={logo} className='headerLogo'></img>
                <nav className='headerButts' id='navigation'>
                    <NavLink className='headerLink' to='/characters'>Characters</NavLink>
                    <NavLink className='headerLink' to='/comics'>Comics</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;