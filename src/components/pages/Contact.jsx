import React from "react";

const ContactUs = () => {

const handlesubmit=()=>{
  alert('Thanks for your Cordination')
}  
  return (
    <>
      <div className="contact1">
        <h1>
          <center>Contact Us</center>
        </h1>
        <span>
          <center>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
            facere, aliquid dolorem id quasi optio!
          </center>
        </span>
        <span>
          <center>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </center>
        </span>
      </div>
      <div className="contact">
        <div className="box1">
          <h3>
            Contact Buisness <br />
            Solution Sales
          </h3>

          <span>Already a customer or need help with a</span>
          <br />
          <span>billing issues? </span>
          <a href="#">Contact Support</a>

          <h6>Lorem, ipsum dolor.</h6>
          <div className="call">
            <div className="call1">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div className="call2">+1800 708 8749</div>
          </div>
          <span>Lorem ipsum dolor sit amet, consectetur.</span>
          <h5>Lorem, ipsum dolor sit amet consectetur adipisicing.</h5>
          <div className="social">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>

        <div className="box2">
         <div className="form">
         <div className="detail">
          <label htmlFor="/">First Name:</label>
          <input type="text" name="" id="" placeholder="First Name"/>
          <label htmlFor="/">Email:</label>
          <input type="email" name="" id="" placeholder="Email Address"/>
          <label htmlFor="/">Phone Number:</label>
          <input type="number" name="" id="" placeholder="Phone Number"/>


          </div>
           <div className="detail2">
          <label htmlFor="/">Last Name:</label>
          <input type="text" name="" id="" placeholder="Last Name"/>
          <label htmlFor="/">Phone Number:</label>
          <input type="number" name="" id="" placeholder="Phone Number"/>
          <label htmlFor="/">Phone Number:</label>
          <input type="number" name="" id="" placeholder="Phone Number"/>

           </div>
           </div>
      <div className="check">
 
<label for="vehicle1">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</label>
<label for="vehicle2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</label>

  </div>
      
      <div className="btn">
      <button onClick={handlesubmit}>Submit</button>
      </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
