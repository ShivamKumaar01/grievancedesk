import React, { useState } from 'react'
import './Register.css'
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
            [Name]:Name.value,
            [Mobile]:Mobile.value,
            [Email]:Email.value,
            [Department]:Department.value,
            [Year]:Year.value,
            [GrievanceCategory]:GrievanceCategory.value,
            [GrievanceDescription]:GrievanceDescription.value

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
    <div>
        <div className='text1' >Register Your Grievance</div>
        <div className='container1'>
            <h3>User Details</h3>
            <form onSubmit={submitHandler} >
            <input type="text" placeholder=" Your Name" onChange={changeHandler} name="Name" value={formData.Name}/>
            <input type="number" placeholder="your contact no" onChange={changeHandler} name="Mobile" value={formData.Mobile}/>
        <br/>
        <input type="email" placeholder="your e-mail" onChange={changeHandler} name="Email" value={formData.Email}/>
        <br/>
        <br/>
        <label htmlFor='Department'>Department</label>
         <select
         onChange={changeHandler}
          name="Department"
          id='Department'
          value={formData.Department}
          >
          <option value="iT">IT</option>
          <option value="CSE">CSE</option>
          <option value="Civil">Civil</option>
          <option value="ECE">ECE</option>
          <option value="Electrical">Electrical</option>
          <option value="Mechnical">Mechnical</option>
          <option value="BCA">BCA</option>
          <option value="BBA">BBA</option>
          
         </select>
         <br/>
         <br/>

         <label htmlFor='Year'>Year</label>
         <select
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
         <br></br>
         <div className='grievancedetails'>
            <h4>Grievance Details</h4>
            <label htmlFor='Grievance category'>Grievance Category</label>
            <select
            onChange={changeHandler}
            name="GrievanceCategory"
            id='GrievanceCategory'
            value={formData.GrievanceCategory}
            >
            <option value="Academic">Academic</option>
            <option value="Non-Academic">Non-Academic</option>

            </select>
            <br></br>
            <textarea placeholder='Enter your text' onChange={changeHandler} name="GrievanceDescription" value={formData.value}/>
            <br/>
            
            

         </div>

         <button onClick={SuccessFunction}>Submit</button>



         

            </form>
        </div>
        
        
    </div>
  )
}

export default Register