import React, { useState } from 'react';
import './contactus.scss';

function ContactUs() {

    const [expanded, setExpanded] = useState(true);

    const toggleExpand = () => {
        setExpanded(!expanded);
    }

    return (
        <>
            <div className='contactus-container'>
                <div className='form-title'>
                    <h3>Contact Us</h3>
                </div>
                <div className='form-column'>
                    <div className='form-column-a'>
                        <div className='message'>Drop us a line!</div>
                        <div className='subs-input'>
                            <input className="subs-input-field" id='name' placeholder='' />
                            <label className="subs-input-label" for='name'>Name</label>
                        </div>
                        <div className='subs-input'>
                            <input className="subs-input-field" id='email' placeholder='' />
                            <label className="subs-input-label" for='email'>Email *</label>
                        </div>
                        <div className='subs-input text-area-m'>
                            <textarea type='text' className="subs-input-area" id='message' placeholder='' />
                            <label className="subs-input-label text-area" for='message'>Message</label>
                        </div>
                        <div className='button'>
                            <div className='call-us'>
                                <a>Send</a>
                            </div>
                        </div>
                        <div className='form-note'>
                            <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                        </div>
                    </div>
                    <div className='form-column-b'>
                        <div className='message'>Better yet, see us in person!</div>
                        <div className='message sub-message'>We love our customers, so feel free to visit during normal business hours.</div>
                        <div className='message'>Gibb Consulting Inc</div>
                        <div className='message sub-message'>
                            <h4>Phone: 484-678-1472</h4>
                            <h4>Email: MGibb@GibbConsultingInc.com</h4>
                        </div>
                        <div className='message'>Hours</div>
                        <div className='message sub-message'>
                            {
                                expanded 
                                ? <a onClick={toggleExpand}>Open today <span className='sched-theme'>09:00 am - 05:00 pm</span></a>
                                : 
                                    <>
                                        <table className='sched-table' style={{lineHeight: 1.25}}>
                                            <tbody onClick={toggleExpand}>
                                                <tr>
                                                    <td>Mon</td>
                                                    <td>09:00 am - 05:00 pm</td>
                                                </tr>
                                                <tr>
                                                    <td>Tue</td>
                                                    <td>09:00 am - 05:00 pm</td>
                                                </tr>
                                                <tr>
                                                    <td>Wed</td>
                                                    <td>09:00 am - 05:00 pm</td>
                                                </tr>
                                                <tr>
                                                    <td>Thu</td>
                                                    <td>09:00 am - 05:00 pm</td>
                                                </tr>
                                                <tr>
                                                    <td>Fri</td>
                                                    <td>09:00 am - 05:00 pm</td>
                                                </tr>
                                                <tr>
                                                    <td>Sat</td>
                                                    <td>Closed</td>
                                                </tr>
                                                <tr>
                                                    <td>Sun</td>
                                                    <td>Closed</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs;