import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';

const Register = () => {
    const[formData,setFormData]=useState({Name:"",Mobile:"",Email:"",Department:"",Year:"",GrievanceCategory:"",
        GrievanceDescription:"",File:""
    })

    function changeHandler(event){
        const{Name,Mobile,Email,Department,Year,GrievanceCategory,GrievanceDescription}=event.target
        setFormData(prevFormData=>{
          return{
            ...prevFormData,
            // [Name]:Name.value,
            // [Mobile]:Mobile.value,
            // [Email]:Email.value,
            // [Department]:Department.value,
            // [Year]:Year.value,
            // [GrievanceCategory]:GrievanceCategory.value,
            // [GrievanceDescription]:GrievanceDescription.value
            [event.target.name]:event.target.value

          }
        });
       
    
    }
    function submitHandler(event){
        event.preventDefault();
        console.log("finally printing the entire data")
        console.log(formData)
       }
      

       const navigate = useNavigate();

       const SuccessFunction = () => {
         navigate('/success');
       };
     
    


  return (
    
<div class="flex justify-center items-center mt-16 flex-col gap-8">
  <div class="text-left font-bold text-2xl" >Register Your Grievance</div>
        
    <div className='container1' class=" min-w-fit w-9/12 bg-slate-100 rounded-lg shadow-md p-8">
      <h3 class="text-start font-bold text-xl">User Details</h3><br/>
        <form onSubmit={submitHandler} >
           <div class="flex flex-row justify-between"> 
            <div class="text-start">
            <label class="font-semibold">Name</label><br/>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"type="text" onChange={changeHandler} name="Name" value={formData.Name}/>
            <br/>
            </div>
            <div class="text-start">
            <label class="font-semibold">Mobile</label><br/>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" type="text"  onChange={changeHandler} name="Mobile" value={formData.Mobile}/>
            <br/>
            </div>
            <div class="mt-2 text-start">
            <label class="font-semibold">Gender</label><br/>
            <label class="mr-3">
            <input  type="radio" name="gender" value="male"/>
             M
            </label>
            <label>
            <input type="radio" name="gender" value="female"/> 
            F
          </label>
          </div>
          </div>
        
      <div class= "flex flex-row justify-between mt-2"> 
        <div class="text-start">
        <label class="font-semibold">Email</label><br/>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" onChange={changeHandler} name="Email" value={formData.Email}/>
        </div>
      
       <div class="text-start font-semibold mr-28">
         <label >Department</label><br/>
         <select class="w-full max-w-md p-2 border border-gray-300 rounded-md"
         onChange={changeHandler}
          name="Department"
          id='Department'
          value={formData.Department}
          >
          <option value="IT">IT</option>
          <option value="CSE">CSE</option>
          <option value="Civil">Civil</option>
          <option value="ECE">ECE</option>
          <option value="Electrical">Electrical</option>
          <option value="Mechnical">Mechnical</option>
          <option value="BCA">BCA</option>
          <option value="BBA">BBA</option>
          
         </select>
       </div>
         
       <div class="text-start font-semibold">
         <label>Year</label><br/>
         <select class="w-full max-w-md p-2 border border-gray-300 rounded-md"
         onChange={changeHandler}
          name="Year"
          id='Year'
          value={formData.Year}
          >
          <option value="first">1</option>
          <option value="second">2</option>
          <option value="third">3</option>
          <option value="fourth">4</option>
         </select>
       </div>
       </div> 
         </form>
    </div>
    <div className='Container2' class="min-w-fit w-9/12 bg-slate-100 rounded-lg shadow-md p-8">
      <form onSubmit={submitHandler} >
        <h4 class="text-start font-bold text-xl">Grievance Details</h4>
        <br/>
          <div class="text-start">
          <label class="text-left font-semibold">Grievance Category</label><br/>
            <select class="w-full max-w-md p-2 border border-gray-300 rounded-md"
            onChange={changeHandler}
            name="GrievanceCategory"
            id='GrievanceCategory'
            value={formData.GrievanceCategory}
            >
            <option value="Academic">Academic</option>
            <option value="Non-Academic">Non-Academic</option>
            <option value="Hostel">Hostel</option>

            </select>
            </div>
            <br></br>
            <div class="text-start">
            <label class="font-semibold">Grievance Description</label><br/>
            <textarea class="w-full h-48 p-4 border border-gray-300 rounded-md" placeholder='Describe your grievance...' onChange={changeHandler} name="GrievanceDescription" value={formData.value}/>
            <br/>
            </div>
            
            </form>
           

         </div>

         <button class="bg-red-500 text-white text-1xl font-bold py-1 px-4 rounded-lg" onClick={SuccessFunction}>Submit</button>
         <br/>

         
       </div>
        
  )
}

export default Register