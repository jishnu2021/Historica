import React from "react";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "../Private/RegistrationForm";
const Home = () => {

  const navigate=useNavigate();
  const handleParticipateClick = () => {
    navigate('/register')
  };

  return (
    <div className="home-head">
      <div className="panel1">
        <h1>Art Contest 2023</h1>
        <span>Participate Now & Win Exciting Cash Prices</span><br />
        <span>Age Group: 5-12|13-20|21-30</span><br />
        <span><b>No Entry Fee</b></span><br />
        <span>Last Date: 01/07/2023</span><br />
        <div className="btn">
          <button onClick={handleParticipateClick}>Participate Now</button>
        </div>
      </div>
      <div className="panel2">
        <img src="his.jpeg" alt="Art Contest" />
      </div>
    </div>
  );
};

export default Home;
