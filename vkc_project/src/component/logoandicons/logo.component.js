import React from 'react';
import vkclogo from '../effects/vkc-trainings-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faInstagram,faTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons';
import './logo.css';
function LogoComponent() {
  return (
<div className='s-display'>
    <div>
        <img className="logo" src={vkclogo}></img>
    </div>
    <div>
        <h5 id="s-font">Follow Us On</h5>
    </div>
    <div className='social-media-icon d-flex'>
        <div className='m-2'>
        <a href ="http://facebook.com">
            <FontAwesomeIcon icon={faFacebook}/>
        </a>
        </div>
        <div className='m-2'>
        <a href="http://youtube.com">
        <FontAwesomeIcon icon={faYoutube} />
        </a>
        </div>
        <div className='m-2'>
        <a href="http://twitter.com">
            <FontAwesomeIcon icon={faTwitter}/>
        </a>
        </div>
        <div className='m-2'>
        <a href="http://instagram.com">
            <FontAwesomeIcon icon={faInstagram}/>
        </a>
        </div>
    </div>
</div>
  )
}

export default LogoComponent;