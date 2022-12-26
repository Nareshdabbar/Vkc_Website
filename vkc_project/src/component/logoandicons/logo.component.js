import React from 'react';
// import vkclogo from '../../../public/effects/vkc-trainings-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faInstagram,faTwitter,faYoutube,faWhatsapp} from '@fortawesome/free-brands-svg-icons';
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
            <FontAwesomeIcon id='icon4' icon={faFacebook}/>
        </a>

        </div>
        <div className='m-2'>
            <a href="http://youtube.com">
                <FontAwesomeIcon id='icon1' icon={faYoutube} />
            </a>
        </div>
        <div className='m-2'>

     
        <a href="http://youtube.com">
        <FontAwesomeIcon icon={faYoutube} />
        </a>
      <a href="http://twitter.com">
            <FontAwesomeIcon id='icon2' icon={faTwitter}/>
        </a>

        </div>
        <div className='m-2'>
            <a href="http://instagram.com">
                <FontAwesomeIcon id='icon3' icon={faInstagram}/>
            </a>
        </div>
        <div className='m-2'>
        <a href="http://whatsapp.com">
            <FontAwesomeIcon id='icon5' icon={faWhatsapp}/>
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