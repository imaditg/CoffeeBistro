import React from 'react'
import Header from '../header'
import Footer from '../Footer'
import FirstDiv from './first_div'
import SecondDiv from './second_div'
import ThirdDiv from './third_div'
import FourthDiv from './fourth_div'
import FifthDiv from './fifth_div'
import SixthDiv from './sixth_div'
import SeventhDiv from './seventh_div'

const Home = () => {
    const Firstsec = React.useRef(null);
    return (
        <>
            <Header FirstRef = {Firstsec}/>
            <FirstDiv FirstRef = {Firstsec}/>
            <SecondDiv />
            <ThirdDiv />
            <FourthDiv />
            <FifthDiv />
            <SixthDiv />
            <SeventhDiv />
            <Footer />
            <a href="/#" className="wats"><span></span></a>
        </>
    )
}

export default Home