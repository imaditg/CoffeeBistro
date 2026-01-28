// import React from "react";
import ProductFirst from "./product_first";
import ProductSecond from "./product_second";
import ProductThird from "./product_third";
import Footer from "../footer";
import SideHeader from '../side-header';
import ScrollHeader from '../scrollheader';
const ProductMain = () =>{
    return(
        <>
        <SideHeader />
        <ScrollHeader />
        <ProductFirst />
        <ProductSecond />
        <ProductThird />
        <Footer />
        </>
    );
}
export default ProductMain;