import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import { Suspense } from "react";
import Loader from "../Components/Loader/Loader";
import BookDetail from "../Pages/BooksDetail/BookDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/Listed Books",
        element: <div>Listed Books</div>,
      },
      {
        path: "/bookDetails/:bookId",
        loader: () => fetch("booksData.json"),
        element: <BookDetail></BookDetail>,
      },
      {
        path: "/Pages to Read",
        element: <div>Pages to Read</div>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
