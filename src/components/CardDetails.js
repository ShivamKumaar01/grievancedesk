import React from 'react';
import { useLocation } from 'react-router-dom';

const CardDetails = () => {
  const location = useLocation();
  const { post } = location.state;

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-7/12 bg-slate-100 rounded-lg shadow-md p-4">
        <h1 className="text-left font-bold text-2xl mb-4">{post.grievancecategory}</h1>
        <h3 className="text-left font-thin">Name: {post.name}</h3>
        <h3 className="text-left font-thin">URN: {post.urn}</h3>
        <h3 className="text-left font-thin">Department: {post.department}</h3>
        <h3 className="text-left font-thin">Description: {post.grievancedescription}</h3>
        {/* Display more details if needed */}
      </div>
    </div>
  );
};

export default CardDetails;