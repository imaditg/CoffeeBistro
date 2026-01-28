import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const FourthDiv = () => {
    return (
        <>
            <div className="main-title fourth-title">
                <div className="container">
                    <span>new products</span>
                </div>
            </div>

            <div className="fourth-outer fourth-splide">
                <div className="container">


                    <Splide hasTrack={false} options={{ perPage: 4,perMove:1,rewind:true, gap:'30px', pagination: false, arrows: true, breakpoints:{
                        991:{
                            perPage:3
                        },
                        767:{
                            perPage:2
                        }
                    }}} >

                        <div className='splide__arrows'>
                            <button className="splide__arrow splide__arrow--prev" ></button>
                            <button className="splide__arrow splide__arrow--next"></button>
                        </div>

                        <SplideTrack className="fourth-splide-inner">
                            <SplideSlide className="fourth">
                                <div className="item-inner">
                                    <a href="/#" className="fourth-img">
                                        <img src="./../../assets/images/home015.webp" alt="fourth-1" />
                                    </a>
                                    <div className="img-bottom">
                                        <a href="/#">Quick view</a>
                                    </div>
                                </div>
                                <a href="/#" className="name">eius tempora</a>
                                <h2>$379.00</h2>
                                <a href="/#" className="main-btn">add to cart</a>
                                <p className="new">new</p>
                                <p className="sale">on sale!</p>
                            </SplideSlide>

                            <SplideSlide className="fourth">
                                <div className="item-inner">
                                    <a href="/#" className="fourth-img">
                                        <img src="./../../assets/images/home016.webp" alt="fourth-2" />
                                    </a>
                                    <div className="img-bottom">
                                        <a href="/#">Quick view</a>
                                    </div>
                                </div>
                                <a href="/#" className="name">porro quisquam</a>
                                <h2>$319.00</h2>
                                <a href="/#" className="main-btn">add to cart</a>
                                <p className="new">new</p>
                                <p className="sale">on sale!</p>
                            </SplideSlide>

                            <SplideSlide className="fourth">
                                <div className="item-inner">
                                    <a href="/#" className="fourth-img">
                                        <img src="./../../assets/images/home017.webp" alt="fourth-3" />
                                    </a>
                                    <div className="img-bottom">
                                        <a href="/#">Quick view</a>
                                    </div>
                                </div>
                                <a href="/#" className="name">architecto beatae</a>
                                <h2>$359.00</h2>
                                <a href="/#" className="main-btn">add to cart</a>
                                <p className="new">new</p>
                            </SplideSlide>

                            <SplideSlide className="fourth">
                                <div className="item-inner">
                                    <a href="/#" className="fourth-img">
                                        <img src="./../../assets/images/home018.webp" alt="fourth-4" />
                                    </a>
                                    <div className="img-bottom">
                                        <a href="/#">Quick view</a>
                                    </div>
                                </div>
                                <a href="/#" className="name">reprehenderit beatae</a>
                                <h2>$349.00</h2>
                                <a href="/#" className="main-btn">add to cart</a>
                                <p className="new">new</p>
                            </SplideSlide>

                            <SplideSlide className="fourth">
                                <div className="item-inner">
                                    <a href="/#" className="fourth-img">
                                        <img src="./../../assets/images/home024.webp" alt="fourth-4" />
                                    </a>
                                    <div className="img-bottom">
                                        <a href="/#">Quick view</a>
                                    </div>
                                </div>
                                <a href="/#" className="name">undeiste numquam</a>
                                <h2>$399.00</h2>
                                <a href="/#" className="main-btn">add to cart</a>
                                <p className="new">new</p>
                                <p className="sale">on sale!</p>
                            </SplideSlide>

                            <SplideSlide className="fourth">
                                <div className="item-inner">
                                    <a href="/#" className="fourth-img">
                                        <img src="./../../assets/images/home026.webp" alt="fourth-4" />
                                    </a>
                                    <div className="img-bottom">
                                        <a href="/#">Quick view</a>
                                    </div>
                                </div>
                                <a href="/#" className="name">aperiam dolore</a>
                                <h2>$389.00</h2>
                                <a href="/#" className="main-btn">add to cart</a>
                                <p className="new">new</p>
                            </SplideSlide>

                            <SplideSlide className="fourth">
                                <div className="item-inner">
                                    <a href="/#" className="fourth-img">
                                        <img src="./../../assets/images/home026.webp" alt="fourth-4" />
                                    </a>
                                    <div className="img-bottom">
                                        <a href="/#">Quick view</a>
                                    </div>
                                </div>
                                <a href="/#" className="name">numquam eius</a>
                                <h2>$279.00</h2>
                                <a href="/#" className="main-btn">add to cart</a>
                                <p className="new">new</p>
                            </SplideSlide>

                            <SplideSlide className="fourth">
                                <div className="item-inner">
                                    <a href="/#" className="fourth-img">
                                        <img src="./../../assets/images/home027.webp" alt="fourth-4" />
                                    </a>
                                    <div className="img-bottom">
                                        <a href="/#">Quick view</a>
                                    </div>
                                </div>
                                <a href="/#" className="name">modi tempora</a>
                                <h2>$349.00</h2>
                                <a href="/#" className="main-btn">add to cart</a>
                                <p className="new">new</p>
                                <p className="sale">on sale!</p>
                            </SplideSlide>
                        </SplideTrack>
                    </Splide>
                </div>
            </div>
        </>
    )
}

export default FourthDiv;