import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const FirstDiv = ({ FirstRef }) => {

    return (
        <>
            <div ref={FirstRef}>
                <Splide className="first-outer" hasTrack={false} options={{ arrows: true, autoplay: true, interval: 3000, speed: 800, type: 'loop', pauseOnHover: true, pagination: false }}>
                    <div className='splide__arrows'>
                        <button className="splide__arrow splide__arrow--prev prevs" ></button>
                        <button className="splide__arrow splide__arrow--next next"></button>
                    </div>
                    <SplideTrack>
                        <SplideSlide className="first-inner">
                            <img src='./../../assets/images/home004.webp' alt='swing-chair' />
                            <div className="container">
                                <a href='/#' className='txt  first-first'>
                                    <p className='upper'>get <span>your copy</span> with </p>
                                    <p className='middle'><span className='disc'> 20</span>% discount</p>
                                    <p className='lower'>Sit with luxury</p>
                                    <button type='button' className='main-btn'>shop today</button>
                                </a>
                            </div>
                        </SplideSlide>
                        <SplideSlide className="first-inner">
                            <img src='./../../assets/images/home038.webp' alt='relax-chair' />
                            <div className="container">
                                <a href='/#' className='txt first-second'>
                                    <p className='upper'>up to <span>30</span>% off </p>
                                    <p className='middle'> sale going on </p>
                                    <p className='third'>printed sofa</p>
                                    <p className="lower">Reflecting your image</p>
                                    <button type='button' className='main-btn'>shop today</button>
                                </a>
                            </div>
                        </SplideSlide>
                        <SplideSlide className="first-inner">
                            <img src='./../../assets/images/home037.webp' alt='work-table' />
                            <div className="container">
                                <a href='/#' className='txt first-third'>
                                    <p className='upper'>get <span>mega sale</span> offer</p>
                                    <p className='middle'>to renovate your </p>
                                    <p className='third'>office</p>
                                    <p className="lower">Crafted with excellence</p>
                                    <button type='button' className='main-btn'>shop today</button>
                                </a>
                            </div>
                        </SplideSlide>
                    </SplideTrack>
                </Splide>
            </div>
        </>
    )
}

export default FirstDiv;