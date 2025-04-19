import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getData } from "../../Utilities/Utilites";
import { BooksContext } from "../../Components/Context/BooksContext";
import Card from "../../Components/Card/Card";
import { ChevronDown } from "lucide-react";
import { toast } from "react-toastify";
import { sortingData } from "../../JavaScript/Sort/Sort";

const BooksList = () => {
  const [sort, setSort] = useState("");
  const [error, setError] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [readList, setReadList] = useState([]);
  const { books } = useContext(BooksContext);

  useEffect(() => {
    try {
      const wishlistBooks = getData("WishList");
      const numberOfWishlistBooksID = wishlistBooks.map(Number);
      const filteingWishlist = () => {
        const filteredWishlistBook = books.filter((book) =>
          numberOfWishlistBooksID.includes(Number(book.bookId))
        );
        setWishlist(filteredWishlistBook);
      };
      filteingWishlist();
    } catch (error) {
      setError("error is", error);
      toast(error);
    }
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

  const handleSort = (type) => {
    setSort(type);
    sortingData(type, readList, setReadList)
    sortingData(type, wishlist, setWishlist)
  };

  return (
    <div className={wishlist.length === 0 ? "min-h-screen" : ""}>
      <div className="bg-gray-300 p-4 rounded-lg ">
        <h1 className="font-bold text-center text-3xl md:text-4xl lg:text-5xl">
          Books
        </h1>
      </div>
      {/* shorting */}
      <div className="dropdown flex justify-center mt-7  ">
        <div
          tabIndex={0}
          role="button"
          className="btn bg-[#23BE0A] text-white m-1"
        >
          Sorted By: {sort ? sort : <ChevronDown></ChevronDown>}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 mt-10 w-52 p-2 shadow-sm"
        >
          <li>
            <a onClick={() => handleSort("rating")}>Rating</a>
          </li>
          <li>
            <a onClick={() => handleSort("Acceding")}>A-Z</a>
          </li>
          <li>
            <a onClick={() => handleSort("Deciding")}>Z-A</a>
          </li>
          <li>
            <a onClick={() => handleSort("pages")}>pages</a>
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
