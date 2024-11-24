import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

// const CardDetails = () => {
//   const location = useLocation();
//   const { post } = location.state;
//   console.log(post._id);

//   return (
//     <div className="flex justify-center items-center mt-10">
//       <div className="w-7/12 bg-slate-100 rounded-lg shadow-md p-4">
//         <h1 className="text-left font-bold text-2xl mb-4">{post.grievancecategory}</h1>
//         <h3 className="text-left font-thin">Name: {post.name}</h3>
//         <h3 className="text-left font-thin">URN: {post.urn}</h3>
//         <h3 className="text-left font-thin">Department: {post.department}</h3>
//         <h3 className="text-left font-thin">Description: {post.grievancedescription}</h3>
//         <h3 className="text-left font-thin">id: {post._id}</h3>
//         {/* processing pr click karne pr status ko 0 kar do and resolved par click karne par status ko 1 kar do */}
//         <button  class="bg-red-500 text-white text-1xl font-bold py-1 px-4 rounded-lg mt-6">processing</button><br></br>
//         <button  class="bg-red-500 text-white text-1xl font-bold py-1 px-4 rounded-lg mt-6">resolved</button>
//         {/* Display more details if needed */}
//       </div>
//     </div>
//   );
// };

// export default CardDetails;




const CardDetails = () => {
  const location = useLocation();
  const { post } = location.state;

  // State for comment box visibility, input, and processing button visibility
  const [isCommentBoxVisible, setIsCommentBoxVisible] = useState(false);
  const [isProcessingVisible, setIsProcessingVisible] = useState(true); // State for "Processing" button
  const [comment, setComment] = useState('');

  // Function to handle "Processing" button click
  const handleProcessingClick = () => {
    setIsCommentBoxVisible(true); // Show the comment box
  };

  // Function to handle comment submission and update status
  const handleSubmitComment = async () => {
    if (!comment.trim()) {
      alert('Please write a comment before submitting.');
      return;
    }

    try {
      // API call to update the grievance
      const response = await fetch(`http://localhost:4000/api/v1/update-status/${post._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: post._id, // Include grievance ID
          grievstatus: 0, // Update status to 'processing' (0)
          comment, // Include the comment
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // alert('Grievance updated successfully!');
        // console.log('Updated Grievance:', data);

        
        setIsCommentBoxVisible(false);
        setIsProcessingVisible(false);
      } else {
        alert(`Failed to update grievance: ${data.message}`);
      }
    } catch (error) {
      console.error('Error updating grievance:', error);
      alert('An error occurred while updating the grievance.');
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-7/12 bg-slate-100 rounded-lg shadow-md p-4">
        <h1 className="text-left font-bold text-2xl mb-4">{post.grievancecategory}</h1>
        <h3 className="text-left font-thin">Name: {post.name}</h3>
        <h3 className="text-left font-thin">URN: {post.urn}</h3>
        <h3 className="text-left font-thin">Department: {post.department}</h3>
        <h3 className="text-left font-thin">Description: {post.grievancedescription}</h3>
        <h3 className="text-left font-thin">ID: {post._id}</h3>

        {/* Processing Button */}
        {isProcessingVisible && (
          <button
            className="bg-red-500 text-white text-1xl font-bold py-1 px-4 rounded-lg mt-6"
            onClick={handleProcessingClick}
          >
            Processing
          </button>
        )}

        {/* Comment Box */}
        {isCommentBoxVisible && (
          <div className="mt-4">
            <textarea
              className="w-full p-2 border rounded-lg"
              rows="3"
              placeholder="Write your comment here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button
              className="bg-green-500 text-white text-1xl font-bold py-1 px-4 rounded-lg mt-2"
              onClick={handleSubmitComment}
            >
              Submit Comment
            </button>
          </div>
        )}

        {/* Resolved Button */}
        <button
          className="bg-green-500 text-white text-1xl font-bold py-1 px-4 rounded-lg mt-6"
          onClick={() => alert('Status changed to Resolved. Add functionality for this action.')}
        >
          Resolved
        </button>
      </div>
    </div>
  );
};

export default CardDetails;