import logo from '../../assets/logo.png'
import './footer.css'

const Footer = function () {
    return (
        <footer className="footer">
            <div className="footerContent">
                <img src={logo} className='footerLogo'></img>
                <p className='footerData'>Data provided by Marvel. © 2024 MARVEL</p>
                <a href="https://developer.marvel.com/" className="footerLink">developer.marvel.com</a>
            </div>
        </footer>
    )
}

export default Footer;