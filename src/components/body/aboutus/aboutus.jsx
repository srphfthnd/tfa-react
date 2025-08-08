import React from 'react';
import './aboutus.scss';
import aboutusimg from '../../../assets/aboutus.webp';
import ContactUs from '../contactus/contactus';

function AboutUs() {
    return (
        <>
            <div className='aboutus-container'>
                <div className='aboutus-img'>
                    <img src={aboutusimg} />
                </div>
                <div className='aboutus-title'>About Us</div>
                <div className='aboutus-message'>
                    <p>
                        <span>Welcome to Gibb Consulting, a leading small business lending and consulting company that has been serving entrepreneurs and business owners since 2005. Our mission is to provide personalized, expert financial guidance and support to help businesses succeed and thrive.</span>
                    </p>
                    <p>
                        <span><br /></span>
                    </p>
                    <p>
                        <span>At Gibb Consulting, we understand that every business is unique, and that's why we offer customized solutions tailored to meet the specific needs and goals of each client. Whether you need funding to expand your operations, purchase equipment, increase marketing or simply manage cash flow, we offer a wide range of lending solutions to help you achieve your objectives.</span>
                    </p>
                    <p>
                        <span><br /></span>
                    </p>
                    <p>
                        <span>In addition to our lending services, we also provide consulting and advisory services to help businesses improve their operations, increase profitability, and achieve sustainable growth. Our team of experienced professionals has a deep understanding of the challenges facing small businesses, and we work closely with our clients to identify opportunities for improvement and develop effective strategies to achieve success.</span>
                    </p>
                    <p>
                        <span><br /></span>
                    </p>
                    <p>
                        <span>Over the years, we have helped thousands of businesses across a wide range of industries achieve their goals, and we are proud to have earned a reputation as a trusted partner and advisor. At Gibb Consulting, Inc, we are committed to providing the highest level of service and support to our clients, and we look forward to helping your business succeed&nbsp;and&nbsp;thrive.</span>
                    </p>
                </div>
            </div>
            <ContactUs isComponent={true}/>
        </>
    );
}

export default AboutUs;