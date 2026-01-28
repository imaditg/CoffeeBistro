import React from "react";
const RightPart = () => {
    const [btn1, setBtn1] = React.useState(true);

    return (
        <>
            <div className="right-outer">
                <div className="right-top">
                    <div className="right-img">
                        <img src="./../../assets/images/home035.webp" alt="shop" />
                    </div>
                    <h3>electronics</h3>
                    <p>Excepteur sint occaecat cupidatat non proident. sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="right-middle">
                    <div className="right-middle-inner">
                        <div className="middle-item left-item">
                            <button type="button" className="cells"></button>
                            <button type="button" className="list"></button>
                            <span>There are 16 products.</span>
                        </div>
                        <div className="middle-item right-item">
                            <label>Sort by:</label>
                            <div className="select">
                                <button type="button" className="select-btn" onClick={() => { setBtn1(!btn1) }}>Relevanece</button>
                                <ul className={btn1 ? 'selectoff' : 'selecton'}>
                                    <li><a href="/#">Best sellers</a></li>
                                    <li><a href="/#">Relevance</a></li>
                                    <li><a href="/#">Name, A to Z</a></li>
                                    <li><a href="/#">Name, Z to A</a></li>
                                    <li><a href="/#">Price, low to high</a></li>
                                    <li><a href="/#">Price, hight to low</a></li>
                                </ul>
                            </div>
                            <button type="button" className="filters">filter</button>
                        </div>
                    </div>
                    <div className="shown-item">
                        <p>Showing 1-12 of 16 item(s) </p>
                    </div>
                </div>

                <div className="sixth-outer shop-item">

                    <div className="fourth-inner">
                        <div className="fourth-item">
                            <div className="item-inner">
                                <a href="/#" className="fourth-img">
                                    <img src="./../../assets/images/home018.webp" alt="fourth-1" />
                                </a>
                                <div className="img-bottom">
                                    <a href="/#">Quick view</a>
                                </div>
                            </div>
                            <a href="/#" className="name">perspiciatis unde</a>
                            <h2>$99.00</h2>
                            <a href="/#" className="main-btn">add to cart</a>
                            <p className="new">new</p>
                            <p className="sale">on sale!</p>
                        </div>
                        <div className="fourth-item">
                            <div className="item-inner">
                                <a href="/#" className="fourth-img">
                                    <img src="./../../assets/images/home022.webp" alt="sixth-2" />
                                </a>
                                <div className="img-bottom">
                                    <a href="/#">Quick view</a>
                                </div>
                            </div>
                            <a href="/#" className="name">omnis iste</a>
                            <h2>$199.00</h2>
                            <a href="/#" className="main-btn">add to cart</a>
                            <p className="new">new</p>
                        </div>
                        <div className="fourth-item">
                            <div className="item-inner">
                                <a href="/#" className="fourth-img">
                                    <img src="./../../assets/images/home023.webp" alt="sixth-3" />
                                </a>
                                <div className="img-bottom">
                                    <a href="/#">Quick view</a>
                                </div>
                            </div>
                            <a href="/#" className="name">accusantium dolore</a>
                            <h2>$299.00</h2>
                            <a href="/#" className="main-btn">add to cart</a>
                            <p className="new">new</p>
                            <p className="sale">on sale!</p>
                        </div>
                        <div className="fourth-item">
                            <div className="item-inner">
                                <a href="/#" className="fourth-img">
                                    <img src="./../../assets/images/home024.webp" alt="sixth-4" />
                                </a>
                                <div className="img-bottom">
                                    <a href="/#">Quick view</a>
                                </div>
                            </div>
                            <a href="/#" className="name">rem aperiam</a>
                            <h2>$249.00</h2>
                            <a href="/#" className="main-btn">add to cart</a>
                            <p className="new">new</p>
                        </div>
                        <div className="fourth-item">
                            <div className="item-inner">
                                <a href="/#" className="fourth-img">
                                    <img src="./../../assets/images/home025.webp" alt="sixth-5" />
                                </a>
                                <div className="img-bottom">
                                    <a href="/#">Quick view</a>
                                </div>
                            </div>
                            <a href="/#" className="name">adipisci velit</a>
                            <h2>$289.00</h2>
                            <a href="/#" className="main-btn">add to cart</a>
                            <p className="new">new</p>
                            <p className="sale">on sale!</p>
                        </div>
                        <div className="fourth-item">
                            <div className="item-inner">
                                <a href="/#" className="fourth-img">
                                    <img src="./../../assets/images/home026.webp" alt="sixth-6" />
                                </a>
                                <div className="img-bottom">
                                    <a href="/#">Quick view</a>
                                </div>
                            </div>
                            <a href="/#" className="name">numquam eius</a>
                            <h2>$279.00</h2>
                            <a href="/#" className="main-btn">add to cart</a>
                            <p className="new">new</p>
                        </div>
                        <div className="fourth-item">
                            <div className="item-inner">
                                <a href="/#" className="fourth-img">
                                    <img src="./../../assets/images/home027.webp" alt="sixth-7" />
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
                        </div>
                        <div className="fourth-item">
                            <div className="item-inner">
                                <a href="/#" className="fourth-img">
                                    <img src="./../../assets/images/home028.webp" alt="sixth-8" />
                                </a>
                                <div className="img-bottom">
                                    <a href="/#">Quick view</a>
                                </div>
                            </div>
                            <a href="/#" className="name">dolore magnam</a>
                            <h2>$399.00</h2>
                            <a href="/#" className="main-btn">add to cart</a>
                            <p className="new">new</p>
                        </div>
                        <div className="fourth-item">
                            <div className="item-inner">
                                <a href="/#" className="fourth-img">
                                    <img src="./../../assets/images/home015.webp" alt="sixth-9" />
                                </a>
                                <div className="img-bottom">
                                    <a href="/#">Quick view</a>
                                </div>
                            </div>
                            <a href="/#" className="name">voluptas nulla</a>
                            <h2>$389.00</h2>
                            <a href="/#" className="main-btn">add to cart</a>
                            <p className="new">new</p>
                            <p className="sale">on sale!</p>
                        </div>
                        <div className="fourth-item">
                            <div className="item-inner">
                                <a href="/#" className="fourth-img">
                                    <img src="./../../assets/images/home036.webp" alt="sixth-10" />
                                </a>
                                <div className="img-bottom">
                                    <a href="/#">Quick view</a>
                                </div>
                            </div>
                            <a href="/#" className="name">iure reprehenderit</a>
                            <h2>$379.00</h2>
                            <a href="/#" className="main-btn">add to cart</a>
                            <p className="new">new</p>
                        </div>
                        <div className="fourth-item">
                            <div className="item-inner">
                                <a href="/#" className="fourth-img">
                                    <img src="./../../assets/images/home016.webp" alt="sixth-11" />
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
                        </div>
                        <div className="fourth-item">
                            <div className="item-inner">
                                <a href="/#" className="fourth-img">
                                    <img src="./../../assets/images/home017.webp" alt="sixth-12" />
                                </a>
                                <div className="img-bottom">
                                    <a href="/#">Quick view</a>
                                </div>
                            </div>
                            <a href="/#" className="name">architecto beatae</a>
                            <h2>$359.00</h2>
                            <a href="/#" className="main-btn">add to cart</a>
                            <p className="new">new</p>
                        </div>
                    </div>

                    <div className="shop-item-pages">
                        <div className="pages-inner">
                            <div className="page-item">
                                <p>
                                    Showing 1-12 of 16 item(s)
                                </p>
                            </div>
                            <div className="page-item right-page-item">
                                <button type="button">0</button>
                                <button type="button">1</button>
                                <button type="button">2</button>
                                <button type="button">0</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightPart;