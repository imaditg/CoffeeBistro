// import React from "react";
import Header from "../header";

const ShopFirst = () => {
    return (
        <>
            <Header />
            <div className="shop-outer-pic">
                <div className="container">
                    <div className="shop-sect1-outer">
                        <div className="shop-sect1-txt-outer">
                            <h2>our shop</h2>
                            <p className="middle">LOREM IPSUM DOLOR SIT AMET, CONSECTETURADIPISCING ELIT. DONEC AT LIGULA IN LIGULA ULTRICESVULPUTATE AT AC SAPIEN. IN JUSTO NEQUE, MALESUADAA LIBERO ET, LOREM IPSUM DOLOR SIT AMET,CONSECTETUR ADIPISCING ELIT</p>
                            <div className="button-outer">
                                <a href="/#" className="button">promotions</a>
                            </div>
                        </div>
                        <div className="shop-sect1-below-outer">
                            <div className="shop-sect1-below-inner">
                                <div className="shop-sect1-item">
                                    <div className="img-outer">
                                        <img src="./../assets/images/cof29.webp" alt="prasant" />
                                    </div>
                                    <a href="/#" className="title">brioche</a>
                                    <a href="/#" className="price">$ 24</a>
                                </div>
                                <div className="shop-sect1-item">
                                    <div className="img-outer">
                                        <img src="./../assets/images/cof30.webp" alt="cookies" />
                                    </div>
                                    <a href="/#" className="title">cookies</a>
                                    <a href="/#" className="price">$ 38</a>
                                </div>
                                <div className="shop-sect1-item">
                                    <div className="img-outer">
                                        <img src="./../assets/images/cof31.webp" alt="hotdog" />
                                    </div>
                                    <a href="/#" className="title">sandwich</a>
                                    <a href="/#" className="price">$ 56</a>
                                </div>
                                <div className="shop-sect1-item">
                                    <div className="img-outer">
                                        <img src="./../assets/images/cof32.webp" alt="pancake" />
                                    </div>
                                    <a href="/#" className="title">pancake</a>
                                    <a href="/#" className="price">$ 62</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShopFirst