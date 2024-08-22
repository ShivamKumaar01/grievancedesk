import React from 'react'
import { useNavigate } from 'react-router-dom';

const Status = () => {
  const navigate = useNavigate();

  const goToStatusF = () => {
    navigate('/StatusF');
  };


  return (
    <div class="flex justify-center items-center mt-10"> 
    <div class="w-full max-w-md bg-slate-100 rounded-lg shadow-md p-8">
    <h3 class="text-left">Track your Grievance</h3>
    <form>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter your Email/Reg.Id"  name="Name" />
    </form><br></br>
    <button class="bg-red-500 text-white font-bold py-1 px-4 rounded-lg" onClick={goToStatusF}>Check</button>
    </div>
    </div>
  )
}

export default Status