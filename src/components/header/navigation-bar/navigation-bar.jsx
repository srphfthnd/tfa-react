import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './navigation-bar.scss'
import { ReactComponent as UserLogo } from '../../../assets/login.svg';
import { faBell, faCancel, faCartFlatbed, faCartPlus, faCartShopping, faClose, faCross, faCrosshairs, faShop, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons/faCartArrowDown';

function NavigationBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const [toggleSideBar, setToggleSideBar] = useState(false);

    const pageRedirect = (page) => {
        navigate(page);
        setToggleSideBar(false);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    const handleToggleBarLines = () => {
        setToggleSideBar(!toggleSideBar);
    }

    const disableScrollOnSideMenu = () => {
        document.body.style.overflowY = 'hidden'
    }

    const enableScrollOnSideMenu = () => {
        document.body.style.overflowY = ''
    }

    return (
        <div className='navbar'>
            <div className='nav-container-mobile'>
                <FontAwesomeIcon icon={faBars} onClick={() => handleToggleBarLines()}/>
                <FontAwesomeIcon icon={faCartShopping}/>
            </div>
            <div className={`nav-container ${toggleSideBar ? '' : 'hide-menu'}`}>
                <div className='section-nav'>
                    <div className='header-logo'>
                        <h3 className='logo'>Gibb Consulting Inc</h3>
                        <FontAwesomeIcon className='side-menu-close' icon={faX} onClick={() => handleToggleBarLines()}/>
                    </div>
                    <div className="header-menu">
                        <ul className={`menu ${toggleSideBar ? 'sidebar-open' : ''}`}>
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