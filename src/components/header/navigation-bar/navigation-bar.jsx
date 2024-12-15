import React from 'react';
import './navigation-bar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export function NavigationBar() {
    return (
        <div className='nav-bar'>
            <div className='nav-container'>
                <div className='nav-bar-col first-col'>
                    <div className='nav-contact'>
                        <div className='nav-icon orange'>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <label>info@gmail.com</label>
                    </div>
                    <div className='nav-contact'>
                        <div className='nav-icon orange'>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <label>+909-654-9999</label>
                    </div>
                </div>
                <div className='nav-bar-col second-col'>
                    <ul className='nav-icons'>
                        <li className='nav-icon white'>
                            <FontAwesomeIcon icon={faFacebook} />
                        </li>
                        <li className='nav-icon white'>
                            <FontAwesomeIcon icon={faTwitter} />
                        </li>
                        <li className='nav-icon white'>
                            <FontAwesomeIcon icon={faTiktok} />
                        </li>
                        <li className='nav-icon white'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};