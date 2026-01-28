import React from 'react';

const Footer = () => {
    const [btn1,setBtn1] = React.useState(false);
    const [btn2,setBtn2] = React.useState(false);
    const [btn3,setBtn3] = React.useState(false);
    const [btn4,setBtn4] = React.useState(false);

    return (
        <>
            <div className="footer-outer">
                {/* Footer-Top */}
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-inner">
                            <div className="footer-top-item">
                                <p className='hit-email'>Enter your email & hit send to subscribe</p>
                            </div>
                            <div className="footer-top-item txt-item">
                                <input type='text' placeholder='Yourmail@domain.com' className='in' />
                                <button type='button' className='main-btn'>send</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Middle */}
                <div className="footer-middle">
                    <div className="container">
                        <div className="footer-middle-inner">
                            <div className="footer-item first-item">
                                <span className='head'>contact</span>
                                <ul className='address'>
                                    <li>
                                        <div className='icon location'></div>
                                        <div className='details'>
                                            <span className='title'>Address</span>
                                            <span className='below'>
                                                etrend home decor<br />
                                                90 street, arizona<br />
                                                85002<br />
                                                united states
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='icon mail'></div>
                                        <div className='details'>
                                            <span className='title'>Mail us</span>
                                            <a href='/#'>sales@domain.com</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='icon phone'></div>
                                        <div className='details'>
                                            <span className='title'>Phone</span>
                                            <a href='/#'>(123) 456 789</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-item">
                                <a href='//#' className='head your'>your account</a>
                                <ul className='middle-list'>
                                    <li><a href='/#'>Personal info</a></li>
                                    <li><a href='/#'>Orders</a></li>
                                    <li><a href='/#'>Credit slips</a></li>
                                    <li><a href='/#'>Addresses</a></li>
                                </ul>
                            </div>
                            <div className="footer-item third-item">
                                <span className='head'>products</span>
                                <ul className='middle-list'>
                                    <li><a href='/#'>Prices drop</a></li>
                                    <li><a href='/#'>New products</a></li>
                                    <li><a href='/#'>Best sales</a></li>
                                    <li><a href='/#'>Sitemap</a></li>
                                    <li><a href='/#'>Stores</a></li>
                                </ul>
                            </div>
                            <div className="footer-item fourth-item">
                                <span className='head'>our company</span>
                                <ul className='middle-list'>
                                    <li><a href='/#'>Delivery</a></li>
                                    <li><a href='/#'>Legal Notice</a></li>
                                    <li><a href='/#'>Terms and conditions of use</a></li>
                                    <li><a href='/#'>About us</a></li>
                                    <li><a href='/#'>Secure payment</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden-middle">
                    <div className="container">
                        <ul>
                            <li className='store-info'><button onClick={()=>{setBtn1(!btn1)}} className={btn1 ? 'up-arrow' : 'down-arrow'}>store information</button>
                                <ul className={`address ${btn1 ? 'show': 'dont'}`}>
                                    <li>
                                        <div className='icon location'></div>
                                        <div className='details ads-details'>
                                            <span className='title'>Address</span>
                                            <span className='below'>
                                                etrend home decor<br />
                                                90 street, arizona<br />
                                                85002<br />
                                                united states
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='icon mail'></div>
                                        <div className='details mail-details'>
                                            <span className='title'>Mail us</span>
                                            <a href='/#'>sales@domain.com</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='icon phone'></div>
                                        <div className='details'>
                                            <span className='title'>Phone</span>
                                            <a href='/#'>(123) 456 789</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li><button onClick={()=>{setBtn2(!btn2)}} className={btn2 ? 'up-arrow':'down-arrow'}>your account</button>
                            <ul className={btn2 ? 'show':'dont'}>
                                <li><a href='/#'>Personal info</a></li>
                                <li><a href='/#'>Orders</a></li>
                                <li><a href='/#'>Credit slips</a></li>
                                <li><a href='/#'>Addresses</a></li>
                            </ul>
                            </li>
                            <li><button onClick={()=>{setBtn3(!btn3)}} className={btn3 ? 'up-arrow':'down-arrow'}>products</button>
                            <ul className={btn3 ? 'show':'dont'}>
                                <li><a href='/#'>Price drop</a></li>
                                <li><a href='/#'>New products</a></li>
                                <li><a href='/#'>Best sales</a></li>
                                <li><a href='/#'>Sitemap</a></li>
                                <li><a href='/#'>Stores</a></li>
                            </ul>
                            </li>
                            <li><button  onClick={()=>{setBtn4(!btn4)}} className={btn4 ? 'up-arrow':'down-arrow'}>our company</button>
                            <ul className={btn4 ? 'show':'dont'}>
                                <li><a href='/#'>Delivery</a></li>
                                <li><a href='/#'>Legal Notice</a></li>
                                <li><a href='/#'>Terms and conditions of use</a></li>
                                <li><a href='/#'>About us</a></li>
                                <li><a href='/#'>Secur payment</a></li>
                            </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Footer-Bottom */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom-inner">
                            <div className="bottom-item">
                                <a href='/#' className='copyright'>© 2025 - Ecommerce software by PrestaShop™</a>
                            </div>
                            <div className="bottom-item bottom-left">
                                <a href='/#' className='visa'><span></span></a>
                                <a href='/#' className='paypal'><span></span></a>
                                <a href='/#' className='mastercard'><span></span></a>
                                <a href='/#' className='creditcard'><span></span></a>
                                <a href='/#' className='amex'><span></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer