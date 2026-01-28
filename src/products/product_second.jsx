// import React from "react";

const ProductSecond = () => {
    return (
        <>
            <div className="product-sect2-outer">
                <div className="container">
                    <div className="product-sect2-inner">
                        <div className="product-sect2-left">
                            <div className="product-item-inner">
                                <h4>about us</h4>
                                <h3>Quality & expertise </h3>
                                <h3>at your service !</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis egestas suscipit. Integer et ligula eu lacus malesuada egestas. Morbi id magna vitae leo sagittis lobortis. Aliquam ipsum mi, sollicitudin nec<u> venenatis vel, convallis ac libero.</u> Aliquam et neque felis. Ut tortor ante, dictum eu mattis a, dignissim sed tellus. Nunc non nulla nec magna hendrerit.</p>
                                <div className="product-item-left-img">
                                    <div className="left-img-outer">
                                        <img src="./../assets/images/cof42.webp" alt="cookies" />
                                    </div>
                                    <div className="img-inner">
                                        <img src="./../assets/images/cof43.webp" alt="down-arrow" />
                                    </div>
                                    <p className="reser">reserve your : <span className="birth">birthday</span></p>
                                    <p className="past">Pastry and Cakes for your Party !</p>
                                    <a href="/#" className="button">book now</a>
                                </div>
                            </div>
                        </div>
                        <div className="product-sect2-right">
                            <div className="product-item-inner">
                                <div className="product-sect2-item">
                                    <div className="product-img-outer">
                                        <img src="./../assets/images/cof44.webp" alt="brown-cookies" />
                                    </div>
                                    <h3>find us here</h3>
                                    <p className="first">Avenue York 34568 NY (U.S)</p>
                                    <p className="second">+1 374 474 637</p>
                                    <p className="third">sweet@bakery.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductSecond;