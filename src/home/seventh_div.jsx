import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const SeventhDiv = () => {

    return (
        <>
            <div className="main-title seventh-title">
                <div className="container">
                    <span>shop by brand</span>
                </div>
            </div>

            <div className="seventh-outer">
                <div className="container">
                    <Splide className="seventh-inner" options={{autoplay:true,speed: 800,rewind:true,perMove:1, interval: 2000,perPage:5,
                    pagination:false,
                        breakpoints:{
                            991:{
                                perPage:4
                            },
                            767:{
                                perPage:3
                            },
                            479:{
                                perPage:2
                            }
                        }
                    }}>
                        <SplideSlide className="seventh-item">
                            <a href="/#" >
                                <img src="./../../assets/images/home029.webp" alt="seventh-1" />
                            </a>
                        </SplideSlide>
                        <SplideSlide className="seventh-item">
                            <a href="/#" >
                                <img src="./../../assets/images/home030.webp" alt="seventh-2" />
                            </a>
                        </SplideSlide>
                        <SplideSlide className="seventh-item">
                            <a href="/#" >
                                <img src="./../../assets/images/home031.webp" alt="seventh-3" />
                            </a>
                        </SplideSlide>
                        <SplideSlide className="seventh-item">
                            <a href="/#" >
                                <img src="./../../assets/images/home032.webp" alt="seventh-4" />
                            </a>
                        </SplideSlide>
                        <SplideSlide className="seventh-item">
                            <a href="/#" >
                                <img src="./../../assets/images/home033.webp" alt="seventh-5" />
                            </a>
                        </SplideSlide>
                        <SplideSlide className="seventh-item">
                            <a href="/#" >
                                <img src="./../../assets/images/home029.webp" alt="seventh-5" />
                            </a>
                        </SplideSlide>
                        <SplideSlide className="seventh-item">
                            <a href="/#" >
                                <img src="./../../assets/images/home030.webp" alt="seventh-5" />
                            </a>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </>
    )
}

export default SeventhDiv