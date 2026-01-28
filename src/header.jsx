// import React from "react";
import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import SideBar from "./sidebar";
// import Productpage from "./Productpage";
const Header = () => {
    return (
        <>
        
            {/* <div className="temp-pic"> */}
                <div className="header-outer">
                    <div className="container">
                        <div className="header-inner">
                            <div className="home-logo">
                                <a href="/#"> <img src="./../assets/images/cof04.webp" alt="Home-logo" /> </a>
                            </div>
                            <div className="main-menu">
                                <ul id="main-header">
                                    <li><Link to="/">home</Link></li>
                                    <li><Link to = "/about">about</Link>
                                        <ul className="sub-menu">
                                            <li><a href="/#">about us 1</a></li>
                                            <li><a href="/#">about us 2</a></li>
                                            <li><a href="/#">about us 3</a></li>
                                            <li><a href="/#">blog<GoTriangleRight style={{ float: 'right', fontSize: "18px", fontWeight: "700" }} /></a>
                                                <ul className="sub2-menu">
                                                    <li><a href="/#">archive</a></li>
                                                    <li><a href="/#">single post<GoTriangleRight style={{ float: 'right', fontSize: "18px", fontWeight: "700" }} /></a>
                                                        <ul className="sub3-menu">
                                                            <li><a href="/#">right sidebar</a></li>
                                                            <li><a href="/#">full width</a></li>
                                                            <li><a href="/#">left sidebar</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link to="/product">products</Link>
                                        <ul className="sub-menu">
                                            <li><a href="/#">products</a></li>
                                            <li><a href="/#">single product</a></li>
                                            <li><a href="/#">chef</a></li>
                                            <li><a href="/#" >products gallery<GoTriangleRight style={{ float: 'right', fontSize: "18px", fontWeight: "700" }} /></a>
                                                <ul className="sub2-menu">
                                                    <li><a href="/#">gallery 1</a></li>
                                                    <li><a href="/#">gallery 2</a></li>
                                                    <li><a href="/#">gallery 3</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="/#">cost calculator</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/#">pages</a>
                                        <ul className="sub-menu">
                                            <li><a href="/#" >services<GoTriangleRight style={{ float: 'right', fontSize: "18px", fontWeight: "700" }} /></a>
                                                <ul className="sub2-menu">
                                                    <li><a href="/#">service 1</a></li>
                                                    <li><a href="/#">service 2</a></li>
                                                    <li><a href="/#">single service</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="/#">team</a></li>
                                            <li><a href="/#">testimonial</a></li>
                                            <li><a href="/#">faq</a></li>
                                            <li><a href="/#" >blog<GoTriangleRight style={{ float: 'right', fontSize: "18px", fontWeight: "700" }} /></a>
                                                <ul className="sub2-menu">
                                                    <li><a href="/#">archive</a></li>
                                                    <li><a href="/#">single post<GoTriangleRight style={{ float: 'right', fontSize: "18px", fontWeight: "700" }} /></a>
                                                        <ul className="sub3-menu">
                                                            <li><a href="/#">right sidebar</a></li>
                                                            <li><a href="/#">full width</a></li>
                                                            <li><a href="/#">left sidebar</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="/#">gallery</a></li>
                                            <li><a href="/#">coming soon</a></li>
                                        </ul>
                                    </li>
                                    <li><Link to={"/shop"}>shop</Link>
                                        <ul className="sub-menu">
                                            <li><a href="/#">shop 1</a></li>
                                            <li><a href="/#">shop 2</a></li>
                                            <li><a href="/#">single product</a></li>
                                            <li><a href="/#">cart</a></li>
                                            <li><a href="/#">checkout</a></li>
                                        </ul>
                                    </li>
                                    <li><Link to= {"/contact"}>contact</Link>
                                        <ul className="sub-menu">
                                            <li><a href="/#">contact 1</a></li>
                                            <li><a href="/#">contact 2</a></li>
                                            <li><a href="/#">contact 3</a></li>
                                            <li><a href="/#">book a table</a></li>
                                        </ul>
                                    </li>
                                    <li className="reser"><a href="/#">reserve</a></li>
                                </ul>
                            </div>
                            <div className="toggle" id="toggle"><button type="button" id="btn-open" onClick={() => SideBar(1)}><RxHamburgerMenu className="toggle-btn" /></button></div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Header;