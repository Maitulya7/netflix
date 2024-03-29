import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserAuth from "../context/AuthContext";
import GoogleButton from "react-google-button";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn , googleSingIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async (e) =>{
    e.preventDefault();
    try {
      await googleSingIn();
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(()=>{
    if(user != null){
      navigate('/')
    }
  },[user])
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
            <div className="max-w-[350px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Login</h1>
              {error ? <p className="bg-red-400 p-3 my-3">{error}</p> : null}
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
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
                  <span className="mr-2 text-gray-400">New to Netflix?</span>
                  <Link className="hover:underline" to="/signup">
                    Sign Up
                  </Link>
                </p>
                <div className="flex justify-center">
                  <GoogleButton onClick={handleGoogleSignIn}/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
