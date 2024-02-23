import React from "react";

const Row = ({ title, fetchURL }) => {
  return (
    <>
      <h1 className="text-white font-bold md:text-xl p-4">{title}</h1>
    </>
  );
};

export default Row;
