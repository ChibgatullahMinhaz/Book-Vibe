import React, { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getData } from "../../Utilities/Utilites";
import { BooksContext } from "../../Components/Context/BooksContext";
const BooksList = () => {
  const listedBooks = getData('BookList');
  const wishlistBooks = getData('WishList');
  const convertedID = parseInt(listedBooks);
  const {books} = useContext(BooksContext);
  const filteredReadBook = books.filter(book => book.bookId === convertedID);
console.log(listedBooks, wishlistBooks);
  return (
    <div className={listedBooks.length === 0 ? "min-h-screen" : "max-h-screen"}>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BooksList;
