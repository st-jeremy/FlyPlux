import '../Styles/ContactStyle.css';

import { useNavigate } from "react-router-dom";
import Header from "./Header";
import backgroundImage from "../images/Slide3.png";

import call from "../images/call.png";
import email from "../images/email.png"
import find from "../images/find.png";
import info from "../images/info.png";
import join from "../images/join-us.jpeg";


import { ImFacebook2 } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {
    const iconStyle = {
        marginRight: '1rem',
        width: '40px',
        height: '40px'
    }

    const navigate =useNavigate();

    return ( 
        <div className="contact">
            <Header 
                heading="Contact FlyPlux®"
                subHeading = {`What are you waiting for? Let's build your journey together. `}
                style={{
                    backgroundImage: `url(${ backgroundImage })`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    borderBottomRightRadius: '6.25rem',
                    height: '38rem'
                }}
            />
            
            <div className="body">

                <div className="row1">
                    <div className="col1">
                        <h1>Contact FlyPlux®</h1>
                    </div>

                    <div className="col2">
                        <div className="box">    
                            <div className="cell pic">
                                <img src={ call } alt="call" />
                            </div>
                            <div className="cell">
                                <h3>Call Us</h3>
                                <p>+234 905 329 2009</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="cell pic">
                                <img src={ email } alt="email" />
                            </div>

                            <div className="cell">
                                <h3>Email us</h3>
                                <p>contact@flyplux.com</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="cell pic">
                                <img src={ find } alt="find" />
                            </div>

                            <div className="cell">
                                <h3>Find us</h3>
                                <p>
                                    <b>Europe (Headquarters)</b> <br />
                                    15B, Fowler street,<br />
                                    Manchester City, United Kingdom.
                                </p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="info pic">
                                <img src={ info } alt="info" />
                            </div>

                            <div className="info">
                                <h3>Info</h3>
                                <p>
                                    Chamber of Commerce: 80190 <br />
                                    VAT: 1264367768
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row2">
                    <img src={ join } alt="contact us" />
                </div>
                
                <hr />
                <div className="row3">
                    
                    <div className="col1">
                        <h1>Message</h1> 
                    </div>
                    <div className="col2">
                        <p>
                            Fill in the information required in the form and we will get back to you within one hour. 
                            <br />
                            Or contact FlyPlux® via our social media channels.
                        </p>

                        <div className="socialMedia">
                            <ImFacebook2 style={ iconStyle }/>
                            <BsInstagram style={ iconStyle }/>
                            <AiFillLinkedin style={ iconStyle }/>
                        </div>

                        <p>
                            Your information will be kept private and confidential only to be used by FlyPlux<sup>®</sup> in accordance with our Privacy Policy. 
                            <br />
                            Fields marked * must be completed before submitting.
                        </p>

                       
                    </div>
                </div>
            
                <div className="row4">
                    <form action="">
                        <label htmlFor="Name">Name*</label><br />
                        <input type="text" placeholder='E.g John Doe' required/>
                        <br />

                        <label htmlFor="email">Email*</label><br />
                        <input type="email" name="email" id="email" placeholder='E.g johndoe@gmail.com' required/>
                        <br />

                        <label htmlFor="phone">Phone*</label> <br />
                        <input type="tel" name="phone" id="phone" required/>
                        <br />

                        <label htmlFor="subject">Subject*</label> <br />
                        <input type="text" placeholder='Subject' required />
                        <br />

                        <label htmlFor="message">Message*</label><br />
                        <textarea rows="4" cols="100" placeholder='Message' required/>
                        <br />
                    
                        <button onClick={()=> navigate('ContactSummary')}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;