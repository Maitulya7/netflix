import React, { useEffect, useState } from "react";
import Request from "../Requests";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios
      .get(Request.requestTopRated)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="w-full h-[600px] md:h-[700px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[600px] md:h-[700px] bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
          <div className="absolute w-full top-[20%] md:top-[30%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
            <div className="my-4">
              <button className="border bg-gray-300 text-black border-gray-300 px-5 py-2">
                Play
              </button>
              <button className="border  text-white ml-5 border-gray-300 px-5 py-2">
                Watch Later
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              Release: {movie?.release_date}
            </p>
            <p className="w-full  md:max-w-[70%] lg:max-w-[50%] xl:max-w-[45%] text-gray-200">
              {truncateString(movie?.overview, 150)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
