import '../Styles/HeaderStyle.css';

// import { FiMenu } from 'react-icons/fi';
// import { MdAirplanemodeActive } from 'react-icons/md';
import { NavLink } from 'react-router-dom';



const Header = (props) => {

    const style ={
        height: '40px',
        width: '50px',
        margin: '0',
        padding: '0'
    };

    //   <div className={`${isABC ? 'contactHeader': "header"}` } id='header'>

    return ( 
        <div className='header' id='header' style={ props.style } >
            <div className="row1">
                <div className="col1">
                    <NavLink to="/">
                        <h1>FlyPlux<sup>®</sup></h1>
                    </NavLink>
                    <p>{ props.paragraph}</p>
                </div>

                <div className="col2">
                    <div className="links">
                        <NavLink to="/Solutions">Solutions</NavLink>
                        <NavLink to="/AboutUs">About Us</NavLink>
                        <NavLink to="/Contact">Contact Us</NavLink>

                    </div>

                    <div className="icon">
                        {/* <NavLink to="BookAircraft">
                            <MdAirplanemodeActive  style={ style } />
                        </NavLink> */}
                        {/* <br /> */}
                        {/* <FiMenu /> */}
                        
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
            </div>
                
            <div className="row">
                <h1>{props.heading}</h1>
                <h4>{props.subHeading}</h4>
            </div>

            <div className="button">

                {props.btn}
                {/* <NavLink to="BookAircraft">
                    <button>{props.button}</button>
                </NavLink> */}

                {/* <NavLink to="SharedFlight">
                    <button>Book a Shared Flight</button>
                </NavLink> */}
            </div>
        </div>
     );
}
 
export default Header;