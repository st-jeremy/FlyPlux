import '../Styles/HeaderStyle.css';

import { slide as Menu } from 'react-burger-menu'
import { MdAirplanemodeActive } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
// import BookAircraft from './BookAircraft';


const Header = (props) => {

  let styles = {
    bmBurgerButton: {
      position: 'relative',
      marginTop: '1rem',
      width: '26px',
      height: '20px'
    },
    bmBurgerBars: {
      background: 'rgb(2, 2, 30)'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '44px',
      width: '44px',
      color: 'red',
      position: 'absolute',
      top: '20px',
      right: '9%'
    },
    bmCross: {
      background: 'red'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
        color: 'white',
      marginTop: '1rem',
      marginLeft: '4.5rem',
      fontSize: '1em',
      width: '100%',
      height: 'fit-content'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgb(2, 2, 30, 0.9)',
      marginTop: '1.5rem',
      marginLeft: '-9rem',
      width: '15rem',
      height: '9rem'
    }
  }

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
          <NavLink to="/BookAircraft">
            <MdAirplanemodeActive />
          </NavLink> 
          <br /> 

          <Menu right styles={ styles } id="menu">
            <div id="myLinks">
              <NavLink to="/Solutions">Solutions</NavLink><br />
              <NavLink to="/AboutUs">About Us</NavLink><br />
              <NavLink to="/Contact">Contact Us</NavLink><br />
              <a href="#bookFlight">Book Flight</a>
            </div> 
          </Menu>
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