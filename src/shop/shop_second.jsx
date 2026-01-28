// import React from "react";
const ShopSecond = () =>{
    return(
        <>
        <div className="shop-sect2-outer">
            <div className="container">
                <div className="shop-sect2-txt-outer">
                    <h3 className="shop-sect2-upper">new</h3>
                    <h2 className="shop-sect2-below">products</h2>
                </div>
                <div className="shop-sect2-main-outer">
                    <div className="shop-sect2-main-inner">
                        <div className="shop-sect2-items">
                            <div className="shop-sect2-img">
                                <img src="./../assets/images/cof33.webp" alt="cappuccino"/>
                            </div>
                            <a href="/#" className="sect2-item-name">cappuccino</a>
                            <p className="price">$ 34</p>
                            <div className="sale">sale</div>
                        </div>
                        <div className="shop-sect2-items">
                            <div className="shop-sect2-img">
                                <img src="./../assets/images/cof34.webp" alt="bread" />
                            </div>
                            <a href="/#" className="sect2-item-name">bread</a>
                            <p className="price">$ 76</p>
                        </div>
                        <div className="shop-sect2-items">
                            <div className="shop-sect2-img">
                                <img src="./../assets/images/cof35.webp" alt="frappe"/>
                            </div>
                            <a href="/#" className="sect2-item-name">frappé</a>
                            <p className="price">$ 75</p>
                        </div>
                        <div className="shop-sect2-items">
                            <div className="shop-sect2-img">
                                <img src="./../assets/images/cof36.webp" alt="tart"/>
                            </div>
                            <a href="/#" className="sect2-item-name">tart</a>
                            <p className="price">$ 23</p>
                        </div>
                        <div className="shop-sect2-items">
                            <div className="shop-sect2-img">
                                <img src="./../assets/images/cof37.webp" alt="pancake"/>
                            </div>
                            <a href="/#" className="sect2-item-name">pancake</a>
                            <p className="price">$ 62</p>
                        </div>
                        <div className="shop-sect2-items">
                            <div className="shop-sect2-img">
                                <img src="./../assets/images/cof38.webp" alt="sandwich"/>
                            </div>
                            <a href="/#" className="sect2-item-name" >sandwich</a>
                            <p className="price">$ 56</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ShopSecond