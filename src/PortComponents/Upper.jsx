import React,{Component} from "react";
import './Port.css';
import './PortResponsive.css';

export default class Upper extends Component{
    render(){
        return(
        <div id="upper">
         {/* <img src="bglaptop.jpg" id="bgim" alt=""/> */}
         

         <div id="hello">
            <p id="p1">Hello, I'm</p>
            <h1 id="head1">Shubham Saran</h1>
            <p id="p2">And This Is My Resume</p>
         </div>
      </div>
        )
    }
}