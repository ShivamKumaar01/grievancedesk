import React from 'react'

const Admin = () => {
  return (
    <div>
        <form>
            <label>Enter Your Mail</label><br></br>
            <input type="text" name="username" /><br></br>
            <label>Enter Your Password</label><br></br>
            <input type="password" name="password" /><br></br>
            
        </form>
        <button>Login</button>

        <div>Sign Up/Forgot Password</div>
    </div>
  )
}

export default Admin