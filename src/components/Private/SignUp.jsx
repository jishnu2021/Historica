import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div className="other-options">
        <p>Already have an account? <Link to="#">Log in</Link></p>
        <p>Or sign up with:</p>
        <div className="social-icons">
          <button className="google-btn">Sign Up with Google</button>
          <button className="facebook-btn">Sign Up with Facebook</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
