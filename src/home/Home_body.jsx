import React from 'react';
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import SectionThree from './sectionThree';
import SectionFour from './sectionFour';
import SectionFive from './sectionFive';
import SectionSix from './sectionSix';
import SectionSeven from './sectionSeven';
import SectionEight from './sectionEight';
import SectionNine from './sectionNine';
import SideHeader from '../side-header';
import ScrollHeader from '../scrollheader';
const HomeBody = () =>{
    return(
        <>
        <ScrollHeader />
        <SideHeader />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
        <SectionNine />
        
        </>
    );
}

export default HomeBody;
