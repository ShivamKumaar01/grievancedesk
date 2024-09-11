import React from 'react'

const Dashboard = () => {
  return (
    <div>
      {/* <nav>
        <ul>
          <li>All</li>
          <li>Academics</li>
          <li>Hostel</li>
          <li>Facility</li>
          <li>Other</li>
        </ul>
      </nav> */}
      <h3>Welcome Admin</h3>
      <div class="flex justify-center">
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
    </div>
    </div>
  )
}

export default Dashboard