// import React from "react";

const AboutSection3 = () => {
    return (
        <>
            <div className="about-sect3-outer">
                <div className="container">
                    <div className="about-sect3-inner">
                        <div className="about-sect3-item-outer">
                            <div className="about-sect3-item-inner">
                                <div className="about-sect3-left-above">
                                    <h3>our bakery</h3>
                                    <p>Avenue Marina 34568 NY (U.S)</p>
                                    <p>+1 374 474 637</p>
                                    <p className="last">info@bakery.com</p>
                                </div>
                                <div className="about-sect3-left-below">
                                    <div className="about-sect3-left-img">
                                        <img src="./../assets/images/cof44.webp" alt="bread" />
                                    </div>
                                        <h3>opening times</h3>
                                        <div className="about-sect3-schedule">
                                            <div className="txt"><span className="left">mon</span> <span className="right">17:00 to 23:00</span></div>
                                            <div className="txt"><span className="left">wed</span> <span className="right">19:00 to 24:00</span></div>
                                            <div className="txt"><span className="left">thu</span> <span className="right">14:00 to 18:00</span></div>
                                            <div className="txt"><span className="left">fri</span> <span className="right">16:00 to 24:00</span></div>
                                            <div className="txt"><span className="left">sat/sun</span> <span className="right">20:00 to 4:00</span></div>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="about-sect3-item-outer">
                            <div className="about-sect3-item-inner">
                                <div className="about-sect3-img">
                                    <img src="./../assets/images/cof64.webp" alt="bread-coffee" />
                                </div>
                            </div>
                        </div>
                        <div className="about-sect3-item-outer">
                            <div className="about-sect3-item-inner">
                                <div className="about-sect3-img">
                                    <img src="./../assets/images/cof65.webp" alt="Lemon-tart" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default AboutSection3;