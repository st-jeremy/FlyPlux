import Header from './Header';
import { Link } from 'react-router-dom';
import '../Styles/HomeStyle.css';

import { MdArrowForward } from 'react-icons/md';
import pic from "../images/private_jet.png";
import phone from "../images/mobile-app.png";
import Flightmanager from '../images/Flightmanager.png';
import AddOn from '../images/Add-on.png';
import digitalcare from '../images/digitalcare.png';
import membership from '../images/membership.png';
import Neutralflight from '../images/Neutralflight.png';
import Shared from '../images/shared.png';
import backgroundImage from "../images/background.png";
import { NavLink } from 'react-router-dom';

import SlideShow from './SlideShow';

const Home = () => {

    return ( 
        <div className="home">
            <Header 
                heading="Personalized Aviation"
                mission = 'More flexibility, freedom and choice!'
                style={{
                    backgroundImage: `url(${ backgroundImage })`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 120%',
                    height: '38rem',
                    color: 'black'
                }}
                button={
                    <NavLink to="BookAircraft">
                        <button>Book Aircraft</button>
                    </NavLink>}
            /> 

            <div className="mission" id='mission'>
                <div className="col">
                    <hr />
                    <h1>
                        We believe that in a world where passengers have become numbers, a personal approach is key to ensure you get the most out of your flying experience.
                    </h1>

                    <div className="outer">
                        <div className="box">
                            <h4>Smart Quotes</h4>
                            <p>
                                Know what you are paying for. No hidden fees. No overpromises. Flights suitable for your needs.
                            </p>
                        </div>

                        <div className="box">
                            <h4>Flexible Solutions</h4>
                            <p>Stop depending on airlines. Fly on your own terms or join our exclusive shared flights.</p>
                        </div>

                        <div className="box">
                            <h4>Fully Customizable</h4>
                            <p>
                                Control all aspects of your journey. Easily upgrade services with our add-ons.
                            </p> 
                        </div>

                        <div className="box">
                            <h4>Personalization</h4>
                            <p>
                                Receive full support of our Flight Management service. We have you covered, anywhere.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services" id='services'>
                <div className="flexServices box">
                    <h2>Flexible Services <MdArrowForward /></h2>
                    <div className="flex">
                        <p>
                            Smart solutions for all your charter requirements.
                        </p>

                        <NavLink to="/Solutions">
                            <button>All solutions</button>
                        </NavLink>
                    </div>
                </div>

                <div className="onDemand box">
                    <h2 className="unhide">
                        On Demand <MdArrowForward />
                    </h2>
                    <p className="hide">
                        Book your aircraft. Customize all aspects of your journey.
                    </p>
                </div>

                <div className="sharedFlight box">
                    <h2>Shared Flights <MdArrowForward /></h2>
                    <p>Fly private for the fraction of the price.</p>
                </div>
            </div>

            <div className="destination" id='destination'>
                <h1>Popular Destinations</h1>
                <div className='col1'>
                    <img src={ pic } alt="Destination" />
                </div>

                <div className="col2">
                    <div className="box">
                        <h3>Suva (SUV)</h3>
                        <h4>Fiji</h4>
                    </div>
                    <div className="box">
                        <h3>Paris (PAR)</h3>
                        <h4>France</h4>
                    </div>
                    <div className="box">
                        <h3>Cairo (CAR)</h3>
                        <h4>Egypt</h4>
                    </div>
                    <div className="box">
                        <h3>Malé (MAL)</h3>
                        <h4>Maldives</h4>
                    </div>
                    <div className="box">
                        <h3>Riga (RIG)</h3>
                        <h4>Latvia</h4>
                    </div>
                    <div className="box">
                        <h3>Dubai (DUB)</h3>
                        <h4>UAE</h4>
                    </div>
                </div>
            </div>

            <div className='mobileApp' id='mobileApp'>
                <div className="col1">
                    <img src={ phone } alt="MobileApp" />
                </div>

                <div className="col2">
                    <h1>Flight Manager</h1>
                    <p>
                        All of our flights come with complimentary Flight Manager Service. Your dedicated Flight Manager ensures that every detail of your flight is taken care of and you get the most competitive tailor-made offers.
                        <br />
                        <br />
                        Speak with your Flight Manager in English 🇬🇧,  Dutch 🇳🇱, German 🇩🇪, Spanish 🇪🇸 or Portuguese 🇵🇹. 
                    </p>
                </div>
            </div>

            <div className='experience' id='experience'>
                <h1 className='row1'>FlyPlux<sup>®</sup> Experience.</h1>

                <div className="row2">
                    <div className="col1">
                        <p>
                            At FlyPlux<sup>®</sup> we are bold. The aircraft is just a tool we use to get you where you want to be. Our clients enjoy much more value for their investment, accessing unparalleled personalisation when flying private.
                        </p>
                        <p>
                            We offer <b>personalised experiences</b> with our <b>on-demand charters</b> and <b>personalised flexibility</b> personalised flexibility with our <b>exclusive shared flight</b>.  We upgrade the way you fly.
                        </p>
                        <br />
                        <NavLink to="/BookAircraft">
                            <button>Book an Aircraft</button>
                        </NavLink> 
                        
                    </div>
                
                    <div className="col2">
                        <div className="box">
                            <img src={ membership } alt="membership" />
                            <h3>Rewarding Membership</h3>
                            <p>
                                Our membership blends the advantage of a jet card with the easiness of a loyalty program. Get access to services not available anywhere without hefty fees.
                            </p>
                        </div>

                        <div className="box">
                            <img src={ Shared } alt="Shared" />
                            <h3>Exclusive Shared Flights</h3>
                            <p>
                                Clients can book a seat on selected routes, sharing the costs with like-minded people. Experience the benefits of flying private for a fraction of the price.
                            </p>
                        </div>

                        <div className="box">
                            <img src={ Neutralflight } alt="Neutral flight" />
                            <h3>CO<sub>2</sub> Neutral Flights</h3>
                            <p>
                                We play our part to ensure a more sustainable future. Our CO<sub>2</sub> offset program, clients can offset the entire emission of their flights.
                            </p>
                        </div>

                        <div className="box">
                            <img src={ digitalcare } alt="Digital care" />
                            <h3>Digital Care</h3>
                            <p>
                                We don't do business as if it was the 80's. We work in the future. Receive instant estimates online. Get a quote with one click. Book your aircraft via a seamless process.
                            </p>
                        </div>

                        <div className="box">
                            <img src={ AddOn } alt="Services add on" />
                            <h3>Service Add-ons</h3>
                            <p>
                                Avoid hidden fees and pay only for the service that you need. Upgrade your flight with multiple add-ons. Shape your trip to meet your requirements.
                            </p>
                        </div>

                        <div className="box">
                            <img src={ Flightmanager } alt=" Flight manager" />
                            <h3>Personal Flight Manager</h3>
                            <p>
                                Our experts can support any trip and request, 24/7. From short business trips to large groups crossing the globe for leisure. Enjoy a stress-free booking process.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='slideShow' id='slideShow'>
                <SlideShow 
                    style={{
                        borderBottomRightRadius: '16.25px'
                    }}
                />
            </div>

            <div className='bookFlight' id='bookFlight'>
                <h4>What are you waiting for?</h4>
                <Link to='./BookAircraft'>
                    <h1>Book a Flight</h1>
                </Link>
            </div>
        </div>
    );
}
 
export default Home;