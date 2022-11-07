import '../Styles/HeaderStyle.css';

import { FiMenu } from 'react-icons/fi';
import { MdAirplanemodeActive } from 'react-icons/md';
import { NavLink } from 'react-router-dom';


const Header = (props) => {

    //   <div className={`${isABC ? 'contactHeader': "header"}` } id='header'>

    return ( 
        <div className='header' id='header' style={ props.style } >

            <div className="box1">
                <NavLink to="/">
                    <h1>FlyPlux<sup>®</sup></h1>
                </NavLink>
            </div>

            <div className="box2">
                <div className="links">
                    <NavLink to="/Solutions">Solutions</NavLink>
                    <NavLink to="/AboutUs">About Us</NavLink>
                    <NavLink to="/Contact">Contact Us</NavLink>
                </div>

                <div className="box3">
                    <NavLink to="BookAircraft">
                        <MdAirplanemodeActive />
                    </NavLink> 
                    <br /> 
                    <FiMenu /> 
                    
                    {/* 
                    <div id="myLinks">
                        <a href="#header">Home</a>
                        <a href="#services">Services</a>
                        <a href="#destinations">Destinations</a>
                        <a href="#experience">Experience</a>
                        <a href="#bookFlight">Book a Flight</a>
                    </div>  */}
                </div>
            </div>

           
            <div className="box4">
                <h2>{props.heading}</h2>
                <h3>{ props.subHeading}</h3>
            </div>

            <div className="box5">
                <p>{props.mission}</p>
            </div>

            <div className="box6">
                {props.button}
            </div>
        </div>
     );
}
 
export default Header;