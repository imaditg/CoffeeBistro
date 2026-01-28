import React from "react";
import Header from "../header";
import Footer from "../Footer";
import BreadCrumbs from "./breadCrumbs";
import LeftPart from "./leftPart";
import RightPart from "./rightPart";
const Sale = () => {
    const FirstSec = React.useRef(null);
    return (
        <>
            <Header FirstRef={FirstSec}/>
             <BreadCrumbs FirstRef = {FirstSec} firstName = {'home'} secondName = {'Shop'}/>
             <div className="shop-main">
                <div className="container">
                    <div className="shop-inner">
                        <LeftPart />
                        <RightPart />
                    </div>
                </div>
             </div>
             <Footer />
             <a href="/#" className="wats"><span></span></a>
        </>
    )
}

export default Sale;