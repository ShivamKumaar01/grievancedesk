// import React, { useEffect, useState } from 'react'
// import AdminNav from './AdminNav';
// const API="http://localhost:4000/api/v1/fetchingdata";


// const Dashboard = () => {
//   const [posts, setPosts] = useState([]);  // State to hold fetched posts
//   const [loading, setLoading] = useState(true);  

//   const fetchUsers = async (url) => {
//     try {
//       const response = await fetch(url);
//       const result = await response.json();  // Assuming response returns a JSON object
//       console.log(result);
//       if (result.success) {
//         setPosts(result.data);  // Accessing the `data` array from the response
//       }
//       setLoading(false);  // Set loading to false after data is fetched
//     } catch (error) {
//       console.log(error);
//       setLoading(false);  // Stop loading if an error occurs
//     }
//   };


//   useEffect(()=>{
//     fetchUsers(API);

//   },[])

//   return (
//     <div>
//       <br></br>
//       {/* <AdminNav/> */}
      
      
//       <div className="container-list">
//         {loading ? (
//           <h1>Loading...</h1>  // Show loading indicator while fetching data
//         ) : posts.length > 0 ? (
//           posts.map((postItem, index) => (
//             <div class="flex justify-center items-center mt-10" >
//             <div class="w-7/12 bg-slate-100 rounded-lg shadow-md p-4" key={index}>

              
//               <h3 className='text-left font-bold'>{postItem.grievancecategory}</h3>
//               <h3 className='text-left font-thin'>Name: {postItem.name}</h3>
//               <h3 className='text-left font-thin' >URN: {postItem.urn}</h3>
//               <h3 className='text-left font-thin '>Department: {postItem.department}</h3>
//               <h3 className='text-left font-thin'>Description: {postItem.grievancedescription}</h3>
              
//              </div>
              

//             </div>
//           ))
//         ) : (
//           <h1>No Data Available</h1>  // Show message if no posts are available
//         )}
//       </div>
//     </div>
//   )
// }

// export default Dashboard




import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = "http://localhost:4000/api/v1/fetchingdata";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchUsers = async (url) => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      if (result.success) {
        setPosts(result.data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  const handleCardClick = (postItem) => {
    navigate(`/carddetails`, { state: { post: postItem } });
  };

  return (
    <div>
      <div className="container-list">
        {loading ? (
          <h1>Loading...</h1>
        ) : posts.length > 0  ? (
          posts.map((postItem, index) => (
            <div
              key={index}
              className="flex justify-center items-center mt-10"
              onClick={() => handleCardClick(postItem)}
              style={{ cursor: 'pointer' }}
            >
              <div className="w-7/12 bg-slate-100 rounded-lg shadow-md p-4">
                <h3 className="text-left font-bold">{postItem.grievancecategory}</h3>
                <h3 className="text-left font-thin">Name: {postItem.name}</h3>
                <h3 className="text-left font-thin">URN: {postItem.urn}</h3>
                <h3 className="text-left font-thin">Department: {postItem.department}</h3>
                <h3 className="text-left font-thin">Description: {postItem.grievancedescription}</h3>
                <h3 className="text-left font-thin">ID: {postItem._id}</h3>
              </div>
            </div>
          ))
        ) : (
          <h1>No Data Available</h1>
        )}
      </div>
    </div>
  );
};

export default Dashboard;