import '../Styles/SolutionsStyle.css';

import Header from "./Header";
import backgroundImage from "../images/Slide3.png";

import privateCharter from "../images/privateCharter.jpeg";
import groupCharter from "../images/groupCharter.png";
import proposeFlight from "../images/proposeFlight.png";
import availableFlight from "../images/availableFlight.jpeg";
import elevate from "../images/elevate.jpeg";
import altitude from "../images/altitude.jpeg";

const Solutions = () => {

    return ( 
        <div className="solutions">
            <Header 
                heading="Experience FlyPlux®"
                subHeading = {`Focus on enjoying the destination, not worrying about the best way to fly there. The perfect aircraft is just a detail when designing a seamless experience.`}
                style={{
                    backgroundImage: `url(${ backgroundImage })`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    borderBottomRightRadius: '6.25rem'
                }}
                
            />


            <div className="row">
                <div className="col1">
                    <h2>On Demand</h2>
                </div>
                <div className="col2">
                    <h4>
                        Fly on your terms. When you want, where you want.
                        <br />

                        Flying On-Demand gives you the total control of your flight and an unbeatable level of service at competitive rates. No hidden fees, no upfront investment or jet card payments.
                    </h4>
                </div>
            </div>

            <div className="row">
                <div className="col1">
                    <img src={ privateCharter} alt="private_charter" />
            
                    <p>
                        Private Charter
                    </p>
                </div>
                <div className="col2">
                    <img src={ groupCharter} alt="group_charter" />
                    <p>
                        Group Charter
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col1">
                    <h3>Shared Flights</h3>
                </div>
                <div className="col2">
                    <p>
                    Fly on Hyer® exclusive routes booking a seat.
                    <br />

                    Flying on a shared flight with like-minded people gives you the convenience and comfort that only private aviation can provide, for a fraction of the price. 
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col1">
                    <img src={ availableFlight } alt="availableFlight" />
                    <h4>Available Flights</h4>
                </div>
                <div className="col2">
                    <img src={ proposeFlight} alt="" />
                    <h4>Propose Route</h4>
                </div>
            </div>

            <div className="row">
                <div className="col1">
                    <h2>Membership</h2>
                </div>
                <div className="col2">
                    <p>
                        Our membership program is innovative, bold and offers even more personalisation and flexibility.
                        <br />

                        You will start enjoying the benefits straight away. 
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col1">
                    <img src={ elevate } alt="elevate" />
                    <p>Elevate</p>
                </div>
                <div className="col2">
                    <img src={ altitude } alt="" />
                    <p>FlyPlux Attitude</p>
                </div>
            </div>
                

        </div>
     );
}
 
export default Solutions;