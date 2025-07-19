import React from "react";

export default function Login() {

  const HandleLoginSuccess=()=>{
    localStorage.setItem("user","usama")
    window.location.reload()


  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-200 via-white to-purple-200 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Welcome Back</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
          onClick={HandleLoginSuccess}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <a href="#" className="text-blue-500 hover:underline mr-4">Forgot Password?</a>
          <a href="#" className="text-blue-500 hover:underline">Create Account</a>
        </div>
      </div>
    </div>
  );
}
