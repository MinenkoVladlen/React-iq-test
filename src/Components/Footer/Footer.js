import React from 'react';
import './css/footer.css';
import footer_img from '../../img/back_footer.png';

const Footer = () => {
    return (
        <footer className="footer_back">
            <img src={footer_img} alt='footer'/>
            <img src={footer_img} alt='footer'/>
        </footer>
    )
}

export default Footer;