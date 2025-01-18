import React, { Component } from "react";
import './Port.css';
import './PortResponsive.css';

export default class Contact extends Component {
    render() {
        return (
            <>
            <div id="touch">
            <div class="service1 ">
               <h1><span style={{fontWeight:"lighter" }}>Get&nbsp;</span> <b>In Touch</b></h1>
            </div>
            <div id="touchin">

               <div class="info">
                  <h2 style={{fontWeight:"lighter" }}>Get In Touch</h2>

                  <form action="">
                     <input type="text" placeholder="Your Name" class="inp"/>
                     <input type="email" placeholder="Your Email" class="inp"/>
                     <input type="text" placeholder="Your Phone" class="inp"/>
                     <textarea id="textarea" placeholder="Write a Message" spellcheck="false"
                        style={{height: "200px"}}></textarea>
                     <button id="formbt">Send Massage</button>


                  </form>

               </div>


               <div class="info">
                  <h2 style={{fontWeight:"lighter" }}>My Contact Details</h2>
                  <ul class="list">
                     <li class="elements">
                        <span class="spanele">Email</span>
                       <p class="plist">shubhamsaran06@gmail.com</p> 
                     </li>
                     <li class="elements">
                        <span class="spanele">Phone</span>
                       <p class="plist">+91 9754531851</p> 
                     </li>
                     <li class="elements">
                        <span class="spanele">Fax</span>
                       <p class="plist">+91 9754531851</p> 
                     </li>
                     <li class="elements">
                        <span class="spanele">Address</span>
                       <p class="plist">Indore M.P.<br/>
                        14/12 Narmada Marg <br/>
                        Khategaon Dewas M.P.</p> 
                     </li>
                  
                  
                  </ul>
               
               
               </div>
             
            
            </div>
         
         
         </div>
         </>                 
        )
    }
}