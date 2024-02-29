import React from "react";
import { Link , useNavigate} from "react-router-dom";
import UserAuth from "../context/AuthContext";
const Navbar = () => {

  const {user , logOut} = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async ()=>{
      try {
        await logOut();
        navigate('/')
      } catch (error) {
        console.log(error.message)
      }
  }


  return (
    <div className="flex text-white w-full justify-between items-center p-4 z-[100] absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl cursor-pointer font-medium">
          NETFLIX
        </h1>
      </Link>

     {user?.email ?  <div className="flex gap-5 items-center">
        <Link to="/account">
          <button>Account</button>
        </Link>
       
          <button onClick={handleLogout} className="bg-red-600 px-6 py-2 rounded cursor-pointer">
            Logout
          </button>
       
      </div>:  <div className="flex gap-5 items-center">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button className="bg-red-600 px-6 py-2 rounded cursor-pointer">
            Sign Up
          </button>
        </Link>
      </div>}
    </div>
  );
};

export default Navbar;
