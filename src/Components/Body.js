import { MdArrowForward } from 'react-icons/md';
import pic from "../images/privatejet.png";
import phone from "../images/mobile.png";
import Flightmanager from '../images/Flightmanager.png';
import AddOn from '../images/Add-on.png';
import digitalcare from '../images/digitalcare.png';
import membership from '../images/membership.png';
import Neutralflight from '../images/Neutralflight.png';
import Shared from '../images/shared.png';

import SlideShow from './SlideShow';




const Body = () => {
    return ( 
        <div className="Body">
            <section className="Mission">
                <div className="column1">

                </div>
                <div className="column2">
                    <h1 >
                        We believe that in a world where passengers have become numbers, a personal approach is key to ensure you get the most out of your flying experience.
                    </h1>
                    <br />

                    <div className="col">
                        <hr />
                        <h3>Smart Quotes</h3>
                        <p>Know what you are paying for. No hidden fees. No overpromises. Flights suitable for your needs.</p>
                    </div>

                    <div className="col">
                        <hr />
                        <h3>Flexible Solutions</h3>
                        <p>Stop depending on airlines. Fly on your own terms or join our exclusive shared flights.</p>
                    </div>

                    <div className="col">
                        <hr />
                        <h3>Fully Customizable</h3>
                        <p>
                            Control all aspects of your journey. Easily upgrade services with our add-ons.
                        </p> 
                    </div>

                    <div className="col">
                        <hr />
                        <h3>Personalization</h3>
                        <p>
                            Receive full support of our Flight Management service. We have you covered, anywhere.
                        </p>
                    </div>
                </div>
            </section>
            <br />

            <section className="Services">
                <div className="col2 flexibleServices">
                    <h2>Flexible <br /> Services</h2>
                    <p>
                        Smart solutions for all your charter requirements
                    </p>
                    <button>All solutions</button>
                    
                </div>

                <div className="col2 onDemand">
                    <div id='onDemand'>
                        <h2 className="unhide">
                            On Demand
                        </h2>
                        {/* <i className='hide'> <MdArrowForward  /></i> */}
                        <p className="hide">
                            Book your aircraft. Customize all aspects of your journey
                        </p>
                    </div>
                </div>
                <div className="col2 sharedFlight">
                    <h2>Shared Flights</h2>

                </div>
            </section>
            <br />

            <section className="Destinations">
                <h1>Popular Destinations</h1>
                <div className='column1'>
                    <img src={ pic } alt="Destination" />
                </div>

                <div className="column2">
                    <div className="col">
                        <hr />
                        <h3>Barcelona (GRO)</h3>
                        <h4>Spain</h4>
                    </div>

                    <div className="col">
                        <hr />
                        <h3>Ibiza (IBZ)</h3>
                        <h4>Spain</h4>
                    </div>
                    <div className="col">
                        <hr />
                        <h3>Cannes (CEQ)</h3>
                        <h4>France</h4>
                    </div>
                    <div className="col">
                        <hr />
                        <h3>Paris (LBG)</h3>
                        <h4>France</h4>
                    </div>
                </div>
            </section>
            <br />

            <section className='MobileApp'>

                <div className="column1">
                    <img src={ phone } alt="MobileApp" />
                </div>

                <div className="column2">
                    <h1>Flight Manager</h1>
                    <br />
                    <h4>
                        All of our flights come with complimentary Flight Manager Service. Your dedicated Flight Manager ensures that every detail of your flight is taken care of and you get the most competitive tailor-made offers.
                        <br />
                        Speak with your Flight Manager in 
                            <ol>English 🇬🇧,</ol>  
                            <ol>Dutch 🇳🇱,</ol>
                            <ol>German 🇩🇪,</ol> 
                            <ol>Spanish 🇪🇸 or </ol>
                            <ol>Portuguese 🇵🇹. </ol>
                    </h4>
                </div>
                
            </section>
            <br />

            <section className='Experience'>
                <h1>FlyPlux® Experience</h1>

                <div className="column1">
                    <p>
                        At FlyPlux<sup>®</sup> we are bold. The aircraft is just a tool we use to get you where you want to be. Our clients enjoy much more value for their investment, accessing unparalleled personalisation when flying private.
                    </p>
                    <p>
                        We offer personalised experiences with our on-demand charters and personalised flexibility with our exclusive shared flight.  We upgrade the way you fly.
                    </p>
                    <br />
                    <button>Book an Aircraft</button>
                </div>
                
                <div className="column2">
                    <div className="col">
                        <img src={ membership } alt="" />
                        <h3>Rewarding Membership</h3>
                        <p>
                            Our membership blends the advantage of a jet card with the easiness of a loyalty program. Get access to services not available anywhere without hefty fees.
                        </p>
                    </div>
                    <div className="col">
                        <img src={ Shared } alt="" />
                        <h3>Exclusive Shared Flights</h3>
                        <p>
                            Clients can book a seat on selected routes, sharing the costs with like-minded people. Experience the benefits of flying private for a fraction of the price.
                        </p>
                    </div>
                    <div className="col">
                        <img src={ Neutralflight } alt="" />
                        <h3>CO2 Neutral Flights</h3>
                        <p>
                            We play our part to ensure a more sustainable future. Via Hyer® CO2 offset program, clients can offset the entire emission of their flights.
                        </p>
                    </div>
                    <div className="col">
                        <img src={ digitalcare } alt="" />
                        <h3>Digital Care</h3>
                        <p>
                            We don't do business as if it was the 80's. Receive instant estimates online. Get a quote with one click. Book your aircraft via a seamless process.
                        </p>
                    </div>
                    <div className="col">
                        <img src={ AddOn } alt="" />
                        <h3>Service Add-ons</h3>
                        <p>
                            Avoid hidden fees and pay only for the service that you need. Upgrade your flight with multiple add-ons. Shape your trip to meet your requirements.
                        </p>
                    </div>
                    <div className="col">
                    <img src={ Flightmanager } alt="" />
                    <h3>Personal Flight Manager</h3>
                    <p>
                        Our experts can support any trip and request, 24/07. From short business trips to large groups crossing the globe for leisure. Enjoy a stress-free booking process.
                    </p>
                </div>
            </div>
            </section>
            <br />

            <section className='SlideShow'>
                <SlideShow />
            </section>
            <br />

            <section className='Booking'>
                <h3>What are you waiting for?</h3>
                <h1>Book a Flight</h1>
            </section>
        </div>
     );
}
 
export default Body;