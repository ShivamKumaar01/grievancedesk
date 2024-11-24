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




// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const API = "http://localhost:4000/api/v1/fetchingdata";

// const Dashboard = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   const fetchUsers = async (url) => {
//     try {
//       const response = await fetch(url);
//       const result = await response.json();
//       if (result.success) {
//         setPosts(result.data);
//       }
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers(API);
//   }, []);

//   const handleCardClick = (postItem) => {
//     navigate(`/carddetails`, { state: { post: postItem } });
//   };

//   return (
//     <div>
//      <button>processing</button>
//      <button>resolved</button>
//       <div className="container-list">
//         {loading ? (
//           <h1>Loading...</h1>
//         ) : posts.length > 0  ? (
//           posts.map((postItem, index) => (
//             <div
//               key={index}
//               className="flex justify-center items-center mt-10"
//               onClick={() => handleCardClick(postItem)}
//               style={{ cursor: 'pointer' }}
//             >
//               <div className="w-7/12 bg-slate-100 rounded-lg shadow-md p-4">
//                 <h3 className="text-left font-bold">{postItem.grievancecategory}</h3>
//                 <h3 className="text-left font-thin">Name: {postItem.name}</h3>
//                 <h3 className="text-left font-thin">URN: {postItem.urn}</h3>
//                 <h3 className="text-left font-thin">Department: {postItem.department}</h3>
//                 <h3 className="text-left font-thin">Description: {postItem.grievancedescription}</h3>
//                 <h3 className="text-left font-thin">ID: {postItem._id}</h3>
//               </div>
//             </div>
//           ))
//         ) : (
//           <h1>No Data Available</h1>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// const Dashboard = () => {
//   const [posts, setPosts] = useState([]);
//   const [filteredPosts, setFilteredPosts] = useState([]); // State for filtered data
//   const [loading, setLoading] = useState(false); // State for loading
//   const navigate = useNavigate(); // Initialize navigate

//   // Fetch all data from API
//   const fetchUsers = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(API);
//       const result = await response.json();
//       if (result.success) {
//         setPosts(result.data);
//         setFilteredPosts(result.data); // Initially show all data
//       } else {
//         console.error("Failed to fetch data:", result.message);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//     setLoading(false);
//   };

//   // Fetch data when the component is loaded
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   // Function to filter posts by grievstatus
//   const showProcessingPosts = () => {
//     const processingPosts = posts.filter((post) => post.grievstatus ==="0");
//     setFilteredPosts(processingPosts);
//   };

//   // Function to handle card click and navigate to CardDetails
//   const handleCardClick = (postItem) => {
//     navigate('/carddetails', { state: { post: postItem } }); // Pass the post data to CardDetails
//   };

//   return (
//     <div>
//       {/* Filter Buttons */}
//       <div className="flex justify-start gap-4 mb-4">
//         <button
//           className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
//           onClick={showProcessingPosts} // Filter posts with grievstatus = 0
//         >
//           Processing
//         </button>
//         <button
//           className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
//           onClick={() => setFilteredPosts(posts)} // Show all posts
//         >
//           Show All
//         </button>
//       </div>

//       {/* Cards Container */}
//       <div className="container-list">
//         {loading ? (
//           <h1>Loading...</h1>
//         ) : filteredPosts.length > 0 ? (
//           filteredPosts.map((postItem, index) => (
//             <div
//               key={index}
//               className="flex justify-center items-center mt-10"
//               style={{ cursor: 'pointer' }}
//               onClick={() => handleCardClick(postItem)} // Navigate on click
//             >
//               <div className="w-7/12 bg-slate-100 rounded-lg shadow-md p-4">
//                 <h3 className="text-left font-bold">{postItem.grievancecategory}</h3>
//                 <h3 className="text-left font-thin">Name: {postItem.name}</h3>
//                 <h3 className="text-left font-thin">URN: {postItem.urn}</h3>
//                 <h3 className="text-left font-thin">Department: {postItem.department}</h3>
//                 <h3 className="text-left font-thin">Description: {postItem.grievancedescription}</h3>
//                 <h3 className="text-left font-thin">ID: {postItem._id}</h3>
//               </div>
//             </div>
//           ))
//         ) : (
//           <h1>No Data Available</h1>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation(); // Access designation passed from Admin
  const navigate = useNavigate();

  const designation = location.state?.designation; // Get the designation from state

  // Fetch all data
  // const fetchUsers = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch('http://localhost:4000/api/v1/fetchingdata'); // Replace with your API endpoint
  //     const result = await response.json();
  //     if (result.success) {
  //       setPosts(result.data);
  //       // Filter data based on designation
  //       if (designation) {
  //         const filtered = result.data.filter((post) => post.designation === designation);
  //         setFilteredPosts(filtered);
  //       } else {
  //         setFilteredPosts(result.data); // Show all data if no designation selected
  //       }
  //     } else {
  //       console.error('Failed to fetch data:', result.message);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  //   setLoading(false);
  // };

  const fetchUsers = async () => {
    setLoading(true);
    try {
        const response = await fetch(`http://localhost:4000/api/v1/fetchDataByGrievanceCategory/${designation}`);
        const result = await response.json();
        if (result.success) {
            setFilteredPosts(result.data);
        } else {
            console.error('Failed to fetch data:', result.message);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    setLoading(false);
};

// Fetch data when the component loads
useEffect(() => {
    fetchUsers(designation); // Pass designation as a parameter
}, [designation]);

  // Fetch data when the component loads
  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle card click
  const handleCardClick = (postItem) => {
    navigate('/carddetails', { state: { post: postItem } });
  };

  return (
    <div>
      <div className="container-list">
        {loading ? (
          <h1>Loading...</h1>
        ) : filteredPosts.length > 0 ? (
          filteredPosts.map((postItem, index) => (
            <div
              key={index}
              className="flex justify-center items-center mt-10"
              style={{ cursor: 'pointer' }}
              onClick={() => handleCardClick(postItem)}
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



