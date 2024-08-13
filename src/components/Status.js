import React from 'react'
import { useNavigate } from 'react-router-dom';

const Status = () => {
  const navigate = useNavigate();

  const goToStatusF = () => {
    navigate('/StatusF');
  };


  return (
    <div>
    <h3>Track your Grievance</h3>
    <form>
    <input type="text" placeholder="Enter your Email/Reg.Id"  name="Name" />
    </form>
    <button onClick={goToStatusF}>Check</button>
    </div>
  )
}

export default Status