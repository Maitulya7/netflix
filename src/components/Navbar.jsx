import React from "react";

const Navbar = () => {
  return (
    <div className="flex text-white w-full justify-between items-center p-4 z-[100] absolute">
      <h1 className="text-red-600 text-4xl cursor-pointer font-medium">
        NETFLIX
      </h1>
      <div className="flex gap-5">
        <button>Sign In</button>
        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
