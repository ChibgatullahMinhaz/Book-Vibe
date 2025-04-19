import React from "react";
import { MapPin } from "lucide-react";
import { NotebookText } from "lucide-react";
import { Users2 } from "lucide-react";
import { NavLink } from "react-router";
const Card = ({ book }) => {
  const {
    image,
    author,
    bookName,
    yearOfPublishing,
    tags,
    publisher,
    category,
    rating,
    totalPages,
    bookId,
  } = book;
  return (
    <div className="grid md:max-h-[300px] my-3 p-4 rounded-lg border-1 border-gray-400 border-dashed justify-center md:justify-start items-center grid-cols-1 md:grid-cols-5 gap-4">
      <div className=" col-span-1 bg-gray-200 p-8 w-full flex justify-center rounded-lg">
        <img
          src={image}
          className="max-w-32 max-h-28 shadow-lg skew-y-3"
          alt={bookName}
        />
      </div>
      <div className="col-span-4">
        <h1 className="font-bold text-2xl">{bookName}</h1>
        <h1 className="font-semibold text-sm text-gray-500 mt-2">
          {" "}
          By: {author}
        </h1>
        <div className="flex justify-self-start gap-x-3 items-center my-3 ">
          <p className="font-bold space-x-3">
            Tags:{" "}
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-red-100 rounded-xl p-1.5 text-red-500 font-semibold"
              >
                #{tag}
              </span>
            ))}
          </p>
          <p className="text-gray-500 flex">
            {" "}
            <span>
              <MapPin></MapPin>
            </span>{" "}
            Year of Publishing: {yearOfPublishing}
          </p>
        </div>
        <div className="flex gap-8 items-center mt-2">
          <p className="text-gray-500 flex items-center gap-x-0.5">
            {" "}
            <Users2></Users2> <span>Publisher: {publisher}</span>{" "}
          </p>
          <p className="text-gray-500 flex items-center gap-x-0.5">
            {" "}
            <NotebookText></NotebookText> <span>Page: {totalPages}</span>{" "}
          </p>
        </div>
        <div className="border-b-1 border-dashed border-gray-400 my-4"></div>
        <div className="flex items-center gap-9">
            <p className="bg-blue-200 p-2 rounded-xl text-blue-700">Category: {category}</p>
            <p className="bg-amber-100 text-orange-500 p-2 rounded-xl">Rating: {rating}</p>
            <NavLink to={`/bookDetails/${bookId}`}>
            <button className="btn bg-[#23BE0A] text-white">View Details</button>

            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
