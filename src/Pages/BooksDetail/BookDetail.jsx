import React, { useContext } from "react";
import {  useLoaderData, useParams } from "react-router";
import { BooksContext } from "../../Components/Context/BooksContext";
import {  toast } from 'react-toastify';
import { storeBook } from "../../Utilities/Utilites";

const BookDetail = () => {


  const { bookId } = useParams();
  const { books } = useContext(BooksContext);
  const books2 = useLoaderData();
  console.log(books2);
  const book = books.find((book) => book.bookId === parseInt(bookId));

  const notify = () => toast("Book not found!");
  const markAsReadBook = () => toast("One Book Added in Read List");
  const addWishlist = () => toast("One Book Added in Wishlist");
  if (!book) {
    notify()
    return ;
  }
  const {
    author,
    bookName,
    review,
    yearOfPublishing,
    tags,
    publisher,
    totalPages,
    category,
    rating,
  } = book;
  const handleStoreBook = (bookId)=>{
    markAsReadBook()
    storeBook(bookId, 'BookList')
  }
  const handleWishlistBook = (bookId)=>{
    addWishlist()
    storeBook(bookId, 'WishList')
  }
  return (
    <div className="hero min-h-screen lg:my-10 my-4 rounded-lg">
      <div className="hero-content flex-col lg:flex-row lg:items-center items-center">
        <img
          src={book.image}
          alt={bookName}
          className="bg-gray-200 rounded-lg shadow-2xl p-4 w-full lg:max-w-md max-w-sm"
        />

        <div className="lg:ml-8 mt-4 lg:mt-0 text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold">{bookName}</h1>
          <div className="border-b-1 border-dashed border-gray-400 my-4"></div>

          <p className="text-gray-500 text-lg font-bold">By: {author}</p>
          <div className="border-b-1 border-dashed border-gray-400 my-4"></div>

          <p className="text-gray-500 text-lg">{category}</p>

          <div className="border-b-1 border-dashed border-gray-400 my-4"></div>
          <p className="py-6">
            <span className="font-bold">Review:</span> {review}
          </p>
          <div className="flex justify-self-start gap-x-3 items-center my-2">
            <p className="text-lg font-bold">Tags:</p>

            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-red-100 rounded-xl p-1.5 text-red-500 font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="border-b-1 border-dashed border-gray-400 my-4"></div>
          <div className="flex justify-start items-center gap-x-10 my-4">
            <div>
              <h1>Number of Pages:</h1>
              <h1>Publisher:</h1>
              <h1>Year of Publishing:</h1>
              <h1>Rating:</h1>
            </div>
            <div>
              <h1>{totalPages}</h1>
              <h1>{publisher}</h1>
              <h1>{yearOfPublishing}</h1>
              <h1>{rating}</h1>
            </div>
          </div>
          <div className="space-x-6">
            <button onClick={()=> handleStoreBook(bookId)} className="btn border-1 border-orange-300">
              Mark As Read
            </button>
            <button onClick={()=> handleWishlistBook(bookId)} className="btn bg-gray-400 text-white">Add Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
