import { FiMenu } from 'react-icons/fi';
import { MdAirplanemodeActive } from 'react-icons/md';

const Header = () => {
    return ( 
        <div className="Header">
            <div className="column1">
                <h1>FlyPlux <sup>®</sup></h1>
                <br />
                <p>More flexibility, freedom and choice!</p>
            </div>
            <br />

            <div className="column2">
                {/* <Link to='/Solutions'><Solutions /></Link> */}
                <a href="/">About Us</a>
                <span id='small'></span>

                <a href="/">Contact</a>
                <span id='large'></span>
                
                <button><MdAirplanemodeActive /></button>
                <span id='small'></span>
                <button><FiMenu /></button>
                <br />
                <br />

                <h1>Personalized Aviation</h1>

                <div className="btn">
                    <button>Book an Aircraft</button>
                    <button>Book a Shared Flight</button>
                </div>
            </div>

        </div>
     );
}
 
export default Header;