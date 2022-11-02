import { useNavigate } from "react-router-dom";
import  checkMarkGif  from "../images/checkMark.gif";
import Title from "./Title";

const ContactSummary = () => {
  const navigate = useNavigate();

  return ( 
    <div className="contactSummary">
      <Title />

      <div className="content">
        <div className="row">
          <img src={ checkMarkGif } alt="check_mark" />

          <h2>Message sent Successfully.</h2>
          <h2>Thanks for reaching out.</h2>
          <h3>We'll get back within an hour.</h3>
        </div>

        <div className="row">
          All details provided by you will be held confidential by FlyPlux® and used in accordance with our Privacy Policy.
        </div>
        <br />
        
        <button type="submit" onClick={() => navigate(-1)}>Go back</button>
      </div>
    </div>
   );
}
 
export default ContactSummary;