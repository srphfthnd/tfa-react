
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Banner() {
    return (
        <div className="nav-banner">
            <div className="nav-content contact-number">
                <FontAwesomeIcon icon={faPhone} />
                <a>
                    <span>484-678-1472</span>
                </a>
            </div>
            <div className="nav-content email">
                <FontAwesomeIcon icon={faEnvelope} />
                <a>
                    <span>MGibb@GibbConsultingInc.com</span>
                </a>
            </div>
        </div>
    );
}

export default Banner;
