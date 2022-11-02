import { NavLink } from "react-router-dom";

import { FiMenu } from 'react-icons/fi';
import { MdAirplanemodeActive } from 'react-icons/md';

const Title = () => {

  return ( 
    <div className="title">
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
                      <FiMenu /> 
                    </div>
                </div>
            </div>
    </div>
   );
}
 
export default Title;