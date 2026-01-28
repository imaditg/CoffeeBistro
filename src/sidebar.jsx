// import React from "react";
const SideBar = (input) =>{
    if(input == 1){
        document.getElementById('side-header').style.display = "block";
        document.getElementById('toggle').style.display = "none";
    }
    else if(input == 2){
        document.getElementById('toggle').style.display = "block";
        document.getElementById('side-header').style.display = "none";
    }
};

export default SideBar;