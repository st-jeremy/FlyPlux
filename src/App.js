import {Routes, Route} from 'react-router-dom';

import './index.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Contact from './Components/Contact';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import Solutions from './Components/Solutions';
// import NotFound from './Components/NotFound';
import ContactSummary from './Components/ContactSummary';


function App() {
  return (
      <div className="app">
        <Header /> 

        <Routes>
          <Route path='/' element={ <Body /> } />
            
          <Route path='Contact' element={ <Contact /> } />
          <Route path='ContactSummary' element={ <ContactSummary />} />

          <Route path='AboutUs' element={ <AboutUs /> } />

          <Route path='Solutions' element={ <Solutions /> } />

          {/* <Route path="*" element={ <NotFound /> } /> */}

        </Routes>

        <Footer /> 

      </div>

  );
}

export default App;
