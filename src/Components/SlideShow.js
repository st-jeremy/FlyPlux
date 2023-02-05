import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import image1 from "../images/Slide1.jpeg";
import image2 from "../images/Slide2.jpeg";
import image3 from "../images/Slide3.png";
import image4 from "../images/Slide4.jpeg";
import image5 from "../images/Slide5.jpeg";
import image6 from "../images/Slide6.jpeg";
import image7 from "../images/Slide7.jpeg";
import image8 from "../images/Slide8.jpeg";
import image9 from "../images/Slide9.jpeg";
import image10 from "../images/Slide10.jpeg";

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

const zoomOutProperties = {
  duration: 2000,
  transitionDuration: 300,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

const mystyle = {
  padding: "0 5%",
  borderRadius: "15rem 0 15rem 0"
};

const SlideShow = () => {
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {
            images.map((each, index) => 
              <img key={index} style={mystyle} src={each} alt={each} />)
          }
        </Zoom>
      </div>
    )
}
 
export default SlideShow;