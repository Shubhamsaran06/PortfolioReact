import React,{Component} from "react";
import './Port.css';
import './PortResponsive.css';

export default class About extends Component{
    render(){
        return(
            <div id="about">
            <div className="aboutin">
               <img src="bgimgsss.png" alt="" id="aboutimg"/>
            </div>
            <div className="aboutin aboutin1">
               <h2> <span style={{fontWeight:"lighter" }}>About</span> <b> Me</b></h2>
               <p className="resumep" style={{marginTop:"40px"}}>
                  Seeking a beginner role to enhance and explore my technical knowledge gained at IDA Indore in
                  the last few months. I hold a B.sc(CS) degree from DAVV University and PG deploma for Computer
                  Application.
               </p>
               <a href="resume.pdf" target="_blank"> <button id="btabout">Download CV</button> </a>
            </div>
         </div>
        )
    }
}