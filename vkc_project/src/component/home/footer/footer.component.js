import React from 'react'
import { BsFacebook, BsTwitter, BsGoogle, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Logo from './logo/Logo';

function Footer() {
    return (
        <div>
            <div className="">

                <footer
                    className="text-center text-lg-start text-white"
                    style={{ backgroundColor: "#208bee" }}
                >
                    <div className="container p-4 pb-0">

                        <section className="">

                            <div className="row">
                                <div className="col-md-3 col-lg-3 col-xl-3">
                                    <div className="" >
                                        <Logo />
                                    </div>
                                    <p >
                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit.
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />


                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Services</h6>
                                    <p>
                                        <a className="text-white">link-1</a>
                                    </p>
                                    <p>
                                        <a className="text-white">link-2</a>
                                    </p>
                                    <p>
                                        <a className="text-white">link-3</a>
                                    </p>
                                    <p>
                                        <a className="text-white">link-4</a>
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                    <p><i className="fas fa-home mr-3"></i> Hyderabad , Telangana</p>
                                    <p><i className="fas fa-envelope mr-3"></i> vkc@gmail.com</p>
                                    <p><i className="fas fa-phone mr-3"></i> + 91 7989 5397 05</p>
                                    <p><i className="fas fa-print mr-3"></i> + 91 9999 999 999</p>
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                                    <Link
                                        className="btn btn-primary btn-floating m-1"
                                        style={{ backgroundColor: "#3b5998" }}
                                        href="#!"
                                        role="button"
                                    ><i className=""> <BsFacebook /></i
                                    ></Link>

                                    <Link
                                        className="btn btn-primary btn-floating m-1"
                                        style={{ backgroundColor: "#55acee" }}
                                        href="#!"
                                        role="button"
                                    ><i className=""> <BsTwitter /></i
                                    ></Link>

                                    <Link
                                        className="btn btn-primary btn-floating m-1"
                                        style={{ backgroundColor: "#dd4b39" }}
                                        href="#!"
                                        role="button"
                                    ><i className=""><BsGoogle /> </i
                                    ></Link>

                                    <Link
                                        className="btn btn-primary btn-floating m-1"
                                        style={{ backgroundColor: "#ac2bac" }}
                                        href="#!"
                                        role="button"
                                    ><i className=""> <BsInstagram /></i
                                    ></Link>

                                    <Link
                                        className="btn btn-primary btn-floating m-1"
                                        style={{ backgroundColor: "#0082ca" }}
                                        href="#!"
                                        role="button"
                                    ><i className=""><BsLinkedin /> </i
                                    ></Link>

                                    <Link
                                        className="btn btn-primary btn-floating m-1"
                                        style={{ backgroundColor: "#333333" }}
                                        href="#!"
                                        role="button"
                                    ><i className=""><BsGithub /> </i
                                    ></Link>
                                </div>
                            </div>

                        </section>

                    </div>

                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    >
                        © 2022 Copyright:
                        <a className="text-white" href="/"
                        >VKC training</a
                        >
                    </div>

                </footer>

            </div>

        </div>
    )
}

export default Footer
