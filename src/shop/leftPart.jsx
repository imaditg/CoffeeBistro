import React from "react";
const LeftPart = () => {
    const [btn1, setBtn1] = React.useState(true);
    const [btn2, setBtn2] = React.useState(true);
    const [btn3, setBtn3] = React.useState(true);
    const [btn4, setBtn4] = React.useState(true);
    const [btn5, setBtn5] = React.useState(true);
    const [btn6, setBtn6] = React.useState(true);
    const [btn7, setBtn7] = React.useState(true);

    return (
        <>
            <div className="left-outer">
                <ul className="left-top">
                    <li><h3><a href="/#">shop</a></h3></li>
                    <li><a href="/#"><span>fashion</span><button type="button" onClick={() => { setBtn1(!btn1) }} className={btn1 ? 'plus' : 'minus'}></button></a>
                        <ul className={`submenu ${btn1 ? 'closed' : 'open'}`}>
                            <li><a href="/#">men</a></li>
                            <li><a href="/#">women</a></li>
                            <li><a href="/#">kids</a></li>
                            <li><a href="/#">accessories</a></li>
                        </ul>
                    </li>
                    <li><a href="/#"><span>jewellery</span><button type="button" onClick={() => { setBtn2(!btn2) }} className={btn2 ? 'plus' : 'minus'}></button></a>
                        <ul className={`submenu ${btn2 ? 'closed' : 'open'}`}>
                            <li><a href="/#">rings</a></li>
                            <li><a href="/#">bracelets</a></li>
                            <li><a href="/#">necklaces</a></li>
                            <li><a href="/#">wedding bands</a></li>
                        </ul>
                    </li>
                    <li><a href="/#"><span>furniture</span><button type="button" onClick={() => { setBtn3(!btn3) }} className={btn3 ? 'plus' : 'minus'}></button></a>
                        <ul className={`submenu ${btn3 ? 'closed' : 'open'}`}>
                            <li><a href="/#">living room</a></li>
                            <li><a href="/#">kitchen</a></li>
                            <li><a href="/#">office</a></li>
                            <li><a href="/#">home decor</a></li>
                        </ul>
                    </li>
                    <li><a href="/#" className="top-last"><span>autoparts</span><button type="button" onClick={() => { setBtn4(!btn4) }} className={btn4 ? 'plus' : 'minus'}></button></a>
                        <ul className={`submenu ${btn4 ? 'closed' : 'open'}`}>
                            <li><a href="/#">engine parts</a></li>
                            <li><a href="/#">exhaust parts</a></li>
                            <li><a href="/#">brake parts</a></li>
                            <li><a href="/#">body parts</a></li>
                        </ul>
                    </li>
                </ul>

                <ul className="left-top left-middle">
                    <li><h3><a href="/#">filter by</a></h3></li>
                    <li><button type="button" onClick={() => { setBtn5(!btn5) }} className={btn5 ? 'arrow-down' : 'arrow-up'}>categories</button>
                        <ul className={`submenu ${btn5 ? 'closed' : 'open'}`}>
                            <li>
                                <input type="checkbox" /><label>autoparts (16)</label>
                            </li>
                            <li>
                                <input type="checkbox" /><label>fashion (16)</label>
                            </li>
                            <li>
                                <input type="checkbox" /><label>furniture (16)</label>
                            </li>
                            <li>
                                <input type="checkbox" /><label>jewellery (16)</label>
                            </li>
                        </ul>
                    </li>
                    <li><button type="button" onClick={() => { setBtn6(!btn6) }} className={btn6 ? 'arrow-down' : 'arrow-up'}>brand</button>
                        <ul className={`submenu ${btn6 ? 'closed' : 'open'}`}>
                            <li>
                                <input type="checkbox" /><label>brand1 (2)</label>
                            </li>
                            <li>
                                <input type="checkbox" /><label>brand2 (3)</label>
                            </li>
                            <li>
                                <input type="checkbox" /><label>brand3 (3)</label>
                            </li>
                            <li>
                                <input type="checkbox" /><label>brand4 (3)</label>
                            </li>
                            <li>
                                <input type="checkbox" /><label>brand5 (3)</label>
                            </li>
                            <li>
                                <input type="checkbox" /><label>brand6 (1)</label>
                            </li>
                            <li>
                                <input type="checkbox" /><label>brand7 (1)</label>
                            </li>
                        </ul>
                    </li>
                    <li><button type="button" onClick={() => { setBtn7(!btn7) }} className={`last-btn ${btn7 ? 'arrow-down' : 'arrow-up'}`}>price</button>
                        <div className={`submenu ${btn7 ? 'closed' : 'open'}`}>
                            <label>$87.00 - $399.00</label>
                            <input type="range" min='0' max='50' className="inputrange"/>
                        </div>
                    </li>
                </ul>
                <div className="left-bottom">
                        <a href="/#">
                            <img src="./../../assets/images/home034.webp" alt="advertisment" />
                        </a>
                </div>
            </div>
        </>
    )
}

export default LeftPart;