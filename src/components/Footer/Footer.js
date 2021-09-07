import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMapMarkerAlt, faPhone, faFax } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faYoutube,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import './Footer.css'

const Footer = () => {
    const getYear = new Date().getFullYear();
    const fullYear = `${getYear}`;

    return (
        <div className="Footer">
            <div className="Footer__mission">
                <p tabIndex="0">
                    <span className="light_blue">Our mission</span> is to know every student
                </p>
                <p tabIndex="0">by name and need.</p>
            </div>
            <div    className="Footer__icons" 
                    tabIndex="0" 
                    ariaLabel="Clickable social media icons">

                <FontAwesomeIcon className="Footer__icons-item" icon={faTwitter} />
                <FontAwesomeIcon className="Footer__icons-item" icon={faFacebook} />
                <FontAwesomeIcon className="Footer__icons-item" icon={faYoutube} />
                <FontAwesomeIcon className="Footer__icons-item" icon={faInstagram} />
                <FontAwesomeIcon className="Footer__icons-item" icon={faLinkedinIn} />
          </div>

            <address className="Footer__address">
                <p tabIndex="0" className="address__Street">
                    <FontAwesomeIcon className="Footer__icons-address" icon={faMapMarkerAlt} />5515 Ohio Drive
                </p>
                <p tabIndex="0" className="address__City_State">Frisco, Texas 75035</p>
                <p className="address__Phone">
                    <a href="tel:4696336000">
                        <FontAwesomeIcon 
                        className="Footer__icons-address" 
                        icon={faPhone} /> Phone 469.633.6000
                    </a>
                </p>
                <p tabIndex="0" className="address__Fax">
                    <FontAwesomeIcon 
                        className="Footer__icons-address" 
                        icon={faFax} /> Fax 469.633.6050
                </p>
            </address>

            <div className="Footer__copyright">
                <p tabIndex="0" ariaLabel="Copyright Frisco Independent School">
                    ©<span id="getDate">{fullYear}</span> 
                    Frisco Independent School District
                </p>
                <a
                    ariaLabel="Open Site Feedback Page"
                    className="animation__underline"
                    href="http://www.friscoisd.org/departments/communications/web-services"
                    >Site Feedback
                </a>

                <a
                    ariaLabel="Open Contact Us Page"
                    className="animation__underline"
                    href="http://www.friscoisd.org/about/resources-and-information/contact-frisco-isd"
                    >Contact Us
                </a>

                <a
                    ariaLabel="Open Accessibility Page"
                    className="animation__underline"
                    href="http://www.friscoisd.org/departments/communications/web-services/accessibility"
                    >Accessibility
                </a>

                <a
                    ariaLabel="Open Legal Notices Page"
                    className="animation__underline"
                    href="https://www.friscoisd.org/disclaimer"
                    >Legal Notices
                </a>
        </div>
        </div>
    );
}

export default Footer;
