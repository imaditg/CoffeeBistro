import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const SecondDiv = () => {
    return (
        <>
            <div className="main-title">
                <div className="container">
                    <span>shop by category</span>
                </div>
            </div>
            <div className="second-outer">
                <div className="container">
                    <Splide className="second-inner" options={{
                        perPage: 6, gap: '30px', pagination: false,
                        arrows: true, autoplay: true, speed: 800, interval: 2000, rewind: 'true', breakpoints: {
                            1199: { perPage: 5 },
                            991: { perPage: 4 }, 767: { perPage: 3 }, 479: { perPage: 2 }
                        }
                    }} >

                        <SplideSlide className="second-item">
                            <div className="item-inner">
                                <a href="/#" className="second-img">
                                    <img src="./../../assets/images/home005.webp" alt="Pic_1" />
                                </a>
                                <span>shop</span>
                            </div>
                        </SplideSlide>
                        <SplideSlide className="second-item">
                            <div className="item-inner">
                                <a href="/#" className="second-img">
                                    <img src="./../../assets/images/home006.webp" alt="Pic_2" />
                                </a>
                                <span>electronics</span>
                            </div>
                        </SplideSlide>
                        <SplideSlide className="second-item">
                            <div className="item-inner">
                                <a href="/#" className="second-img">
                                    <img src="./../../assets/images/home007.webp" alt="Pic_3" />
                                </a>
                                <span>sports</span>
                            </div>
                        </SplideSlide>
                        <SplideSlide className="second-item">
                            <div className="item-inner">
                                <a href="/#" className="second-img">
                                    <img src="./../../assets/images/home008.webp" alt="Pic_4" />
                                </a>
                                <span>fashion</span>
                            </div>
                        </SplideSlide>
                        <SplideSlide className="second-item">
                            <div className="item-inner">
                                <a href="/#" className="second-img">
                                    <img src="./../../assets/images/home009.webp" alt="Pic_5" />
                                </a>
                                <span>furniture</span>
                            </div>
                        </SplideSlide>
                        <SplideSlide className="second-item">
                            <div className="item-inner">
                                <a href="/#" className="second-img">
                                    <img src="./../../assets/images/home010.webp" alt="Pic_6" />
                                </a>
                                <span>autoparts</span>
                            </div>
                        </SplideSlide>

                    </Splide>
                </div>
            </div>
        </>
    );
}

export default SecondDiv;