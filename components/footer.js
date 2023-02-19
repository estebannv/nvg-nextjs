
import Image from 'next/image';
import Logo from '../public/logo-transparent.png';

export default function Footer() {
    return (
    <div>
        <footer id="site-footer" className="site-footer">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4 mb-xl-0">
                    <div className="widget-footer">
                        <a href="index.html">
                            <Image src={Logo} alt="Logo" />
                        </a>
                        <p>We provides a full range of interior design, architectural design.</p>
                        <div className="footer-social list-social">
                            <ul>
                                <li><a href="http://facebook.com" target="_self"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="http://twitter.com" target="_self"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="http://linkedin.com" target="_self"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="http://instagram" target="_self"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4 mb-xl-0">
                    <div className="widget-footer">
                        <h6>Contacts</h6>
                        <ul className="footer-list">
                            <li className="footer-list-item">
                                <span className="list-item-icon"><i className="ot-flaticon-place"></i></span>
                                <span className="list-item-text">411 University St, Seattle, USA</span>
                            </li>
                            <li className="footer-list-item">
                                <span className="list-item-icon"><i className="ot-flaticon-mail"></i></span>
                                <span className="list-item-text">theratio_interior@mail.com</span>
                            </li>
                            <li className="footer-list-item">
                                <span className="list-item-icon"><i className="ot-flaticon-phone-call"></i></span>
                                <span className="list-item-text">+1 800 456 789 123</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4 mb-md-0">
                    <div className="widget-footer widget-contact">
                        <h6>Latest Projects</h6>
                        <ul>
                            <li><a href="#">Stylish Family Appartment</a></li>
                            <li><a href="#">Modern Villa in Belgium</a></li>
                            <li><a href="#">Private House in Spain</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div className="footer-bottom">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
                    <p>Copyright © 2021 Theratio by <a className="text-light" href="#">ThemeModern</a>. All Rights Reserved.</p>
                </div>
                <div className="col-lg-5 col-md-12 align-self-center">
                    <ul className="icon-list-items inline-items justify-content-lg-end">
                        <li className="icon-list-item inline-item">
                            <a href="#"><span className="icon-list-text">Terms of use</span></a>
                        </li>
                        <li className="icon-list-item inline-item">
                            <a href="#"><span className="icon-list-text">Privacy Environmental Policy</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>);
}