import '../Styles/FooterStyle.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { ImFacebook2 } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="row1">
                <div className="box">
                    <NavLink to="/">
                        <h2>FlyPlux<sup>®</sup></h2>
                    </NavLink>
                </div>

                <div className="box socialMedia">
                    <h4>Follow us</h4>
                    <ImFacebook2 /><br />
                    <BsInstagram /><br/>
                    <AiFillLinkedin />
                </div>
            </div>

            <div className="row2">
                <div className="box">
                    <h4>On Demand</h4>
                    <Link to="./BookAircraft">Private Charter</Link>
                </div>

                <div className="box">
                    <h4>Shared Flights</h4>
                    <Link to="/">Available Flight</Link><br />
                    <Link to="/">Propose a Flight</Link>
                </div>
            
                <div className="box">
                    <h4>Company</h4>
                    <Link to="/">About us</Link><br />
                    <Link to="/">Solutions</Link><br />
                    <Link to="/">Contact</Link>
                </div>
            </div>
            <br />

            <hr />
            <div className='row3'>
                <p>© FlyPlux<sup>®</sup> Aviation. All Rights Reserved. Copyright © {new Date().getFullYear()}</p>
            </div>
        </div>
    );
}
 
export default Footer;