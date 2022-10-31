import  checkMarkGif  from "../images/checkMark.gif";

const ContactSummary = () => {

  return ( 
    <div className="contactSummary">

      <img src={ checkMarkGif } alt="check_mark" />
      
      <h2>Message sent Successfully.</h2>
      <h3>We'll get back within an hour.</h3>
      <h2>Thanks for reaching out.</h2>
    </div>
   );
}
 
export default ContactSummary;