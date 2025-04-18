import React from 'react'
import { NavLink } from 'react-router';
import { Star } from 'lucide-react';

export const Book = ({book}) => {
    const {image,author,bookName,tags,publisher,category,rating,bookId} = book;
  return (
   <NavLink to={`/bookDetails/${bookId}`}>
     <div className='bg-white border-1 border-gray-300 self-start p-4 rounded-lg shadow-md hover:shadow-sm transition duration-300 ease-in-out'>
       <div className='bg-gray-200 p-8 w-full flex justify-center rounded-lg'>
       <img src={image} className='max-w-32 max-h-28 shadow-lg skew-y-3' alt={bookName} />
       </div>
       {/* details */}
       <div>
       <div className='flex justify-self-start gap-x-3 items-center my-2'>
       {tags.map((tag, index) => (
          <span key={index} className='text-xs bg-red-100 rounded-xl p-1.5 text-red-500 font-semibold'>{tag}</span>
        ))}
       </div>
       <h1 className='text-2xl font-bold'>{bookName}</h1>
         <p className='text-gray-500 font-semibold text-sm'>By: {publisher}</p>
       </div>
       <div className='border-b-1 border-dashed my-4'></div>
       <div className='flex justify-between items-center text-gray-500 font-bold'>
        <h1>{category}</h1>
        <p className='flex gap-x-2'>{rating}<Star /> </p>
       </div>
    </div>
   </NavLink>
  )
};
