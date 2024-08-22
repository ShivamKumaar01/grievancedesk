import React from 'react'

const After = () => {
  return (
    <div class="flex justify-center">
        <div class="min-w-fit w-9/12 bg-slate-100 rounded-lg shadow-md p-8 mt-10">
        <h3 class="text-2xl font-bold text-red-600">SUCCESS</h3>
        <div><p>Your grievance has been successfully submitted!</p></div>
        <br/>
        <div class="text-xl font-bold text-red-600">
            <h5>REG ID: 023456</h5>
        </div>
        <br/>
        <div>
            <p>Please save this reistration number for future reference.<br/>
            Your grievance would be addressed shortly, keep checking the status in the meantime. </p>
        </div>
    </div>
    </div>
  )
}

export default After