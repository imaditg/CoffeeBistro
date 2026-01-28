// import React from "react";
import { useEffect } from "react";
const ScrollHeader = () => {
    useEffect(() => {
        const handleScroll = () => {
            var headerTriger = document.getElementById('First-Section').offsetHeight;
            var mouseScroll = window.scrollY;
            var TotalWidth = window.innerWidth
            headerTriger = headerTriger * 1.5;
            if ((mouseScroll > headerTriger) && (TotalWidth >= 1199)) {
                document.querySelector("div.header-inner").style.display = "block";
                document.querySelector("div.header-outer").style.backgroundColor = "#2d2d2d";
                document.querySelector("div.home-logo").style.display = "none";
                document.querySelector("div.header-outer").classList.add("header-fixed");
                document.querySelector("#main-header").style.justifyContent = "space-around";
                document.querySelector('div.main-menu').style.padding = "15px";
            }
            else if((mouseScroll < headerTriger) && (TotalWidth >= 1199)) {
                document.querySelector("div.header-inner").style.display = "flex";
                document.querySelector("div.header-outer").style.backgroundColor = "transparent";
                document.querySelector("div.home-logo").style.display = "block";
                document.querySelector("div.header-outer").classList.remove("header-fixed");
                document.querySelector("div.toggle").style.display = "none";
            }
            else if((mouseScroll <= headerTriger) && (TotalWidth < 1199)){
                document.querySelector("div.header-inner").style.display = "block";
                document.querySelector("div.toggle").style.display = "block";
                // document.querySelector(".wrong").style.zIndex = "99";
            }
        };
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize",handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize",handleScroll);
    };


    }, []);
    return null;

}
// window.addEventListener("scroll",ScrollHeader);
export default ScrollHeader;