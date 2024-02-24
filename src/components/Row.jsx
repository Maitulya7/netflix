import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import requests from "../Requests";

const Row = ({ title, fetchURL , rowId}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(fetchURL)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [fetchURL]);
console.log(movies)

  const SliderLeft = () =>{
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft - 1000;
  }
  const SliderRight = () =>{
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft + 1000;
  }

  return (
    <>
      <h1 className="text-white font-bold md:text-xl p-4">{title}</h1>
      <div className="relative flex items-center group">
        <MdChevronLeft
        onClick={SliderLeft}
          size={40}
          className=" absolute bg-white rounded-full opacity-50 hover:opacity-100  cursor-pointer z-10 hidden group-hover:block left-0"
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((items, id) => (
            <Movie key={id} items={items} />
          ))}
        </div>
        <MdChevronRight
        onClick={SliderRight}
          size={40}
          className="absolute bg-white rounded-full opacity-50 hover:opacity-100  cursor-pointer z-10 hidden group-hover:block right-0"
        />
      </div>
    </>
  );
};

export default Row;
