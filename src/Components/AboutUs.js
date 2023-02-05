import '../Styles/AboutUsStyle.css';
import Header from "./Header";
import backgroundImage from "../images/about-us.jpeg";
import office from "../images/aboutUs.png";
import membership from "../images/reward_membership.png";
import sharedFlight from "../images/exclusive_shared_flight.png";
import operations from "../images/operations.png";
import personalization from "../images/personalization.png";
import neutralFlight from "../images/neutral_flight.png";
import contactImg from "../images/Slide4.jpeg"

const AboutUs = () => {

    return ( 
        <div className="aboutUs">
            <Header 
                heading="About FlyPlux®"
                style={{
                    backgroundImage: `url(${ backgroundImage })`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    borderBottomRightRadius: '6.25rem',
                    height: '30rem',
                    color: 'black'
                }}
            />

            <div className="row">
                <div className="col1">
                    <h1>About FlyPlux<sup>®</sup></h1>
                </div>
                
                <div className="col2">
                    <h4>
                        Technology, extensive industry knowledge and design-thinking approach. 
                        <br />
                        Few reasons why Hyer® is disrupting the private jet charter business. 
                        <br />
                        We deliver experiences that are smart, transparent, customisable and most of all, unforgettable. 
                    </h4>
                </div>
            </div>

            <img src={ office } alt="office" id="office" />

            <div className="row2">
                <div className="col1">
                    <h2>Visionary</h2>
                    <p>
                    FlyPlux<sup>®</sup> Aviation was founded by Jeremy Smith, a renowned aircraft pilot with decades of experience in the aviation industry.
                    </p>

                    <p>
                        Recognizing that the private charter market is still too complex. Some services, which are usually taken for granted in this sector, are not delivered at the same level as they should be. FlyPlux<sup>®</sup> was built to tackle this problem. 
                    </p>
                </div>

                <div className="col2">
                    <div className="box">
                        <h3>Jeremy Smith</h3>
                        <p>
                            Throughout his career, Jeremy  has led and shaped customer service delivery for VIP clients and has improved long-haul flight operations and corporate efficiency at leading airlines across the globe.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row3">
                    <div className="col1">
                        <h2>Why FlyPlux<sup>®</sup></h2>
                    </div>
                    
                    <div className="col2">
                        <div className="box">
                            <img src= { membership }alt="reward_membership"/>
                            <h4>Reward Membership</h4>
                            <p>
                                Enjoy the benefits of a jet card or aircraft fractional ownership programs, without the heavy financial commitments.  
                            </p>
                        </div>

                        <div className="box">
                            <img src= { sharedFlight } alt="exclusive_shared_flight" />
                            <h4>Exclusive Shared Flights</h4>
                            <p>
                                Clients can book a seat on selected routes, sharing the costs with like-minded people. Experience the benefits of flying private for a fraction of the price.
                            </p>
                        </div>

                        <div className="box">
                            <img src={ operations }alt="operations" />
                            <h4>Operational Independence</h4>
                            <p>
                                Our asset-light model alow us to take leverage of more than 5,000 aircraft and, through innovative optimization, deliver smart and cost-competitive flights.
                            </p>
                        </div>

                        <div className="box">
                            <img src={ personalization} alt="personalization" />
                            <h4>Personalization</h4>
                            <p>
                                We do not believe in “one-size-fits-all”. We take the time to understand why you need to fly so you get a solution suitable to your needs and budget.
                            </p>
                        </div>

                        <div className="box">
                            <img src={ neutralFlight}alt="neutral_flight" />
                            <h4>CO<sub>2</sub> Neutral Flights</h4>
                            <p>
                                We play our part to ensure a more sustainable future. Via Flyplux<sup>®</sup>, CO<sub>2</sub> offset program, clients can offset the entire emission of their flights.
                            </p>
                        </div>
                    </div>
            </div>

            <div className="row4">
                <div className="col1">
                    <img src={ contactImg } alt="contact us" />
                </div> 

                <div className="col2">
                    <h2>
                        We believe that in a world that turns you into a number, we are able to use technology to deliver to you an unparalleled personalised service.
                    </h2> 
                </div>
            </div>
        </div>
     );
}
 
export default AboutUs;