import { ImFacebook2 } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return ( 
        <div className="Footer">
            <h2>FlyPlux®</h2>
            <br />

            <div className='footcol1'>
                <h3>Follow us</h3>
                <a href="http://instagram.com"><button><BsInstagram /></button></a>
                <a href="http://facebook.com"><button><ImFacebook2 /></button></a>
                <a href="http://LinkedIn"><button><AiFillLinkedin /></button></a>
            </div>

            <div className="footcol2">
                <div className="col3">
                    <p>On Demand</p>
                    <a href="/">Private Charter</a>
                </div>
                <div className="col3">
                    <p>Shared Flights</p>
                    <a href="/">Available Flight</a><br />
                    <a href="/">Propose a Flight</a>
                </div>
                <div className="col3">
                    <p>Membership</p>
                    <a href="/">Elevate</a>
                </div>
                <div className="col3">
                    <p>Company</p>
                    <a href="/">About us</a><br />
                    <a href="/">Solutions</a><br />
                    <a href="/">News</a>
                    <a href="/">Contact</a>
                </div>
                <div className="col3">
                    <p>My Account</p>
                    <a href="/">Register</a><br />
                    <a href="/">Login</a><br />
                    <a href="/">Password</a>
                </div>
            <div>
        </div>
        </div>
        <br />

        <div>
            © FlyPlux Aviation 2022
        </div>
        </div>


    );
}
 
export default Footer;