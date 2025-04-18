import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetail = () => {
    const {bookId} = useParams();
    const books = useLoaderData();
    const book = books.find (book => book.bookId === parseInt(bookId))
    console.log(book);
    const {image,author,bookName,review,tags,publisher,category,rating} = book;

    return (
        <div className="hero min-h-screen lg:my-10 my-4 rounded-lg">
            <div className="hero-content flex-col lg:flex-row lg:items-start items-center">
                <img
                    src={image}
                    alt={bookName}
                    className="bg-gray-200 rounded-lg shadow-2xl p-4 w-full max-w-sm"
                />
                <div className="lg:ml-8 mt-4 lg:mt-0 text-center lg:text-left">
                    <h1 className="text-3xl lg:text-5xl font-bold">{bookName}</h1>
                    <div className="border-b-1 border-dashed border-gray-400 my-4"></div>
                    <p className="py-6">
                        <span className="font-bold">Review:</span> {review}
                    </p>
                   <div className='space-x-6'>
                   <button className="btn border-1 border-orange-300">Mark As Read</button>
                   <button className="btn bg-gray-400 text-white">Add Wishlist</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;