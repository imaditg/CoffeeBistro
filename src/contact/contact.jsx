import React from "react";
import Header from "../header";
import Footer from "../Footer";
import BreadCrumbs from "../shop/breadCrumbs";
const Contact = () => {
    const FirstSec = React.useRef(null)
    return (
        <>
            <Header FirstRef={FirstSec} />
            <BreadCrumbs FirstRef={FirstSec} firstName={'home'} secondName={'contact us'} />
            <div className="contact-outer">
                <div className="container">
                    <div className="contact-inner">
                        <div className="contact-left">
                            <span className='head'>store information</span>
                            <ul className='address'>
                                <li>
                                    <div className='icon location'></div>
                                    <div className='details'>
                                        <span className='below'>
                                            etrend home decor<br />
                                            90 street, arizona<br />
                                            85002<br />
                                            united states
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className='icon phone'></div>
                                    <div className='details'>
                                        <div className="title">Call us:</div>
                                        <a href='/#'>(123) 456 789</a>
                                    </div>
                                </li>
                                <li >
                                    <div className='icon mail'></div>
                                    <div className='details email'>
                                        <div className="title">Email us:</div>
                                        <a href='/#'>sales@domain.com</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="contact-right">
                            <div className="mains-title">contact us</div>
                            <ul>
                                <li>
                                    <label className="label-left">Subject</label>
                                    <div className="label-right">
                                        <select>
                                            <option>Customer service</option>
                                            <option>Webmaster</option>
                                        </select>
                                    </div>
                                </li>
                                <li>
                                    <label className="label-left">Email address</label>
                                    <div className="label-right">
                                        <input type="text" placeholder="your@email.com" className="eadd" />
                                    </div>
                                </li>
                                <li>
                                    <label className="label-left">Attachment</label>
                                    <div className="label-right atch-file">
                                        <input type="text" className="attach" />
                                        <button type="button" className="choose">choose file</button>
                                        <span>optional</span>
                                    </div>
                                </li>
                                <li>
                                    <label className="label-left">Message</label>
                                    <div className="label-right">
                                        <textarea placeholder="How can we help?" className="area" rows={'1'} ></textarea>
                                    </div>
                                </li>
                            </ul>
                            <a href="/#" className="snd">send</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <a href="/#" className="wats"><span></span></a>
        </>
    )
}

export default Contact;