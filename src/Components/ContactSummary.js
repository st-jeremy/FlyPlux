import { useNavigate } from "react-router-dom";
import  checkMarkGif  from "../images/checkMark.gif";
import Header from "./Header";
import '../Styles/ContactStyle.css';

const ContactSummary = () => {
  const navigate = useNavigate();

  return ( 
    <div className="contactSummary">

      <Header 
        heading="Message"
        style={{
          backgroundColor: 'grey',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          borderBottomRightRadius: '7rem',
          height: '22rem',
          paddingBottom: '3rem'
        }}
      />

      <div className="content">
        <div className="row">
          <img src={ checkMarkGif } alt="check_mark" />
          <br />

          <h2>Message sent Successfully.</h2><br />
          <h2>Thanks for reaching out.</h2>
          <h3>We'll get back within an hour.</h3>
        </div>

        <div className="row">
          All details provided by you will be held confidential by FlyPlux<sup>®</sup> and used in accordance with our Privacy Policy.
        </div>
        <br />
        
        <button type="submit" onClick={() => navigate(-1)}>Go back</button>
      </div>
    </div>
   );
}
 
export default ContactSummary;