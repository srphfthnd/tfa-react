import './services.scss';
import servicesimg1 from '../../../assets/servicesimg1.webp';
import servicesimg2 from '../../../assets/servicesimg2.webp';
import servicesimg3 from '../../../assets/servicesimg3.webp';
import servicesimg4 from '../../../assets/servicesimg4.webp';
import servicesimg5 from '../../../assets/servicesimg5.webp';
import servicesimg6 from '../../../assets/servicesimg6.webp';
import servicesimg7 from '../../../assets/servicesimg7.webp';
import servicesimg8 from '../../../assets/servicesimg8.webp';

function Services() {
    return (
        <>
            <div className='servicespage'>
                <div className='grid-menu'>
                    <h3>Some of our Services</h3>
                    <div className='grid'>
                        <div className='card'>
                            <img className='card-img' src={servicesimg1} />
                            <div className='card-title'>Equipment Financing</div>
                        </div>
                        <div className='card'>
                            <img className='card-img' src={servicesimg3} />
                            <div className='card-title'>Invoice Factoring</div>
                        </div>
                        <div className='card'>
                            <img className='card-img' src={servicesimg2} />
                            <div className='card-title'>Digital Presence Optimization</div>
                        </div>
                        <div className='card'>
                            <img className='card-img' src={servicesimg4} />
                            <div className='card-title'>Equipment Leasing</div>
                        </div>
                        <div className='card'>
                            <img className='card-img' src={servicesimg5} />
                            <div className='card-title'>Card Credit Processing</div>
                        </div>
                        <div className='card'>
                            <img className='card-img' src={servicesimg6} />
                            <div className='card-title'>Digital Presence Optimization</div>
                        </div>
                        <div className='card'>
                            <img className='card-img' src={servicesimg7} />
                            <div className='card-title'>Business Credit Establishment</div>
                        </div>
                        <div className='card'>
                            <img className='card-img' src={servicesimg8} />
                            <div className='card-title'>Business Loans Offered</div>
                            <div className='card-desc'>
                                <ul>
                                    <li>Line of Credit</li>
                                    <li>Revenue Based Financing</li>
                                    <li>Healthcare Financing</li>
                                    <li>Equipment Loans</li>
                                    <li>SBA Loan</li>
                                    <li>Asset Based Loan</li>
                                    <li>Invoice&nbsp;Factoring</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='online-appointments'>
                    <h3>Online Appointments</h3>
                </div>
                <div className='coming-soon'>
                    <h2>New services are coming soon!</h2>
                </div>
            </div>
        </>
    )
}

export default Services;