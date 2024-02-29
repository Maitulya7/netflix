import React from "react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { useState, useEffect } from "react";
import UserAuth from "../context/AuthContext";
import { db } from "../firebase";
import { UpdateData, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
  const { user } = UserAuth();

  const [movies, setMovies] = useState([]);

  const SliderLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 1000;
  };
  const SliderRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 1000;
  };

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (passedId) => {
    try {
      const result = movies.filter((item) => item.id !== passedId);
      await updateDoc(movieRef, {
        saveShow:result,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.saveShow);
    });
  }, [user?.email]);
  return (
    <>
      <h1 className="text-white font-bold md:text-xl p-4">My Shows</h1>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={SliderLeft}
          size={40}
          className=" absolute bg-white rounded-full opacity-50 hover:opacity-100  cursor-pointer z-10 hidden group-hover:block left-0"
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((items, id) => (
            <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
            >
              <img
                className="h-auto w-full block"
                src={`https://image.tmdb.org/t/p/w500/${items?.img}`}
                alt={items?.title}
              />
              <div className="w-full h-full absolute top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center text-center h-full ">
                  {items?.title}
                </p>
                <p
                  onClick={() => deleteShow(items.id)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-red-600"
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
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

export default SavedShows;
