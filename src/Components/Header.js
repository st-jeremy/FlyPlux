import { FiMenu } from 'react-icons/fi';
import { MdAirplanemodeActive } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Header = () => {

    const hamburger= (e)=>{
        let x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }

    return ( 
        <div className="header" id='header'>
            <div className="row1">
                <div className="col1">
                    <NavLink to="/">
                        <h1>FlyPlux<sup>®</sup></h1>
                    </NavLink>
                    <p>More flexibility, freedom and choice!</p>
                    
                </div>

                <div className="col2">
                    <div className="links">
                        <NavLink to="/Solutions">Solutions</NavLink>
                        <NavLink to="/AboutUs">About Us</NavLink>
                        <NavLink to="/Contact">Contact Us</NavLink>
                    </div>

                    <div className="icon">
                        <MdAirplanemodeActive  />
                        <br />
                        <FiMenu onclick={() => hamburger()}/>

                        {/* <div id="myLinks">
                            <a href="#header">Home</a>
                            <a href="#services">Services</a>
                            <a href="#destinations">Destinations</a>
                            <a href="#experience">Experience</a>
                            <a href="#bookFlight">Book a Flight</a>
                        </div> */}
                    </div>
                </div>
            </div>
                
            <div className="row">
                <h2>Personalized Aviation</h2>
            </div>

            <div className="btn">
                <button>Book an Aircraft</button>
                <button>Book a Shared Flight</button>
            </div>
        </div>
     );
}
 
export default Header;