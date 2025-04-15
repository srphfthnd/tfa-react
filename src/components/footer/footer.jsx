import React from 'react';
import './footer.scss';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    const pageRedirect = (page) => {
        navigate(page);
    }

    return (
        <>
            <div className='footer-container'>
                <div className='other-menu'>
                    <ul className='menu'>
                        <li className='list'><a onClick={() => pageRedirect('/contact-us')}>Contact Us</a></li>
                        <li className='list'><a>Privacy Policy</a></li>
                        <li className='list'><a>Disclaimer</a></li>
                    </ul>
                </div>
                <div className='footer-title'>
                    <h3>Gibb Consulting Inc</h3>
                </div>
                <div className='copyright'>
                    <p>Copyright © 2023 Gibb Consulting Inc - All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer;