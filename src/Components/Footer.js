import { ImFacebook2 } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="row1">
                <div className="box">
                    <h2>FlyPlux®</h2>
                </div>

                <div className="box socialMedia">
                    <h4>Follow us</h4>
                    <ImFacebook2 />
                    <BsInstagram />
                    <AiFillLinkedin />
                </div>
            </div>

            <div className="row2">
                <div className="box">
                    <h4>On Demand</h4>
                    <a href="/">Private Charter</a>
                </div>

                <div className="box">
                    <h4>Shared Flights</h4>
                    <a href="/">Available Flight</a><br />
                    <a href="/">Propose a Flight</a>
                </div>
            
                <div className="box">
                    <h4>Company</h4>
                    <a href="/">About us</a><br />
                    <a href="/">Solutions</a><br />
                    <a href="/">News</a><br />
                    <a href="/">Contact</a>
                </div>

            </div>
            <br />

            <hr />
            <div className='row3'>
            <p>© FlyPlux Aviation 2022 </p>
            </div>
        </div>
    );
}
 
export default Footer;