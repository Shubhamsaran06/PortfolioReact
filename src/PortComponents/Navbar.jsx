import React,{Component} from "react";
import { NavLink } from "react-router-dom";
import './Port.css';
import './PortResponsive.css';

export default class Navbar extends Component{
    render(){
        return(
        <div id="navup" class="navup1 navup2">
            <NavLink to={'/'} className="navbt">Home</NavLink>
            <NavLink to={'/portfolio'} className="navbt">Portfolio</NavLink>
            <NavLink to={'/resume'} className="navbt">Resume</NavLink>
            <NavLink to={'/about'} className="navbt">About</NavLink>
            <NavLink to={'/service'} className="navbt">Service</NavLink>
            <NavLink to={'/certificate'} className="navbt">Certificates</NavLink>
            <NavLink to={'/contact'} className="navbt">Contact</NavLink>
           
           
           
            {/* <Route path='/portfolio' element={<Mid/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/certificate' element={<Certificate/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="*" element={<Navigate to="/"/>}/> */}
           
           
           
           
            {/* <a href="" class="navbt">Home</a> 
            <a href="" class="navbt">Portfolio</a>
            <a href="" class="navbt">Resume</a>
            <a href="" class="navbt">About Me</a>
            <a href="" class="navbt">Contact</a> */}
         </div>
        )
    }
}