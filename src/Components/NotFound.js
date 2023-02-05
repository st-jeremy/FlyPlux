import Header from "./Header";
import '../Styles/NotFoundStyle.css';

const NotFound = () => {
  return ( 
    <div className="notFound">

      <Header 
        heading="Not Found"
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
        <h1>Oops!</h1>
        <br />
        
        <h2>Page Not Found</h2>
      </div>
        
    </div>
   );
}
 
export default NotFound;