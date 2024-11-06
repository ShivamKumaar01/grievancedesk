import React from 'react'
import { useNavigate } from 'react-router-dom';

const Admin = () => {

const navigate = useNavigate();
const goToDashboard=()=>{
  navigate('/dashboard');
}

  const goToaAdminSignUp = () => {
    navigate('/adminsignup');
  };
  
  return (
  <div class="flex justify-center items-center mt-16">
    <div class=" bg-slate-100 rounded-lg shadow-md p-8">
        <form>
            <label class="block text-gray-700 text-sm  text-start">Email</label>
            <input class="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" name="username" /><br></br>
            <label class="block text-gray-700 text-sm  mt-4 text-start">Password</label>
            <input class="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"type="password" name="password" /><br></br>
            
        </form> <br></br>
        <button onClick={goToDashboard} class="bg-red-500 text-white font-bold py-1 px-4 rounded-lg">Login</button>

        <div><button onClick={goToaAdminSignUp}>Sign Up/Forgot Password</button></div>
    </div>
  </div>
  )
}

export default Admin