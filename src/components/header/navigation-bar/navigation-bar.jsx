import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './navigation-bar.scss'
import { ReactComponent as UserLogo } from '../../../assets/login.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function NavigationBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const pageRedirect = (page) => {
        navigate(page);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return (
        <div className='nav-keep'>
            <div className='nav-banner'>
                <div className='nav-content contact-number'>
                    <FontAwesomeIcon icon={faPhone} />
                    <a><span>484-678-1472</span></a>
                </div>
                <div className='nav-content email'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a><span>MGibb@GibbConsultingInc.com</span></a>
                </div>
            </div>
            <div className='nav-container'>
                <div className='section-nav'>
                    <div className='header-logo'>
                        <h3 className='logo'>Gibb Consulting Inc</h3>
                    </div>
                    <div className='header-menu'>
                        <ul className='menu'>
                            <li className='list'><a onClick={() => pageRedirect('/')}>Home</a></li>
                            <li className='list'><a onClick={() => pageRedirect('/our-advantage')}>Our Advantage</a></li>
                            <li className='list'><a onClick={() => pageRedirect('/services')}>Services</a></li>
                            <li className='list'><a onClick={() => pageRedirect('/about-us')}>About Us</a></li>
                            <li className='list'><a onClick={() => pageRedirect('/faq')}>FAQ</a></li>
                            <li className='list'><a onClick={() => pageRedirect('/contact-us')}>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className='header-user'>
                        <div className='user-logo'>
                            <div className='logo'>
                                <UserLogo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NavigationBar;