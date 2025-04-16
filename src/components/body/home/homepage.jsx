import React, { useState } from 'react';
import './homepage.scss';
import homebackground from '../../../assets/home-bg.webp';
import homebackground2 from '../../../assets/homebg2.jpg';
import homebackground3 from '../../../assets/homebg3.jpg';
import homeimg1 from '../../../assets/home-img1.webp';
import homeimg2 from '../../../assets/home-img2.webp';
import homeimg3 from '../../../assets/home-img3.webp';
import { ReactComponent as PlusSign } from '../../../assets/plus-sign-see-more.svg';
import { ReactComponent as MinusSign } from '../../../assets/minus-sign-see-more.svg';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState({
        A: false,
        B: false,
        C: false
    });

    const toggleExpand = (key) => {
        setExpanded( prev => ({
            ...prev,
            [key]: !prev[key]
        }))
    }

    const pageRedirect = (page) => {
        navigate(page);
    }

    return (
        <div className='section-container'>
            <div className='section section-a'>
                <div className='slides'>
                    <img className='home-background slide' src={homebackground} />
                    <img className='home-background slide' src={homebackground2} />
                    <img className='home-background slide' src={homebackground3} />
                    <img className='home-background slide' src={homebackground} />
                </div>
            </div>
            <div className='section section-b'>
                <div className='intro'>
                    <div className='title'>
                        <h1>Experienced Business Consulting</h1>
                    </div>
                    <div className='caption'>
                        <p><span>Gibb Consulting, Inc has been successfully advising and assisting small and medium sized businesses since early 2005</span></p>
                    </div>
                    <div className='button' onClick={() => pageRedirect('/contact-us')}>
                        <div className='call-us'>
                            <a>Call Us now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section section-c'>
                <div className='content'>
                    <div className='title'>What We Do</div>
                    <div className='list'>
                        <div className='card'>
                            <div className='card-img'>
                                <img className="card-image" src={homeimg1}/>
                            </div>
                            <div className='card-title'>Business Loans Offered</div>
                            <div className={`card-desc ${ expanded.A ? 'card-desc-full' : '' }`}>Business loans are financial products designed to provide funding to entrepreneurs and small business owners to help them start, expand, or manage their businesses. These loans are typically offered by banks, credit unions, and other financial institutions, and can be used for a variety of business-related purposes, such as purchasing inventory or equipment, financing new projects, or covering day-to-day expenses. Business loans come in a range of types and structures, including term loans, lines of credit, and SBA loans, each with its own requirements and repayment terms.</div>
                            <div className='card-desc-show'>
                                <span className='show-more' onClick={() => toggleExpand('A')}>{ expanded.A ? <><MinusSign/>Show Less</> : <><PlusSign/>Show More</>}</span> 
                            </div>
                        </div>
                        <div className='card'>
                        <div className='card-img'>
                                <img className="card-image" src={homeimg2}/>
                            </div>
                            <div className='card-title'>Equipment Financing</div>
                            <div className={`card-desc ${ expanded.B ? 'card-desc-full' : '' }`}>Equipment financing is a type of business loan that provides funds specifically for the purchase or lease of equipment needed to operate a business. This type of financing can be used to purchase various types of equipment, such as machinery, vehicles, computers, and other essential tools. Equipment financing allows businesses to acquire the equipment they need without having to pay the full cost upfront, which can help conserve cash flow and improve financial flexibility. Equipment financing is typically provided by banks, credit unions, and other financial institutions, and may have varying interest rates and repayment terms depending on the lender and type of financing. </div>
                            <div className='card-desc-show'>
                                <span className='show-more' onClick={() => toggleExpand('B')}>{ expanded.B ? <><MinusSign/>Show Less</> : <><PlusSign/>Show More</>}</span> 
                            </div>
                        </div>
                        <div className='card'>
                        <div className='card-img'>
                                <img className="card-image" src={homeimg3}/>
                            </div>
                            <div className='card-title'>Credit Card Processing</div>
                            <div className={`card-desc ${ expanded.C ? 'card-desc-full' : '' }`}>Credit card processing is the process of electronically verifying and authorizing a credit card transaction. It involves a series of steps, including the capture and transmission of cardholder information, verification of the cardholder's identity and available credit, and authorization of the transaction by the card issuer. Credit card processing is essential for businesses that accept credit card payments, and is typically facilitated through a third-party payment processor or merchant services provider. These providers offer a range of solutions, such as point-of-sale systems, mobile payment options, and online payment gateways, to help businesses securely and efficiently process credit card transactions. </div>
                            <div className='card-desc-show'>
                                <span className='show-more' onClick={() => toggleExpand('C')}>{ expanded.C ? <><MinusSign/>Show Less</> : <><PlusSign/>Show More</>}</span> 
                            </div>
                        </div>
                    </div>
                    <div className='subscribe'>
                        <label className="subs-input-title">Subscribe</label>
                        <form className='subs-input'>
                            <input className="subs-input-field" id='email' placeholder='' />
                            <label className="subs-input-label" for='email'>Email Address</label>
                            <div className='button'>
                                <div className='call-us'>
                                    <a>Sign Up</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;