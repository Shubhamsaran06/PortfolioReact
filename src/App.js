import logo from './logo.svg';
import './App.css';

import Navbar from './PortComponents/Navbar';
import './PortComponents/Port.css'
import './PortComponents/PortResponsive.css';
import Upper from './PortComponents/Upper';
import Mid from './PortComponents/Mid';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Resume from './PortComponents/Resume';
import Service from './PortComponents/Service';
import Certificate from './PortComponents/Certificate';
import Contact from './PortComponents/Contact';
import { Route, Routes ,BrowserRouter,Navigate} from 'react-router-dom';
import About from './PortComponents/About';
import Footer from './PortComponents/Footer';
// import ContactList from './PortComponents/Signup';



function App() {
  return (
    <div className="App" >
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
          </a>
        </header> */}
       
        
     
      <BrowserRouter>
      
      
        {/* <ContactList/> */}
       <Navbar/>
      <Routes>
          <Route path='/' element={<Upper/>}/>
         
          <Route path='/portfolio' element={<Mid/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/certificate' element={<Certificate/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>

      </Routes>
       
      <Footer/>
      </BrowserRouter>
    
    
    
    
   


      {/* <Upper/> */}

      {/* <div  className="Middiv">
        <Mid/>
      </div> */}

      {/* <Resume /> */}
      {/* <Service/>
      <Certificate/>
      <Contact/> */}
    </div>
  );
}

export default App;
