import React,{Component} from "react";
import './Port.css';
import './PortResponsive.css';

export default class Resume extends Component{
    render(){
        return(
            <div style={{backgroundColor:"black"}}>
            <div id="mid3">
            <h1> <span style={{fontWeight:"lighter" }}>My</span> Resume</h1>

         </div>

         <div id="resume">

            <div className="resumein">
               <h2 style={{fontWeight:"lighter" }}>Education</h2>
               <div className="resumesmall" style={{lineHeight:"5px"}}>
                  <h5>&#128197; 2017</h5>
                  <h2 className="resumeh2">Graduate in Computer Science</h2>
                  <p className="resumep">B.sc in Computer Science</p>
                  <p className="resumep">Devi Ahilya University Indore M.P.</p>
               </div>
               <div className="resumesmall" style={{lineHeight:"5px"}}>
                  <h5>&#128197; 2018</h5>
                  <h2 className="resumeh2">Deploma in Computer Application</h2>
                  <p className="resumep">Post Graduate Deploma (PGDCA)</p>
                  <p className="resumep">Makhanlal University Bhopal M.P.</p>
               </div>
               <div className="resumesmall" style={{lineHeight:"5px"}}>
                  <h5>&#128197; 2020</h5>
                  <h2 className="resumeh2">Masters in Economics</h2>
                  <p className="resumep">Master of Arts (Economics)</p>
                  <p className="resumep">Barkatullah University Bhopal M.P.</p>
               </div>
            </div>
            <div className="resumein">
               <h2 style={{fontWeight:"lighter" }}>Experience</h2>
               <div className="resumesmall" style={{lineHeight:"5px"}}>
                  <h5>&#128197; July 2022-present</h5>
                  <h2 className="resumeh2">Intern At InstaDot Analytics</h2>
                  <p className="resumep">Learned multiple designing methods and writing codes.</p>
                  <p className="resumep">IDA Indore M.P.</p>
               </div>
               <div className="resumesmall" style={{lineHeight:"5px"}}>
                  <h5>&#128197; December 2022-present</h5>
                  <h2 className="resumeh2">Intern At InstaDot Analytics</h2>
                  <p className="resumep">Work under professional developer for the project.</p>
                  <p className="resumep">IDA Indore M.P.</p>
               </div>
               <div className="resumesmall" style={{lineHeight:"5px"}}>
                  <h5>&#128197; December 2022-present</h5>
                  <h2 className="resumeh2">Intern At InstaDot Analytics</h2>
                  <p className="resumep">Built mock design for landing pages in 3 new product concepts.</p>
                  <p className="resumep">IDA Indore M.P.</p>
               </div>
            </div>


          

         </div>
         </div>
        )
    }
}