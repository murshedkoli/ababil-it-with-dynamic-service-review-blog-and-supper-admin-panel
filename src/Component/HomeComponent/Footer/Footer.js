import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>



            <footer id="footer">

                <div class="footer-newsletter">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <h4>Connect With Us</h4>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-top">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-3 col-md-6 footer-contact">
                                <h3>Ababil It</h3>
                                <p>
                                    Bhai Bhai Super Market<br />
                                                Kalikaccha bazar, Sarail<br />
                                                    Brahmanbaria <br /><br />
                                    <strong>Phone:</strong> 017 81 98 14 86<br />
                                    <strong>Email:</strong> murshedkoli@gmail.com<br />
                                </p>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <Link>Home</Link></li>
                                    <li><i class="bx bx-chevron-right"></i> <Link>About us</Link></li>
                                    <li><i class="bx bx-chevron-right"></i> <Link>Services</Link></li>
                                    <li><i class="bx bx-chevron-right"></i> <Link>Terms of service</Link></li>
                                    <li><i class="bx bx-chevron-right"></i> <Link>Privacy policy</Link></li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <Link>Web Design</Link></li>
                                    <li><i class="bx bx-chevron-right"></i> <Link>Web Development</Link></li>
                                    <li><i class="bx bx-chevron-right"></i> <Link>Product Management</Link></li>
                                    <li><i class="bx bx-chevron-right"></i> <Link>Marketing</Link></li>
                                    <li><i class="bx bx-chevron-right"></i> <Link>Graphic Design</Link></li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Our Social Networks</h4>
                                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                                {/* <div class="social-links mt-3">
                                                                <a  class="twitter"><i class="bx bxl-twitter"></i></a>
                                                                <a  class="facebook"><i class="bx bxl-facebook"></i></a>
                                                                <a  class="instagram"><i class="bx bxl-instagram"></i></a>
                                                                <a  class="google-plus"><i class="bx bxl-skype"></i></a>
                                                                <a  class="linkedin"><i class="bx bxl-linkedin"></i></a>
                                                            </div> */}
                            </div>

                        </div>
                    </div>
                </div>

                <div class="container footer-bottom clearfix">
                    <div class="copyright">
                        &copy; Copyright <strong><span>Arsha</span></strong>. All Rights Reserved
                                                    </div>
                    <div class="credits">

                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
            </footer>




        </div>
    );
};

export default Footer;