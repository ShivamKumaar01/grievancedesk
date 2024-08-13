import React from 'react'

const StatusF = () => {
  return (
    <div>
        <h3>Grievance Status</h3>
        <div>
          <div className='left1'>
            <p>Registration ID:#12345</p>
            <p>Date Submitted:#12/08/2024</p>
          </div>
          <div className='right1'>
            <p>Complainant Name:#12345</p>
            <p>Category of Grievance:#academics</p>
          </div>
        </div>
        <h5>Current Status:Solved</h5>
        <div>
         <div className='left2'>
          <p>Dealt by:prof.Akshay Girdhar</p>
          <p>Mobile:1234567890</p>

         </div>
         <div className='right2'>
            <p>Designation:Department Head</p>
            <p>Mail:shk@gndec.ac.in</p>
         </div>
        </div>
        <input type='textbox'></input>


    </div>
  )
}

export default StatusF