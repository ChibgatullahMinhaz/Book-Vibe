import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getData } from "../../Utilities/Utilites";
import { BooksContext } from "../../Components/Context/BooksContext";
import Card from "../../Components/Card/Card";
const BooksList = () => {
  const [sort, setSort] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [readList, setReadList] = useState([]);
  const { books } = useContext(BooksContext);

  useEffect(() => {
    const wishlistBooks = getData("WishList");
    const numberOfWishlistBooksID = wishlistBooks.map(Number);

    const filteingWishlist = () => {
      const filteredWishlistBook = books.filter((book) =>
        numberOfWishlistBooksID.includes(Number(book.bookId))
      );
      setWishlist(filteredWishlistBook);
    };
    filteingWishlist();
  }, [books]);

  useEffect(() => {
    const listedBooks = getData("BookList");

    const numberOfReadBooksID = listedBooks.map(Number);

    const readBooks = () => {
      const filteredReadBook = books.filter((book) =>
        numberOfReadBooksID.includes(Number(book.bookId))
      );
      setReadList(filteredReadBook);
    };
    readBooks();
  }, [books]);

  

  return (
    <div className={wishlist.length === 0 ? "min-h-screen" : ""}>
      <div className="bg-gray-300 p-4 rounded-lg ">
        <h1 className="font-bold text-center text-3xl md:text-4xl lg:text-5xl">
          Books
        </h1>
      </div>
      {/* shorting */}
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Sorted By:
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>

      {/* tabs */}
      <Tabs className="py-10">
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {readList?.map((book) => (
            <Card key={book.bookId} book={book}></Card>
          ))}
        </TabPanel>
        <TabPanel>
          {wishlist?.map((book) => (
            <Card key={book.bookId} book={book}></Card>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BooksList;
