import React from "react";
import Socialmedia from './Socialmedia';


const Contact = () =>{
    return(
    <>
    <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
                <form>
                <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Mobile Number</label>
    <input type="numbers" class="form-control" id="exampleFormControlInput3" placeholder=""/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
                </form>
                <input className="btn btn-primary my-3 " type="submit" value="Submit"/>
            </div>
            
        </div>
        <Socialmedia/>
        
        
    </div>
    
    
    

    </>
    
    )
};
export default Contact;