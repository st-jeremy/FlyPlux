import './index.css';

import Header from './Components/Header';
import Body from './Components/Body';
// import Contact from './Components/Contact';
// import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';

// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    // <Router>
    <div className="app">
      <Header /> 
      <Body />
      {/* <Routes>

        <Route path='./Components/Contact'>
          <Contact />
        </Route>

        <Route path='./Components/AboutUs'>
          <AboutUs />
        </Route>
        
      </Routes> */}
      <Footer />
      
    </div>
    // </Router>
  );
}

export default App;
