import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

// const Status = () => {
//   const [inputValue, setInputValue] = useState(''); // To store the Email/Reg. ID input
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   // Handle form input change
//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   // Fetch data when button is clicked
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the form from reloading the page

//     try {
//       const response = await fetch(`http://localhost:4000/api/v1/register/${inputValue}`);
//       const data = await response.json();

//       if (response.ok && data.success) {
//         // If the data is found, navigate to the status page with the data
//         navigate('/StatusF', { state: { post: data.data } });
//       } else {
//         setError('No matching grievance found or invalid input.');
//       }
//     } catch (error) {
//       console.error('Error fetching grievance data:', error);
//       setError('There was an error fetching the data.');
//     }
//   };

//   return (
//     <div class="flex justify-center items-center mt-10"> 
//     <div class="w-full max-w-md bg-slate-100 rounded-lg shadow-md p-8">
//     <h3 class="text-left">Track your Grievance</h3>
//     <form>
//     <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter your Email/Reg.Id"  name="Name" />
//     </form><br></br>
//     <button class="bg-red-500 text-white font-bold py-1 px-4 rounded-lg" >Check</button>
//     </div>
//     </div>
//   )
// }

// export default Status
const Status = () => {
  const [inputValue, setInputValue] = useState(''); // To store the Email/Reg. ID input
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle form input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Fetch data when button is clicked
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page

    try {
      const response = await fetch(`http://localhost:4000/api/v1/register/${inputValue}`);
      const data = await response.json();

      if (response.ok && data.success) {
        // If the data is found, navigate to the status page with the data
        navigate('/StatusF', { state: { post: data.data } });
      } else {
        setError('No matching grievance found or invalid input.');
      }
    } catch (error) {
      console.error('Error fetching grievance data:', error);
      setError('There was an error fetching the data.');
    }
  };

  return (
    <div className="flex justify-center items-center mt-10"> 
      <div className="w-full max-w-md bg-slate-100 rounded-lg shadow-md p-8">
        <h3 className="text-left">Track your Grievance</h3>
        <form onSubmit={handleSubmit}>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" 
            type="text" 
            placeholder="Enter your Email/Reg.Id"  
            name="Name"
            value={inputValue}
            onChange={handleInputChange}
          />
        </form>
        <br />
        <button className="bg-red-500 text-white font-bold py-1 px-4 rounded-lg" onClick={handleSubmit}>
          Check
        </button>

        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      </div>
    </div>
  );
};

export default Status;