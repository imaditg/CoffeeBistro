// import React from "react";
import { FiPlus } from "react-icons/fi";
import ReactSlider from 'react-slider';
import { LiaAngleDownSolid } from "react-icons/lia";
const SectionSix = () => {
    return (
        <>
            <div className="home-sect6-outer">
                <div className="container ">
                    <div className="home-sect6-txt">
                        <h4 className="est">estimated price</h4>
                        <h3 className="cal">cost calculator</h3>
                    </div>
                    <div className="cal-box-outer">
                        <div className="cal-box-inner">
                            <div className="box-right">
                                <div className="right-items1">
                                    <div className="guest">
                                        <p>Number of Guests:</p>
                                        <ReactSlider
                                            className="horizontal-slider"
                                            thumbClassName="example-thumb square-thumb"
                                            trackClassName="example-track custom-track"
                                            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                                            min={5} max={100}
                                        />
                                    </div>
                                    <div className="guest">
                                        <p>Cake Layer:</p>
                                        <ReactSlider
                                            className="horizontal-slider"
                                            thumbClassName="example-thumb square-thumb"
                                            trackClassName="example-track custom-track"
                                            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                                            min={1} max={10}
                                        />
                                    </div>
                                </div>
                                <div className="right-items2">
                                    <div className="right-items2-item">
                                        <p>Party Occasion:</p>
                                        <div className="drop">
                                            <p className="selecto">select option<LiaAngleDownSolid className="down-arrow" /></p>
                                            <ul>
                                                <li><button type="button" id="sO">select option</button></li>
                                                <li><button type="button" id="birt">birthday</button></li>
                                                <li><button type="button" id="wedd">wedding</button></li>
                                                <li><button type="button" id="babayS">baby shower</button></li>
                                                <li><button type="button" id="grad">graduation</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="right-items2-item">
                                        <p>Taste of the Cake:</p>
                                        <div className="drop">
                                            <p className="selecto">select option<LiaAngleDownSolid className="down-arrow" /></p>
                                            <ul>
                                                <li><button type="button" id="sO">select option</button></li>
                                                <li><button type="button" id="choc">chocolate</button></li>
                                                <li><button type="button" id="vanilla">vanilla</button></li>
                                                <li><button type="button" id="lemon">lemon</button></li>
                                                <li><button type="button" id="berry">berry</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="right-items2-item">
                                        <p>Cake Topper:</p>
                                        <div className="drop cake-topper">
                                            <button type="button" id="no">No</button>
                                            <button type="button" id="yes">Yes</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-items3">
                                    <p>Extra Sweets:</p>
                                    <div className="items">
                                        <button type="button" className="chocoCoo">chocolate cookies</button>
                                        <button type="button" className="vanillaM">vanilla macarons</button>
                                        <button type="button" className="rainbowCup">rainbow cupcakes</button>
                                        <button type="button" className="muffins">muffins</button>
                                    </div>
                                </div>
                                <div className="right-items4">
                                    <div className="right-items4-items">
                                        <img src="./../assets/images/cof20.webp" alt="cake" />
                                    </div>
                                    <div className="right-items4-items">
                                        <p className="dollar">$ 1035</p>
                                        <p>estimated price</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box-left">
                                <div className="box-upper">
                                    <h3>terms & conditions</h3>
                                    <p>Lorem ipsum dolor sit amet, tempus pretium pretium tortor sagittis, at odio.</p>
                                </div>
                                <div className="box-middle">
                                    <div className="box-middle-items">
                                        <button type="button"><FiPlus className="plus-icon" /></button>
                                        <span>Choice of cooking course </span>
                                    </div>
                                    <div className="box-middle-items middle-borders">
                                        <button type="button"><FiPlus className="plus-icon" /></button>
                                        <span>All ingredients included </span>
                                    </div>
                                    <div className="box-middle-items">
                                        <button type="button"><FiPlus className="plus-icon" /></button>
                                        <span>Watch out for our intoleranees </span>
                                    </div>
                                </div>
                                <div className="box-lower">
                                    <a href="/#" className="button">request it now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SectionSix;