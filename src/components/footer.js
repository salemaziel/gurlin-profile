import React from 'react'
import '../css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
    <div className="footer">
        <ul class="icons">
		    <li><a href="#" class="icon brands fa-twitter">
            <FontAwesomeIcon icon={faTwitter} />
            </a></li>

			<li><a href="#" class="icon brands fa-facebook-f">
                <FontAwesomeIcon icon={faFacebookF} />
            </a></li>
			
            <li><a href="https://www.instagram.com/getitgurlin" class="icon brands fa-instagram">
                <FontAwesomeIcon icon={faInstagram} />
            </a></li>
                
            <li><a href="https://www.linkedin.com/in/rachelgurlin" class="icon brands fa-linkedin-in">
                <FontAwesomeIcon icon={faLinkedinIn} />
                </a></li>
    		    
		</ul>
    </div>
)

export default Footer