import React,{Component} from "react";
import './Port.css';
import './PortResponsive.css';

export default class Mid extends Component{
    render(){
        return(
        <>
          <div id="mid1" style={{background:" #282c34"}}>
            <h1 > <span id="spmid"> Featured </span> Portfolio</h1>
         </div>
         <div id="mid2">
            <div class="mid2a">
               <img src="HTML-Editor-1.png" alt="" class="midimg"/>
               <p class="p1">HTML</p>
               <p class="p2">For Beginning</p>
            </div>
            <div class="mid2a">
               <img src="css.png" alt="" class="midimg"/>
               <p class="p1">CSS</p>
               <p class="p2">For Designing</p>
            </div>
            <div class="mid2a">
               <img src="js.png" alt="" class="midimg"/>
               <p class="p1">JAVASCRIPT</p>
               <p class="p2">For Scripting</p>
            </div>
            </div>
            </>
            
        )
    }
}