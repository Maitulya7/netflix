import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
       <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix"
        />
        <div className="fixed top-0 left-0 w-full h-screen bg-black opacity-60"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Login</h1>
              <form className="w-full flex flex-col py-4">
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Password"
                />
                <button className="bg-red-600 hover:bg-red-700 py-3 my-6 rounded font-bold">
                  Login
                </button>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-6">
                  <span className="mr-2 text-gray-400">
                    New to Netflix?
                  </span>
                  <Link className="hover:underline" to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login