import React from 'react';
import './reviewus.scss';
import ContactUs from '../contactus/contactus';

function ReviewUs() {
    return (
        <>  
            <ContactUs/>
            <div className='review-container'>
                <h1>Reviews</h1>
                <div className='coming-soon'>
                    <h2>Reviews coming soon!</h2>
                </div>
            </div>
        </>
    )
}

export default ReviewUs;