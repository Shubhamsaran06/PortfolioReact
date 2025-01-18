import React,{Component} from "react";
import './Port.css';
import './PortResponsive.css';

export default class Footer extends Component{
    render(){
        return(
  <div class="container bg-trans  position-stickey bottom-0  mt-5 w-100">
  <footer class="py-5">
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">Home</li>
          <li class="nav-item mb-2">Features</li>
          <li class="nav-item mb-2">Pricing</li>
          <li class="nav-item mb-2">FAQs</li>
          <li class="nav-item mb-2">About</li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">Home</li>
          <li class="nav-item mb-2">Features</li>
          <li class="nav-item mb-2">Pricing</li>
          <li class="nav-item mb-2">FAQs</li>
          <li class="nav-item mb-2">About</li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">Home</li>
          <li class="nav-item mb-2">Features</li>
          <li class="nav-item mb-2">Pricing</li>
          <li class="nav-item mb-2">FAQs</li>
          <li class="nav-item mb-2">About</li>
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    {/* <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>&copy; 2023 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
      </ul>
    </div> */}
  </footer>
</div>


        )
        
    }
}