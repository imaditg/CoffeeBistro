// import React from "react";
import Header from "../header";
const SectionOne = () =>{
    return(
        <>
        <Header />
        <div className="outer-pic" >
                 {/* Header */}
                <div className="home-sect1-outer" >
                    <div className="home-sect1-main-text-outer">
                        <div className="container">
                            <div className="home-sect1-main-text-inner">
                                <div className="home-sect1-top-text">
                                    <p>Start your Day with a <span>Coffee</span></p>
                                </div>
                                <div className="home-sect1-btm-text">
                                    <p>Way too much coffee. But if it weren't for the coffee, I'd have no identifiable personality whatsoever.</p>
                                </div>
                                <a href="/#" className="home-sect1-btn">our offer</a>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="./../assets/images/cof08.webp" alt="border-picture" className="cup-support" />
                <div className="coffee-cup-outer">
                    <img src="./../assets/images/cof06.webp" alt="coffee-cup" />
                    <img src="./../assets/images/cof07.webp" alt="coffee-cup-smoke" className="coffee-smoke" />
                </div>
            </div>
        </>
    );
}
export default SectionOne; 