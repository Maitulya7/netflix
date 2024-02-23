import React, { useEffect, useState } from "react";
import Request from "../Requests";
import axios from "axios";
const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios
      .get(Request.requestPopular)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(movies);
  console.log(movie)
  return <div></div>;
};

export default Main;
