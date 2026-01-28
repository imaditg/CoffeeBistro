// import React from "react";
const ContactSecond = () => {
    return (
        <>
            <div className="contact-sect2-outer">
                <div className="container">
                    <div className="contact-sect2-inner">
                        <div className="contact-sect2-left">
                            <div className="contact-sect2-inner">
                                <div className="contact-sect2-text">
                                    <h3>drop us a line</h3>
                                    <p>Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis malesuada felis quis, ultricies convallis neque. Pellentesque tristique fringilla tempus.</p>
                                </div>
                            </div>
                            <form>
                                <p>name :</p>
                                <input type="text" />
                                <p>email :</p>
                                <input type="text" />
                                <p>message :</p>
                                <textarea rows={"6"} cols={"58"} />
                                <a href="/#" className="button">send now</a>
                            </form>
                        </div>
                        <div className="contact-sect2-right">
                            <iframe className='gmap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87695.12000114229!2d8.009350690803977!3d46.617426723707254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478f9eab18c79217%3A0xbfaa5c0f42972f65!2sGrindelwald%2C%20Switzerland!5e0!3m2!1sen!2sin!4v1747722129127!5m2!1sen!2sin" className="maps" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                            <div className="contact-sect2-right-middle">
                                <div className="contact-sect2-middle-middle">
                                    <div className="contacts"><span className="high">address :</span><span className="low">Avenue 234</span></div>
                                    <div className="contacts"><span className="high">city :</span><span className="low">New York - uS</span></div>
                                    <div className="contacts last"><span className="high">check-In :</span><span className="low">15 : 00 am</span></div>
                                </div>
                                <div className="contact-sect2-middle-middle">
                                    <div className="contacts"><span className="high">phone :</span><span className="low">00 837920234</span></div>
                                    <div className="contacts"><span className="high">email :</span><span className="low">info@sweet.com</span></div>
                                    <div className="contacts last"><span className="high">check-Out :</span><span className="low">11:00 am</span></div>
                                </div>
                            </div>
                            <div className="contact-sect2-middle-low">
                                <p className="ava">available at 10am-8px</p>
                                <p className="numb">+ 202 555 0116</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactSecond
