import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ FirstRef }) => {
    const BTN_FALSE = 'BtnFalse'
    const BTN_TRUE = 'BtnTrue'
    const CLOSED_DROP = 'closed'
    function reducerFunc(state, action) {
        switch (action.type) {
            case BTN_FALSE: {
                return {
                    ...state,
                    isDisplay: action.payload,
                    value: 'inline-block'
                }
            }
            case BTN_TRUE: {
                return {
                    ...state,
                    isDisplay: action.payload,
                    value: 'none'
                }
            }
            case CLOSED_DROP: {
                return {
                    ...state,
                    isDisplay: action.payload,
                    value: 'none'
                }
            }
            default:{
                return{
                    ...state
                }
            }
        }
    }

    const [btn, dispatchBtn] = React.useReducer(reducerFunc, { isDisplay: false, value: 'none' });

    function onClick() {
        if (btn.isDisplay === false) {
            dispatchBtn({
                type: BTN_FALSE,
                payload: true
            })
        }
        else {
            dispatchBtn({
                type: BTN_TRUE,
                payload: false
            });
        }
    }

    const headerRef = React.useRef(null);
    const containerRef = React.useRef(null);
    const topRef = React.useRef(null);
    const middleRef = React.useRef(null);
    const hiddenRef = React.useRef(null)
    const [scrollYWindow, setScrollYWindow] = React.useState(window.scrollY);
    const [resizeX, setResizeX] = React.useState(window.innerWidth)
    const [containerWindow, setContainerWindow] = React.useState(0);

    const handleResizeX = React.useCallback(() => {
        setResizeX(window.innerWidth);
    }, [])

    React.useLayoutEffect(() => {
        const currentWidth = window.getComputedStyle(containerRef.current);
        setContainerWindow(currentWidth.maxWidth);
    }, [containerWindow])

    const handleScrollY = React.useCallback(() => {
        setScrollYWindow(window.scrollY);
    }, [])

    React.useEffect(() => {

        window.addEventListener('scroll', handleScrollY);
        window.addEventListener('resize', handleResizeX);
        return function () {
            window.removeEventListener('scroll', handleScrollY);
            window.removeEventListener('resize', handleResizeX);
        }
    }, [handleScrollY, handleResizeX]);

    React.useEffect(() => {
        if (resizeX >= 1199) {
            if (scrollYWindow > 215) {
                headerRef.current.classList.add('fixed-header');
                topRef.current.classList.add('scroll-hide');
                middleRef.current.classList.add('scroll-hide');
                FirstRef.current.classList.add('first-sec');
            }
            else {
                headerRef.current.classList.remove('fixed-header');
                topRef.current.classList.remove('scroll-hide');
                middleRef.current.classList.remove('scroll-hide');
                FirstRef.current.classList.remove('first-sec');
            }
            dispatchBtn(
                {
                    type: CLOSED_DROP,
                    payload: false
                }
            )
        }
        else if ((resizeX < 1199) && (resizeX >= 992)) {
            if (scrollYWindow > 215) {
                headerRef.current.classList.add('fixed-header');
                topRef.current.classList.add('scroll-hide');
                middleRef.current.classList.add('scroll-hide');
                FirstRef.current.classList.add('first-sec');
            }
            else {
                headerRef.current.classList.remove('fixed-header');
                topRef.current.classList.remove('scroll-hide');
                middleRef.current.classList.remove('scroll-hide');
                FirstRef.current.classList.remove('first-sec');
            }
            dispatchBtn(
                {
                    type: CLOSED_DROP,
                    payload: false
                }
            )
        }
        else if ((resizeX < 992) && (resizeX > 676)) {
            if (scrollYWindow > 200) {
                headerRef.current.classList.add('fixed-header');
                topRef.current.classList.add('scroll-hide');
                middleRef.current.classList.add('scroll-hide');
                FirstRef.current.classList.add('first-sec');
                hiddenRef.current.classList.add('hide-hidden');
            }
            else {
                headerRef.current.classList.remove('fixed-header');
                topRef.current.classList.remove('scroll-hide');
                middleRef.current.classList.remove('scroll-hide');
                FirstRef.current.classList.remove('first-sec');
                hiddenRef.current.classList.remove('hide-hidden');
            }
            dispatchBtn(
                {
                    type: CLOSED_DROP,
                    payload: false
                }
            )
        }
        else if ((resizeX <= 676) && (resizeX > 639)) {
            if (scrollYWindow > 200) {
                headerRef.current.classList.add('fixed-header');
                topRef.current.classList.add('scroll-hide');
                middleRef.current.classList.add('scroll-hide');
                FirstRef.current.classList.add('first-sec');
                hiddenRef.current.classList.add('hide-hidden');
            }
            else {
                headerRef.current.classList.remove('fixed-header');
                topRef.current.classList.remove('scroll-hide');
                middleRef.current.classList.remove('scroll-hide');
                FirstRef.current.classList.remove('first-sec');
                hiddenRef.current.classList.remove('hide-hidden');
            }
            dispatchBtn(
                {
                    type: CLOSED_DROP,
                    payload: false
                }
            )
        }
    }, [resizeX, scrollYWindow,FirstRef])

    const [btn1, setBtn1] = React.useState(false);
    const [btn2, setBtn2] = React.useState(false);
    const [btn3, setBtn3] = React.useState(false);

    return (
        <>
            {/* Header Top */}
            <div className='header-outer' ref={headerRef}>
                <div className='header-top-outer' ref={topRef}>
                    <div className='container'>
                        <div className='header-top-inner'>
                            <div className='header-top-item seperate'>
                                <a href='/#' className='lang'>eng</a>
                                <a href='/#' className='currency'><span>usd</span></a>
                            </div>
                            <div className='header-top-item'>
                                <a href='/#'>sign in</a>
                                <a href='/#' className='acc'>create an account</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Middle */}
                <div className='header-middle-outer' ref={middleRef}>
                    <div className='container'>
                        <div className='header-middle-inner'>
                            <div className='header-middle-item '>
                                <button type='button' onClick={onClick} className='menu-bars'></button>
                                <span><a href='/#'>
                                    <div className='middle-item-image header-logo'>
                                        <img src='./../assets/images/home001.webp' alt='main-logo' />
                                    </div>
                                </a></span>
                            </div>
                            <div className='header-middle-item'>
                                <a href='/#' className='rocket-outer'>
                                    <div className='middle-item-image'>
                                        <img src='./../assets/images/home003.webp' alt='rocket' />
                                    </div>
                                    <span>free shipping order over $1000</span>
                                </a>
                                <div className='middle-item call-item'>
                                    <a href='/#'>
                                        <div className='middle-item-image'>
                                            <img src='./../assets/images/home002.webp' alt='call' />
                                        </div>
                                        <span>we support - 27/7</span>
                                    </a>
                                </div>
                                <div className='middle-item cart-item'>
                                    <a href='/#'>
                                        <span className='cart'>my cart - 0 item(s)</span>
                                    </a>
                                    <p>There are no more items in your cart</p>
                                </div>
                            </div>
                            <div className='header-middle-item side-toggle'>
                                <div className="side-toggle-inner">
                                    <a href='/#' className='search-a'><span></span></a>
                                    <a href='/#' className='logout'><span></span></a>
                                    <a href='/#' className='addAcc'><span></span></a>
                                    <a href='/#' className='cart'><span></span></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* dropdown hidden */}
                    <div className='hidden-dropdown' style={{ display: btn.value }}>
                        <div className="container">
                            <ul>
                                <li><span><a href='/#' className='first-li'>home</a></span></li>
                                <li><sapan><Link to='/shop'>shop</Link></sapan><button onClick={() => { setBtn1(!btn1) }} className={btn1 ? 'up-arrow' : 'down-arrow'}></button>
                                    <ul className={`sub-sect ${btn1 ? 'on' : 'off'}`}>
                                        <li><span><a href="/#" >fashion</a></span><span><button className='subdown-arrow'></button></span></li>
                                        <li><span><a href="/#" >jewellery</a></span><span><button className='subdown-arrow'></button></span></li>
                                        <li><span><a href="/#" >furniture</a></span><span><button className='subdown-arrow'></button></span></li>
                                        <li><span><a href="/#" >autoparts</a></span><span><button className='subdown-arrow'></button></span></li>
                                    </ul>
                                </li>
                                <li><span><Link tp='/electronic' className='for-button' >electronics</Link></span><button onClick={() => { setBtn2(!btn2) }} className={btn2 ? 'up-arrow2' : 'down-arrow'}></button>
                                    <ul className={`sub-sect ${btn2 ? 'on' : 'off'}`}>
                                        <li><span><a href="/#" >mobiles</a></span><span><button className='subdown-arrow'></button></span></li>
                                        <li><span><a href="/#" >cameras</a></span><span><button className='subdown-arrow'></button></span></li>
                                    </ul>
                                </li>
                                <li><span><Link to='/books' className='for-button' >sports & books</Link></span><button onClick={() => { setBtn3(!btn3) }} className={btn3 ? 'up-arrow2' : 'down-arrow'}></button>
                                    <ul className={`sub-sect ${btn3 ? 'on' : 'off'}`}>
                                        <li><span><a href="/#" >sports</a></span><span><button className='subdown-arrow'></button></span></li>
                                        <li><span><a href="/#" >books</a></span><span><button className='subdown-arrow'></button></span></li>
                                    </ul>
                                </li>
                                <li><a href='/#'>sale</a></li>
                                <li><a href='/#'>contact us</a></li>
                                <li className='btn'><a href='/#'>usd $</a></li>
                                <li className='btn btn-low'><a href='/#'>english</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Hidden divivison */}
                <div className="hidden" ref={hiddenRef}>
                    <div className="container">
                        <div className="hidden-inner">
                            <a href='/#' className='rocket-outer'>
                                <div className='middle-item-image'>
                                    <img src='./../assets/images/home003.webp' alt='rocket' />
                                </div>
                                <span>free shipping order over $1000</span>
                            </a>
                            <div className='middle-item call-item'>
                                <a href='/#'>
                                    <div className='middle-item-image'>
                                        <img src='./../assets/images/home002.webp' alt='call' />
                                    </div>
                                    <span>we support - 27/7</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Header Bottom */}
                <div className='header-bottom-outer'>
                    <div className="container" ref={containerRef}>
                        <div className="header-bottom-inner">
                            <ul>
                                <li><Link to="/" className='first-drop'>home</Link></li>
                                <li><Link to="/shop" className='arrow'>shop</Link>
                                    <div className='drop-down'>
                                        <ul>
                                            <li ><a href='/#' className='high'>fashion</a></li>
                                            <li ><a href='/#'>men</a></li>
                                            <li ><a href='/#'>women</a></li>
                                            <li ><a href='/#'>kids</a></li>
                                            <li ><a href='/#'>accessories</a></li>
                                        </ul>
                                        <ul className='rd-padding'>
                                            <li ><a href='/#' className='high'>jewellery</a></li>
                                            <li ><a href='/#'>rings</a></li>
                                            <li ><a href='/#'>bracelets</a></li>
                                            <li ><a href='/#'>necklaces</a></li>
                                            <li ><a href='/#'>wedding bands</a></li>
                                        </ul>
                                        <ul >
                                            <li ><a href='/#' className='high'>furniture</a></li>
                                            <li ><a href='/#'>living room</a></li>
                                            <li ><a href='/#'>kitchen</a></li>
                                            <li ><a href='/#'>office</a></li>
                                            <li ><a href='/#'>home decor</a></li>
                                        </ul>
                                        <ul >
                                            <li ><a href='/#' className='high'>autoparts</a></li>
                                            <li ><a href='/#'>engine parts</a></li>
                                            <li ><a href='/#'>exhaust parts</a></li>
                                            <li ><a href='/#'>break parts</a></li>
                                            <li ><a href='/#'>body parts</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><Link to="/electronic" className='arrow '>electronics</Link>
                                    <div className='drop-down '>
                                        <ul className='rd-padding-elec'>
                                            <li ><a href='/#' className='high'>mobiles</a></li>
                                            <li ><a href='/#'>apple</a></li>
                                            <li ><a href='/#'>blackberry</a></li>
                                            <li ><a href='/#'>oneplus</a></li>
                                            <li ><a href='/#'>sony</a></li>
                                        </ul>
                                        <ul >
                                            <li ><a href='/#' className='high'>cameras</a></li>
                                            <li ><a href='/#'>dslr</a></li>
                                            <li ><a href='/#'>lences</a></li>
                                            <li ><a href='/#'>tripods</a></li>
                                            <li ><a href='/#'>batteries</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><Link to='/books' className='arrow'>sports & books</Link>
                                    <div className='drop-down tempory'>
                                        <ul className='rd-sports'>
                                            <li ><a href='/#' className='high'>sports</a></li>
                                            <li ><a href='/#'>football</a></li>
                                            <li ><a href='/#'>vollyball</a></li>
                                            <li ><a href='/#'>cricket</a></li>
                                        </ul>
                                        <ul >
                                            <li ><a href='/#' className='high'>books</a></li>
                                            <li ><a href='/#'>literature</a></li>
                                            <li ><a href='/#'>phillosophy</a></li>
                                            <li ><a href='/#'>academics</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><Link to='/sale'>sale</Link></li>
                                <li><Link to="/contact">contact us</Link></li>
                            </ul>
                            <div className="header-search">
                                <a href='/#' className='search-a'><span></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header