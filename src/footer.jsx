// import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { LiaAngleRightSolid } from "react-icons/lia";

const Footer = () => {
    return (
        <>

            <div className="footer-outer ">

                {/* <img src="./../assets/images/cof01.webp" alt="coffeeFooter" /> */}

                <div className="footer-inner">
                    <div className="container">
                        <div className="footer-upper">
                            <div className="footer-upper-division">
                                <div className="footer-upper-item">
                                    <div className="footer-upper-item-image">
                                        <img src="./../assets/images/cof02.webp" alt="logo-white" />
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut diam et nibh <u>condimentum</u> venenatis eu ac magnasin. Quisque interdum est mauris, eget ullamcorper.
                                    </p>
                                    <div className="footer-upper-item-tags">
                                        <a href="/#" className="instagram"><IoLogoInstagram color='#ffffff' size='28px' opacity='0.9' /></a>
                                        <a href="/#" className="vine"><span></span></a>
                                        <a href="/#" className="facebook"><FaFacebookSquare color='#ffffff' size='28px' opacity='0.9' /></a>
                                        <a href="/#" className="cof-icon"><img src="./../assets/images/cof03.webp" alt="coffee-icon" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-upper-division">
                                <div className="footer-upper-right-division">
                                    <h3><a href="/#" className="headlines">about</a></h3>
                                    <ul>
                                        <li><a href="/#" ><LiaAngleRightSolid className="right-angle" /><span>about us</span></a></li>
                                        <li><a href="/#" ><LiaAngleRightSolid className="right-angle" /><span>services</span></a></li>
                                        <li><a href="/#" ><LiaAngleRightSolid className="right-angle" /><span>testimonial</span></a></li>
                                        <li><a href="/#" ><LiaAngleRightSolid className="right-angle" /><span>faq</span></a></li>
                                        <li><a href="/#" ><LiaAngleRightSolid className="right-angle" /><span>payment</span></a></li>
                                    </ul>
                                </div>
                                <div className="footer-upper-right-division">
                                    <h3><a href="/#" className="headlines">contacts</a></h3>
                                    <ul>
                                        <li><a href="/#" ><LiaAngleRightSolid className="right-angle" /><span>contact us</span></a></li>
                                        <li><a href="/#" ><LiaAngleRightSolid className="right-angle" /><span>book a table</span></a></li>
                                        <li><a href="/#" ><LiaAngleRightSolid className="right-angle" /><span>cost calc.</span></a></li>
                                        <li><a href="/#" ><LiaAngleRightSolid className="right-angle" /><span>our chef</span></a></li>
                                        <li><a href="/#" ><LiaAngleRightSolid className="right-angle" /><span>about us</span></a></li>
                                    </ul>
                                </div>
                                <div className="footer-upper-right-division">
                                    <h3><a href="/#" className="headlines">partners</a></h3>
                                    <ul>
                                        <li><a href="/#" ><LiaAngleRightSolid className="right-angle" /><span>wedding</span></a></li>
                                        <li><a href="/#" ><LiaAngleRightSolid className="right-angle" /><span>cake decorator</span></a></li>
                                        <li><a href="/#" ><LiaAngleRightSolid className="right-angle" /><span>restaurant</span></a></li>
                                        <li><a href="/#" ><LiaAngleRightSolid className="right-angle" /><span>coffee shop</span></a></li>
                                        <li><a href="/#" ><LiaAngleRightSolid className="right-angle" /><span>flowers</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="footer-bottom-inner">
                                <div className="footer-bottom-item-outer">
                                    <a href="/#" className="footer-bottom-item">bakery wordpress theme</a>
                                    <a href="/#" className="footer-bottom-item">copyright nickdark themes <span>2020</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        




        </>
    );
}


export default Footer;
