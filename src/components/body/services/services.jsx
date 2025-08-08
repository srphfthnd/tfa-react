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
                            <div className='card-desc'>
                                <ul>
                                    <li>Equipment Financing</li>
                                    <li>Leasing Solutions</li>
                                    <li>Refinancing Options</li>
                                    <li>Customized Payment Plans</li>
                                    <li>Consulting Services</li>
                                    <li>Tailored Financing Solutions</li>
                                    <li>Support and Maintenance Financing</li>
                                    <li>Technology Upgrades and Trade-In Programs</li>
                                </ul>
                            </div>
                        </div>
                        <div className='card'>
                            <img className='card-img' src={servicesimg3} />
                            <div className='card-title'>Invoice Factoring</div>
                            <div className='card-desc'>
                                <ul>
                                    <li>Advance Rates and Fee Structures</li>
                                    <li>Cash Flow Management</li>
                                    <li>Credit Control and Management</li>
                                    <li>Customized Factoring Solutions</li>
                                    <li>Flexible Contract Terms</li>
                                    <li>Financial Consulting and Advisory</li>
                                </ul>
                            </div>
                        </div>
                        <div className='card'>
                            <img className='card-img' src={servicesimg2} />
                            <div className='card-title'>Digital Presence Optimization</div>
                        </div>
                        <div className='card'>
                            <img className='card-img' src={servicesimg4} />
                            <div className='card-title'>Equipment Leasing</div>
                            <div className='card-desc'>
                                <ul>
                                    <li>Leasing Options</li>
                                    <li>Flexible Payment Plans</li>
                                    <li>Maintenance and Support</li>
                                    <li>End-of-Lease Options</li>
                                    <li>Consulting Services</li>
                                    <li>Custom Leasing Solutions</li>
                                </ul>
                            </div>
                        </div>
                        <div className='card'>
                            <img className='card-img' src={servicesimg5} />
                            <div className='card-title'>Card Credit Processing</div>
                            <div className='card-desc'>
                                <ul>
                                    <li>Merchant Account Setup</li>
                                    <li>Payment Gateway Integration</li>
                                    <li>Reporting and Analytics</li>
                                    <li>Customer Support</li>
                                    <li>Online Payment Solutions</li>
                                    <li>Flexible Payment Options</li>
                                    <li>Customizable Solutions</li>
                                    <li>Fee Structures</li>
                                </ul>
                            </div>
                        </div>
                        <div className='card'>
                            <img className='card-img' src={servicesimg7} />
                            <div className='card-title'>Business Credit Establishment</div>
                            <div className='card-desc'>
                                <ul>
                                    <li>Business Credit Assessment</li>
                                    <li>Credit Building Stategies</li>
                                    <li>Credit Monitoring and Alerts</li>
                                    <li>Vendor and Supplier Relationships</li>
                                    <li>Business Credit Cards</li>
                                    <li>Financial State Preparation</li>
                                    <li>Credit Line Establishment</li>
                                    <li>Loan Application Support</li>
                                    <li>Risk Management and Compliance</li>
                                    <li>Credit Reporting Disputes</li>
                                </ul>
                            </div>
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
                                    <li>Invoice Factoring</li>
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