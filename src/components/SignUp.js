import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

const SignUp = () => {

  const[FormData,setFormData]=useState({
    adminemail:'',
    adminPassword:'',
    designation:''

  })
  console.log(FormData);

  // const notify = () => toast("Account created successfully");
  // const navigate=useNavigate();
  // const notify=()=>{
  //   toast.success('Account created successfully')
  //   navigate('/admin');
  //  }

  function signupHandler(event){
    const{ name, value, checked, type}=event.target;
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      }
    })
  }

  const AsubmitHandler=async(e)=>{
    e.preventDefault();
    console.log('finally printing the admin signup data');
    console.log(FormData);

  }
 

  


  
  
  return (
    <div>
      <div class="flex justify-center items-center mt-16">
    <div class="w-full max-w-md bg-slate-100 rounded-lg shadow-md p-8">
        <form onSubmit={AsubmitHandler}>
            <label class="block text-gray-700 text-sm  text-start">Enter Your Email</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" name="adminemail" id='adminemail' onChange={signupHandler} value={FormData.adminemail} required /><br></br>
            <label class="block text-gray-700 text-sm  text-start mt-2">Create Password</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
               type="password" name="adminPassword" onChange={signupHandler} value={FormData.adminPassword} required/><br></br>
            {/* <label class="block text-gray-700 text-sm  text-start mt-2">Hash Key</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"type="password" name="password" /><br></br> */}
            {/* this is for dropdown menu for designataion */}
            <label htmlFor='designation'>Designation</label>
            <select
              onChange={signupHandler}
              id='designation'
              name="designation"
              value={FormData.designation}
              required
            >
            <option value=""></option>
            <option value="hostel">Hostel Authority</option>
            <option value="academics">Grievance Committee</option>
            <option value="non-academics">Mentor</option>
            </select>
            

        </form> <br></br>
        <button type='submit'  class="bg-red-500 text-white font-bold py-1 px-4 rounded-lg">Create Account</button>
        <ToastContainer/>
        </div>
        </div>
    </div>
  )
}

export default SignUp
