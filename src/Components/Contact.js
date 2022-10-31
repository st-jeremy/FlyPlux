import { useNavigate } from "react-router-dom";

import call from "../images/call.png";
import email from "../images/email.png"
import find from "../images/find.png";
import join from "../images/join-us.jpeg"

const Contact = () => {

    const navigate =useNavigate();

    return ( 
        <div className="contact">
           <div className="col1">
                <h1>Contact FlyPlux<sup>®</sup></h1>
           </div>

           <div className="col2">
                <div className="box">    
                    <div className="cell pic">
                        <img src={ call } alt="call" />
                    </div>
                    <div className="cell">
                        <h3>Call Us</h3>
                        <h4>+234 905 329 2009</h4>
                    </div>
                </div>

                <div className="box">
                    <div className="cell pic">
                        <img src={ email } alt="email" />
                    </div>

                    <div className="cell">
                        <h3>Email us</h3>
                        <h4>contact@flyplux.com</h4>
                    </div>
                </div>

                <div className="box">
                    <div className="cell pic">
                        <img src={ find } alt="find" />
                    </div>

                    <div className="cell">
                        <h3>Find us</h3>
                        <h4>
                            <b>Europe (Headquarters)</b> 
                            <ul>
                                Fowler street,
                                Manchester City,
                                London, United Kingdom.
                            </ul>
                            <b>Nigeria </b>
                            <ul>
                                1, Sarki Tafida street,
                                Guzape, Abuja, Nigeria.
                            </ul>
                        </h4>
                    </div>
                </div>

                <div className="row">
                    <img src={ join } alt="contact us" />
                </div>
                <div className="row">
                    <hr />
                   <h1>Message</h1> 
                   <p>
                        Fill in the information required in the form and we will get back to you within one hour. Or contact FlyPlux® via our social media channels.
                   </p>
                </div>
           </div>

           <div className="col">
                <form action="">
                    <label htmlFor="Name">Name*</label><br />
                    <input type="text" required/>
                    <br />

                    <label htmlFor="email">Email*</label><br />
                    <input type="email" name="email" id="email" required/>
                    <br />

                    <label htmlFor="phone">Phone*</label> <br />
                    <input type="tel" name="phone" id="phone" required/>
                    <br />

                    <label htmlFor="subject">Subject*</label> <br />
                    <input type="text" required />
                    <br />

                    <label htmlFor="message">Message*</label><br />
                    <textarea rows="4" cols="100"/>
                    <br />
                
                    <button type="submit" onClick={()=> navigate('ContactSummary')}>Submit</button>
                </form>
            </div>
           
        </div>
     );
}
 
export default Contact;