import React from 'react';
// import vkclogo from '../../../public/effects/vkc-trainings-logo.png';
import { BsFacebook, BsTwitter, BsGoogle, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import './logo.css';
import { Link } from 'react-router-dom';
function LogoComponent() {
    return (
        <div className='s-display'>
            <div>
                <h5 id="s-font">Follow Us On</h5>
            </div>
            <div className='social-media-icon'>

                <Link
                    className="btn btn-primary btn-floating"
                    style={{ backgroundColor: "#3b5998" }}
                    to='/'
                > <BsFacebook /></Link>

                <Link
                    className="btn btn-primary btn-floating"
                    style={{ backgroundColor: "#55acee" }}
                    to='/'
                ><BsTwitter /></Link>

                <Link
                    className="btn btn-primary btn-floating"
                    style={{ backgroundColor: "#dd4b39" }}
                    to='/'
                ><BsGoogle /></Link>

                <Link
                    className="btn btn-primary btn-floating"
                    style={{ backgroundColor: "#ac2bac" }}
                    to='/'
                > <BsInstagram /></Link>

                <Link
                    className="btn btn-primary btn-floating "
                    style={{ backgroundColor: "#0082ca" }}
                    to='/'
                ><BsLinkedin /> </Link>

                <Link
                    className="btn btn-primary btn-floating "
                    style={{ backgroundColor: "green" }}
                  to='/'
                ><BsGithub />
                </Link>

            </div>
        </div>
    )
}

export default LogoComponent;