// import React from "react";
import { ImCancelCircle } from "react-icons/im";
import SideBar from "./sidebar";
const SideHeader = () => {
    return (
        <>
            <div className="side-header" id="side-header">
                <ul>
                    <li><button type="button" id="close-btn" onClick={() => SideBar(2)}><ImCancelCircle className="wrong" /></button></li>
                    <li><a href="/#" >Home</a></li>
                    <li><a href="/#" >about</a>
                        <ul className="sub-menu">
                            <li><a href="/#">about us 1</a></li>
                            <li><a href="/#">about us 2</a></li>
                            <li><a href="/#">about us 3</a></li>
                            <li><a href="/#">blog</a>
                                <ul className="s1-sub-menu">
                                    <li><a href="/#">archive</a></li>
                                    <li><a href="/#">single post</a>
                                        <ul className="s2-sub-menu">
                                            <li><a href="/#">right sidebar</a></li>
                                            <li><a href="/#">full width</a></li>
                                            <li><a href="/#">left sidebar</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="/#" >products</a>
                        <ul className="sub-menu">
                            <li><a href="/#">products</a></li>
                            <li><a href="/#">single products</a></li>
                            <li><a href="/#">chef</a></li>
                            <li><a href="/#">products gallery</a>
                                <ul className="s1-sub-menu">
                                    <li><a href="/#">gallery 1</a></li>
                                    <li><a href="/#">gallery 2</a></li>
                                    <li><a href="/#">gallery 3</a></li>
                                </ul>
                            </li>
                            <li><a href="/#">cost calculator</a></li>
                        </ul>
                    </li>
                    <li><a href="/#" >pages</a>
                        <ul className="sub-menu">
                            <li><a href="/#">services</a>
                                <ul className="s1-sub-menu">
                                    <li><a href="/#">services 1</a></li>
                                    <li><a href="/#">services 2</a></li>
                                    <li><a href="/#">single service</a>
                                    <ul className="s2-sub-menu">
                                        <li><a href="/#">right sidebar</a></li>
                                        <li><a href="/#">full width</a></li>
                                        <li><a href="/#">left sidebar</a></li>
                                    </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="/#">team</a></li>
                            <li><a href="/#">testimonial</a></li>
                            <li><a href="/#">faq</a></li>
                            <li><a href="/#">blog</a>
                                <ul className="s1-sub-menu">
                                    <li><a href="/#">archive</a></li>
                                    <li><a href="/#">single post</a></li>
                                </ul>
                            </li>
                            <li><a href="/#">gallery</a></li>
                            <li><a href="/#">coming soon</a></li>
                        </ul>
                    </li>
                    <li><a href="/#" >shop</a>
                        <ul className="sub-menu">
                            <li><a href="/#">shop 1</a></li>
                            <li><a href="/#">shop 2</a></li>
                            <li><a href="/#">single product</a></li>
                            <li><a href="/#">cart</a></li>
                            <li><a href="/#">check out</a></li>
                        </ul>
                    </li>
                    <li><a href="/#" >contact</a>
                        <ul className="sub-menu">
                            <li><a href="/#">contact 1</a></li>
                            <li><a href="/#">contact 2</a></li>
                            <li><a href="/#">contact 3</a></li>
                            <li><a href="/#">Book a table</a></li>
                        </ul>
                    </li>
                    <li><a href="/#" className="reser">reserve</a></li>
                </ul>
            </div>
        </>
    );
}
export default SideHeader;