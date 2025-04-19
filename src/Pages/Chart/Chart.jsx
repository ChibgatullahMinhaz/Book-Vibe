import React, { useContext } from "react";
import { BarChart, Bar, XAxis,Cell, YAxis, ResponsiveContainer } from "recharts";
import { getData } from "../../Utilities/Utilites";
import { BooksContext } from "../../Components/Context/BooksContext";
import { toast } from "react-toastify";

const Chart = () => {
    const {books} = useContext(BooksContext);
    const readBooks = getData('BookList')
    
    const convertedBookId = readBooks.map(Number)
    if (readBooks.length === 0) {
        toast('please Add Book in BookList')
    }
    const filterBooks = books.filter(book => convertedBookId.includes(book.bookId))



    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
         C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
         Z`
      );
      
      const TriangleBar = (props) => {
        const {
          fill, x, y, width, height,
        } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };
      const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#a569bd']; // jehetu 5 ta color

  return (
  <div className="min-h-screen w-11/12 mx-auto">
    <ResponsiveContainer width="100%" height={400}>

      <BarChart  data={filterBooks}>
      <XAxis dataKey="bookName"  />
      <YAxis />
      <Bar dataKey="totalPages" shape={<TriangleBar />}>
          {filterBooks.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
    </BarChart>
    </ResponsiveContainer>
  </div>
  );
};

export default Chart;
