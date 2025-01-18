import React,{Component} from "react";
import './Port.css';
import './PortResponsive.css';

export default class Service extends Component{
    render(){
        return(
            <div class="services">
            <div class="service1">
               <h1><span style={{fontWeight:"lighter" }}>My</span> <b>services</b> </h1>
            </div>
            <div class="service2">
               <div class="service2a">
                  <div class="service2b">
                     <img src="web-design-removebg-preview.png" class="serviceimg" alt=""/>
                  </div>
                  <h3 style={{fontWeight:"lighter" }}>Web Designing</h3>
                  <p class="resumep">Web design encompasses many different skills and disciplines in the production and
                     maintenance of websites.A web designer works on the appearance, layout, and, in some cases, content
                     of a website. Appearance, for instance, relates to the colors, font, and images used.</p>
               </div>
               <div class="service2a">
                  <div class="service2b">
                     <img src="office-removebg-preview.png" class="serviceimg" alt=""/>
                  </div>
                  <h3 style={{fontWeight:"lighter" }}>Web Development</h3>
                  <p class="resumep">Web development encompasses many different skills and disciplines in the production and
                     maintenance of websites.A web designer works on the appearance, layout, and, in some cases, content
                     of a website. Appearance, for instance, relates to the colors, font, and images used.</p>
               </div>
            </div>

           

         </div>

        )
    }
}