import React from 'react'
import { useState } from 'react';

const Register = () => {


    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        mentor:'',
        gender: '',
        email: '',
        department: '',
        year: '',
        grievancecategory: '',
        grievancedescription: '',
        urn:''
      });
      console.log(formData);
    
      function changeHandler(event) {
        const { name, value, checked, type } = event.target;
        setFormData((prevFormData) => {
          return {
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value, // agar checkbox ka concept hota to ye handle karta 
          };
        });
      }
    
      // function submitHandler(event) {
      //   event.preventDefault();
      //   console.log('Finally printing the entire data:');
      //   console.log(formData);
   
      // }
       // Handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("finally printing the form data");
    console.log(formData);

    try {
      const response = await fetch('http://localhost:4000/api/v1/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Grievance Registered successfully: '+ JSON.stringify(result) );
      } else {
        alert('Error: ');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
    return (
      <div class="flex justify-center items-center mt-10 flex-col gap-8 mb-10">
        <div className="App"class=" min-w-fit w-9/12 bg-slate-100 rounded-lg shadow-md p-8">
          <div class="text-left font-bold text-1xl"> Register Your Grievance</div>
          <div>
            <form onSubmit={submitHandler}>
              <div class="mt-10" className="userdetails" >
                <h3 class="text-left font-medium ">User Details</h3>
                <br></br>
                <label htmlFor="name">Name</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={changeHandler}
                  required
                />
                <br></br>

                <label htmlFor="mentor">Mentor Name</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="mentor"
                  name="mentor"
                  value={formData.mentor}
                  onChange={changeHandler}
                  required
                />
                <br></br>

                <label htmlFor="mobile">Mobile</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={changeHandler}
                  required
                />
                <br></br>
                <div>
                  <label>Gender</label>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={changeHandler}
                  />
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={changeHandler}
                  />
                  <label htmlFor="female">Female</label>
                </div>
                <br></br>
                <label htmlFor="urn">URN</label>
                <input
                  type="text"
                  id="urn"
                  name="urn"
                  value={formData.urn}
                  onChange={changeHandler}
                  required
                />
                <br></br>

                <label htmlFor="email">Email</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={changeHandler}
                  required
                />
                <br></br>
    
                <label htmlFor="department">Department</label>
                <select class="w-full max-w-md p-2 border border-gray-300 rounded-md"
                  onChange={changeHandler}
                  name="department"
                  id="department"
                  value={formData.department}
                  required
                >
                  <option value=""></option>
                  <option value="IT">IT</option>
                  <option value="CSE">CSE</option>
                  <option value="CIVIL">CIVIL</option>
                  <option value="ECE">ECE</option>
                  <option value="EEE">EEE</option>
                  <option value="BCA">BCA</option>
                  <option value="BBA">BBA</option>
                  <option value="Mechnical">MECHNICAL</option>
                </select>
                <br></br>
                <label htmlFor="year">Year</label>
                <select class="w-full max-w-md p-2 border border-gray-300 rounded-md"
                  onChange={changeHandler}
                  name="year"
                  id="year"
                  value={formData.year}
                  required
                >
                  <option value=""></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
    
                {/* Grievance Details */}
                <div class="mt-5 " className="grievancedetails">
                  <h3 class="text-left font-medium ">Grievance Details</h3>
                  <label htmlFor="grievancecategory">Grievance Category</label>
                  <select class="w-full max-w-md p-2 border border-gray-300 rounded-md"
                    onChange={changeHandler}
                    name="grievancecategory"
                    id="grievancecategory"
                    value={formData.grievancecategory}
                    required
                  >
                    <option value=""></option>
                    <option value="academics">Academics</option>
                    <option value="hostel">Hostel</option>
                    <option value="administrative">Administrative</option>
                    <option value="facility">Facility</option>
                    <option value="other">Other</option>
                  </select>
                  <br></br>
                  <label htmlFor="grievancedescription">Grievance Description</label>
                  <textarea class="w-full h-48 p-4 border border-gray-300 rounded-md"
                    id="grievancedescription"
                    name="grievancedescription"
                    value={formData.grievancedescription}
                    onChange={changeHandler}
                    required
                  />
                  <br></br>
                </div>
              </div>
              <button  class="bg-red-500 text-white text-1xl font-bold py-1 px-4 rounded-lg"type="submit">Submit</button>
            </form>
          </div>
        </div>
        </div>
      );
}

export default Register