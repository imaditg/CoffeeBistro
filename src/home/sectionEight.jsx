// import React from "react";
import { VscPlayCircle } from "react-icons/vsc";
const SectionEight = () =>{
    return(
        <>
        <div className="home-sect8-outer">
            <div className="home-sect8-inner">
                <div className="sect8-img-outer">
                    <img src="./../assets/images/cof27.webp" alt="cooffees" />
                    <div className="img-overlay"></div>
                </div>
                <div className="sect8-txt-outer">
                    <div className="container">
                        <h2 className="visit">visit our cafe</h2>
                        <h3 className="check">check all products</h3>
                        <a href="/#" className="play"><VscPlayCircle /></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default SectionEight;