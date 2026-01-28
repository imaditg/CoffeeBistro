import React from "react";
const LeftPart = () => {
    const [btn5, setBtn5] = React.useState(true);
    const [btn6, setBtn6] = React.useState(true);
    const [btn7, setBtn7] = React.useState(true);

    return (
        <>
            <div className="left-outer ">
                <ul className="left-top sales-left">
                    <li><h3><a href="/#">sale</a></h3></li>
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