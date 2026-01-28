// import React from 'react'
import Header from './header'
import Footer from './footer'

const Aboutus = () => {
  return (
    <>
    <Header />
      <div className="main-about">
        <div className='sect-1'>
          <div className='sect-1-text'>
            <h1>ABOUT US</h1>
            <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETURADIPISCING ELIT. DONEC AT LIGULA IN LIGULA ULTRICESVULPUTATE AT AC SAPIEN. IN JUSTO NEQUE,  <br /> LOREM IPSUM DOLOR SIT AMET,CONSECTETUR ADIPISCING ELIT</p>
            <a href="/#">CONTACT</a>
          </div>

        </div>
        {/* section 1 */}
        <div className='sec-2'>
          <div className='container'>
            <div className='sec-2-inner'>
              <div className='sec-2-cols'>
                <div className='sec-2-img'>
                  <img src="./../assets/images/sec2-team-01.jpg" alt="sec2-team-01" />
                </div>
                <div className='sec-2-text'>
                  <h2>Hanna Mcallister</h2>
                  <p>OWNER</p>
                  <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at portitor.</p>
                </div>
              </div>
              <div className='sec-2-cols'>
                <div className='sec-2-img'>
                  <img src="./../assets/images/sec2-team-02.jpg" alt="sec2-team-02" />
                </div>
                <div className='sec-2-text'>
                  <h2>Ralph Johnson</h2>
                  <p>CUSTOMER CARE</p>
                  <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at portitor.</p>
                </div>
              </div>
              <div className='sec-2-cols'>
                <div className='sec-2-img'>
                  <img src="./../assets/images/sec2-team-03.jpg" alt="sec2-team-03" />
                </div>
                <div className='sec-2-text'>
                  <h2>Benj Spitchr</h2>
                  <p>CO-FOUNDER</p>
                  <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at portitor.</p>
                </div>
              </div>
              <div className='sec-2-cols'>
                <div className='sec-2-img'>
                  <img src="./../assets/images/sec2-team-04.jpg" alt="sec2-team-04" />
                </div>
                <div className='sec-2-text'>
                  <h2>Jane Zafron</h2>
                  <p>SPECIALIST</p>
                  <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at portitor.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* section 3 */}
        <div className='sec-3'>
          <div className='container'>
            <h3 className='sec-3-title'>CHECK THEM ALL</h3>
            <h1 className='sec-3-heading'>Products</h1>
            <div className='sec-3-inner'>
              <div className='sec-3-col'>
                <div className='sec-3-img'>
                  <img src="./../assets/images/icon-1.png" alt="icon-1" />
                </div>
                <div className='sec-3-text'>
                  <p>Lorem ipsum dolor sit amet, <br /> consectetur <u>adipiscing</u> elit. Curabitur  <br /> diam etni</p>
                </div>
              </div>
              <div className='sec-3-col'>
                <div className='sec-3-img'>
                  <img src="./../assets/images/icon-2.png" alt="icon-2" />
                </div>
                <div className='sec-3-text'>
                  <p>Lorem ipsum dolor sit amet, <br /> consectetur <u>adipiscing</u> elit. Curabitur  <br /> diam etni</p>
                </div>
              </div>
              <div className='sec-3-col'>
                <div className='sec-3-img'>
                  <img src="./../assets/images/icon-3.png" alt="icon-3" />
                </div>
                <div className='sec-3-text'>
                  <p>Lorem ipsum dolor sit amet, <br /> consectetur <u>adipiscing</u> elit. Curabitur  <br /> diam etni</p>
                </div>
              </div>
              <div className='sec-3-col'>
                <div className='sec-3-img'>
                  <img src="./../assets/images/icon-4.png" alt="icon-4" />
                </div>
                <div className='sec-3-text'>
                  <p>Lorem ipsum dolor sit amet, <br /> consectetur <u>adipiscing</u> elit. Curabitur  <br /> diam etni</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* end section 3 */}

        {/* section 4 */}
        <div className='sec-4'>
          <div className="container">
            <div className='sec-4-inner'>
              <div className='sec-4-col'>
                <div className='block1-img'>
                  <div className='block1-text'>
                    <h3>OUR BAKERY</h3> <br /> <br />
                    <p>Avenue Marina 34568 NY  (U.S)</p>
                    <p> +1 374 474 637 </p>
                    <p> info@bakery.com</p>
                  </div>
                </div>
                <div className='block2-img'>
                  {/* <img src="/assets/images/block2-img.jpg" alt="block2-img" /> */}
                  <div className='block2-text'>
                    <h3>OPENING TIMES</h3>
                    <div className='time-txt'>
                      <p>MON</p><p>17:00 to 23:00</p>
                    </div>
                    <div className='time-txt'>
                      <p>TUE</p><p>17:00 to 23:00</p>
                    </div>
                    <div className='time-txt'>
                      <p>WED</p><p>17:00 to 23:00</p>
                    </div>
                    <div className='time-txt'>
                      <p>THU</p><p>17:00 to 23:00</p>
                    </div>
                    <div className='time-txt'>
                      <p>FRI</p><p>17:00 to 23:00</p>
                    </div>
                    <div className='time-txt'>
                      <p>SAT/SUN</p><p>17:00 to 23:00</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className='sec-4-col'>
                <div className='sec-4-img'>
                  {/* <img src="/assets/images/vert-2.jpg" alt="vert-2" /> */}
                  <div className='sec-4-text'>
                    <h3>CUSTOM</h3>
                    <p>cakes</p>
                    <a href="/#">ASK A QUOTE</a>
                  </div>
                </div>



              </div>
              <div className='sec-4-col'>
                <div className='sec-4-img2'>
                  {/* <img src="/assets/images/vert-2.jpg" alt="vert-2" /> */}
                  <div className='sec-4-text2'>
                    <h3>VEGAN</h3>
                    <p>Cookies</p>
                    <a href="/#">REQUEST INFO</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* end section 4 */}

        {/* start section 5 */}
        <div className='sec-5'>
          <div className='container'>
            <div className='sec-5-inner'>
              <div className='sec-5-col'>
                <h1>02</h1>
                <p>NUMBER <br /> BAKERY</p>
              </div>
              <div className='sec-5-col'>
                <h1>56</h1>
                <p>NEW FOOD <br /> NEW PASTRY</p>
              </div>
              <div className='sec-5-col'>
                <h1>73</h1>
                <p>YEAR OF <br /> EXPERIENCE</p>
              </div>
              <div className='sec-5-col'>
                <h1>14</h1>
                <p>NEW CHEF <br /> IN KITCHEN</p>
              </div>
            </div>
          </div>

        </div>
        {/* end section 5 */}
        {/* start section 6 */}
        <div className='sec-6'>
          <div className='container'>
            <h3 className='sec-6-title'>OUR OFFER</h3>
            <h1 className='sec-6-heading'>SPECIALITIES</h1>
            <div className='sec-6-inner'>
              {/* first */}
              <div className='sec-6-col'>
                <div className='sec-6-img'>
                  <img src="./../assets/images/sec-6-1.jpg" alt="sec-6-1" />
                </div>
                <div className='sec-6-info'>
                  <h3>CAKE CHOCOLATE  <span>..........................................</span></h3>
                  <p>Lorem ipsum dolor sit <span>ECO</span></p>
                </div>
              </div>
              {/* second */}
              <div className='sec-6-col'>
                <div className='sec-6-img'>
                  <img src="./../assets/images/sec-6-2.jpg" alt="sec-6-2" />
                </div>
                <div className='sec-6-info'>
                  <h3>COOKIES <span>........................................................</span></h3>
                  <p>Lorem ipsum dolor sit <span>NEW</span></p>
                </div>
              </div>
              {/* third */}
              <div className='sec-6-col'>
                <div className='sec-6-img'>
                  <img src="./../assets/images/sec-6-3.jpg" alt="sec-6-3" />
                </div>
                <div className='sec-6-info'>
                  <h3>FRESH BREAD  <span>..................................................</span></h3>
                  <p>Lorem ipsum dolor sit <span className='new'>NEW</span></p>
                </div>
              </div>
              {/* forth */}
              <div className='sec-6-col'>
                <div className='sec-6-img'>
                  <img src="./../assets/images/sec-6-4.jpg" alt="sec-6-4" />
                </div>
                <div className='sec-6-info'>
                  <h3>CAKE  <span>.............................................................</span></h3>
                  <p>Lorem ipsum dolor sit <span>NEW</span></p>
                </div>
              </div>
              {/* fifth */}
              <div className='sec-6-col'>
                <div className='sec-6-img'>
                  <img src="./../assets/images/sec-6-5.jpg" alt="sec-6-5" />
                </div>
                <div className='sec-6-info'>
                  <h3>COOKIES  <span>........................................................</span></h3>
                  <p>Lorem ipsum dolor sit <span>NEW</span></p>
                </div>
              </div>
              {/* sixth */}
              <div className='sec-6-col'>
                <div className='sec-6-img'>
                  <img src="./../assets/images/sec-6-6.jpg" alt="sec-6-6" />
                </div>
                <div className='sec-6-info'>
                  <h3>SWEET SNACK  <span>................................................</span></h3>
                  <p>Lorem ipsum dolor sit <span>ECO</span></p>
                </div>
              </div>
              {/* seventh */}
              <div className='sec-6-col'>
                <div className='sec-6-img'>
                  <img src="./../assets/images/sec-6-7.jpg" alt="sec-6-7" />
                </div>
                <div className='sec-6-info'>
                  <h3>BREAKFAST  <span>.....................................................</span></h3>
                  <p>Lorem ipsum dolor sit <span>SALE</span></p>
                </div>
              </div>
              {/* Eight */}
              <div className='sec-6-col'>
                <div className='sec-6-img'>
                  <img src="./../assets/images/sec-6-8.jpg" alt="sec-6-8" />
                </div>
                <div className='sec-6-info'>
                  <h3>MUFFIN  <span>..........................................................</span></h3>
                  <p>Lorem ipsum dolor sit <span className='new'>NEW</span></p>
                </div>
              </div>

            </div>
          </div>

        </div>
        {/* end section 6 */}

        {/* start section 7 */}
        <div className='sec-7'>
          <div className='container'>
            <div className='sec-7-inner'>
              <div className='sec-7-text'>
                <div className='sec-7-info'>
                  <img src="./../assets/images/sec-7-arrow.png" alt="sec-7-arrow" />
                  <p>CONTACT US NOW ! + 12 123 456 789 <br />
                    <span className='btm-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                  </p>
                </div>

                <div className='sec-7-btn'>
                  <a href="">GET A QUOTE</a>
                </div>


              </div>
            </div>
          </div>

        </div>
        {/* end section 7 */}
        <Footer />


      </div>



    </>
  )
}

export default Aboutus