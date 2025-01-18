import React,{Component} from "react";
import './Port.css';
import './PortResponsive.css';

export default class Certificate extends Component{
    render(){
        return(
            <div class="certificate">
            <div class="service1 ">
               <h1><span style={{fontWeight:"lighter" }}>My</span> <b>Certificates</b> </h1>
            </div>
            <div class="service2">

               <a href="freecampcode.pdf" target="_blank"><img src="campcodecertificate.png" alt="" class="certimg"/></a>
               <a href="sololearn.pdf" target="_blank"><img src="sololearncertificate.png" alt="" class="certimg"/></a>
            </div>
         </div>
        )
    }
}