import '../Styles/BookAircraftStyle.css';
import Header from "./Header";
import background from '../images/availableFlight.jpeg';

const BookAircraft = () => {

  return ( 
    <div className="bookAircraft" >

      <Header heading= "Book Aircraft" 
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          height: '25rem'
        }}
      />

      <div className="content">
        <div className="form">
          <form action="">
            <label htmlFor="from">From:</label>
            <br />
            <input type="text" name="from" id="from" placeholder=" From " required />
            <br />

            <label htmlFor="to">To:</label>
            <br />
            <input type="text" name="to" id="to" placeholder=" To" required />
            <br />

            <label htmlFor="passengers">Passengers:</label>
            <br />
            <input type="number" name="passengers" id="passengers" placeholder=" No. of Passengers" required />
            <br />

            <label htmlFor="go">Go:</label>
            <br />
            <input type="date" name="go" id="go" required/>
            <br />

            <label htmlFor="return">Return:</label>
            <br />
            <input type="date" name="return" id="return" />
            <br />

            <button type="submit">Proceed</button>
          </form>
        </div>
      </div>
    </div>
   );
}
 
export default BookAircraft;