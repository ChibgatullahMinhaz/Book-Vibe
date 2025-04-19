import React, { useContext } from "react";
import { BarChart, Bar, XAxis,Cell, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { getData } from "../../Utilities/Utilites";
import { BooksContext } from "../../Components/Context/BooksContext";
import { toast } from "react-toastify";

const WishChart = () => {
    const {books} = useContext(BooksContext);
    const wishlisBooks = getData('WishList')
    if (wishlisBooks.length=== 0) {
      toast('please Add Book in Wishlist')
    }
    const convertedBookId = wishlisBooks.map(Number)
    
    const filterBooks = books.filter(book => convertedBookId.includes(book.bookId))



    
      const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#a569bd']; // jehetu 5 ta color

  return (
  <div className="min-h-screen w-11/12 mx-auto">
    <ResponsiveContainer width="100%" height={400}>

      <BarChart  data={filterBooks}>
      <XAxis dataKey="bookName"  />
      <YAxis />
      <Bar dataKey="totalPages" >
          {filterBooks.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
        <Tooltip></Tooltip>
    </BarChart>
    </ResponsiveContainer>
  </div>
  );
};

export default WishChart;
