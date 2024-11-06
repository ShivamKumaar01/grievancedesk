import React, { useEffect, useState } from 'react'
import AdminNav from './AdminNav';
const API="http://localhost:4000/api/v1/fetchingdata";
// https://jsonPlaceholder.typicode.com/users ye testing wala hai
// http://localhost:4000/api/v1/fetchingdata ye apna db ka hai

const Dashboard = () => {
  const [posts, setPosts] = useState([]);  // State to hold fetched posts
  const [loading, setLoading] = useState(true);  

  // function displayResult(post){
  //   const containerlist=document.querySelector('.container-list');
    
  //     containerlist.innerHTML=post.map(postItem=>`
  //       <div class="post-item>
  //       <h3>${postItem.name}</h3>
  //       <h3>${postItem.department}</h3>
  //       <h3>${postItem.category}</h3>
  //       </div>`).join(" ")

   
   
  // }





  // const fetchUsers=async(url)=>{
  //   try{
  //     const response=await fetch(url);
  //     const data=await response.json();
  //     setposts(data);
  //     displayResult(data);
  //     console.log(data);

  //   }
  //   catch(error){
  //     console.log(error);
  //   }
  // }
  const fetchUsers = async (url) => {
    try {
      const response = await fetch(url);
      const result = await response.json();  // Assuming response returns a JSON object
      console.log(result);
      if (result.success) {
        setPosts(result.data);  // Accessing the `data` array from the response
      }
      setLoading(false);  // Set loading to false after data is fetched
    } catch (error) {
      console.log(error);
      setLoading(false);  // Stop loading if an error occurs
    }
  };


  useEffect(()=>{
    fetchUsers(API);

  },[])

  return (
    <div>
      
      <AdminNav/>
      <h3>Welcome Admin</h3>
      
      <div className="container-list">
        {loading ? (
          <h1>Loading...</h1>  // Show loading indicator while fetching data
        ) : posts.length > 0 ? (
          posts.map((postItem, index) => (
            <div className="post-item" key={index}>
              <h3>Name:{postItem.name}</h3>
              <h3>Department:{postItem.department}</h3>
              <h3>Griev-Category:{postItem.grievancecategory}</h3>
              <h3>Griev-Dis:{postItem.grievancedescription}</h3>
              {/* dropdown hoga jo registered ,processed and resolved dikhayega */}
              {/* adminform hoga jo dropdkown ,some text field and delaed by dikhayega */}
              

            </div>
          ))
        ) : (
          <h1>No Data Available</h1>  // Show message if no posts are available
        )}
      </div>
      
      
      
     
      
      
      
      {/* <div class="flex justify-center">
      <div class=" min-w-fit w-9/12 bg-slate-100 rounded-lg shadow-md ">
        <div class="flex flex-row justify-between p-2">
          <span class="font-bold ml-4">Non Academic</span>
          <span>12/09/2024</span>
        </div>
        <div class="text-start ml-8 mb-2">
          <span>Name:</span><br></br>
          <span>URN:</span><br></br>
          <span>Dept:</span><br></br>
          <span>Sub:</span><br></br>
        </div>
      </div>
    </div> */}
    </div>
  )
}

export default Dashboard