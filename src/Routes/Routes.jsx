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
        loader: () =>
          fetch("/public/DB/booksData.json") ||
          fetch(
            "https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json"
          ),
        element: (
          <Suspense fallback={ <Loader></Loader> }>
            <Home></Home>
          </Suspense>
        ),
      },
      {
        path: "/Listed Books",
        element: <div>Listed Books</div>,
      },
      {
        path: "/bookDetails/:bookId" ,
        loader: () =>
          fetch("/public/DB/booksData.json") ||
          fetch(
            "https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json"
          ),
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
