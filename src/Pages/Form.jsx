import React, { useState } from "react";

export default function Form() {
  const [view, setView] = useState("login");

  const inputStyles =
    "w-full text-lg px-5 py-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition";
  const buttonStyles =
    "w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3.5 px-5 rounded-lg transition duration-300";
  const linkStyles =
    "text-base text-blue-600 hover:underline cursor-pointer text-center mt-3";

  const renderForm = () => {
    switch (view) {
      case "signup":
        return (
          <>
            <h2 className="text-4xl font-bold mb-8 text-center">Create Account</h2>
            <input type="text" placeholder="Name" className={inputStyles} />
            <input type="email" placeholder="Email" className={inputStyles} />
            <input type="password" placeholder="Password" className={inputStyles} />
            <button className={buttonStyles}>Sign Up</button>
            <p className={linkStyles} onClick={() => setView("login")}>
              Already have an account? Login
            </p>
          </>
        );

      case "reset":
        return (
          <>
            <h2 className="text-4xl font-bold mb-8 text-center">Reset Password</h2>
            <input type="email" placeholder="Email" className={inputStyles} />
            <button className={buttonStyles}>Send Reset Link</button>
            <p className={linkStyles} onClick={() => setView("login")}>
              Back to Login
            </p>
          </>
        );

      default:
        return (
          <>
            <h2 className="text-4xl font-bold mb-8 text-center">Login to Your Account</h2>
            <input type="email" placeholder="Email" className={inputStyles} />
            <input type="password" placeholder="Password" className={inputStyles} />
            <button className={buttonStyles}>Login</button>
            <p className={linkStyles} onClick={() => setView("signup")}>
              Don’t have an account? Sign Up
            </p>
            <p className={linkStyles} onClick={() => setView("reset")}>
              Forgot Password?
            </p>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center px-6 py-10">
      <div className="bg-white rounded-2xl shadow-lg flex w-full max-w-5xl overflow-hidden">
        {/* Left side: Form */}
        <div className="w-full md:w-1/2 p-12">
          {renderForm()}
        </div>

        {/* Right side: Branding */}
        <div className="hidden md:flex w-1/2 bg-blue-600 text-white flex-col justify-center items-center p-10">
          <h2 className="text-4xl font-bold mb-4 text-center">Welcome to Usama's Website</h2>
          <p className="text-lg mb-6 text-center">
            Your personal dashboard for managing categories, products, and more.
          </p>
          <img
            src="/img.1.jpeg"
            alt="Welcome"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
