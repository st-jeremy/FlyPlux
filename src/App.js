import './index.css';

import {
  Routes, 
  Route, 
} from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import Solutions from './Components/Solutions';
import NotFound from './Components/NotFound';
import ContactSummary from './Components/ContactSummary';
import BookAircraft from './Components/BookAircraft';


function App() {
  return (
      <div className="app">

        <Routes>
          <Route path='/' element={ <Home /> } />

          <Route path='BookAircraft' element={ <BookAircraft /> }></Route>
            
          <Route path='Contact' element={ <Contact /> } />
            
          <Route path='ContactSummary' element={ <ContactSummary /> } />

          <Route path='AboutUs' element={ <AboutUs /> } />

          <Route path='Solutions' element={ <Solutions /> } />

          <Route path="*" element={ <NotFound /> } />

        </Routes>

        <Footer /> 
      </div>

  );
}

export default App;
