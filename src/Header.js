import React from 'react'
import cardsdata from './Cardsdata'
import logodata from './Logodata'
import explornp from './Explornp'
import Footermenu from './Footermenu'
import footerlogo from './Footerlogo'
import { Routes, Route, Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <p className="booking"> <Link to='/'> Booking.com </Link></p>
                            </div>

                            <div className="col-lg-7">
                                <ul className="head-btn">
                                    <li><button className="btn">NPR</button></li>
                                    <li>
                                        <button className="btn">
                                            {logodata.map((a) => (
                                                <img src={a.logo} />
                                            ))}
                                        </button>
                                    </li>
                                    <li> <button className="btn"> <i class="bi bi-question-circle"></i> </button></li>
                                    <li> <button className="btn-list"> List your Property </button></li>
                                    <li> <button className="btnn"> Register </button></li>
                                    <li> <button className="btnn"> Sign in </button></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </nav>
                <nav>
                    <div className="container">
                        <div className="link-logo">
                            <ul className="link-ul">
                                <li> <button> <i class="bi bi-building"></i> stays</button> </li>
                                <li> <button>< i class="bi bi-airplane"></i> flights </button> </li>
                                <li> <button> <i class="bi bi-car-front"></i> Car rentals </button> </li>
                                <li> <button> <i class="bi bi-award"></i> Attractions </button> </li>
                                <li> <button>Airport Taxis</button></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <section className="container">
                <div className="find-stays">
                    <div className="find-title">
                        <h1> Find your next stay</h1>
                        <p className="fs-5">Search low prices on hotels, homes and much more...</p>
                    </div>
                    <div className="find-serch">
                        <ul>
                            <li>
                                <button> <i class="bi bi-building"> </i> Where are you going? </button>
                            </li>
                            <li>
                                <button> <i class="bi bi-calendar-event-fill"> </i> Sun 28 Aug - Wed 31 Aug </button>
                            </li>
                            <li>
                                <button> <i class="bi bi-person-fill"></i> 2 adults  ·  0 children  ·  1 room </button>
                            </li>
                            <li>
                                <button type="search"> Search</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="offers">
                <div className="container">
                    <div className="all-offers">
                        <div className="offer-titles">
                            <h3>Offers</h3>
                            <p>Promotions, deals and special offers for you</p>
                        </div>
                        <div className="offer-cuttlet">
                            <div className="offer-img">
                                {logodata.map((o) => (
                                    <img src={o.logoo} />
                                ))}
                            </div>
                            <div className="offer-texts">
                                <h3>Save 15% or more</h3>
                                <p>This summer, make your dream trip a reality. Book and stay for less before 30 Sep 2022</p>
                                <button>Explore Detals</button>
                            </div>
                        </div>
                        <div className="offer-cards">
                            <div className="frst-row">
                                <div className="row">
                                    <div className="col-lg-6">

                                        <div className="cards-img" style={{
                                            backgroundImage: `url("https://cf.bstatic.com/xdata/images/city/540x270/619923.webp?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o=")`
                                        }}>
                                            <div className="card-header">
                                                <div className="cont-title">
                                                    <h3> Dubai {cardsdata.map((c) => (
                                                        <img src={c.cardlogo} />
                                                    ))}</h3>
                                                </div>
                                            </div>

                                            <div className="card-deals">
                                                <span> Deals start at</span>
                                                <br />
                                                <span> NPR&nbsp;10,000</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-6">

                                        <div className="cards-img" style={{
                                            backgroundImage: `url("https://cf.bstatic.com/xdata/images/city/540x270/685532.webp?k=27f5778aebf08d8894506a031c18df7180c530a0937ad377c2b3ecaa540fe9f7&o=")`
                                        }}>
                                            <div className="card-header">
                                                <div className="cont-title">
                                                    <h3> Kuala Lumpur {cardsdata.map((c) => (
                                                        <img src={c.cardlogos} />
                                                    ))}</h3>
                                                </div>
                                            </div>
                                            <div className="card-deals">
                                                <span> Deals start at</span>
                                                <br />
                                                <span> NPR&nbsp;10,000</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="secnd-row">
                                <div className="row">
                                    <div className="col-lg-4">

                                        <div className="cards-img" style={{
                                            backgroundImage: `url("https://cf.bstatic.com/xdata/images/city/540x270/654877.webp?k=bc70ebd827a40c515c962e565fbfa01b8621035ffd7eb024789a7fb171a0d292&o=")`
                                        }}>
                                            <div className="card-header">
                                                <div className="cont-title">
                                                    <h3> Kuala Lumpur {cardsdata.map((c) => (
                                                        <img src={c.cardlogo} />
                                                    ))}
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="card-deals">
                                                <span> Deals start at</span>
                                                <br />
                                                <span> NPR&nbsp;10,000</span>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-lg-4">

                                        <div className="cards-img" style={{
                                            backgroundImage: `url("https://cf.bstatic.com/xdata/images/city/540x270/664662.webp?k=d233ff3beefccce61e2c23f1079e13cded4d74eb74ad01749b18a3e49f56e04a&o=")`
                                        }}>
                                            <div className="card-header">
                                                <div className="cont-title">
                                                    <h3> Kuala Lumpur {cardsdata.map((c) => (
                                                        <img src={c.cardlogoo} />
                                                    ))}</h3>
                                                </div>
                                            </div>
                                            <div className="card-deals">
                                                <span> Deals start at</span>
                                                <br />
                                                <span> NPR&nbsp;10,000</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-4">

                                        <div className="cards-img" style={{
                                            backgroundImage: `url("https://cf.bstatic.com/xdata/images/city/540x270/620027.webp?k=3e415bb694a1a0145529dad3242573d0d52364bc57bae824b5990bf9c2fabc04&o=")`
                                        }}>
                                            <div className="card-header">
                                                <div className="cont-title">
                                                    <h3> Kuala Lumpur {cardsdata.map((c) => (
                                                        <img src={c.cardlogoos} />
                                                    ))}</h3>
                                                </div>
                                            </div>
                                            <div className="card-deals">
                                                <span> Deals start at</span>
                                                <br />
                                                <span> NPR&nbsp;10,000</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="explor-nepal">
                        <div className="explor-np-title">
                            <span> <h3>Explore Nepal</h3></span>
                            <span>These popular destinations have a lot to offer</span>
                        </div>
                        <div className="explor-np-img pt-4">
                            <ul>
                                <li>
                                    {explornp.map((e) => (
                                        <img src={e.imgone} />
                                    ))}
                                    <span><h5>Pokhara</h5></span>
                                    <span>602 properties</span>

                                </li>
                                <li>
                                    {explornp.map((e) => (
                                        <img src={e.imgtwo} />
                                    ))}
                                    <span><h5>Kathmandu</h5></span>
                                    <span> 929 properties</span>
                                </li>
                                <li>
                                    {explornp.map((e) => (
                                        <img src={e.imgthree} />
                                    ))}
                                    <span><h5>Nagarkot</h5></span>
                                    <span> 47 properties</span>
                                </li>
                                <li>
                                    {explornp.map((e) => (
                                        <img src={e.imgfour} />
                                    ))}
                                    <span><h5>Dhulikhel</h5></span>
                                    <span> 48 properties</span>
                                </li>
                                <li>
                                    {explornp.map((e) => (
                                        <img src={e.imgfive} />
                                    ))}
                                    <span><h5>Sauraha</h5></span>
                                    <span>108 properties</span>
                                </li>
                                {/*<li>
                                    {explornp.map((e) => (
                                        <img src={e.imgsix} />
                                    ))}
                                    <span><h5>Chitwan</h5></span>
                                    <span>25 properties</span>
                                </li>
                                <li>
                                    {explornp.map((e) => (
                                        <img src={e.imgseven} />
                                    ))}
                                    <span><h5>Bhaktapur</h5></span>
                                    <span>109 properties</span>
                                    </li>*/}
                            </ul>
                        </div>
                    </div>

                    <div className="inspiration">
                        <span><h1>Get inspiration for your next trip</h1></span>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="insp-col">
                                    <div className="insp-bg" style={{ backgroundImage: `url("https://cf.bstatic.com/xdata/images/xphoto/540x405/167587831.webp?k=31e6256fc044ff9b127babfafcde346ded92aa66545f925fa84b749a8226dc30&o=")` }}></div>
                                    <div className="insp-title">
                                        <span className="insp-tim-display"> 48 hours in Paris, France</span>
                                        <br />
                                        <span>The perfect 2-day itinerary for visiting The City of Light</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="insp-col">
                                    <div className="insp-bg" style={{ backgroundImage: `url("https://cf.bstatic.com/xdata/images/xphoto/540x405/167616822.webp?k=31bae8840b12db441ce925b86f3f5149fda3f9851de6dfbd48cfff89a6680b74&o=")` }}></div>
                                    <div className="insp-title">
                                        <span className="insp-tim-display">The 9 most beautiful cities for autumn travel</span>
                                        <br />
                                        <span>From soaking in Seoul’s hot springs to tucking into sticky cinnamon rolls in Montreal.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="insp-col">
                                    <div className="insp-bg" style={{ backgroundImage: `url("https://cf.bstatic.com/xdata/images/xphoto/540x405/167580228.webp?k=081bfa5713fa309507294247377ac4d4b9c23d45bbb3161711c97ba2847b7bfc&o=")` }}></div>
                                    <div className="insp-title">
                                        <span className="insp-tim-display">Top 5 US cities to celebrate Labor Day Weekend</span>
                                        <br />
                                        <span>Leave summer with no regrets when you head to these cities for Labor Day Weekend.</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row pt-3">
                            <div className="col-lg-6">
                                <div className="insp-col">
                                    <div className="insp-bg" style={{ backgroundImage: `url("https://cf.bstatic.com/xdata/images/xphoto/540x405/165922442.webp?k=7620df87dcc9ef0cd2fe66423dbf11fbdc2cd17e090856d8046aa3ec60dd3764&o=")` }}></div>
                                    <div className="insp-title">
                                        <span className="insp-tim-display">Europe’s best but less obvious group holiday spots</span>
                                        <br />
                                        <span>The best places in Europe for an idyllic late-summer escape with friends.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="insp-col">
                                    <div className="insp-bg" style={{ backgroundImage: `url("https://cf.bstatic.com/xdata/images/xphoto/720x405/165609232.webp?k=4367ee64da98f68300d41a1c85ce3b2fe518b4c046cb2021d7bc34a499ace5dd&o=")` }}></div>
                                    <div className="insp-title">
                                        <span className="insp-tim-display">The USA’s 9 most beautiful beaches</span>
                                        <br />
                                        <span>The finest stretches of sand to be found in North America.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="guests">
                            <p>Homes Guests love</p>
                        </div>


                    </div>
                </div>
            </section>

            <section className="all-footer">
                <div><Footermenu /></div>
                <div className="footer-logos container">
                    <div className="foot-head">
                        <h3>Extranet login</h3>
                        <span><p>Copyright © 1996–2022 Booking.com™. All rights reserved.</p></span>
                        <div className="foot-logos">
                            <span>Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.</span>
                            <ul>
                                <li>
                                    {footerlogo.map((f) => (
                                        <img src={f.flogo} />
                                    ))}
                                </li>
                                <li>
                                    {footerlogo.map((f) => (
                                        <img src={f.fologo} />
                                    ))}
                                </li>
                                <li>
                                    {footerlogo.map((f) => (
                                        <img src={f.foologo} />
                                    ))}
                                </li>
                                <li>
                                    {footerlogo.map((f) => (
                                        <img src={f.footlogo} />
                                    ))}
                                </li>
                                <li>
                                    {footerlogo.map((f) => (
                                        <img src={f.footelogo} />
                                    ))}
                                </li>
                                <li>
                                    {footerlogo.map((f) => (
                                        <img src={f.footerlogo} />
                                    ))}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
