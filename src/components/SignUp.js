import React from 'react'

const SignUp = () => {
  return (
    <div>
      <div class="flex justify-center items-center mt-16">
    <div class="w-full max-w-md bg-slate-100 rounded-lg shadow-md p-8">
        <form>
            <label class="block text-gray-700 text-sm  text-start">Enter Your Email</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" name="username" /><br></br>
            <label class="block text-gray-700 text-sm  text-start mt-2">Create Password</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"type="password" name="password" /><br></br>
            <label class="block text-gray-700 text-sm  text-start mt-2">Hash Key</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"type="password" name="password" /><br></br>
        </form> <br></br>
        <button class="bg-red-500 text-white font-bold py-1 px-4 rounded-lg">Create Account</button>
        </div>
        </div>
    </div>
  )
}

export default SignUp
