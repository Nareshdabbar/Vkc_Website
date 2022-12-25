import React from 'react';
// import vkclogo from '../../../public/effects/vkc-trainings-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faInstagram,faTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons';
import './logo.css';
function LogoComponent() {
  return (
<div className='s-display'>
    <div>
        <img className="logo" src={"../../effects/vkc-trainings-logo.png"}></img>
    </div>

    <div className='social-media-icon'>
    <div>
        <h5 id="s-font">Follow Us On</h5>
    </div>
        <div className=''>
        <a href ="http://facebook.com">
            <FontAwesomeIcon icon={faFacebook}/>
        </a>
     
        <a href="http://youtube.com">
        <FontAwesomeIcon icon={faYoutube} />
        </a>
      
        <a href="http://twitter.com">
            <FontAwesomeIcon icon={faTwitter}/>
        </a>
    
        <a href="http://instagram.com">
            <FontAwesomeIcon icon={faInstagram}/>
        </a>
        </div>
    </div>
</div>
  )
}

export default LogoComponent;