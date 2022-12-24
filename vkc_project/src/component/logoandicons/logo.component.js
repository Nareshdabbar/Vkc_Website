import React from 'react';
import vkclogo from '../effects/vkc-trainings-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faTelegram,faTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons';
import './logo.css';
function LogoComponent() {
  return (
<div className='s-display'>
    <div>
        <img className="logo" src={vkclogo}></img>
    </div>
    <div className='singleCol social-media-icon d-flex justify-content-evenly'>
        <a href="http://facebook.com">
            <FontAwesomeIcon icon={faFacebook}/>
        </a>
        <a href="http://youtube.com">
        <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="http://twitter.com">
            <FontAwesomeIcon icon={faTwitter}/>
        </a>
    </div>
</div>
  )
}

export default LogoComponent;